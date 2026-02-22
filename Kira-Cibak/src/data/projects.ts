export type ProjectPreview = {
	slug: string;
	title: string;
	description: string;
	tags: string[];
	image?: string;
	link: string;
	linkLabel: string;
};

export const projects: ProjectPreview[] = [
	{
		slug: 'sample-project',
		title: 'Sample project name',
		description: 'Brief summary of project goals and measurable outcomes.',
		tags: ['Astro', 'Tailwind', 'A11y'],
		image: '/favicon.svg',
		link: '/projects/sample-project',
		linkLabel: 'Read case study'
	},
	{
		slug: 'second-project',
		title: 'Second project',
		description: 'Focused build improving UX, speed, and implementation quality.',
		tags: ['React', 'Design System'],
		link: 'https://github.com',
		linkLabel: 'View GitHub'
	}
];
