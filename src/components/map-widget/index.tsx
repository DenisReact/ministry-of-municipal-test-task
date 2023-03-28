import { MenuItem, TextField } from '@mui/material';
import React from 'react';
import Paper from '../layout/paper';
import Map from './Map';

const MapWidget = () => {
	const [kpi, setKpi] = React.useState(1);

	const handleChange = (
		event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setKpi(Number(event.target.value));
	};

	return (
		<Paper
			sx={{
				width: 560,
				overflow: 'hidden',
				height: 484,
				background: '#EEF1FA',
			}}
		>
			<TextField
				value={kpi}
				sx={{
					width: 210,
					position: 'absolute',
					zIndex: 1000,
					right: 20,
					top: 20,
				}}
				select
				onChange={handleChange}
			>
				<MenuItem value={1}>Choose the main KPI</MenuItem>
				<MenuItem value={2}>Test</MenuItem>
				<MenuItem value={3}>Test1</MenuItem>
				<MenuItem value={4}>Test2</MenuItem>
			</TextField>
			<Map />
		</Paper>
	);
};

export default MapWidget;
