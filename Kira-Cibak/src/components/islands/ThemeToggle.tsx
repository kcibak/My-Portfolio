import { useEffect, useState } from 'preact/hooks';

type Mode = 'light' | 'dark' | 'auto';

const storageKey = 'kira-theme-mode';

function getInitialMode(): Mode {
	if (typeof window === 'undefined') return 'auto';
	const saved = window.localStorage.getItem(storageKey) as Mode | null;
	return saved || 'auto';
}

function applyMode(mode: Mode) {
	const root = document.documentElement;
	root.setAttribute('data-theme', mode);
	if (mode === 'dark') {
		root.setAttribute('data-theme-mode', 'dark');
	} else if (mode === 'light') {
		root.setAttribute('data-theme-mode', 'light');
	} else {
		root.removeAttribute('data-theme-mode');
	}
	window.localStorage.setItem(storageKey, mode);
}

export default function ThemeToggle() {
	const [mode, setMode] = useState<Mode>('auto');

	useEffect(() => {
		const initial = getInitialMode();
		setMode(initial);
		applyMode(initial);
	}, []);

	const cycle = () => {
		const next: Mode = mode === 'light' ? 'dark' : mode === 'dark' ? 'auto' : 'light';
		setMode(next);
		applyMode(next);
	};

	return (
		<button type="button" class="button secondary" onClick={cycle} aria-label="Toggle theme">
			Theme: {mode}
		</button>
	);
}
