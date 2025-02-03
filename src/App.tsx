import React, { useState } from 'react'

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import { Home } from './pages'
import MainLayout from './layout/MainLayout'

function App() {
	return (
		<>
			<Router>
				<Routes>
					<Route
						path='/'
						element={
							// <MainLayout>
							// 	<Home />
							// </MainLayout>
							<MainLayout Component={Home} />
						}
					/>
				</Routes>
			</Router>
		</>
	)
}

export default App
