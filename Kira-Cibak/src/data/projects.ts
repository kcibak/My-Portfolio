export type ProjectPreview = {
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
};

export const projects: ProjectPreview[] = [
		{
		title: 'LiMANS Internship Project',
		description: 'Full-stack migration project rebuilt from a low-code platform into a custom PostgreSQL-backed system with end-to-end ownership.',
		tags: ['React', 'Next.js', 'Stripe'],
		category: 'Web App',
		year: '2024',
		featured: true,
		repoUrl: 'https://github.com/kcibak/limans_internship_project',
		link: 'https://github.com/kcibak/limans_internship_project'
	},
	{
		title: 'Continuous Manufacturing Forum',
		description: 'Conference and community platform for pharmaceutical continuous manufacturing, featuring speaker, sponsor, and registration flows.',
		tags: ['React', 'Node.js', 'Express'],
		category: 'Web App',
		year: '2023',
		liveUrl: 'https://www.contmfg.com/',
		link: 'https://www.contmfg.com/'
	},
	{
		title: 'Compaction Simulation Forum',
		description: 'Event website for the global compaction science community with forum information, agenda access, and partner visibility.',
		tags: ['TypeScript', 'Redis', 'Docker'],
		category: 'Web App',
		year: '2023',
		liveUrl: 'https://www.compactionsimulation.com/',
		link: 'https://www.compactionsimulation.com/'
	},
	{
		title: 'SOPPhC',
		description: 'Event website for the global compaction science community with forum information, agenda access, and partner visibility.',
		tags: ['TypeScript', 'Redis', 'Docker'],
		category: 'Web App',
		year: '2023',
		liveUrl: 'https://www.compactionsimulation.com/',
		link: 'https://www.compactionsimulation.com/'
	},
	{
		title: 'Temp Excursions',
		description: 'Pharmaceutical consulting site focused on temperature excursion analysis, regulatory documentation, and rapid-response support.',
		tags: ['React', 'PostgreSQL', 'CI/CD'],
		category: 'Web App',
		year: '2023',
		liveUrl: 'https://tempexcursions.com/',
		link: 'https://tempexcursions.com/'
	},
	{
		title: 'Pain Detection System',
		description: 'Machine learning project classifying pain/no-pain states from physiological signals with feature extraction, SVM modeling, and evaluation.',
		tags: ['Machine Learning', 'SVM', 'NumPy', 'Pandas', 'scikit-learn'],
		category: 'Machine Learning',
		year: '2023',
		repoUrl: 'https://github.com/kcibak/pain_detection_system',
		link: 'https://github.com/kcibak/pain_detection_system'
	},
	{
		title: 'Captured by Capri',
		description: 'Photography portfolio website showcasing film and digital work, with gallery browsing and contact pathways for client inquiries.',
		tags: ['Astro', 'TypeScript', 'CSS'],
		category: 'Portfolio',
		year: '2024',
		featured: true,
		liveUrl: 'https://capturedbycapri.netlify.app/',
		link: 'https://capturedbycapri.netlify.app/'
	},
	{
		title: 'SCxCMC Consulting Site',
		description: 'Pharmaceutical consulting website presenting CMC strategy services, consultant profiles, and contact-driven conversion paths.',
		tags: ['Astro', 'TypeScript', 'CSS'],
		category: 'Web App',
		year: '2024',
		featured: true,
		liveUrl: 'https://scxcmc.netlify.app/',
		link: 'https://scxcmc.netlify.app/'
	},
	{
		title: 'Sanare',
		description: 'Live demo of a visual-first mental health platform for providers and patients, centered on secure, supportive care workflows.',
		tags: ['Next.js', 'TypeScript', 'Stripe'],
		category: 'Web App',
		year: '2022',
		liveUrl: 'https://mysanare.netlify.app/',
		link: 'https://github.com/kcibak/Sanare'
	},
	{
		title: 'This Portfolio Site',
		description: 'Source repository for this portfolio website, including the Astro-based architecture, reusable UI components, and page content structure.',
		tags: ['Astro', 'TypeScript', 'CSS'],
		category: 'Web App',
		year: '2022',
		repoUrl: 'https://github.com/kcibak/My-Portfolio',
		link: 'https://github.com/kcibak/My-Portfolio'
	}
];
