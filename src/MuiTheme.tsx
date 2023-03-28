import { createTheme } from '@mui/material';

const theme = createTheme({
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
	spacing: 8,
	components: {
		MuiOutlinedInput: {
			styleOverrides: {
				root: {
					borderRadius: '6px',
					background: 'white',
					fontSize: '14px',
					'& .MuiInputBase-input': {
						paddingTop: '12px',
						paddingBottom: '12px',
					},

					'& fieldset': {
						borderColor: 'transparent !important',
					},
				},

				notchedOutline: {
					borderColor: '#D9E1EB',
					borderRadius: '8px',
				},
			},
		},
		MuiMenu: {
			styleOverrides: {
				paper: {
					border: 'none',
					borderRadius: '6px',
					backgroundColor: '#fff',
					boxShadow: '0 4px 4px 0 rgba(0,0,0,0.05)',
					marginTop: '4px',
				},
			},
		},
	},
});

export default theme;
