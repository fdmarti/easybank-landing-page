export interface ExternalLink {
	name: string;
	image: string;
	url: string;
}

interface Link {
	text: string;
}

export const externalLinks: ExternalLink[] = [
	{
		name: 'Github',
		url: 'https://github.com/fdmarti',
		image: 'icon-github.svg',
	},
	{
		name: 'Frontendmentor',
		url: 'https://www.frontendmentor.io/profile/fdmarti',
		image: 'icon-frontendmentor.svg',
	},
	{
		name: 'Linkedin',
		url: 'https://www.linkedin.com/in/fededmartinez/',
		image: 'icon-linkedin.svg',
	},
];

export const links: Link[] = [
	{
		text: 'About us',
	},
	{
		text: 'Careers',
	},
	{
		text: 'Contact',
	},
	{
		text: 'Support',
	},
	{
		text: 'Blog',
	},
	{
		text: 'Privacy Policy',
	},
];
