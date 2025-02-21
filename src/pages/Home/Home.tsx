'use client'

import { useRef, useEffect } from 'react'
import { Box } from '@mui/material'
import HeroSection from './sections/HeroSection'
import MenuSection from './sections/MenuSection'
import ContactSection from './sections/ContactSection'
import FooterSection from './sections/FooterSection'
import LocationTestimonialsSection from './sections/LocationTestimonialsSection'

const Home = () => {
	const heroRef = useRef<HTMLDivElement>(null)
	const menuRef = useRef<HTMLDivElement>(null)
	const contactRef = useRef<HTMLDivElement>(null)
	const locationRef = useRef<HTMLDivElement>(null)

	const sections = [
		{ id: 'home', ref: heroRef },
		{ id: 'menu', ref: menuRef },
		{ id: 'contact', ref: contactRef },
		{ id: 'location', ref: locationRef },
	]

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						// Update active section in navigation (if needed)
						// Example: setActiveSection(entry.target.id);
					}
				})
			},
			{
				rootMargin: '-50% 0% -50% 0%', // Adjust as needed
			}
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
	}, [])

	return (
		<>
			<Box id='home' ref={heroRef}>
				<HeroSection />
			</Box>
			<Box id='menu' ref={menuRef}>
				<MenuSection />
			</Box>
			<Box id='contact' ref={contactRef}>
				<ContactSection />
			</Box>
			<Box id='location' ref={locationRef}>
				<LocationTestimonialsSection />
			</Box>
			{/* <Box>
				<FooterSection />
			</Box> */}
		</>
	)
}

export default Home
