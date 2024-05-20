
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/footer/footer'
import NavBar from './components/navBar/NavBar'
import Home from './pages/home/home'
import Login from './pages/login/login'

function App() {

  return (
    <>
    <BrowserRouter>
      <NavBar/>
      <div className='min-h-[80vh]'>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </div>
      <Footer/>
    </BrowserRouter>
    </>
  )
}

 export default App
