import React, { useState } from 'react'

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import { Home } from './pages'
import TableOrderPage from './pages/TableOrder/TableOrderPage'
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
					<Route
						path='/masa/:numtable/:sessionid'
						element={
							// <MainLayout>
							// 	<Home />
							// </MainLayout>
							<MainLayout Component={TableOrderPage} />
						}
					/>
				</Routes>
			</Router>
		</>
	)
}

export default App
