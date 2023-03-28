import GreenCheckIcon from './components/icons/green-check-icon';
import RedAlertIcon from './components/icons/red-alert-icon';
import YellowErrorIcon from './components/icons/yellow-error-icon';

export type TDiagrams = {
	title: string;
	duration: string;
	data: {
		labels: string[];
		datasets: {
			label: string;
			data: number[];
			borderColor: string;
			backgroundColor: string;
			borderWidth: number;
			tension: number;
			pointRadius: number;
			showLine: boolean;
		}[];
	};
};

export type TTable = {
	id: string;
	icon: JSX.Element;
	description: string;
	owner: string;
	Impacted_kpi: (string | number)[];
	impacted_sub_kpi: (string | number)[];
	Impacted_vc_step: string;
	geography: string;
};

export type TProgress = {
	id: string;
	percent: number;
	title: string;
	time: string;
	value?: number;
	primaryColor: string;
	secondaryColor: string;
};

export type TDataEl = {
	id: string;
	title: string;
	value: number;
	progress: TProgress[];
	diagram: TDiagrams;
};

export const mockData = [
	{
		id: '1',
		title: 'Regulation enforcement rate',
		value: 10,
		progress: [
			{
				id: '1',
				percent: 45,
				title: 'Current state',
				time: '(1 Week)',
				value: 10,
				primaryColor: '#DBDFF1',
				secondaryColor: '#5379FB',
			},
			{
				id: '2',
				percent: 60,
				title: 'Target state',
				time: '(6 month)',
				primaryColor: '#DBDFF1',
				secondaryColor: '#4CAFA3',
			},
		],
		diagram: {
			title: 'Trend',
			duration: 'Last 6 Months',
			data: {
				labels: [
					'January',
					'February',
					'March',
					'April',
					'May',
					'June',
					'July',
				],
				datasets: [
					{
						label: 'Dataset 1',
						data: [1, 2, 7, 5, 4, 2, 1],
						borderColor: '#416BFF',
						backgroundColor: '#416BFF',
						borderWidth: 3,
						tension: 0.5,
						pointRadius: 0,
						showLine: true,
					},
					{
						label: 'Dataset 2',
						data: [1, 2, 5, 6, 8, 3, 1],
						borderColor: '#23A698',
						backgroundColor: '#23A698',
						borderWidth: 3,
						tension: 0.5,
						pointRadius: 0,
						showLine: true,
					},
				],
			},
		},
	},
	{
		id: '2',
		title: 'Coverage rate',
		value: -10,
		progress: [
			{
				id: '1',
				percent: 45,
				title: 'Current state',
				time: '(1 Week)',
				value: -10,
				primaryColor: '#DBDFF1',
				secondaryColor: '#FA6298',
			},
			{
				id: '2',
				percent: 60,
				title: 'Target state',
				time: '(6 month)',
				primaryColor: '#DBDFF1',
				secondaryColor: '#23A698',
			},
		],
		diagram: {
			title: 'Trend',
			duration: 'Last 6 Months',
			data: {
				labels: [
					'January',
					'February',
					'March',
					'April',
					'May',
					'June',
					'July',
				],
				datasets: [
					{
						label: 'Dataset 1',
						data: [1, 2, 7, 5, 4, 2, 1],
						borderColor: '#FF708B',
						backgroundColor: '#FF708B',
						borderWidth: 3,
						tension: 0.5,
						pointRadius: 0,
						showLine: true,
					},
					{
						label: 'Dataset 2',
						data: [1, 2, 5, 6, 8, 3, 1],
						borderColor: '#23A698',
						backgroundColor: '#23A698',
						borderWidth: 3,
						tension: 0.5,
						pointRadius: 0,
						showLine: true,
					},
				],
			},
		},
	},
	{
		id: '3',
		title: 'Resolution rate',
		value: 10,
		progress: [
			{
				id: '1',
				percent: 45,
				title: 'Current state',
				time: '(1 Week)',
				value: 10,
				primaryColor: '#DBDFF1',
				secondaryColor: '#FFBA69',
			},
			{
				id: '2',
				percent: 60,
				title: 'Target state',
				time: '(6 month)',
				primaryColor: '#DBDFF1',
				secondaryColor: '#4CAFA3',
			},
		],
		diagram: {
			title: 'Trend',
			duration: 'Last 6 Months',
			data: {
				labels: [
					'January',
					'February',
					'March',
					'April',
					'May',
					'June',
					'July',
				],
				datasets: [
					{
						label: 'Dataset 1',
						data: [1, 2, 7, 5, 4, 2, 1],
						borderColor: '#FFBA69',
						backgroundColor: '#FFBA69',
						borderWidth: 3,
						tension: 0.5,
						pointRadius: 0,
						showLine: true,
					},
					{
						label: 'Dataset 2',
						data: [1, 2, 5, 6, 8, 3, 1],
						borderColor: '#23A698',
						backgroundColor: '#23A698',
						borderWidth: 3,
						tension: 0.5,
						pointRadius: 0,
						showLine: true,
					},
				],
			},
		},
	},
];

export const mockTable = [
	{
		id: '1',
		icon: <GreenCheckIcon />,
		description:
			'Review process with Makkah Amanah to improve their Regulation enforcement rate',
		owner: 'Enforcement  Team',
		Impacted_kpi: ['Regulation  enforcement rate', 10],
		impacted_sub_kpi: ['Regulation clause​​', 10],
		Impacted_vc_step: 'Plan / Detect',
		geography: 'Riyadh',
	},
	{
		id: '2',
		icon: <RedAlertIcon />,
		description:
			'Identify the root-cause of the lack of visibility for the sub-KPI Number of visits in the segment for the Jeddah Amanah',
		owner: 'DTSC',
		Impacted_kpi: ['Coverage ratio', -18],
		impacted_sub_kpi: ['Number of visits​​', 9],
		Impacted_vc_step: 'Detect / Process',
		geography: 'Jeddah',
	},
	{
		id: '3',
		icon: <YellowErrorIcon />,
		description:
			'Address the decrease in collection conversion rate sub-KPI for the Dammam Amanah',
		owner: 'Licensing Team',
		Impacted_kpi: ['Resolution ratio', -23],
		impacted_sub_kpi: ['Resolution ratio', 15],
		Impacted_vc_step: 'Resolve',
		geography: 'Dammam',
	},
	{
		id: '4',
		icon: <YellowErrorIcon />,
		description:
			'Review process with Makkah Amanah to improve their Regulation enforcement rate',
		owner: 'Enforcement  Team',
		Impacted_kpi: ['Regulation  enforcement rate', -10],
		impacted_sub_kpi: ['Regulation clause​​', 10],
		Impacted_vc_step: 'Plan / Detect',
		geography: 'Riyadh',
	},
	{
		id: '5',
		icon: <YellowErrorIcon />,
		description:
			'Review process with Makkah Amanah to improve their Regulation enforcement rate',
		owner: 'Enforcement  Team',
		Impacted_kpi: ['Regulation  enforcement rate', 10],
		impacted_sub_kpi: ['Regulation clause​​', 10],
		Impacted_vc_step: 'Plan / Detect',
		geography: 'Riyadh',
	},
];
