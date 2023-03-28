import React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

import ProgressBar from './progress-bar';
import Diagram from './diagram';

import { TDataEl, TProgress } from '../../mockData';

export default function ProgressCard({ data }: { data: TDataEl }) {
	return (
		<Box
			key={data.id}
			sx={{
				display: 'flex',
				gap: '12px',
				flexDirection: 'column',
				maxWidth: '500px',
			}}
		>
			<Typography
				sx={{
					fontStyle: 'normal',
					fontWeight: 400,
					fontSize: '34px',
					lineHeight: '44px',
					letterSpacing: '-0.44px',
					color: ['primary.main'],
					marginBottom: '8px',
				}}
			>
				{data.title}
			</Typography>
			<Box sx={{ display: 'flex', gap: '16px' }}>
				{data.progress.map((el: TProgress) => (
					<Box
						key={el.id}
						sx={{
							display: 'flex',
							alignItems: 'center',
							gap: '16px',
							padding: '20px',
							backgroundColor: '#FFFFFF',
							boxShadow:
								'0px 100px 80px rgba(108, 73, 172, 0.07), 0px 41.7776px 33.4221px rgba(108, 73, 172, 0.0503198), 0px 22.3363px 17.869px rgba(108, 73, 172, 0.0417275), 0px 12.5216px 10.0172px rgba(108, 73, 172, 0.035), 0px 6.6501px 5.32008px rgba(108, 73, 172, 0.0282725), 0px 2.76726px 2.21381px rgba(108, 73, 172, 0.0196802)',
							borderRadius: '10px',
							width: '50%',
						}}
					>
						<ProgressBar
							value={el.percent}
							primaryColor={el.primaryColor}
							secondaryColor={el.secondaryColor}
						/>
						<Box>
							<Typography
								sx={{
									fontWeight: '300',
									fontSize: '16px',
									lineHeight: '24px',
									letterSpacing: '0.44px',
									color: ['primary.main'],
									flex: 'none',
									whiteSpace: 'nowrap',
								}}
							>
								{el.title}
							</Typography>
							<Typography>{el.time}</Typography>
							{el.value && (
								<Typography
									sx={{
										color: el.value > 0 ? '#23A698' : '#FF708B',
										display: 'flex',
										gap: '0',
									}}
								>
									{el.value > 0 ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
									<Box component='span'>{el.value}%</Box>
								</Typography>
							)}
						</Box>
					</Box>
				))}
			</Box>
			<Box
				sx={{
					padding: '20px',
					backgroundColor: '#FFFFFF',
					boxShadow:
						'0px 100px 80px rgba(108, 73, 172, 0.07), 0px 41.7776px 33.4221px rgba(108, 73, 172, 0.0503198), 0px 22.3363px 17.869px rgba(108, 73, 172, 0.0417275), 0px 12.5216px 10.0172px rgba(108, 73, 172, 0.035), 0px 6.6501px 5.32008px rgba(108, 73, 172, 0.0282725), 0px 2.76726px 2.21381px rgba(108, 73, 172, 0.0196802)',
					borderRadius: '10px',
					display: 'flex',
					maxWidth: '100%',
					alignItems: 'center',
					justifyContent: 'space-between',
					gap: '40px',
				}}
			>
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center',
					}}
				>
					<Typography
						sx={{
							fontStyle: 'normal',
							fontWeight: '300',
							fontSize: '16px',
							lineHeight: '24px',
							letterSpacing: '0.44px',
							color: ['primary.main'],
						}}
					>
						{data.diagram.title}
					</Typography>
					<Typography
						sx={{
							// fontFamily: 'Roboto',
							fontStyle: 'normal',
							fontWeight: '400',
							fontSize: '12px',
							lineHeight: '16px',
							letterSpacing: '0.4px',
							color: ['primary.main'],
							opacity: '0.6',
							display: 'flex',
							alignItems: 'center',
							whiteSpace: 'nowrap',
						}}
					>
						{data.value > 0 ? (
							<TrendingUpIcon style={{ color: '#23A698' }} />
						) : (
							<TrendingDownIcon style={{ color: '#FF708B' }} />
						)}
						{data.diagram.duration}
					</Typography>
				</Box>
				<Box
					sx={{
						width: '100%',
						height: '100px',
						'& > canvas': {
							width: '100% !important',
							object: 'contain',
						},
					}}
				>
					<Diagram data={data.diagram.data} />
				</Box>
			</Box>
		</Box>
	);
}
