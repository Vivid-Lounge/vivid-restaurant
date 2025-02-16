import { motion } from 'framer-motion'

const HandwrittenText = () => {
	return (
		<svg viewBox='0 0 500 100' width='100%' height='100'>
			<motion.text
				x='50%'
				y='50%'
				textAnchor='middle'
				fontSize='40'
				fontFamily='Carattere, cursive'
				fill='orange'
				initial={{ strokeDasharray: '0 1', fill: 'transparent' }}
				animate={{ strokeDasharray: '1 0', fill: 'orange' }}
				transition={{ duration: 10, ease: 'easeInOut' }}
			>
				Scris Animat
			</motion.text>
		</svg>
	)
}

export default HandwrittenText
