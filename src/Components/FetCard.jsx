import React from 'react';
import { AiOutlineLike } from 'react-icons/ai';

import { FaRegHeart } from 'react-icons/fa';

const FetCard = ({fetGarden}) => {
    const {profilePhoto,name,location,followersCount,bio,tipsCount,expertise
}=fetGarden;
    
    return (
       <div className="card bg-accent-content border-[#3e743e20] border p-5 shadow-sm">
  <div className="card-body">
    <div className='flex items-center gap-3'>
       <div className="avatar">
  <div className="w-12 rounded-full">
    <img src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" />
  </div>
</div>
       <div><h1 className='text-xl font-semibold'>{name} &nbsp; <button className="btn btn-outline btn-xs">Follow</button></h1>
       <p className='text-sm'>{location}</p>
       </div>
    </div>
    
    <p className='text-accent text-sm'>{bio}</p>
      <p className=' text-accent'> Expertise:</p>
     <div className='flex flex-col md:flex-row md:items-center  gap-3 '>{expertise.map(expart=><div className="badge bg-neutral text-xs text-accent  badge-outline">{expart}</div>
      )}</div>
    <div className="card-actions text-accent text-sm mt-5">
     <p className='flex items-center  gap-1'><AiOutlineLike />{tipsCount} tips</p>
     <p  className='flex items-center gap-1'><FaRegHeart />{followersCount} followers</p>
      
    </div>
  </div>
</div>
    );
};

export default FetCard;