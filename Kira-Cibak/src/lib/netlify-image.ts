type NetlifyImageOptions = {
	src: string;
	width: number;
};

const optimizedImageSlug = (src: string) => {
	const fileName = src.split('/').pop() ?? src;
	const baseName = fileName.replace(/\.[^.]+$/, '');

	return baseName
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/^-|-$/g, '');
};

export const netlifyImageUrl = ({ src, width }: NetlifyImageOptions) =>
	`/optimized/${optimizedImageSlug(src)}-${width}.webp`;

export const netlifyImageSrcSet = (src: string, widths: number[]) =>
	widths.map((width) => `${netlifyImageUrl({ src, width })} ${width}w`).join(', ');
