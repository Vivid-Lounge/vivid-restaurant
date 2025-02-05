import React, { FC } from 'react'
import { motion } from 'framer-motion'
type Props = {
	children: React.ReactNode
}
const AnimatedTextV2: FC<Props> = ({ children }) => {
	return (
		<motion.div
			initial={{ opacity: 0, y: -5 }} // Start position (below and invisible)
			animate={{ opacity: 1, y: 0 }} // Final position (normal)
			transition={{ duration: 0.6, ease: 'easeOut' }} // Smooth effect
		>
			{children}
		</motion.div>
	)
}

export default AnimatedTextV2
