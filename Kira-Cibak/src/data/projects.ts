export type ProjectPreview = {
	slug: string;
	title: string;
	description: string;
	tags: string[];
	image?: string;
	category?: string;
	year?: string;
	featured?: boolean;
	liveUrl?: string;
	repoUrl?: string;
	/** @deprecated use liveUrl or repoUrl instead */
	link: string;
	linkLabel: string;
};

export const projects: ProjectPreview[] = [
	{
		slug: 'license-management-system',
		title: 'License Management System',
		description: 'SaaS licensing platform for Martinrea — streamlined subscription management, user provisioning, and usage tracking.',
		tags: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Azure'],
		category: 'SaaS',
		year: '2024',
		featured: true,
		repoUrl: 'https://github.com',
		link: 'https://github.com',
		linkLabel: 'View GitHub'
	},
	{
		slug: 'pain-detection-system',
		title: 'Pain Detection System',
		description: 'Collaborative notebook for ML-based pain detection using computer vision and signal processing techniques.',
		tags: ['Python', 'Jupyter', 'Machine Learning', 'Computer Vision'],
		category: 'Data Science',
		year: '2024',
		featured: true,
		repoUrl: 'https://github.com',
		link: 'https://github.com',
		linkLabel: 'View GitHub'
	},
	{
		slug: 'project-three',
		title: 'Project Three',
		description: 'Brief summary of project goals and measurable outcomes.',
		tags: ['React', 'Next.js', 'Stripe'],
		category: 'Web App',
		year: '2024',
		featured: true,
		repoUrl: 'https://github.com',
		link: 'https://github.com',
		linkLabel: 'View GitHub'
	},
	{
		slug: 'project-four',
		title: 'Project Four',
		description: 'Brief summary of project goals and measurable outcomes.',
		tags: ['Astro', 'TypeScript', 'CSS'],
		category: 'Web App',
		year: '2023',
		repoUrl: 'https://github.com',
		link: 'https://github.com',
		linkLabel: 'View GitHub'
	},
	{
		slug: 'project-five',
		title: 'Project Five',
		description: 'Brief summary of project goals and measurable outcomes.',
		tags: ['React', 'Node.js', 'Express'],
		category: 'Web App',
		year: '2023',
		repoUrl: 'https://github.com',
		link: 'https://github.com',
		linkLabel: 'View GitHub'
	},
	{
		slug: 'project-six',
		title: 'Project Six',
		description: 'Brief summary of project goals and measurable outcomes.',
		tags: ['TypeScript', 'Redis', 'Docker'],
		category: 'Web App',
		year: '2023',
		repoUrl: 'https://github.com',
		link: 'https://github.com',
		linkLabel: 'View GitHub'
	},
	{
		slug: 'project-seven',
		title: 'Project Seven',
		description: 'Brief summary of project goals and measurable outcomes.',
		tags: ['React', 'PostgreSQL', 'CI/CD'],
		category: 'Web App',
		year: '2023',
		repoUrl: 'https://github.com',
		link: 'https://github.com',
		linkLabel: 'View GitHub'
	},
	{
		slug: 'project-eight',
		title: 'Project Eight',
		description: 'Brief summary of project goals and measurable outcomes.',
		tags: ['Next.js', 'TypeScript', 'Stripe'],
		category: 'Web App',
		year: '2022',
		repoUrl: 'https://github.com',
		link: 'https://github.com',
		linkLabel: 'View GitHub'
	},
	{
		slug: 'project-nine',
		title: 'Project Nine',
		description: 'Brief summary of project goals and measurable outcomes.',
		tags: ['React', 'Node.js', 'Azure'],
		category: 'Web App',
		year: '2022',
		repoUrl: 'https://github.com',
		link: 'https://github.com',
		linkLabel: 'View GitHub'
	}
];
