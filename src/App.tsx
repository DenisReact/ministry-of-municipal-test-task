import { ThemeProvider } from '@mui/material';
import React from 'react';
import NavDrawer from './components/layout/layout';
import theme from './MuiTheme';

function App() {
	return (
		<ThemeProvider theme={theme}>
			<NavDrawer />
		</ThemeProvider>
	);
}

export default App;
