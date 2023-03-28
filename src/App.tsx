import React from 'react';
import { ThemeProvider } from '@mui/material/styles';

import Layout from './components/layout/layout';
import theme from './MuiTheme';
import VisualPollutionPage from './pages/visual-pollution-page';

function App() {
	return (
		<ThemeProvider theme={theme}>
			<Layout>
				<VisualPollutionPage />
			</Layout>
		</ThemeProvider>
	);
}

export default App;
