import { useSelector } from 'react-redux';
import {Link} from 'react-router-dom'
import ProfileComponent from './ProfileComponent';
import LogoComponent from './LogoComponent';
const Navbar = () => {
    const user = useSelector(state => state.auth)
    console.log(user)
  return (
    <nav className="bg-gray-800 p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-white text-lg font-semibold">Logo</span>
        </div>
        <div className="flex space-x-4">
 <div>
{ user.userInfo?.data?.name ? <LogoComponent name = {user.userInfo?.data?.name}/>:
   <> 
   <Link className = "text-white"to = '/login' >Login</Link>
    <Link className = " ml-3 text-white"to = '/register' >Register</Link>
    </>
    }
    
 </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
