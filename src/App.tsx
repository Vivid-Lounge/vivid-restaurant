import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import { Home } from './pages'
import TableOrderPage from './pages/TableOrder/TableOrderPage'
import MainLayout from './layout/MainLayout'
import Legal from './pages/Home/sections/Legal'

import 'swiper/css'
import 'swiper/css/pagination'

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
					<Route
						path='/legal'
						element={
							// <MainLayout>
							// 	<Home />
							// </MainLayout>
							<MainLayout Component={Legal} />
						}
					/>
					{/* <Route
						path='/welcome'
						element={
							// <MainLayout>
							// 	<Home />
							// </MainLayout>
							<ProtectedPage Component={WelcomePage} />
						}
					/> */}
				</Routes>
			</Router>
		</>
	)
}

export default App
