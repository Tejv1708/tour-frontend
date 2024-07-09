import  { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCurrentUser } from '../../features/auth/authSlice'
import Navbar from '../layout/Navbar'
import AllTours from '../tours/AllTours'

const Home = () => {
  const dispatch = useDispatch()
  // console.log(auth)
  useEffect(() => {
    dispatch(getCurrentUser())
  },[dispatch])
  return (
   <>
    <Navbar/>
    <AllTours/>
    </>
  )
}

export default Home