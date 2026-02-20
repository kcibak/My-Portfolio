import { useEffect, useState } from 'preact/hooks';

type Mode = 'light' | 'dark';

const storageKey = 'kira-theme-mode';

function getInitialMode(): Mode {
	if (typeof window === 'undefined') return 'light';
	const saved = window.localStorage.getItem(storageKey) as Mode | null;
	if (saved === 'light' || saved === 'dark') return saved;
	return document.documentElement.classList.contains('dark') ? 'dark' : 'light';
}

function applyMode(mode: Mode) {
	const root = document.documentElement;
	root.classList.toggle('dark', mode === 'dark');
	window.localStorage.setItem(storageKey, mode);
}

export default function ThemeToggle() {
	const [mode, setMode] = useState<Mode>(getInitialMode);

	useEffect(() => {
		applyMode(mode);
	}, [mode]);

	const onChange = (e: Event) => {
		const input = e.target as HTMLInputElement;
		const next: Mode = input.checked ? 'dark' : 'light';
		setMode(next);
	};

	return (
		<label class="theme-toggle" data-mode={mode} aria-label="Toggle color theme">
			<input
				class="theme-toggle__input"
				type="checkbox"
				role="switch"
				checked={mode === 'dark'}
				onChange={onChange}
				aria-checked={mode === 'dark'}
			/>
			<span class="theme-toggle__track" aria-hidden="true">
				<svg class="theme-toggle__icon sun" aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6">
					<circle cx="12" cy="12" r="4" />
					<path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
				</svg>
				<span class="theme-toggle__knob"></span>
				<svg class="theme-toggle__icon moon" aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6">
					<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
				</svg>
			</span>
		</label>
	);
}
