import React, { use, useContext, useState } from 'react';
import { Link, useLoaderData } from 'react-router';
import { AuthContext } from '../Context/AuthContext';
import { TbListDetails } from 'react-icons/tb';
import { FaEye, FaRegEdit } from 'react-icons/fa';
import { CiEdit } from 'react-icons/ci';
import { MdDelete } from 'react-icons/md';
import Swal from 'sweetalert2';

const userDataPromise=fetch("http://localhost:3000/gardeners").then(res=>res.json())
const MyTips = () => {
  const userData=use(userDataPromise);
    const {user}=useContext(AuthContext);
    const tipsData=useLoaderData()
    
    const realUser=userData.find(real=>real.email===user.email);
    console.log("real user",realUser)


    const initialData=tipsData.filter(myTips=>myTips.email===user.email);
    

    const [myTipsData,setMyTipsData]=useState(initialData);

    const handleDelete=(id)=>{
      Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) {
      fetch(`http://localhost:3000/tips/privet/${id}`,{
        method:"DELETE"
      }).then(res=>res.json()).then(data=>{
       if(data.deletedCount){
         
        // deleted form ui
        const reminingTips=myTipsData.filter(tips=>tips._id !==id);
        setMyTipsData(reminingTips);

         Swal.fire({
      title: "Deleted!",
      text: "Your tips has been deleted.",
      icon: "success"
    });
       }
      })
  }
});
    }


    

    return (
        <div className='w-11/12 mx-auto p-10'>


          <div className='flex items-center gap-3'>
            <img className='rounded-full' src={user.photoURL} alt="" />
            <div>
              <h1>{user.displayName}</h1>
              <h1>{user.email}</h1>
              <div>
                <p>{realUser.followersCount} followers</p>
                <p>{realUser.followersCount} following</p>
                <p>{realUser.tipsCount} tips</p>
              </div>

              <button className='flex items-center btn btn-primary'> <FaRegEdit /> Edit Profile </button>
              
            </div>
          </div>
           
           {myTipsData.length<1? (<div>No tips available</div>):( <div className='mt-5 '>
             <div className="overflow-x-auto">
  <table className="table bg-accent-content border-[#3e743e20] border ">
    {/* head */}
    <thead>
      <tr>
        
        <th>Image</th>
        <th>Title</th>
        <th>Category</th>
        <th>Difficulty</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        myTipsData.map(tips=>(
          <tr>
        
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src={tips.photo}
                  alt="Avatar Tailwind CSS Component" />
              </div>
              
            </div>
            
          </div>
        </td>
        <td>
         {tips.title}
          
        </td>
        <td>{tips.category}</td>
        <td>
          {tips.difficulty}
        </td>
        <td>
         <Link to={`/tipsDetails/${tips._id}`}><button  className="btn btn-ghost btn-sm"><FaEye />  </button></Link>
         <Link to={`/tipsDetails/${tips._id}`}><button  className="btn btn-ghost btn-sm"><CiEdit /> </button></Link>
         <button onClick={()=>handleDelete(tips._id)}  className="btn btn-ghost btn-sm"><MdDelete color='red' /> </button>
        </td>
      </tr>
        ))
      }
      
    </tbody>
    
  </table>
</div>
           </div>) }

        </div>
        
    );
};

export default MyTips;