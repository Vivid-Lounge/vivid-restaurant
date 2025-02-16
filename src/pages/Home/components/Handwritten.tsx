'use client'

import React from 'react'
import { useEffect, useRef } from 'react'
import { Box } from '@mui/material'
import { gsap } from 'gsap'

interface Props {
	text: string
	color?: string
	duration?: number
}

const Handwritten: React.FC<Props> = ({
	text,
	color = '#ff6b42',
	duration = 2.5,
}) => {
	const textRef = useRef<SVGTextElement>(null)

	useEffect(() => {
		if (textRef.current) {
			const text = textRef.current
			const length = text.getComputedTextLength()

			// Reset animation
			gsap.set(text, {
				strokeDasharray: length,
				strokeDashoffset: length,
				fill: 'transparent',
			})

			// Create timeline for sequential animation
			const tl = gsap.timeline()

			// Animate stroke
			tl.to(text, {
				strokeDashoffset: 0,
				duration: duration,
				ease: 'power1.inOut',
			})

			// Fade in fill color
			tl.to(
				text,
				{
					fill: color,
					stroke: 'transparent',
					duration: 0.5,
					ease: 'power2.inOut',
				},
				'-=0.5'
			)
		}
	}, [color, duration])

	return (
		<Box
			sx={{
				display: 'inline-flex',
				alignItems: 'center',
				justifyContent: 'center',
				width: '100%',
				height: '100%',
				mr: 2,
			}}
		>
			<svg
				width='100%'
				height='100%'
				viewBox={
					// textRef.current
					// 	? `0 0 ${textRef.current.getComputedTextLength()} 80`
					'0 0 180 50'
				}
				preserveAspectRatio='xMidYMid meet'
				style={{
					overflow: 'visible',
				}}
			>
				<text
					ref={textRef}
					x='50%'
					y='50%'
					fill='transparent'
					stroke={color}
					strokeWidth='1'
					fontSize='72'
					fontFamily='Carattere'
					dominantBaseline='middle'
					textAnchor='middle'
					style={{
						strokeLinecap: 'round',
						strokeLinejoin: 'round',
					}}
				>
					{text}
				</text>
			</svg>
		</Box>
	)
}

export default Handwritten
