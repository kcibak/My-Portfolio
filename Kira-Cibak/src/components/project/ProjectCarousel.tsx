import { useState } from 'preact/hooks';

type Slide = {
	title: string;
	summary: string;
	image?: string;
};

type Props = {
	slides: Slide[];
};

export default function ProjectCarousel({ slides }: Props) {
	const [index, setIndex] = useState(0);
	const count = slides.length || 1;
	const current = slides[index] || {
		title: 'Add your project title',
		summary: 'Replace this placeholder with a short project summary.',
		image: '/placeholder-project.jpg'
	};

	const go = (dir: number) => {
		setIndex((prev) => {
			const next = (prev + dir + count) % count;
			return next;
		});
	};

	return (
		<div class="carousel card">
			<div class="carousel-media">
				<img
					src={current.image || '/placeholder-project.jpg'}
					alt={`Project preview: ${current.title}`}
					loading="lazy"
					height="360"
					width="640"
				/>
				<p class="placeholder-note">Replace this with your real project thumbnail or video.</p>
			</div>
			<div class="carousel-body">
				<p class="eyebrow">Featured project</p>
				<h3>{current.title}</h3>
				<p class="carousel-summary">{current.summary}</p>
				<div class="carousel-actions">
					<button type="button" onClick={() => go(-1)} aria-label="Previous project">
						← Prev
					</button>
					<span class="carousel-index">
						{index + 1} / {count}
					</span>
					<button type="button" onClick={() => go(1)} aria-label="Next project">
						Next →
					</button>
				</div>
			</div>
		</div>
	);
}
