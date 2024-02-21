export interface Option {
	image: string;
	title: string;
	text: string;
}

export const options: Option[] = [
	{
		title: 'Online Banking',
		text: 'Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.',
		image: 'icon-online.svg',
	},
	{
		title: 'Simple Budgeting',
		text: 'See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.',
		image: 'icon-budgeting.svg',
	},
	{
		title: 'Fast Onboarding',
		text: 'We don’t do branches. Open your account in minutes online and start taking control of your finances right away.',
		image: 'icon-onboarding.svg',
	},
	{
		title: 'Open API',
		text: 'Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.',
		image: 'icon-api.svg',
	},
];
