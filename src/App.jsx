import './App.css'
import LandingPage from './pages/landingPage/LandingPage'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';


function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
      </Routes>
    </Router>
  )
}

export default App
