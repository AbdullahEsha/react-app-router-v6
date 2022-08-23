import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './asset/css/app.css'
import './asset/css/nav.css'
import Home from './components/Home'
import Admin from './components/About'
import Location from './components/Location'
import Menu from './components/Menu'
import PrivacyPolicy from './components/PrivacyPolicy'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<Admin />} />
        <Route path="gallery" element={<Menu />} />
        <Route path="location" element={<Location />} />
        <Route path="privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </Router>
  )
}

export default App
