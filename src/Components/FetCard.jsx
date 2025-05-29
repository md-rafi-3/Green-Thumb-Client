import {  useState } from 'react';
import { AiOutlineLike } from 'react-icons/ai';
import { FaRegHeart } from 'react-icons/fa';
import { SlUserFollow, SlUserFollowing } from 'react-icons/sl';
import { toast } from 'react-toastify';
import { AuthContext } from '../Context/AuthContext';


const FetCard = ({ fetGarden }) => {
  
  console.log("feture gardeners", fetGarden);
  const [follow,setFollow]=useState(false);
  const [followed,setFollowed]=useState(fetGarden.followersCount);


 



  const {
    _id,
    photoURL,
    displayName,
    location,
    followersCount,
    bio,
    tipsCount,
    expertise
  } = fetGarden || {};

  //  follower handle
  const handleFollower=()=>{
     const updatedFollowStatus = !follow; 
  const updatedFollowCount = updatedFollowStatus ? followed - 1 : followed + 1;

  // UI Update
  setFollow(updatedFollowStatus);
  setFollowed(updatedFollowCount);


   // Server Update
    fetch("https://green-thumb-server-delta.vercel.app/gardeners", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        followersCount: updatedFollowCount,
        _id
      })
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          toast.success(follow ? "Like removed" : "Tip liked!");
        } 
      });
  };

  


  return (
   
     <div data-aos="fade-up"
          data-aos-duration="800"
        data-aos-once="false"
        data-aos-delay={200} className="card bg-accent-content transition-all duration-300 transform hover:-translate-y-1  group border-[#3e743e20] border p-5 shadow-sm">
      <div className="card-body">
        <div className='flex items-center gap-3'>
          <div className="avatar">
            <div className="w-12 rounded-full">
              <img src={photoURL || "https://via.placeholder.com/150"} alt="Gardener" 
               referrerPolicy="no-referrer"/>
            </div>
          </div>
          <div>
            <h1 className='text-xl font-semibold'>
              {displayName || "Unknown Gardener"} &nbsp;
              <button onClick={handleFollower} className={`btn ${!follow?"btn-outline":"btn-primary"} btn-xs`}>{follow?(<>Follow <SlUserFollow /></>):(<>Followed<SlUserFollowing /></>)}</button>
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
         
          <p className='flex items-center gap-1'><FaRegHeart />{followed?? 0} followers</p>
        </div>
      </div>
    </div>
  
  );
};

export default FetCard;
