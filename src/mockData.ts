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
				title: 'Current state',
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
];
