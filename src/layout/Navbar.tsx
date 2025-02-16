import React, { useEffect, useState } from 'react'
import { Stack, useScrollTrigger } from '@mui/material'
import { HashLink as Link } from 'react-router-hash-link'
import { useLocation } from 'react-router-dom'
import { ArrowIcon, VividLogoIcon } from '../shared/icons'

const NavBar: React.FC = () => {
	const url = useLocation()

	const [notHome, setNotHome] = useState(url.pathname !== '/')

	const trigger = useScrollTrigger({
		threshold: 60,
	})

	useEffect(() => {
		setNotHome(url.pathname !== '/')
	}, [url.pathname])
	return (
		<Stack
			sx={{
				width: '100%',
				position: notHome ? 'block' : 'fixed',
				mb: '100px',
				alignItems: 'center',
				justifyContent: 'center',
				top: '-1px',
				left: 0,
				height: '90px',
				display: 'flex',
				backdropFilter: !trigger && !notHome ? 'blur(10px)' : 'none',
				flexDirection: 'row',
				transform: !trigger ? 'translateY(0)' : 'translateY(-100%)',
				transition: 'transform 0.3s ease-in-out',
				gap: '16px',

				zIndex: 2,
			}}
		>
			{notHome && (
				<>
					<Link
						smooth
						to='/#home'
						style={{
							fill: 'white',
							left: '8%',
							position: 'absolute',
						}}
					>
						<ArrowIcon
							sx={{
								fill: 'white',
								height: '50%',

								width: '25px',
								transform: 'rotate(90deg)',
								cursor: 'pointer',
								'&:hover': {
									opacity: 0.8,
								},
							}}
						/>
					</Link>
				</>
			)}

			<Link smooth to='/#home'>
				<VividLogoIcon
					sx={{
						m: 5,
						left: 0,
						fill: 'white',
						width: {
							xs: '90px',
							sm: '100px',
							md: '110px',
						},
						height: 'auto',
					}}
				/>
			</Link>
		</Stack>
	)
}

export default NavBar
