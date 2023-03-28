import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Theme } from '@mui/material/styles/createTheme';
import { Box } from '@mui/material';

import NavDrawer from './components/layout/layout';

const theme: Theme = createTheme({
	typography: {
		fontFamily: ['Poppins', 'sans-serif'].join(','),
	},
	palette: {
		primary: {
			main: '#383874',
		},
		secondary: {
			main: '#606380',
		},
	},
});

function App() {
	return (
		<ThemeProvider theme={theme}>
			<NavDrawer />
		</ThemeProvider>
	);
}

export default App;
