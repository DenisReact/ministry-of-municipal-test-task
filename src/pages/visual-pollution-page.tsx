import React from 'react';
import Box from '@mui/material/Box';
import ProgressCard from '../components/ui/progress-card';

import { mockData, TDataEl } from '../mockData';

export default function VisualPollutionPage() {
	return (
		<Box
			sx={{ backgroundColor: '#EEF1FA', height: '100vh', paddingTop: '86px' }}
			component='section'
		>
			{mockData.map((el: TDataEl) => (
				<ProgressCard data={el} />
			))}
		</Box>
	);
}
