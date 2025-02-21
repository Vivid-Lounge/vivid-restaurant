import { type FC, useEffect, useRef, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Box } from '@mui/material'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'
import ContactSection from './sections/ContactSection'
import MenuSection from './sections/MenuSection'
import HeroSection from './sections/HeroSection'
import LocationTestimonialsSection from './sections/LocationTestimonialsSection'
const Home: FC = () => {
	const location = useLocation()
	const navigate = useNavigate()
	const [currentSectionIndex, setCurrentSectionIndex] = useState<number>(0)
	const sections = ['home', 'menu', 'contact']

	const heroRef = useRef<HTMLDivElement>(null)
	const menuRef = useRef<HTMLDivElement>(null)
	const contactRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const sections = [
			{ id: 'home', ref: heroRef },
			{ id: 'menu', ref: menuRef },
			{ id: 'contact', ref: contactRef },
		]

		const observer = new IntersectionObserver(
			(entries: IntersectionObserverEntry[]) => {
				entries.forEach((entry: IntersectionObserverEntry) => {
					if (entry.isIntersecting) {
						const section = sections.find(
							(section) => section.ref.current === entry.target
						)
						if (section && location.hash !== `#${section.id}`) {
							navigate(`#${section.id}`, { replace: true })
							setCurrentSectionIndex(
								sections.findIndex((s) => s.id === section.id)
							)
						}
					}
				})
			},
			{ threshold: 0.5 } // Adjust this value as needed
		)

		sections.forEach((section) => {
			if (section.ref.current) {
				observer.observe(section.ref.current)
			}
		})

		return () => {
			sections.forEach((section) => {
				if (section.ref.current) {
					observer.unobserve(section.ref.current)
				}
			})
		}
	}, [location.hash, navigate])

	const handleNavigation = () => {
		const nextIndex = (currentSectionIndex + 1) % sections.length
		setCurrentSectionIndex(nextIndex)
		const nextSection = sections[nextIndex]

		const element = document.getElementById(nextSection)
		element?.scrollIntoView({ behavior: 'smooth' })
	}

	const isArrowUp = currentSectionIndex === sections.length - 1

	return (
		<Box sx={{ position: 'relative' }}>
			<Box id='home' ref={heroRef}>
				<HeroSection />
			</Box>
			<Box id='menu' ref={menuRef}>
				<MenuSection />
			</Box>
			<Box id='contact' ref={contactRef}>
				<ContactSection />
			</Box>
			<Box>
				<LocationTestimonialsSection />
			</Box>
			<Box
				onClick={handleNavigation}
				sx={{
					position: 'fixed',
					bottom: '2rem',
					right: '2rem',
					width: '3rem',
					height: '3rem',
					display: 'flex',
					backgroundColor: 'primary.main',
					borderRadius: '50%',
					alignItems: 'center',
					justifyContent: 'center',
					cursor: 'pointer',
					zIndex: 1000,
					'&:hover': {
						backgroundColor: 'primary.dark',
					},
				}}
			>
				<ArrowUpwardIcon
					sx={{
						color: 'white',
						transform: isArrowUp
							? 'rotate(0deg)'
							: 'rotate(180deg)',
						transition: 'transform 0.2s ease-in-out',
					}}
				/>
			</Box>
		</Box>
	)
}

export default Home
