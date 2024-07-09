import { useDispatch, useSelector } from "react-redux"
import { logout } from "../../features/auth/authSlice";
import { useNavigate } from "react-router";

const ProfileComponent = ({isOpen , onClose}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const user = useSelector(state => state.auth)
    function handleLogout(){
       dispatch(logout());
       navigate('/login');
    }
    if(!isOpen) return null
    const handleClose = (e) => {
        if(e.target.id === 'wrapper') onClose();
    }
    
  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center" id="wrapper" onClick={handleClose}>
      <div className="w-[600px] flex flex-col">
        <button className="text-white text-xl place-self-end" onClick={() => onClose()}>X</button>
     <div className="bg-white p-2 rounded flex justify-center items-center">Name : {user.userInfo.data.name}</div>
     <div className="bg-white p-2 rounded flex justify-center items-center">email : {user.userInfo.data.email}</div>
     <div className="bg-white p-2 rounded flex justify-center items-center">
      <button className="bg-slate-700 w-1/3 rounded-lg text-white" onClick={handleLogout}>Logout</button>
      </div>
        </div>
    </div>
  )
}

export default ProfileComponent