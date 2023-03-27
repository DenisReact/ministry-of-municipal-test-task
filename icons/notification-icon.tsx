import React from 'react';

export default function NotificationIcon({ notification = true }) {
	return (
		<>
			{notification ? (
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='24'
					height='24'
					viewBox='0 0 24 24'
					fill='none'
				>
					<g clip-path='url(#clip0_7721_11918)'>
						<path
							d='M20 17H22V19H2V17H4V10C4 7.87827 4.84285 5.84344 6.34315 4.34315C7.84344 2.84285 9.87827 2 12 2C14.1217 2 16.1566 2.84285 17.6569 4.34315C19.1571 5.84344 20 7.87827 20 10V17ZM18 17V10C18 8.4087 17.3679 6.88258 16.2426 5.75736C15.1174 4.63214 13.5913 4 12 4C10.4087 4 8.88258 4.63214 7.75736 5.75736C6.63214 6.88258 6 8.4087 6 10V17H18ZM9 21H15V23H9V21Z'
							fill='#9A9AAF'
						/>
						<path
							d='M19.875 8.25C22.1532 8.25 24 6.40317 24 4.125C24 1.84683 22.1532 0 19.875 0C17.5968 0 15.75 1.84683 15.75 4.125C15.75 6.40317 17.5968 8.25 19.875 8.25Z'
							fill='#FF2D2E'
							stroke='white'
							stroke-width='3'
						/>
					</g>
					<defs>
						<clipPath id='clip0_7721_11918'>
							<rect width='24' height='24' fill='white' />
						</clipPath>
					</defs>
				</svg>
			) : (
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='24'
					height='24'
					viewBox='0 0 24 24'
					fill='none'
				>
					<path
						d='M20 17H22V19H2V17H4V10C4 7.87827 4.84285 5.84344 6.34315 4.34315C7.84344 2.84285 9.87827 2 12 2C14.1217 2 16.1566 2.84285 17.6569 4.34315C19.1571 5.84344 20 7.87827 20 10V17ZM18 17V10C18 8.4087 17.3679 6.88258 16.2426 5.75736C15.1174 4.63214 13.5913 4 12 4C10.4087 4 8.88258 4.63214 7.75736 5.75736C6.63214 6.88258 6 8.4087 6 10V17H18ZM9 21H15V23H9V21Z'
						fill='#9A9AAF'
					/>
				</svg>
			)}
		</>
	);
}
