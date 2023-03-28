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
import OpenSidebarIcon from '../icons/open-sidebar-icon';
import VisualPollutionIcon from '../icons/visual-pollution-icon';
import FilterIcon from '../icons/filter-icon';
import LanguageIcon from '../icons/language-icon';
import SettingsIcon from '../icons/settings-icon';
import SupportIcon from '../icons/support-icon';
import NotificationIcon from '../icons/notification-icon';
import UserPng from '../../assets/imgs/User.png'
import LogoIcon from '../icons/logo-icon';

interface LayoutProps {
	children: React.ReactElement | React.ReactElement[];
}

const Layout: FC<LayoutProps> = ({ children }) => {
	return (
		<>
			<AppBar sx={{ 
				position: 'fixed', 
				right: '0',
				width: 'calc(100vw - 96px)',
				boxShadow: 'none'
				}}>
				<Toolbar
					sx={{
						backgroundColor: '#FFFFFF',
						color: '#212B36',
						height: '64px',
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
			<Box
				sx={{
					position: 'fixed',
					zIndex: '100',
					height: '100vh',
					display: 'flex',
					flex: 'column',
					gap: '15px',
					width: '96px' 
				}}
			>
				<Box sx={{ background: 'white', borderRight: '1px solid rgb(229, 229, 229)', zIndex: '200', height: '100%', width: '100%', display: 'flex', alignItems: 'center', flexDirection: 'column', paddingTop: '16px'}}>
					<Box sx={{minHeight: '64px'}}>
						<LogoIcon />
					</Box>
					<List sx={{width: '100%'}}>
						{sideBarItems.map((el, index) => (
							<ListItem
								key={el.id}
								sx={{
									padding: '16px',
									width: '100%',
									display: 'flex',
									justifyContent: 'center'
								}}
								style={{
									borderLeft: index === 1 ? '3px solid #23A698' : 'none',
								}}
							>
								{el.icon}
							</ListItem>
						))}
					</List>
				</Box>
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
					paddingLeft: '96px',
				}}
			>
				{children}
			</Box>
		</>
	);
};

export default Layout;
