export type ThemeMode = 'light' | 'dark';

export const themeStorageKey = 'kira-theme-mode';
export const themeDatasetKey = 'theme';

const themeChangeEventName = 'kira-theme-change';

let currentMode: ThemeMode | null = null;
let initialized = false;

function isThemeMode(value: string | null | undefined): value is ThemeMode {
	return value === 'light' || value === 'dark';
}

export function getStoredThemeMode(storage: Storage | Pick<Storage, 'getItem'>): ThemeMode | null {
	const saved = storage.getItem(themeStorageKey);
	return isThemeMode(saved) ? saved : null;
}

export function getSystemThemeMode(
	matchMediaFn: ((query: string) => MediaQueryList) | undefined
): ThemeMode {
	return matchMediaFn?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export function resolveThemeMode(options?: {
	storage?: Storage | Pick<Storage, 'getItem'>;
	matchMedia?: (query: string) => MediaQueryList;
}): ThemeMode {
	const saved = options?.storage ? getStoredThemeMode(options.storage) : null;
	if (saved) return saved;
	return getSystemThemeMode(options?.matchMedia);
}

export function getDocumentThemeMode(doc: Document = document): ThemeMode | null {
	const root = doc.documentElement;
	const datasetMode = root.dataset[themeDatasetKey];
	if (isThemeMode(datasetMode)) return datasetMode;
	return root.classList.contains('dark') ? 'dark' : 'light';
}

export function applyThemeMode(
	mode: ThemeMode,
	options?: {
		doc?: Document;
		storage?: Storage | Pick<Storage, 'setItem'>;
		persist?: boolean;
	}
) {
	const root = (options?.doc ?? document).documentElement;
	root.classList.toggle('dark', mode === 'dark');
	root.dataset[themeDatasetKey] = mode;

	if (options?.persist && options.storage) {
		options.storage.setItem(themeStorageKey, mode);
	}
}

function emitThemeMode(mode: ThemeMode) {
	if (typeof window === 'undefined') return;
	window.dispatchEvent(new CustomEvent<ThemeMode>(themeChangeEventName, { detail: mode }));
}

function syncThemeMode(mode: ThemeMode) {
	currentMode = mode;
	emitThemeMode(mode);
}

export function initializeThemeStore() {
	if (initialized || typeof window === 'undefined') return;
	initialized = true;
	currentMode = getDocumentThemeMode() ?? resolveThemeMode({
		storage: window.localStorage,
		matchMedia: window.matchMedia.bind(window)
	});

	window.addEventListener('storage', (event) => {
		if (event.key !== themeStorageKey || !isThemeMode(event.newValue)) return;
		applyThemeMode(event.newValue, { storage: window.localStorage, persist: false });
		syncThemeMode(event.newValue);
	});
}

export function getThemeMode(): ThemeMode {
	if (typeof window === 'undefined') return 'light';
	initializeThemeStore();
	return currentMode ?? getDocumentThemeMode() ?? 'light';
}

export function setThemeMode(mode: ThemeMode, persist = true) {
	if (typeof window === 'undefined') return;
	initializeThemeStore();
	applyThemeMode(mode, { storage: window.localStorage, persist });
	syncThemeMode(mode);
}

export function toggleThemeMode() {
	setThemeMode(getThemeMode() === 'dark' ? 'light' : 'dark');
}

export function subscribeToThemeMode(listener: (mode: ThemeMode) => void) {
	initializeThemeStore();

	const handleThemeChange = (event: Event) => {
		const nextMode = (event as CustomEvent<ThemeMode>).detail;
		if (!isThemeMode(nextMode)) return;
		currentMode = nextMode;
		listener(nextMode);
	};

	window.addEventListener(themeChangeEventName, handleThemeChange);

	return () => {
		window.removeEventListener(themeChangeEventName, handleThemeChange);
	};
}

export const themeBootScript = `
(() => {
	const storageKey = ${JSON.stringify(themeStorageKey)};
	const datasetKey = ${JSON.stringify(themeDatasetKey)};

	const isThemeMode = (value) => value === 'light' || value === 'dark';

	const getStoredThemeMode = () => {
		const saved = window.localStorage.getItem(storageKey);
		return isThemeMode(saved) ? saved : null;
	};

	const getSystemThemeMode = () =>
		window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

	const mode = getStoredThemeMode() ?? getSystemThemeMode();
	const root = document.documentElement;

	root.classList.toggle('dark', mode === 'dark');
	root.dataset[datasetKey] = mode;
})();
`;
