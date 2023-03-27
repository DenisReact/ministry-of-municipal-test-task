import React from 'react';
import CircularProgress, {
	CircularProgressProps,
} from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

interface IProgressBar extends CircularProgressProps {
	value: number;
	primaryColor: string;
	secondaryColor: string;
}

export default function ProgressBar({
	value,
	primaryColor,
	secondaryColor,
}: IProgressBar) {
	return (
		<Box
			sx={{
				position: 'relative',
				display: 'inline-flex',
				width: '84px',
				height: '84px',
			}}
		>
			<CircularProgress
				variant='determinate'
				value={value}
				style={{
					height: '84px',
					width: '84px',
					color: `${secondaryColor}`,
					position: 'relative',
					zIndex: '2',
				}}
				sx={{
					'& > svg': {
						overflow: 'unset',
					},
					'& > svg > circle': {
						strokeLinecap: 'round',
						strokeWidth: '6px',
					},
				}}
			/>
			<Box
				sx={{
					top: 0,
					left: 0,
					bottom: 0,
					right: 0,
					position: 'absolute',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					borderRadius: '100%',
					margin: '2px',
				}}
				style={{ border: `3px solid ${primaryColor}` }}
			>
				<Typography
					variant='caption'
					component='div'
					color='text.secondary'
					sx={{
						fontSize: '34px',
						lineHeight: '44px',
						letterSpacing: '-0.44 px',
						display: 'flex',
					}}
				>
					{`${Math.round(value)}`}
					<Typography
						sx={{
							fontWeight: '400',
							fontSize: '16px',
							lineHeight: '25px',
							letterSpacing: '0.34px',
						}}
					>
						%
					</Typography>
				</Typography>
			</Box>
		</Box>
	);
}
