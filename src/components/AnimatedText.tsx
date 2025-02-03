import React, { FC } from 'react'
import { motion } from 'framer-motion'
type Props = {
	children: React.ReactNode
}
const AnimatedText: FC<Props> = ({ children }) => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }} // Start position (below and invisible)
			animate={{ opacity: 1, y: 0 }} // Final position (normal)
			transition={{ duration: 0.6, ease: 'easeOut' }} // Smooth effect
		>
			{children}
		</motion.div>
	)
}

export default AnimatedText
