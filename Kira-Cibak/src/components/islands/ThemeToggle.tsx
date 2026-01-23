import { useEffect, useState } from 'preact/hooks';

type Mode = 'light' | 'dark';

const storageKey = 'kira-theme-mode';

function getInitialMode(): Mode {
	if (typeof window === 'undefined') return 'light';
	const saved = window.localStorage.getItem(storageKey) as Mode | null;
	return saved || 'light';
}

function applyMode(mode: Mode) {
	const root = document.documentElement;
	root.setAttribute('data-theme', mode);
	root.setAttribute('data-theme-mode', mode);
	window.localStorage.setItem(storageKey, mode);
}

export default function ThemeToggle() {
	const [mode, setMode] = useState<Mode>('light');

	useEffect(() => {
		const initial = getInitialMode();
		setMode(initial);
		applyMode(initial);
	}, []);

	const toggle = () => {
		const next: Mode = mode === 'light' ? 'dark' : 'light';
		setMode(next);
		applyMode(next);
	};

	return (
		<button
			type="button"
			class="theme-toggle"
			onClick={toggle}
			aria-label={`Switch to ${mode === 'light' ? 'dark' : 'light'} mode`}
		>
			{mode === 'light' ? (
				<svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
					<circle cx="12" cy="12" r="5" />
					<path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
				</svg>
			) : (
				<svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
					<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
				</svg>
			)}
		</button>
	);
}
