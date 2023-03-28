import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { Theme } from '@mui/material/styles/createTheme';
import { Box } from '@mui/material';

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
