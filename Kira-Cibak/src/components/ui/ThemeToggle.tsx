import { useEffect, useState } from 'preact/hooks';

type Mode = 'light' | 'dark';

const storageKey = 'kira-theme-mode';

function getInitialMode(): Mode {
	if (typeof window === 'undefined') return 'light';
	const saved = window.localStorage.getItem(storageKey) as Mode | null;
	if (saved === 'light' || saved === 'dark') return saved;
	return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function applyMode(mode: Mode) {
	const root = document.documentElement;
	root.classList.toggle('dark', mode === 'dark');
	root.dataset.theme = mode;
	window.localStorage.setItem(storageKey, mode);
}

export default function ThemeToggle() {
	const [mode, setMode] = useState<Mode>(getInitialMode);

	useEffect(() => {
		applyMode(mode);
	}, [mode]);

	const onClick = () => {
		setMode((current) => (current === 'dark' ? 'light' : 'dark'));
	};

	return (
		<button
			type="button"
			class="theme-toggle"
			data-mode={mode}
			onClick={onClick}
			aria-label={mode === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
		>
			<img
				src={mode === 'dark' ? '/darkmode.png' : '/lightmode.png'}
				alt=""
				aria-hidden="true"
				width="30"
				height="30"
				class="theme-toggle__img"
			/>
		</button>
	);
}
