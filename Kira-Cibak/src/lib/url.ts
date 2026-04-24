const SAFE_SCHEMES = new Set(['http:', 'https:', 'mailto:', 'tel:']);

export const sanitizeHref = (value: string, fallback = '#') => {
	const trimmed = value.trim();
	if (!trimmed) return fallback;

	if (trimmed.startsWith('/')) return trimmed;
	if (trimmed.startsWith('#')) return trimmed;

	try {
		const parsed = new URL(trimmed);
		return SAFE_SCHEMES.has(parsed.protocol) ? parsed.toString() : fallback;
	} catch {
		return fallback;
	}
};

export const isExternalHref = (href: string) => {
	try {
		const parsed = new URL(href);
		return parsed.protocol === 'http:' || parsed.protocol === 'https:';
	} catch {
		return false;
	}
};
