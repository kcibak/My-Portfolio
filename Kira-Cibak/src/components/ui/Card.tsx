import type { ComponentChildren } from 'preact';

type CardPadding = 'tight' | 'dense' | 'compact' | 'default' | 'comfortable';

type Props = {
	class?: string;
	padding?: CardPadding;
	hover?: boolean;
	children?: ComponentChildren;
};

export default function Card({
	class: className,
	padding = 'default',
	hover = true,
	children
}: Props) {
	return (
		<div
			class={['ui-card', className].filter(Boolean).join(' ')}
			data-padding={padding}
			data-hover={hover ? 'true' : undefined}
		>
			{children}
		</div>
	);
}
