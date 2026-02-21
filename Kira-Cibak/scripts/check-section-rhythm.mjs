import { readdirSync, readFileSync, statSync } from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const PAGES_DIR = path.join(ROOT, 'src', 'pages');
const VERTICAL_SPACING_PATTERN = /\b(padding-top|padding-bottom|padding-block|margin-top|margin-bottom)\b/i;

function collectAstroFiles(dir) {
	const entries = readdirSync(dir);
	const files = [];

	for (const entry of entries) {
		const fullPath = path.join(dir, entry);
		const stats = statSync(fullPath);

		if (stats.isDirectory()) {
			files.push(...collectAstroFiles(fullPath));
			continue;
		}

		if (entry.endsWith('.astro')) {
			files.push(fullPath);
		}
	}

	return files;
}

function tokenizeTags(content) {
	const tokens = [];
	const tagPattern = /<\/?([A-Za-z][A-Za-z0-9:_-]*)\b[^>]*?>/g;
	let match;

	while ((match = tagPattern.exec(content)) !== null) {
		const raw = match[0];
		const name = match[1];
		const isClosing = raw.startsWith('</');
		const isSelfClosing = /\/>$/.test(raw);

		tokens.push({ name, isClosing, isSelfClosing });
	}

	return tokens;
}

function findContainerOutsideSection(content) {
	const violations = [];
	const stack = [];
	const tokens = tokenizeTags(content);

	for (const token of tokens) {
		if (token.isClosing) {
			for (let i = stack.length - 1; i >= 0; i -= 1) {
				if (stack[i] === token.name) {
					stack.splice(i, 1);
					break;
				}
			}
			continue;
		}

		const parent = stack[stack.length - 1];
		if (token.name === 'Container' && parent === 'MainLayout') {
			violations.push('Container is a direct child of MainLayout. Wrap with Section > Container.');
		}

		if (!token.isSelfClosing) {
			stack.push(token.name);
		}
	}

	return violations;
}

function findManualSpacingOverrides(content) {
	const violations = [];
	const lines = content.split('\n');

	for (let i = 0; i < lines.length; i += 1) {
		const line = lines[i];
		if (VERTICAL_SPACING_PATTERN.test(line)) {
			violations.push(`Line ${i + 1}: manual vertical spacing override "${line.trim()}"`);
		}
	}

	return violations;
}

function main() {
	if (!statSync(PAGES_DIR).isDirectory()) {
		console.error(`Pages directory not found: ${PAGES_DIR}`);
		process.exit(1);
	}

	const files = collectAstroFiles(PAGES_DIR);
	const allViolations = [];

	for (const file of files) {
		const content = readFileSync(file, 'utf8');
		const fileViolations = [
			...findContainerOutsideSection(content),
			...findManualSpacingOverrides(content)
		];

		if (fileViolations.length > 0) {
			const relPath = path.relative(ROOT, file);
			for (const violation of fileViolations) {
				allViolations.push(`${relPath}: ${violation}`);
			}
		}
	}

	if (allViolations.length > 0) {
		console.error('Section rhythm check failed:\n');
		for (const violation of allViolations) {
			console.error(`- ${violation}`);
		}
		process.exit(1);
	}

	console.log(`Section rhythm check passed for ${files.length} page files.`);
}

main();
