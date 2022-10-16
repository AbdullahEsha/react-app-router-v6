import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './asset/css/app.css'
import './asset/css/nav.css'
import Home from './components/Home'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App
