import { Box } from '@mui/material'
import { useEffect, useRef, useState } from 'react'
import { ClockIcon } from '../shared/icons'
import { HashLink as Link } from 'react-router-hash-link'
import { useLocation } from 'react-router-dom'

const InteractiveSelector = () => {
	const [selected, setSelected] = useState('home')
	const dynamicBoxRef = useRef<HTMLDivElement>(null)
	const containerRef = useRef<HTMLDivElement>(null)
	const location = useLocation()

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

	useEffect(() => {
		const hash = location.hash.replace('#', '')
		if (hash && ['home', 'menu', 'contact'].includes(hash)) {
			setSelected(hash)
		}
	}, [location.hash])

	return (
		<Box
			ref={containerRef}
			sx={{
				borderRadius: '12px',
				boxShadow: '0px 5px 50px rgba(0, 0, 0, 0.7)',
				width: 'fit-content',
				mx: 'auto',
				fontWeight: 'bold',
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
					borderRadius: '8px',
					position: 'absolute',
					transition: 'all 0.3s ease',
					height: '30px',
				}}
			/>

			
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
					fontFamily: '"Neue Montreal", Roboto',
					fontWeight: '400',
				}}
			>
				<Link
					smooth
					to='#home'
					style={{
						textDecoration: 'none',
						color: 'inherit',
					}}
				>
					Home
				</Link>
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
						fontFamily: '"Neue Montreal", Roboto',
						fontWeight: '400',
						underline: 'none',
					}}
				>
					<Link
						smooth
						to={`#${item}`}
						style={{
							textDecoration: 'none',
							color: 'inherit',
						}}
					>
						{item.charAt(0).toUpperCase() + item.slice(1)}
					</Link>
				</Box>
			))}
		</Box>
	)
}

export default InteractiveSelector
