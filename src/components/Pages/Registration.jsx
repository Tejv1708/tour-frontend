import { useState } from "react"
import { useDispatch } from "react-redux"
import { register } from "../../features/auth/authSlice"
import { useNavigate } from "react-router"
const Registration = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [name , setName] = useState("")
    const [email , setEmail] = useState("")
    const [password , setPassword] = useState("")
    const [passwordConfirm , setPasswordConfirm] = useState("")

    const  onSubmit = (e) => {
        e.preventDefault() ;
        dispatch(register({name , email ,  password , passwordConfirm})).then(action => {
            localStorage.setItem('accessToken' , action.payload.token)
        })
        navigate("/") ;
     }


  return (
    <div className="">
        <form className="" action="" onSubmit={onSubmit}>
        <h1>Registration</h1>
        <div className="flex flex-col justify items-center bg-slate-500">
          <label htmlFor="">Name</label>
          <input value={name} type="text" autoFocus onChange={(e) =>setName(e.target.value)} />

          <label htmlFor="">Email</label>
          <input type="email" value = {email} onChange={(e) => setEmail(e.target.value)} />

          <label htmlFor="">Password</label>
          <input type="text" value = {password} onChange={(e) => setPassword(e.target.value)} />

          <label htmlFor="">ConfigPassword</label>
          <input type="text" value = {passwordConfirm} onChange={(e) => setPasswordConfirm(e.target.value)} />

          <button type="submit">Submit</button>
        </div>

        </form>
    </div>
  )
}

export default Registration