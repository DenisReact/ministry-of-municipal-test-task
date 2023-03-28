import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import Paper from '@mui/material/Paper';

import { mockTable, TTable } from '../mockData';

import CustomTableRow from './table-row';

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
		<TableContainer component={Paper}>
			<Table sx={{ minWidth: 750 }} aria-label='simple table'>
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
		</TableContainer>
	);
}
