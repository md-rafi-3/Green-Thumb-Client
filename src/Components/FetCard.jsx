import React, { useContext } from 'react';
import { AiOutlineLike } from 'react-icons/ai';
import { FaRegHeart } from 'react-icons/fa';
import { SlUserFollow } from 'react-icons/sl';


const FetCard = ({ fetGarden }) => {
  console.log("feture gardeners", fetGarden);
 



  const {
    photoURL,
    displayName,
    location,
    followersCount,
    bio,
    tipsCount,
    expertise
  } = fetGarden || {}; // fallback empty object if fetGarden is undefined/null

  return (
    <div className="card bg-accent-content border-[#3e743e20] border p-5 shadow-sm">
      <div className="card-body">
        <div className='flex items-center gap-3'>
          <div className="avatar">
            <div className="w-12 rounded-full">
              <img src={photoURL || "https://via.placeholder.com/150"} alt="Gardener" />
            </div>
          </div>
          <div>
            <h1 className='text-xl font-semibold'>
              {displayName || "Unknown Gardener"} &nbsp;
              <button className="btn btn-outline btn-xs">Follow <SlUserFollow /></button>
            </h1>
            <p className='text-sm'>{location || "Location not available"}</p>
          </div>
        </div>
        <p className='text-accent text-sm'>{bio || "No bio available."}</p>
        <p className='text-accent'>Expertise:</p>
        <div className='flex flex-col md:flex-row md:items-center gap-3'>
          {(expertise && expertise.length > 0 ? expertise : ["No expertise provided"]).map((expart, index) => (
            <div key={index} className="badge bg-neutral text-xs text-accent badge-outline">
              {expart}
            </div>
          ))}
        </div>
        <div className="card-actions text-accent text-sm mt-5">
          <p className='flex items-center gap-1'><AiOutlineLike />{tipsCount ?? 0} tips</p>
          <p className='flex items-center gap-1'><FaRegHeart />{followersCount ?? 0} followers</p>
        </div>
      </div>
    </div>
  );
};

export default FetCard;
