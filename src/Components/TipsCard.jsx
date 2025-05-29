import React, { use } from 'react';
import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa6';
import { Link } from 'react-router';

const authorPromise = fetch("https://green-thumb-server-delta.vercel.app/gardeners").then(res => res.json())
const TipsCard = ({ tips }) => {
    const authorData=use(authorPromise);
   
    const { _id, title, 
name,  description, photo,difficulty,email, likeCount, } = tips;

 const realAuthor=authorData.find(author=>author.email===email);

    return (
        <div data-aos="fade-up"
          data-aos-duration="800"
        data-aos-once="false"
        data-aos-delay={200} className="rounded-xl border-[#3e743e20] overflow-hidden shadow-lg   hover:shadow-xl  flex flex-col transition-all duration-300 transform hover:-translate-y-1  group bg-accent-content">

            <div className="relative">
                <img
                    src={photo}
                    alt={title}
                    className="w-full h-48 object-cover transform transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute top-3 right-3 bg-secondary text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
                    {difficulty}
                </span>
            </div>


            <div className="text-white px-5 py-6 flex flex-col justify-between flex-1">





                 <div className="avatar flex items-center py-3 gap-2">
                    <div className="w-9 rounded-full">
                        <img src={realAuthor.photoURL} />
                    </div>
                    <p className='text-sm text-accent'>{name}</p>
                </div>


                <h3 className="text-lg text-accent font-semibold mb-2 ">{title}</h3>



                


                <p className="text-sm text-accent mb-4 flex-1">{description}</p>


                <div className="flex items-center justify-between mt-auto pt-4  ">


                    <p className='flex text-accent text-sm gap-1 items-center'><FaHeart ></FaHeart>{likeCount} likes</p>

                    <Link to={`/tipsDetails/${tips._id}`} > <button className="  font-semibold text-sm rounded  btn btn-outline text-accent hover:bg-secondary hover:text-white hover:border-secondary bg-neutral">
                        View Details
                    </button></Link>
                </div>
            </div>
        </div>
    );
};

export default TipsCard;