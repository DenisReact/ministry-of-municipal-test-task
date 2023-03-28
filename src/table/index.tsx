import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';

import { mockTable, TTable } from '../mockData';

import CustomTableRow from './table-row';
import Paper from '../components/layout/paper';

const tableHeadList = [
	'Description',
	'Owner',
	'Impacted KPI',
	'Impacted Sub-KPI',
	'Impacted VC step',
	'Geography',
];

export default function CustomTable() {
	return (
		<Paper sx={{ maxWidth: '1032px' }}>
			<Table aria-label='simple table'>
				<TableHead>
					<TableRow>
						{tableHeadList.map((el: string, index: number) => (
							<TableCell
								align={index > 1 ? 'right' : 'center'}
								key={el}
								sx={{ whiteSpace: 'nowrap' }}
							>
								{el}
							</TableCell>
						))}
					</TableRow>
				</TableHead>
				<TableBody>
					{mockTable.map((el: TTable) => (
						<CustomTableRow data={el} key={el.id} />
					))}
				</TableBody>
			</Table>
		</Paper>
	);
}
