import React from 'react';

import Box from '@mui/material/Box';

import ProgressCard from '../components/ui/progress-card';
import MapWidget from '../components/map-widget';

import { mockData, TDataEl } from '../mockData';

export default function VisualPollutionPage() {
	return (
		<Box
			sx={{
				backgroundColor: '#EEF1FA',
				height: '100vh',
				padding: '86px 40px 0 32px',
			}}
			component='section'
		>
			<Box
				sx={{
					display: 'flex',
					gap: '32px',
					'@media (max-width: 1300px)': {
						flexDirection: 'column',
					},
				}}
			>
				{mockData.map((el: TDataEl) => (
					<ProgressCard data={el} />
				))}
			</Box>
			<Box>
				<MapWidget />
			</Box>
		</Box>
	);
}
