import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
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
		<Paper sx={{ width: '1151px', maxHeight: '484px', overflowY: 'auto' }}>
			<Table>
				<TableHead>
					<TableRow>
						{tableHeadList.map((el: string, index: number) => (
							<TableCell
								align='left'
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
