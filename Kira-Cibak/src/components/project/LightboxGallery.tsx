import { useState } from 'preact/hooks';

type Item = {
	src: string;
	alt: string;
};

type Props = {
	items: Item[];
};

export default function LightboxGallery({ items }: Props) {
	const [open, setOpen] = useState(false);
	const [current, setCurrent] = useState(0);
	const list = items.length
		? items
		: [{ src: '/placeholder-gallery.jpg', alt: 'Replace with project image' }];

	const show = (idx: number) => {
		setCurrent(idx);
		setOpen(true);
	};

	const close = () => setOpen(false);

	const prev = () => setCurrent((c) => (c - 1 + list.length) % list.length);
	const next = () => setCurrent((c) => (c + 1) % list.length);

	return (
		<div class="gallery">
			<div class="gallery-grid">
				{list.map((item, idx) => (
					<button
						type="button"
						class="gallery-thumb"
						onClick={() => show(idx)}
					>
						<img src={item.src} alt={item.alt} loading="lazy" />
						<span class="placeholder-note">Tap to open</span>
					</button>
				))}
			</div>
			{open && (
				<div class="lightbox" role="dialog" aria-modal="true">
					<div class="lightbox-backdrop" onClick={close} />
					<div class="lightbox-body card">
						<div class="lightbox-toolbar">
							<button type="button" onClick={prev} aria-label="Previous image">←</button>
							<span>
								{current + 1} / {list.length}
							</span>
							<button type="button" onClick={next} aria-label="Next image">→</button>
							<button type="button" onClick={close} aria-label="Close">✕</button>
						</div>
						<img src={list[current].src} alt={list[current].alt} />
						<p class="placeholder-note">Replace with high-res project visuals.</p>
					</div>
				</div>
			)}
		</div>
	);
}
