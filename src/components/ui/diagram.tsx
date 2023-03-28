import React from 'react';
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

type Tdata = {
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

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend
);

export const options = {
	responsive: true,
	plugins: {
		legend: {
			display: false,
		},
		title: {
			display: false,
		},
		tooltip: {
			enabled: false,
		},
	},
	scales: {
		x: {
			display: false,
		},
		y: {
			display: false,
		},
	},
};

export default function Diagram({ data }: { data: Tdata }) {
	return <Line options={options} data={data} />;
}
