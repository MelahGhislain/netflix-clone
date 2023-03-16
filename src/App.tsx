import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import VideoPlayer from './pages/VideoPlayer'
import Welcome from './pages/Welcome'

function App() {

  return (
    <BrowserRouter>
        <Routes>
          <Route path='/'  element={<Welcome />}/>
          <Route path='/login'  element={<Login />}/>
          <Route path='/signup'  element={<Signup />}/>
          <Route path='/home'  element={<Home />}/>
          <Route path='/player'  element={<VideoPlayer />}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App
