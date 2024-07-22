import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Navbar from './components/navbar/Navbar'
import LandingPage from './pages/LandingPage'
import LoginPage from './pages/LoginPage';
import RegisterFormPage from './pages/RegisterFormPage';
import FirstQuestionRegisterPage from './pages/FirstQuestionRegisterPage';
import BrowserPage from './pages/BrowserPage';
// Lo siguiente lo muestra como error pero lo corre correctamente
import FreelancerProfileViewPage from './pages/FreelancerProfileViewPage';
import ProposalsPage from './pages/ProposalsPage';

function App() {

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path='/' element={<LandingPage />}/>
          <Route path='/login' element={<LoginPage />} />
          <Route path='/registerForm' element={<RegisterFormPage />} />
          <Route path='/firstQuestionregister' element={<FirstQuestionRegisterPage />} />
          <Route path='/browser' element={<BrowserPage />} />
          <Route path='/freelancerProfileView' element={<FreelancerProfileViewPage />} />
          <Route path='/proposals' element={<ProposalsPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
