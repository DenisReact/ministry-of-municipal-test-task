import React from 'react';
import Box from '@mui/material/Box';
import ProgressCard from '../components/ui/progress-card';

import { mockData, TDataEl } from '../mockData';

export default function VisualPollutionPage() {
	return (
		<Box
			sx={{
				backgroundColor: '#EEF1FA',
				height: '100vh',
				padding: '86px 40px 0 32px',
				display: 'flex',
				gap: '32px',
				'@media (max-width: 1024px)': {
					flexDirection: 'column',
				},
			}}
			component='section'
		>
			{mockData.map((el: TDataEl) => (
				<ProgressCard data={el} />
			))}
		</Box>
	);
}
