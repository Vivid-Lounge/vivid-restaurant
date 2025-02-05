import { createSvgIcon } from '@mui/material'
import React from 'react'

export const SocialIcon = createSvgIcon(
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width='185'
		height='77'
		viewBox='0 0 185 77'
		fill='black'
	>
		<g filter='url(#filter0_d_81_946)'>
			<rect
				x='4.53516'
				y='0.982422'
				width='175.931'
				height='67.7324'
				fill='url(#pattern0_81_946)'
				shape-rendering='crispEdges'
			/>
			<rect
				x='5.03516'
				y='1.48242'
				width='174.931'
				height='66.7324'
				stroke='black'
				shape-rendering='crispEdges'
			/>
		</g>
		<defs>
			<filter
				id='filter0_d_81_946'
				x='0.535156'
				y='0.982422'
				width='183.932'
				height='75.7324'
				filterUnits='userSpaceOnUse'
				color-interpolation-filters='sRGB'
			>
				<feFlood flood-opacity='0' result='BackgroundImageFix' />
				<feColorMatrix
					in='SourceAlpha'
					type='matrix'
					values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
					result='hardAlpha'
				/>
				<feOffset dy='4' />
				<feGaussianBlur stdDeviation='2' />
				<feComposite in2='hardAlpha' operator='out' />
				<feColorMatrix
					type='matrix'
					values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0'
				/>
				<feBlend
					mode='normal'
					in2='BackgroundImageFix'
					result='effect1_dropShadow_81_946'
				/>
				<feBlend
					mode='normal'
					in='SourceGraphic'
					in2='effect1_dropShadow_81_946'
					result='shape'
				/>
			</filter>
			<pattern
				id='pattern0_81_946'
				patternContentUnits='objectBoundingBox'
				width='1'
				height='1'
			>
				<use transform='matrix(0.000327375 0 0 0.00085034 0.0338175 0)' />
			</pattern>
			<image id='image0_81_946' width='2848' height='1176' />
		</defs>
	</svg>,
	'SocialIcon'
)
