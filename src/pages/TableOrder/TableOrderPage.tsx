import React, { useEffect, useState } from 'react'

const TableOrderPage = () => {
	const [location, setLocation] = useState<{
		latitude: number
		longitude: number
	} | null>(null)
	const [error, setError] = useState<string | null>(null)

	useEffect(() => {
		const checkPermissions = async () => {
			try {
				const permissionStatus = await navigator.permissions.query({
					name: 'geolocation',
				})
				if (permissionStatus.state === 'granted') {
					getLocation()
				} else if (permissionStatus.state === 'prompt') {
					getLocation()
				} else {
					setError(
						'Location access denied. Please enable location services in your device settings.'
					)
				}
			} catch (err) {
				setError('Error checking location permissions.')
			}
		}

		const getLocation = () => {
			if ('geolocation' in navigator) {
				navigator.geolocation.getCurrentPosition(
					(position) => {
						setLocation({
							latitude: position.coords.latitude,
							longitude: position.coords.longitude,
						})
					},
					(error) => {
						switch (error.code) {
							case error.PERMISSION_DENIED:
								setError(
									'User denied the request for Geolocation.'
								)
								break
							case error.POSITION_UNAVAILABLE:
								setError('Location information is unavailable.')
								break
							case error.TIMEOUT:
								setError(
									'The request to get user location timed out.'
								)
								break
							default:
								setError('An unknown error occurred.')
								break
						}
					}
				)
			} else {
				setError('Geolocation is not supported by this browser.')
			}
		}

		checkPermissions()
	}, [])

	return (
		<div>
			<h1>Table Order Page</h1>
			{location ? (
				<div>
					<p>Latitude: {location.latitude}</p>
					<p>Longitude: {location.longitude}</p>
				</div>
			) : (
				<p>{error ? error : 'Getting location...'}</p>
			)}
		</div>
	)
}

export default TableOrderPage
