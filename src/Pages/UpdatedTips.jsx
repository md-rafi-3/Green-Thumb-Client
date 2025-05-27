import React, { useContext } from 'react';
import { useLoaderData, useNavigate } from 'react-router';
import { AuthContext } from '../Context/AuthContext';
import Swal from 'sweetalert2';

const UpdatedTips = () => {
    const {user}=useContext(AuthContext)
    const tipsData=useLoaderData()
    console.log(tipsData)
    const navigate=useNavigate()
    const {
  availability,
  category,
  createdAt,
  description,
  difficulty,
  email,
  likeCount,
  name,
  photo,
  title,
  topic,
  _id
} = tipsData;



// handle update from
const handleUpdate=(e)=>{
    e.preventDefault()
    const form=e.target;
    const formData=new FormData(form);
    const updatedData=Object.fromEntries(formData.entries());
    updatedData.likeCount=likeCount;
    updatedData.createdAt=createdAt;

    console.log('updated data',updatedData)
  

    // add to db
    fetch(`http://localhost:3000/tips/privet/${_id}`,{
        method:"PUT",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(updatedData)
    }).then(res=>res.json()).then(data=>{
        if(data.acknowledged){
            Swal.fire({
                                position: "center",
                                icon: "success",
                                title: "Your work has been saved",
                                showConfirmButton:true,
                                confirmButtonText: "View Tips",
                                timer:2000
                            }).then((result) => {
                                /* Read more about isConfirmed, isDenied below */
                                if (result.isConfirmed) {
                                  
                                   navigate("/myTips");
                                } 
                                else{
                                    navigate("/")
                                }
                            });
        }

    })
}
    return (
         <div className=' py-20 w-11/12 mx-auto flex items-center justify-center '>
            <div className="card  w-full max-w-xl bg-accent-content border-[#3e743e20] bordert shadow-2xl">
                <div className='pt-5 px-5 space-y-2'>
                    <h1 className='text-3xl font-bold text-center'>Update Your Garden Tip</h1>
                    <p className='text-sm text-center text-accent'>Share your knowledge with the community! Fill out the form below to create a new tip.</p>
                </div>
                <div className="card-body ">
                    <form onSubmit={handleUpdate}  className="fieldset ">
                        <label className="label">Title</label>
                        <input defaultValue={title} required type="text" className="input w-full" placeholder="Enter a descriptive title" name='title' />
                        <label className="label">Topic</label>
                        <input defaultValue={topic} required type="text" className="input w-full" placeholder="e.g. Composting, Seeds & Planting, Pest Control" name='topic' />
                        <label className="label">Difficulty Level</label>

                        <select defaultValue={difficulty} className="select *:text-accent text-accent  w-full" name='difficulty'>
                            <option disabled={true}>Select difficulty level</option>
                            <option value="Easy">Easy</option>
                            <option value="Medium">Medium</option>
                            <option value="Hard">Hard</option>
                        </select>

                        <label className="label">Description</label>
                        <textarea defaultValue={description} required className="textarea w-full" placeholder="Provide detailed information about your garden tip" name='description'></textarea>

                        <label className="label">Image URL</label>
                        <input defaultValue={photo} required type="text" className="input w-full" placeholder="Enter the URL for an image that represents your tip" name='photo' />


                        <label className="label">Category</label>

                        <select defaultValue={category} className="select *:text-accent text-accent  w-full" name='category'>
                            <option disabled={true}>Select a category</option>
                            <option value="urban-gardening">Urban Gardening</option>
                            <option value="permaculture">Permaculture</option>
                            <option value="sustainable-gardening">Sustainable Gardening</option>
                            <option value="organic-gardening">Organic Gardening</option>
                            <option value="fruit-growing">Fruit Growing</option>
                            <option value="diy-projects">DIY Projects</option>
                            <option value="food-production">Food Production</option>

                        </select>


                        <label className="label">Availability</label>

                        <select defaultValue={availability} className="select *:text-accent text-accent  w-full" name='availability' >

                            <option value="public">Public - Share with everyone</option>
                            <option value="hidden">Hidden - Only visible to you</option>
                        </select>


                        <div className='mt-3 bg-neutral  py-5 px-3 rounded-md space-y-1'>
                            <h1 className='text-base text-accent'>Author Information (Read-only)</h1>
                            <div className='flex items-center gap-5'>
                                <div>
                                    <label className="label">Name</label>
                                    <input defaultValue={user.displayName} readOnly type="text" className="input pointer-events-none cursor-not-allowed opacity-50 w-full" placeholder="Author name" name='name' />
                                </div>

                                <div>
                                    <label className="label">Email</label>

                                    <input defaultValue={user.email} readOnly type="email" className="input pointer-events-none opacity-50 cursor-not-allowed  w-full" placeholder="Author email" name='email' />
                                </div>

                            </div>
                        </div>
                        <div className='flex items-center justify-end gap-5 mt-4'>
                            <button onClick={() => navigate(-1)} type="button" className='btn-outline btn'>Cancel</button>
                            <button type='submit' className="btn btn-primary ">Update tip</button>
                        </div>
                    </form>


                </div>
            </div>
        </div>
    );
};

export default UpdatedTips;