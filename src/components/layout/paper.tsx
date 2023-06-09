import { Theme } from '@emotion/react';
import { Box, SxProps } from '@mui/material';
import React, { ReactElement } from 'react';

interface PaperProps {
	children: ReactElement | string | ReactElement[];
	sx?: SxProps<Theme>;
}

export default function Paper({ children, sx }: PaperProps) {
	return (
		<Box
			sx={{
				position: 'relative',
				background: 'white',
				borderRadius: '10px',
				boxShadow: `
        0px 100px 80px rgba(108, 73, 172, 0.07), 
        0px 41.7776px 33.4221px rgba(108, 73, 172, 0.0503198), 
        0px 22.3363px 17.869px rgba(108, 73, 172, 0.0417275), 
        0px 12.5216px 10.0172px rgba(108, 73, 172, 0.035), 
        0px 6.6501px 5.32008px rgba(108, 73, 172, 0.0282725), 
        0px 2.76726px 2.21381px rgba(108, 73, 172, 0.0196802)`,
				...sx,
			}}
		>
			{children}
		</Box>
	);
}
