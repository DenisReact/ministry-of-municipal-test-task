import React from 'react';
import TableRow from '@mui/material/TableRow';
import { TableCell } from '@mui/material';
import { TTable } from '../mockData';

import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

export default function CustomTableRow({ data }: { data: TTable }) {
	return (
		<TableRow
			sx={{
				'&:last-child td, &:last-child th': {
					border: 0,
				},
			}}
		>
			<TableCell align='left'>
				{data.icon} {data.description}
			</TableCell>
			<TableCell align='center'>{data.owner}</TableCell>
			<TableCell align='left'>
				{data.Impacted_kpi[0]}{' '}
				{data.Impacted_kpi[1] > 0 ? (
					<TrendingUpIcon style={{ color: '#23A698' }} />
				) : (
					<TrendingDownIcon style={{ color: '#FF708B' }} />
				)}
			</TableCell>
			<TableCell align='left'>
				{data.impacted_sub_kpi[0]}{' '}
				{data.impacted_sub_kpi[1] > 0 ? (
					<TrendingUpIcon style={{ color: '#23A698' }} />
				) : (
					<TrendingDownIcon style={{ color: '#FF708B' }} />
				)}
			</TableCell>
			<TableCell>{data.Impacted_vc_step}</TableCell>
			<TableCell align='left'>{data.geography}</TableCell>
		</TableRow>
	);
}
