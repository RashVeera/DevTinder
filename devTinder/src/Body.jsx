import { Outlet } from 'react-router'
import NavBar from './NavBar'
import Footer from './Footer'

const Body = () => {
  return (
    <div className=' '>
         <NavBar/>
         <Outlet/>
         <Footer/>
    </div>
  )
}

export default Body