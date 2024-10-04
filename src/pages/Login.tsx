import { FaEye, FaEyeSlash } from 'react-icons/fa6'
import LoginIcon from '../assets/signin.gif'
import { useState } from 'react'

function Login() {
  const [showPassword, setShowPassword] = useState(false)
  return (
    <section id='login'>
      <div className='container mx-auto p-4 items-center'>
        <div className='bg-white p-2 py-5 w-full max-w-md mx-auto px-6'>
          <div className='w-20 h-20 mx-auto'>
            <img src={LoginIcon} alt="Login icon" />
          </div>
          <form action="">
            <div className='grid'>
              <label htmlFor="email">Email: </label>
              <div className='bg-slate-100 p-1.5'>
                <input type="email" id='email' placeholder='Enter email' className='outline-none w-full h-full bg-transparent'/>
              </div>
            </div>
            <div className='grid'>
              <label htmlFor="password">password: </label>
              <div className='bg-slate-100 p-1.5 flex'>
               <input type={showPassword ? 'text': 'password'} id='password' placeholder='Enter password' className='outline-none w-full h-full bg-transparent'/>
               <div className='cursor-pointer text-xl text-slate-500' onClick={()=>(setShowPassword(!showPassword))}>
                <span>
                  {showPassword? <FaEyeSlash/>:<FaEye/>}
                </span>
               </div>
              </div>
            </div>
            <button type='submit' className='bg-green-600 text-white px-6 py-2.5 w-full max-w-[150px] rounded-full hover:scale-105 transition-all hover:bg-green-700 block mx-auto mt-7'>Login</button>
          </form>
        </div>
        
      </div>
    </section>
  )
}

export default Login