import { Box } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import { ClockIcon } from '../shared/icons'
import { HashLink as Link } from 'react-router-hash-link'

const InteractiveSelector = () => {
	const [selected, setSelected] = useState('home')
	const dynamicBoxRef = useRef<HTMLDivElement>(null)
	const containerRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		if (containerRef.current && dynamicBoxRef.current) {
			const selectedElement = containerRef.current.querySelector(
				`[data-id="${selected}"]`
			) as HTMLElement
			if (selectedElement) {
				const { offsetLeft, offsetWidth, offsetHeight } =
					selectedElement
				dynamicBoxRef.current.style.left = `${offsetLeft}px`
				dynamicBoxRef.current.style.width = `${offsetWidth}px`
				dynamicBoxRef.current.style.height = `${offsetHeight}px`
			}
		}
	}, [selected])

	return (
		<Box
			ref={containerRef}
			sx={{
				borderRadius: '30px',
				width: 'fit-content',
				mx: 'auto',
				height: '50px',
				padding: '10px',
				background: 'white',
				position: 'relative',
				display: 'flex',
				flexDirection: 'row',
				color: 'black',
				fontSize: '1rem',
				gap: '10px',
			}}
		>
			<Box
				ref={dynamicBoxRef}
				sx={{
					left: '70px',
					background: 'black',
					borderRadius: '30px',
					position: 'absolute',
					transition: 'all 0.3s ease',
					height: '30px',
				}}
			/>

			<Box
				data-id='clock'
				onClick={() => setSelected('clock')}
				sx={{
					zIndex: 1,
					borderRadius: '50%',
					display: 'flex',
					width: '30px',
					textAlign: 'center',
					lineHeight: '30px',
				}}
			>
				<ClockIcon
					fill='white'
					sx={{
						my: 'auto',
						mx: 'auto',
						color: selected === 'clock' ? 'white' : 'black',
						fill: selected === 'clock' ? 'white' : 'black',
					}}
				/>
			</Box>
			<Box
				data-id='home'
				onClick={() => setSelected('home')}
				sx={{
					zIndex: 1,
					color: selected === 'home' ? 'white' : 'black',
					borderRadius: '30px',
					width: '60px',
					textAlign: 'center',
					lineHeight: '30px',
					cursor: 'pointer',
				}}
			>
				Home
			</Box>
			{['menu', 'contact'].map((item) => (
				<Box
					key={item}
					data-id={item}
					onClick={() => setSelected(item)}
					sx={{
						zIndex: 1,
						color: selected === item ? 'white' : 'black',
						borderRadius: '30px',
						width: '60px',
						textAlign: 'center',
						lineHeight: '30px',
						cursor: 'pointer',
						textDecoration: 'none',
						underline: 'none',
					}}
				>
					<Link smooth to={`#${item}`}>
						{item.charAt(0).toUpperCase() + item.slice(1)}
					</Link>
				</Box>
			))}
		</Box>
	)
}

export default InteractiveSelector
