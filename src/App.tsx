import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './components/HomePage/HomePage'
import TestReactMemo from './store/test'

function App() {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/test' element={<TestReactMemo />} />
			</Routes>
		</Router>
	)
}

export default App
