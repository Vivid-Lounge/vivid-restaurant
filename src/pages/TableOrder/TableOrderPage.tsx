import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
const TableOrderPage = () => {
	const [token, setToken] = useState<string | null>(null)
	const navigate = useNavigate()
	useEffect(() => {}, [])
	if (token) {
		navigate('/order/' + token, { replace: true })
	}
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
