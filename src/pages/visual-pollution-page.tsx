import React from 'react';

import Box from '@mui/material/Box';

import ProgressCard from '../components/ui/progress-card';
import MapWidget from '../components/map-widget';

import { mockData, TDataEl } from '../mockData';
import CustomTable from '../table';

export default function VisualPollutionPage() {
	return (
		<Box
			sx={{
				backgroundColor: '#EEF1FA',
				maxHeight: '100vh',
				maxWidth: '100vw',
				padding: '86px 40px 0 32px',
				display: 'grid',
				gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
				gridTemplateRows: 'repeat(2, minmax(0, 1fr))',
				gap: '32px',
				backgroundImage: 'url(/assets/assets.svg)',
				backgroundRepeat: 'no-repeat',
				backgroundSize: 'cover',
				backgroundPosition: 'center',
			}}
			component='section'
		>
			{mockData.map((el: TDataEl) => (
				<Box sx={{ gridColumn: 'span 1 / span 1' }}>
					<ProgressCard data={el} />
				</Box>
			))}
			<Box>
				<MapWidget />
			</Box>
			<Box sx={{ gridColumn: 'span 2 / span 2' }}>
				<CustomTable />
			</Box>
		</Box>
	);
}
