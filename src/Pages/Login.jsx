import React, { useContext, useState } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../Context/AuthContext';

const Login = () => {
  const {loginUser,googleLogin }=useContext(AuthContext);
   const [open, setOpen] = useState(false);
  const handleLogin=(e)=>{
    e.preventDefault()
    const email=e.target.email.value;
    const password=e.target.password.value;
    console.log(email,password)
    // email pass login
    loginUser(email,password).then(result=>{
      console.log(result.user)
    }).catch((error) => {
      console.log(error);
    })
  }

  const handleGoogleLogin=()=>{
  googleLogin().then(()=>{
    alert("login success")
  }).catch((error) => {
    console.log(error)
  })
  }
    return (
        <div className='p-10 w-11/12 mx-auto flex items-center justify-center'>
             <div className="card  w-full max-w-[400px] bg-accent-content border-[#3e743e20] bordert shadow-2xl">
               <div className='pt-5'>
                 <h1 className='text-2xl font-bold text-center'>Welcome Back</h1>
                <p className='text-sm text-center text-accent'>Sign in to access your account</p>
               </div>
      <div className="card-body ">
        <form onSubmit={handleLogin} className="fieldset">
          <label className="label">Email</label>
          <input type="email" className="input w-full" placeholder="Your email address" name='email' />
          <label className="label">Password</label>
          <input type="password" className="input w-full" placeholder="Your password" name='password' />
          <div><a className="link link-hover text-accent">Forgot password?</a></div>
          <button className="btn btn-primary mt-4">Login</button>
        </form>

         <div className="divider text-accent">Or continue with</div>
         <button onClick={handleGoogleLogin} className="btn bg-white text-black border-[#e5e5e5]">
  <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
  Login with Google
</button>

    <p className='text-center text-sm mt-3'>Don't have an account? <Link to="/signUp" className='text-primary underline '>Sign up</Link></p>
      </div>
    </div>
        </div>
    );
};

export default Login;