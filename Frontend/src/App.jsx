import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Navbar from './components/navbar/Navbar'
import LandingPage from './pages/LandingPage'
import LoginPage from './pages/LoginPage';

function App() {

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path='/' element={<LandingPage />}/>
          <Route path='/login' element={<LoginPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
