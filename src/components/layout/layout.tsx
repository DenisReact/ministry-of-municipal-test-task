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
import { sideBarItems } from '../../mockData';
import OpenSidebarIcon from '../icons/open-sidebar-icon';
import VisualPollutionIcon from '../icons/visual-pollution-icon';
import FilterIcon from '../icons/filter-icon';
import LanguageIcon from '../icons/language-icon';
import SettingsIcon from '../icons/settings-icon';
import SupportIcon from '../icons/support-icon';
import NotificationIcon from '../icons/notification-icon';
import UserPng from '../../assets/imgs/User.png'

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
						display: 'flex',
						padding: '20px 40px',
					}}
				>
					<OpenSidebarIcon />
					<Box sx={{mr: '32px'}} />
					<VisualPollutionIcon />
					<Typography sx={{ml: '32px'}}>Main / Visual pollution / <span style={{color: '#C6CBD9'}}>Enforcement Rate - Overview Page - All Country</span></Typography>
					<Box sx={{display: 'flex', gap: '24px', alignItems: 'center', ml: 'auto'}}>
						<FilterIcon />
						<LanguageIcon />
						<SettingsIcon />
						<SupportIcon />
						<NotificationIcon />
						<img src={UserPng} alt="user" />
					</Box>
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