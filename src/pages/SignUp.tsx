import { FaEye, FaEyeSlash } from 'react-icons/fa6'
import LoginIcon from '../assets/signin.gif'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function SignUp() {
  const [showPassword, setShowPassword] = useState(false)
  const [data, setData] = useState({
    name:"",
    email: "",
    password: "",
    confirmPassword: ""
  })

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
    const {name, value} = e.target
    setData((prev)=>{
      return{
        ...prev,
        [name]: value
      }
    })
  }
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    
  }
  return (
    <section id="sign-up">
      <div className="container mx-auto p-4 items-center">
        <div className="bg-white p-2 py-5 w-full max-w-md mx-auto px-6">
          <div className="w-20 h-20 mx-auto">
            <img src={LoginIcon} alt="Login icon" />
          </div>
          <form  className="pt-7" onSubmit={handleSubmit}>
            <div className="grid">
              <label htmlFor="email">Email: </label>
              <div className="bg-slate-100 p-1.5">
                <input
                  type="email"
                  id="email"
                  name='email'
                  value={data.email}
                  placeholder="Enter email"
                  className="outline-none w-full h-full bg-transparent"
                  onChange={handleOnChange}
                />
              </div>
            </div> 
            <div >
              <label htmlFor="name">Name: </label>
              <div className="bg-slate-100 p-1.5">
                <input
                  type="name"
                  id="name"
                  name='name'
                  value={data.name}
                  placeholder="Enter name"
                  className="outline-none w-full h-full bg-transparent"
                  onChange={handleOnChange}
                />
              </div>
            </div>
            <div>
              <label htmlFor="password">password: </label>
              <div className="bg-slate-100 p-1.5 flex">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name= 'password'
                  value={data.password}
                  placeholder="Enter password"
                  className="outline-none w-full h-full bg-transparent"
                  onChange={handleOnChange}
                />
                <div
                  className="cursor-pointer text-xl text-slate-500"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  <span>{showPassword ? <FaEyeSlash /> : <FaEye />}</span>
                </div>
              </div>
            </div>
            <div>
              <label htmlFor="password">Password: </label>
              <div className="bg-slate-100 p-1.5 flex">
                <input
                  type={showPassword ? "text" : "password"}
                  id="confirmPassword"
                  name= 'confirmPassword'
                  value={data.confirmPassword}
                  placeholder="Enter confirmPassword"
                  className="outline-none w-full h-full bg-transparent"
                  onChange={handleOnChange}
                />
                <div
                  className="cursor-pointer text-xl text-slate-500"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  <span>{showPassword ? <FaEyeSlash /> : <FaEye />}</span>
                </div>
              </div>
              <Link
                to={"/forgot-password"}
                className="block w-fit ml-auto hover:underline hover:text-orange-600"
              >
                Forgot yout password?
              </Link>
            </div>
            <button
              type="submit"
              className="bg-orange-600 text-white px-6 py-2.5 w-full max-w-[150px] rounded-full hover:scale-105 transition-all hover:bg-orange-700 block mx-auto mt-7"
            >
              Sign up
            </button>
          </form>
          <p className="my-4 ">
            Already have account?{" "}
            <span className="text-orange-600 hover:text-orange-700 hover:underline">
              <Link to={"/login"}>Login</Link>
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default SignUp