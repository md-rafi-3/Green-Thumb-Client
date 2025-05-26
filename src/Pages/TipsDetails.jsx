import React, { use, useContext } from 'react';
import { AiOutlineLike } from 'react-icons/ai';
import { FaRegHeart } from 'react-icons/fa';
import { FaRegCircleUser } from 'react-icons/fa6';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { LuCalendarFold } from 'react-icons/lu';
import { SlUserFollow } from 'react-icons/sl';
import { Link, useLoaderData, useNavigate } from 'react-router';
import { AuthContext } from '../Context/AuthContext';

const authorPromise = fetch("http://localhost:3000/gardeners").then(res => res.json())




const TipsDetails = () => {
    const {user}=useContext(AuthContext)
    const authorData = use(authorPromise);
    const data = useLoaderData()
    const navigate=useNavigate()
    const {
        
        category,
        createdAt,
        description,
        email,
        likeCount,
        name,
        photo,
        title,
        topic,
        _id
    } = data;
    console.log("tips data", data)

    const date = new Date(createdAt);

    // date formate
    const formattedDate = date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric"
    });
    console.log(formattedDate)

    const realAuthor = authorData.find(author => author.email === data.email);
    console.log("this is real author", realAuthor)
    return (
        <div className='w-11/12 mx-auto py-10'>
            <button className='flex items-center p-3 hover:bg-secondary hover:text-white gap-1 rounded-sm' onClick={()=>navigate(-1)}><IoMdArrowRoundBack /> Back</button>
            {/* container */}
            <div className='flex gap-5 mt-5 md:flex-row justify-between flex-col'>
                {/* left */}
                <div className='space-y-3 max-w-3xl'>
                    <img className='rounded-xl w-full' src={photo} alt="" />
                    <h1 className='text-3xl fnt-bold'>{title}</h1>
                    <div className=' gap-3 flex md:flex-row flex-col '>
                        <h2 className='flex items-center text-accent gap-1' ><LuCalendarFold />Posted on {formattedDate}</h2>
                        <div className='flex items-center gap-3 *:flex *:items-center *:gap-1 *:text-sm *:text-accent'>
                            <h2><FaRegCircleUser /> By {name}</h2>

                        <h2><FaRegHeart />
                        
                        {likeCount} likes</h2>
                        </div>
                    </div>

                    <div className='flex gap-2 *:text-accent *:bg-neutral'> 
                        <h1 className='badge badge-outline '>{category}</h1>
                        <h1 className='badge badge-outline '>{topic}</h1>
                    </div>

                    <div className='p-5 rounded-xl border-[#3e743e20] border bg-accent-content'>
                        <h1>{description}</h1>
                    </div>

                    <div className='flex justify-center items-center'>
                        <button className='btn btn-primary text-white flex items-center'><FaRegHeart /> Like this Tip</button>
                    </div>
                </div>
                {/* right */}
                <div>
                    {/* up */}
                    <div className="card bg-accent-content border-[#3e743e20] border p-5 shadow-sm">
  <div className="card-body">
    <div className='flex items-center gap-3'>
      <div className="avatar">
        <div className="w-12 rounded-full">
          <img src={realAuthor?.photoURL || "https://i.ibb.co/4pDNDk1/avatar-placeholder.png"} />
        </div>
      </div>
      <div>
        <h1 className='text-xl font-semibold'>
          {realAuthor?.displayName || "Anonymous"} &nbsp;
          <button className="btn btn-outline btn-xs">Follow <SlUserFollow /></button>
        </h1>
        <p className='text-sm'>{realAuthor?.location || "Location not provided"}</p>
      </div>
    </div>

    <p className='text-accent text-sm'>{realAuthor?.bio || "No bio available."}</p>
    
    <p className='text-accent'>Expertise:</p>
    {
      Array.isArray(realAuthor?.expertise) && realAuthor.expertise.length > 0 ?
      (
        <div className='flex flex-col md:flex-row md:items-center gap-3'>
          {realAuthor.expertise.map((exp, idx) => (
            <div key={idx} className="badge bg-neutral text-xs text-accent badge-outline">{exp}</div>
          ))}
        </div>
      ) : (
        <p className='text-sm text-accent'>No expertise listed.</p>
      )
    }

    <div className="card-actions text-accent text-sm mt-5">
      <p className='flex items-center gap-1'><AiOutlineLike />{realAuthor?.tipsCount || 0} tips</p>
      <p className='flex items-center gap-1'><FaRegHeart />{realAuthor?.followersCount || 0} followers</p>
    </div>
  </div>
</div>
                    {/* down */}
                    <div className='card bg-accent-content border-[#3e743e20] border p-5 shadow-sm mt-5'>
                        <h1 className='font-bold'>Actions</h1>
                        <div className="join join-vertical *:btn-outline *:border-[#3e743e20] mt-2 border-[#3e743e20] border">
  <Link to="/browseTips" className="btn join-item"><button >Browse More Tips</button></Link>
   {user?.email === email && (
    <button className="btn join-item">Edit This Tip</button>
  )}
  <Link to="/shareTips" className="btn join-item"><button >Share Your Own Tip</button></Link>
</div>
                    </div>
                </div>
                {/* right end */}
            </div>
            {/* container end */}
        </div>
    );
};

export default TipsDetails;