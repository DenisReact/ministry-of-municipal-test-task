import React, { FC, useState } from 'react';
import {
	AppBar,
	Box,
	Drawer,
	List,
	ListItem,
	Toolbar,
	Typography,
} from '@mui/material';
import VisualPollutionPage from '../../pages/visual-pollution-page';
import { sideBarItems } from '../../mockData';

interface LayoutProps {
	children: React.ReactElement | React.ReactElement[]
}

const Layout: FC<LayoutProps> = ({children}) => {
	const [open, setOpen] = useState<boolean>(false);

	const handleMenuClick = () => {
		setOpen(!open);
	};

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
			<Drawer
				disableEnforceFocus
				variant='temporary'
				open={open}
				PaperProps={{
					sx: { backgroundColor: '#EEF1FA;' },
				}}
			>
				<Toolbar />
				<List>
					{sideBarItems.map((el) => (
						<ListItem
							key={el.id}
							sx={{
								borderBottom: '1px solid',
								borderBottomColor: 'primary.main',
							}}
						>
							{el.icon}
						</ListItem>
					))}
				</List>
			</Drawer>
			<Box component='main' sx={{
				minHeight: '100vh', 
				backgroundImage: 'url(/assets/assets.svg)',
				backgroundRepeat: 'no-repeat',
				backgroundSize: 'cover',
				backgroundPosition: 'center',
				backgroundColor: '#EEF1FA',
				}}>
				<Toolbar />
				{children}
			</Box>
		</>
	);
}

export default Layout