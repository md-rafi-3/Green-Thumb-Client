import React from 'react';
import { Link, useLoaderData } from 'react-router';

const BrowseTips = () => {
  const tipsData=useLoaderData()
  console.log(tipsData);
    return (
        <div className='w-11/12 mx-auto p-10'>
           
           <h1 className='text-3xl font-bold '>Browse Garden Tips</h1>
           
           {/* filter */}
               
               <div className="bg-accent-content p-6 mt-5 border-[#3e743e20] border rounded-lg w-full ">
      <h2 className="text-lg font-semibold mb-2">Filter Tips</h2>
      <div className="mb-2 text-sm text-accent">Difficulty Level</div>
      <div className="relative  max-w-xs ">
        <select
         
          
          className="block w-full appearance-none bg-accent-content border border-gray-700  py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:border-primary"
        >
          
            <option>All Levels</option>
            <option>Easy</option>
            <option>Medium</option>
            <option>Hard</option>
         
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
          ▼
        </div>
      </div>
    </div>
          
           {/* filter end */}


           <div className='mt-5'>
             <div className="overflow-x-auto">
  <table className="table bg-accent-content border-[#3e743e20] border">
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
        tipsData.map(tips=>(
          <tr>
        
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src="https://img.daisyui.com/images/profile/demo/2@94.webp"
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
         <Link to={`/tipsDetails/${tips._id}`}><button  className="btn btn-ghost btn-xs">details</button></Link>
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

export default BrowseTips;