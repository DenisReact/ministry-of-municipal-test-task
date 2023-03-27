import React from 'react';
import { Box } from '@mui/material';
import CircularProgress, {
	CircularProgressProps,
} from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import ProgressBar from '../components/progress-bar/progress-bar';

const progressBarsList = [
	{
		id: '1',
		title: 'Regulation enforcement rate',
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
	},
];

export default function VisualPollutionPage() {
	return (
		<Box
			sx={{ backgroundColor: '#EEF1FA', height: '100vh', paddingTop: '86px' }}
			component='section'
		>
			{progressBarsList.map((el) => (
				<Box key={el.id}>
					{el.progress.map((el) => (
						<Box key={el.id}>
							{
								<ProgressBar
									value={el.percent}
									primaryColor={el.primaryColor}
									secondaryColor={el.secondaryColor}
								/>
							}
						</Box>
					))}
				</Box>
			))}
		</Box>
	);
}
