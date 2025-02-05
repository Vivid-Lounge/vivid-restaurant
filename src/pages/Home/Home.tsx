import React, { useEffect, useRef, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link'
import ContactSection from './sections/ContactSection'
import MenuSection from './sections/MenuSection'
import FooterSection from './sections/FooterSection'
import HeroSection from './sections/HeroSection'
import { Box } from '@mui/material'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'

const Home: FC = () => {
	const location = useLocation()
	const navigate = useNavigate()
	const [pathHashes, setPathHashes] = useState<string[]>([])
	const [currentSectionIndex, setCurrentSectionIndex] = useState<number>(0)
	const [currentIndex, setCurrentIndex] = useState(0)
	const sections = ['footer', 'contact', 'menu', 'home']

	const heroRef = useRef<HTMLDivElement>(null)
	const menuRef = useRef<HTMLDivElement>(null)
	const contactRef = useRef<HTMLDivElement>(null)
	const footerRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const sections = [
			{ id: 'home', ref: heroRef },
			{ id: 'menu', ref: menuRef },
			{ id: 'contact', ref: contactRef },
			{ id: 'footer', ref: footerRef },
		]

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						const section = sections.find(
							(section) => section.ref.current === entry.target
						)
						if (section && location.hash !== `#${section.id}`) {
							// navigate(`#${section.id}`, { replace: true })
							setPathHashes((prev) => [...prev, `#${section.id}`])
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

	const handlePreviousSection = () => {
		const sections = ['home', 'menu', 'contact', 'footer']
		const previousIndex =
			(currentSectionIndex - 1 + sections.length) % sections.length
		setCurrentSectionIndex(previousIndex)
		navigate(`#${sections[previousIndex]}`, { replace: true })
	}

	const handleReverseNavigation = () => {
		const nextIndex = (currentIndex + 1) % sections.length
		setCurrentIndex(nextIndex)
		const nextSection = sections[nextIndex]

		const element = document.getElementById(nextSection)
		element?.scrollIntoView({ behavior: 'smooth' })
	}

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
			<Box id='footer' ref={footerRef}>
				<FooterSection />
			</Box>

			<Box
				onClick={handleReverseNavigation}
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
						transform: currentSectionIndex
							? 'rotate(0deg)'
							: 'rotate(180deg)',
					}}
				/>
			</Box>
		</Box>
	)
}

export default Home
