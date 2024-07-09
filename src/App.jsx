import { Routes , Route } from 'react-router'
import './App.css'
import Registration from './components/Pages/Registration'
import Login from './components/Pages/Login'
import Home from './components/Pages/Home'
import SingleTour from './components/Pages/SingleTour'

function App() {
  return (
    <>
     <div>
      <Routes>
        <Route path='/' element = {<Home/>} />
        <Route path = '/register' element = { <Registration/>} />
        <Route path = "/login" element = {<Login/>} />
        <Route path='/tour/:id' element = {<SingleTour/>} />
      </Routes>
     </div>
    </>
  )
}

export default App
