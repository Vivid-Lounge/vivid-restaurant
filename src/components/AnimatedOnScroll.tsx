import { motion } from 'framer-motion'
import React, { FC } from 'react'
type Props = {
	children: React.ReactNode
}

const AnimatedOnScroll: FC<Props> = ({ children }) => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 50 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }} // Runs only once
			transition={{ duration: 0.6, ease: 'easeOut' }}
		>
			{children}
		</motion.div>
	)
}

export default AnimatedOnScroll
