type NetlifyImageOptions = {
	src: string;
	width: number;
	quality?: number;
};

const normalizePublicPath = (src: string) => (src.startsWith('/') ? src : `/${src}`);

export const netlifyImageUrl = ({ src, width, quality = 80 }: NetlifyImageOptions) => {
	if (!import.meta.env.PROD) {
		return normalizePublicPath(src);
	}

	const encodedSrc = encodeURIComponent(normalizePublicPath(src));

	return `/.netlify/images?url=${encodedSrc}&w=${width}&q=${quality}`;
};

export const netlifyImageSrcSet = (src: string, widths: number[], quality = 80) =>
	import.meta.env.PROD
		? widths.map((width) => `${netlifyImageUrl({ src, width, quality })} ${width}w`).join(', ')
		: undefined;
