import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Screens/Home'
import Login from './Screens/Login'
import Register from './Screens/Register'
import Navbar from './Screens/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Privatepages from './Screens/Privatepages'
import Linkkepages from './Screens/Linkkepages'
import Profile from './Screens/Profile'
import Changepassword from './Screens/Changepassword'
import Forgotpassword from './Screens/Forgotpassword'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path=''element={<Privatepages Component={Home}/>}/>
      <Route path='home' element={<Privatepages Component={Home}/>}/>
      <Route path='profile' element={<Privatepages Component={Profile}/>}/>
      <Route path='changepasswoed' element={<Privatepages Component={Changepassword}/>}/>
      <Route path='login' element={<Linkkepages Component_101={Login}/>}/>
      <Route path='register' element={<Linkkepages Component_101={Register}/>}/>
      <Route path='forgotpassword' element={<Linkkepages Component_101={Forgotpassword}/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
