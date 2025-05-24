import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router';
import { AuthContext } from '../Context/AuthContext';
import { TbListDetails } from 'react-icons/tb';


const MyTips = () => {
    const {user}=useContext(AuthContext);
    const tipsData=useLoaderData()

    const myTipsData=tipsData.filter(myTips=>myTips.email===user.email);
    console.log(myTipsData)

    return (
        <div>
            <div className='mt-5 '>
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
         <Link to={`/tipsDetails/${tips._id}`}><button  className="btn btn-ghost btn-xs"><TbListDetails />See More  </button></Link>
        </td>
      </tr>
        ))
      }
      
    </tbody>
    
  </table>
</div>
           </div>
        </div>
        
    );
};

export default MyTips;