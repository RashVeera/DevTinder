import { useState } from "react"

const Login = () => {
    const [email,setEmail]=useState("")
    const [password,setpassword]=useState("")

  return (
    <div className="card bg-base-100 image-full w-96 h-96 mx-auto my-4 shadow-xl">
  <figure>
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_BuT8Q5_6Uwmt7pMRLf_ayswapGUW4gdiGA&s"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title ">Login</h2>
    <label className="form-control w-full max-w-xs my-3 ">
  <div className="label my-2">
    <span className="label-text text-gray-300">What is your name?</span>
  </div>
  <input type="text" placeholder="Email" value={email} onChange={(e)=>{setEmail(e.target.value)}} className="input input-bordered w-full max-w-xs text-gray-300" />
  <div className="label my-2">
    <span className="label-text">Password</span>
  </div>
  <input type="password" placeholder="Password" value={password} onChange={(e)=>{setpassword(e.target.value)}} className="input input-bordered w-full max-w-xs" />
 
</label>
    <div className="card-actions justify-center">
      <button className="btn bg-pink-700">Sign In</button>
    </div>
  </div>
</div>
  )
}

export default Login