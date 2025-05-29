import React, { use, useContext, useState } from 'react';
import { Link, useLoaderData } from 'react-router';
import { AuthContext } from '../Context/AuthContext';
import { TbListDetails } from 'react-icons/tb';
import { FaEye, FaRegEdit } from 'react-icons/fa';
import { CiEdit } from 'react-icons/ci';
import { MdDelete } from 'react-icons/md';
import Swal from 'sweetalert2';
import noTipsImg from '../assets/Pets with halloween costumes-bro.png'
import { Helmet } from 'react-helmet';

const userDataPromise = fetch("https://green-thumb-server-delta.vercel.app/gardeners").then(res => res.json())
const MyTips = () => {
  const userData = use(userDataPromise);
  const { user, setUser, tipLength, setTipsLength } = useContext(AuthContext);
  const tipsData = useLoaderData()




  const realUser = userData.find(real => real.email === user.email);



  const initialData = tipsData.filter(myTips => myTips.email === user.email);


  const [myTipsData, setMyTipsData] = useState(initialData);

  setTipsLength(myTipsData.length);


  const handleDelete = (id) => {
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
        fetch(`https://green-thumb-server-delta.vercel.app/tips/privet/${id}`, {
          method: "DELETE"
        }).then(res => res.json()).then(data => {
          if (data.deletedCount) {



            Swal.fire({
              title: "Deleted!",
              text: "Your tip has been deleted.",
              icon: "success"
            });
            // deleted form ui
            const reminingTips = myTipsData.filter(tips => tips._id !== id);
            setMyTipsData(reminingTips);
          }
        })
      }
    });
  }



  // handle profile edit
  const handleProfileUpdate = (e) => {
    e.preventDefault()
    const displayName = e.target.name.value;
    const location = e.target.location.value;
    const photoURL = e.target.photo.value;
    const bio = e.target.bio.value;
    const expertiseValue = e.target.expertise.value;

    const expertise = expertiseValue.split(/[\s,]+/).filter(Boolean);
 


    const updatedData = {
      displayName: displayName,
      location: location,
      photoURL: photoURL,
      bio: bio,
      expertise: expertise,
      email: user.email
    }

    setUser(updatedData)

    //  update profile in db
    fetch("https://green-thumb-server-delta.vercel.app/gardeners", {
      method: "PATCH",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(updatedData)
    }).then(res => res.json()).then(data => {
    
      if (data.modifiedCount) {

        // alert
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Your profile has been updated!",
          showConfirmButton: true,
          confirmButtonText: "OK",
          timer: 2000
        })


      }
    })
  }




  return (
    <div className='w-11/12 mx-auto py-5'>
      <Helmet>
        <title>Green-Thumb || My-Tips</title>
      </Helmet>


      <div className='flex md:flex-row flex-col items-center md:justify-start justify-center gap-3'>
        <div className="avatar">
          <div className="w-28 rounded-full">
            <img src={user.photoURL} referrerPolicy="no-referrer" />
          </div>
        </div>
        <div className='space-y-1 flex flex-col md:justify-start justyfy-center md:items-start items-center'>
          <h1 className='text-2xl font-bold'>{user.displayName}</h1>
          <h1 className='text-accent'>{user.email}</h1>
          <div className='flex gap-3 text-accent'>
            <p>{realUser.followersCount} followers</p>

            <p>{tipLength} tips</p>
          </div>

          <button onClick={() => document.getElementById('my_modal_1').showModal()} className='flex items-center btn btn-primary'> <FaRegEdit /> Edit Profile </button>


        </div>


      </div>



      <div className="tabs mt-5  tabs-border">
        <input type="radio" name="my_tabs_2" className="tab text-base font-bold" aria-label="Shared Tips" />
        <div className="tab-content border-base-300 bg-base-100 py-10"> {/* table */}
          <div>
            {myTipsData.length < 1 ? (<div className='flex flex-col justify-center items-center space-y-3'>
              <div>
                <img className='md:max-w-96' src={noTipsImg} alt="" />
              </div>
              <h1 className='text-2xl font-bold text-secondary'>No tips found..!</h1>
              <p className='text-accent text-center '> Start by adding your first gardening tip...</p>
              <Link to="/shareTips"><button className='btn btn-primary'><FaRegEdit />Share a Tip</button></Link>
            </div>) : (<div className='mt-5 '>
              <div className="overflow-x-auto">
                <table className="table bg-accent-content border-[#3e743e20] border ">
                  {/* head */}
                  <thead>
                    <tr>

                      <th>Image</th>
                      <th>Title</th>
                      <th>Category</th>
                      <th>Availability</th>
                      <th>Likes</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* row 1 */}
                    {
                      myTipsData.map(tips => (
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
                          <td >
                            <div className={`badge text-white ${tips.availability === "public"
                              ? "bg-primary" : "bg-secondary"}`}>{tips.availability
                                === "public" ? "Public" : "Hidden"}</div>
                          </td>
                          <td>{tips.likeCount}</td>
                          <td>
                            <Link to={`/tipsDetails/${tips._id}`}><button className="btn btn-ghost btn-sm"><FaEye />  </button></Link>
                            <Link to={`/updateTips/${tips._id}`}><button className="btn btn-ghost btn-sm"><CiEdit /> </button></Link>
                            <button onClick={() => handleDelete(tips._id)} className="btn btn-ghost btn-sm"><MdDelete color='red' /> </button>
                          </td>
                        </tr>

                      ))
                    }

                  </tbody>

                </table>
              </div>
            </div>)}

          </div>
          {/* table end */}</div>



      </div>

      {/* modal */}

      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">

          <h1 className='text-center text-3xl font-bold  '>Update Your Profile</h1>
          {/* modal body */}
          <form onSubmit={handleProfileUpdate} className='fieldset'>
            <label className="label">Name</label>
            <input required type="text" placeholder="Your name" className="input w-full" defaultValue={user?.displayName} name='name' />
            <label className="label">Location</label>
            <input required name='location' defaultValue={realUser?.location} type="text" placeholder="Your location" className="input w-full" />
            <label className="label">Photo</label>
            <input required type="text" defaultValue={user?.photoURL} placeholder="Your photo URL" name='photo' className="input w-full" />
            <label className="label">Expertise</label>
            <input required type="text" name='expertise' placeholder="Your expertise" className="input w-full" />
            <label className="label">Bio</label>
            <textarea required name='bio' defaultValue={realUser?.bio} className="textarea w-full" placeholder="Write a Bio"></textarea>

            <div onClick={() => document.getElementById('my_modal_1').close()} className='flex justify-end items-center gap-3 mt-3'><button type='button' className='btn border-primary btn-outline'>Cancel</button>
              <button className='btn  btn-primary' onClick={() => document.getElementById('my_modal_1').close()} type='submit' >Update</button></div>
          </form>
          {/* modal body end */}

        </div>
      </dialog>
      {/* modal end */}

    </div>

  );
};

export default MyTips;