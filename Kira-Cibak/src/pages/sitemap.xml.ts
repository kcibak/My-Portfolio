export const prerender = true;

const routes = [
	'/',
	'/about',
	'/projects',
	'/skills',
	'/blog',
	'/resume',
	'/contact'
];

export function GET({ site }: { site?: string }) {
	const base = site || 'https://your-domain.com';
	const urls = routes
		.map((path) => `<url><loc>${new URL(path, base).href}</loc><changefreq>monthly</changefreq></url>`)
		.join('');

	const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`;

	return new Response(body, {
		headers: {
			'Content-Type': 'application/xml'
		}
	});
}
