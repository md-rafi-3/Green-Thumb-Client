import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../Context/AuthContext';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import Swal from 'sweetalert2';


const SignUp = () => {
  const { createUser, updatedUser,setUser, googleLogin } = useContext(AuthContext);
  const [open, setOpen] = useState(false);


  const handleEye = () => {
    setOpen(!open);
  };

  const navigate=useNavigate()


  const handleSignUp = (e) => {
    e.preventDefault()
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, name, photo, password)


    // validation
    const upperCaseExp = /[A-Z]/.test(password);
    const lowerCaseExp = /[a-z]/.test(password);
    const lengthExp = password.length >= 6;


    if (!lengthExp) {
      Swal.fire({
        title: "Password must be at least 6 characters long.",
        icon: "error",
        draggable: true
      });
      return;
    }

    if (!upperCaseExp) {

      Swal.fire({
        title: "Password must contain at least one uppercase letter.",
        icon: "error",
        draggable: true
      });
      return;
    }
    if (!lowerCaseExp) {
      Swal.fire({
        title: "Password must contain at least one lowercase letter.",
        icon: "error",
        draggable: true
      });
      return;
    }




    createUser(email, password).then(result => {

      //  add to db
      const userData = {
        email: result.user.email,
        displayName: name,
        photoURL: photo,
        followersCount: 0,
        status: "Active",



      }

      updatedUser(userData).then(() => {
        fetch("https://green-thumb-server-delta.vercel.app/gardeners", {
          method: "POST",
          headers: {
            "content-type": "application/json"
          },
          body: JSON.stringify(userData)
        }).then(res => res.json()).then(data => {
          console.log("data added to db", data)
          if (data.insertedId) {
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Your work has been saved",
              showConfirmButton: false,
              timer: 1500
            });
            setTimeout(()=>{
       navigate("/");
     },1300)
          }
        })
      }).catch((error) => {
       const errorMessage=error.code;
            Swal.fire({
         title: errorMessage,
         icon: "error",
         draggable: true
       });
      })


      console.log(result.user)
    }).catch((error) => {
     const errorMessage=error.code;
          Swal.fire({
       title: errorMessage,
       icon: "error",
       draggable: true
     });
    })
  }

  const handleGoogleLogin = () => {
  googleLogin().then(result => {
    
    const userData = {
      email: result.user.email,
      displayName: result.user.displayName,
      photoURL: result.user.photoURL,
      followersCount: 0,
      status: "Active",
    };

    setUser(result.user);

    // Check if user already exists
    fetch(`https://green-thumb-server-delta.vercel.app/gardeners?email=${userData.email}`)
      .then(res => res.json())
      .then(existingUsers => {
        if (existingUsers.length === 0) {
          // Only add to DB if user doesn't exist
          fetch("https://green-thumb-server-delta.vercel.app/gardeners", {
            method: "POST",
            headers: {
              "content-type": "application/json"
            },
            body: JSON.stringify(userData)
          })
          .then(res => res.json())
          .then(data => {
            if (data.insertedId) {
              Swal.fire({
                position: "center",
                icon: "success",
                title: "Account created successfully!",
                showConfirmButton: false,
                timer: 1500
              });
            }
          });
          setTimeout(()=>{
       navigate("/");
     },1300)
        } else {
          // Already exists
          Swal.fire({
            icon: "info",
            title: "Please Login",
            text: "You already have an account.",
            showConfirmButton: false,
            timer: 1500
          });
          setTimeout(()=>{
       navigate("/login");
     },1500)
        }
      });

  }).catch((error) => {
    console.log(error);
  });
};


  return (
    <div className=' w-11/12 mx-auto flex items-center justify-center py-10'>
      <div className="card  w-full max-w-[400px] bg-accent-content border-[#3e743e20] bordert shadow-2xl">
        <div className='pt-5'>
          <h1 className='text-2xl font-bold text-center'>Create an Account</h1>
          <p className='text-sm text-center text-accent'>Join our gardening community</p>
        </div>
        <div className="card-body ">
          <form onSubmit={handleSignUp} className="fieldset ">
            <label className="label">Name</label>
            <input required type="text" className="input w-full" placeholder="Your name" name='name' />
            <label className="label">Photo</label>
            <input  required type="text" className="input w-full" placeholder="Your photo URL" name='photo' />
            <label className="label">Email</label>
            <input  required type="email" className="input w-full" placeholder="Your email address" name='email' />
            <label className="label">Password</label>
            <div className='relative'>
              <input type={`${open ? "text" : "password"}`} required className="input w-full" placeholder="Your password" name='password' />

              <button type='button'
                onClick={handleEye}
                className="btn btn-xs border-0 absolute top-2 right-3  "
              >
                {open ? <FaEyeSlash color='white' /> : <FaEye color="white" />}
              </button>
            </div>

            <button type='submit' className="btn btn-primary mt-4">Sign Up</button>
          </form>

          <div className="divider text-accent">Or continue with</div>
          <button onClick={handleGoogleLogin} className="btn bg-white text-black border-[#e5e5e5]">
            <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
            Sign Up with Google
          </button>

          <p className='text-center text-sm mt-3'>Don't have an account? <Link to="/Login" className='text-primary underline '>Login</Link></p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;