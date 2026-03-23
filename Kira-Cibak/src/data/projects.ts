export type ProjectPreview = {
	title: string;
	description: string;
	tags: string[];
	image?: string;
	category?: string;
	featured?: boolean;
	liveUrl?: string;
	repoUrl?: string;
	/** @deprecated use liveUrl or repoUrl instead */
	link: string;
};

export const projects: ProjectPreview[] = [
		{
		title: 'LiMANS Internship Project',
		description: 'Full-stack migration project rebuilt from a low-code platform into a custom React app with end-to-end ownership.',
		tags: ['TypeScript', 'PostgreSQL', 'GraphQL', 'Docker'],
		category: 'Web App',
		featured: true,
		repoUrl: 'https://github.com/kcibak/limans_internship_project',
		link: 'https://github.com/kcibak/limans_internship_project'
	},
	{
		title: 'ContMFG Forum',
		description: 'Informational conference site with event details, speakers, sponsors, and EventBrite registration.',
		tags: ['TypeScript', 'React'],
		category: 'Web App',
		liveUrl: 'https://www.contmfg.com/',
		link: 'https://www.contmfg.com/'
	},
	{
		title: 'Compaction Simulation Forum',
		description: 'Informational conference site with event details, speakers, sponsors, and EventBrite registration.',
		tags: ['TypeScript', 'React'],
		category: 'Web App',
		liveUrl: 'https://www.compactionsimulation.com/',
		link: 'https://www.compactionsimulation.com/'
	},
	{
		title: 'SOPPhC',
		description: 'Built a membership platform for a nonprofit, enabling subscription revenue, Stripe payments, and authenticated member access.',
		tags: ['WordPress', 'WooCommerce', 'PHP', 'CSS'],
		category: 'Web App',
		liveUrl: 'https://sopphc.org/',
		link: 'https://sopphc.org/'
	},
	{
		title: 'Temperature Excursions',
		description: 'Informational consulting site with contact form and login-protected content, with main focus on UI design and modern tech stack.',
		tags: ['React', 'TypeScript'],
		category: 'Web App',
		liveUrl: 'https://tempexcursions.com/',
		link: 'https://tempexcursions.com/'
	},
	{
		title: 'Pain Detection System',
		description: 'Classifies pain vs. no-pain from physiological signals using feature extraction, SVM modeling, and cross-validated evaluation.',
		tags: ['Python', 'SVM', 'Machine Learning'],
		category: 'Machine Learning',
		repoUrl: 'https://github.com/kcibak/pain_detection_system',
		link: 'https://github.com/kcibak/pain_detection_system'
	},
	{
		title: 'Captured by Capri',
		description: 'DEMO Photography portfolio website showcasing film and digital work, with gallery browsing and contact form.',
		tags: ['React', 'TypeScript', 'CSS'],
		category: 'Portfolio',
		featured: true,
		liveUrl: 'https://capturedbycapri.netlify.app/',
		link: 'https://capturedbycapri.netlify.app/'
	},
	{
		title: 'SCxCMC Consulting Site',
		description: 'DEMO Pharmaceutical consulting firm website built to practice working with React+TypeScript stack.',
		tags: ['React', 'TypeScript', 'CSS'],
		category: 'Web App',
		featured: true,
		liveUrl: 'https://scxcmc.netlify.app/',
		link: 'https://scxcmc.netlify.app/'
	},
	{
		title: 'Sanare',
		description: 'User experience design project for a mental health platform, emphasizing intuitive workflows and accessibility.',
		tags: ['React', 'TypeScript', 'CSS'],
		category: 'Web App',
		liveUrl: 'https://mysanare.netlify.app/',
		link: 'https://github.com/kcibak/Sanare'
	},
	{
		title: 'This Portfolio Site',
		description: 'Source repository for this Astro-based architecture portfolio website.',
		tags: ['Astro', 'TypeScript', 'CSS'],
		category: 'Web App',
		repoUrl: 'https://github.com/kcibak/My-Portfolio',
		link: 'https://github.com/kcibak/My-Portfolio'
	}
];
