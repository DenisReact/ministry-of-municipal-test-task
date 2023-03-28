import React from 'react';

import Box from '@mui/material/Box';

import ProgressCard from '../components/ui/progress-card';
import MapWidget from '../components/map-widget';

import { mockData, TDataEl } from '../mockData';
import CustomTable from '../table';
import { Typography } from '@mui/material';

export default function VisualPollutionPage() {
	return (
		<Box
			sx={{
				padding: '86px 40px 40px 32px',
			}}
			component='section'
		>
			<Box sx={{display: 'flex', gap: '32px', mb: '40px'}}>
				{mockData.map((el: TDataEl, index) => (
					<ProgressCard key={index + 'card'} data={el} />
				))}
			</Box>
			<Typography
				sx={{
					fontSize: '34px',
					color: ['primary.main'],
					marginBottom: '20px',
				}}
			>
				Priority Recommendations
			</Typography>
			<Box sx={{display: 'flex', gap: '32px'}}>
				<MapWidget />
				<CustomTable />
			</Box>
		</Box>
	);
}
