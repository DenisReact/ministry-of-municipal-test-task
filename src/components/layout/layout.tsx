import React, { FC } from 'react';
import {
	AppBar,
	Box,
	List,
	ListItem,
	Toolbar,
	Typography,
} from '@mui/material';

import { sideBarItems } from '../../mockData';
import Paper from './paper';

interface LayoutProps {
	children: React.ReactElement | React.ReactElement[];
}

const Layout: FC<LayoutProps> = ({ children }) => {
	return (
		<>
			<AppBar sx={{ position: 'fixed' }}>
				<Toolbar
					sx={{
						backgroundColor: '#FFFFFF',
						color: '#212B36',
						maxHeight: '64px',
					}}
				>
					<Typography noWrap></Typography>
				</Toolbar>
			</AppBar>
			<Box
				sx={{
					position: 'fixed',
					zIndex: '100',
					height: '100vh',
					maxWidth: '96px',
					display: 'flex',
					flex: 'column',
					gap: '15px',
				}}
			>
				<Paper sx={{ height: '100%', paddingTop: '60px' }}>
					<List>
						{sideBarItems.map((el, index) => (
							<ListItem
								key={el.id}
								sx={{
									padding: '16px',
								}}
								style={{
									borderLeft: index === 1 ? '3px solid #23A698' : 'none',
								}}
							>
								{el.icon}
							</ListItem>
						))}
					</List>
				</Paper>
			</Box>
			<Box
				component='main'
				sx={{
					minHeight: '100vh',
					backgroundImage: 'url(/assets/assets.svg)',
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'cover',
					backgroundPosition: 'center',
					backgroundColor: '#EEF1FA',
					paddingLeft: '56px',
				}}
			>
				<Toolbar />
				{children}
			</Box>
		</>
	);
};

export default Layout;
