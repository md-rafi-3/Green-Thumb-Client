import React from 'react';

const ShareTips = () => {
    return (
        <div className=' p-20 w-11/12 mx-auto flex items-center justify-center '>
            <div className="card  w-full max-w-xl bg-accent-content border-[#3e743e20] bordert shadow-2xl">
                <div className='pt-5 px-5 space-y-2'>
                    <h1 className='text-2xl font-bold text-center'>Create a New Garden Tip</h1>
                    <p className='text-sm text-center text-accent'>Share your knowledge with the community! Fill out the form below to create a new tip.</p>
                </div>
                <div className="card-body ">
                    <form className="fieldset ">
                        <label className="label">Title</label>
                        <input type="text" className="input w-full" placeholder="Enter a descriptive title" name='title' />
                        <label className="label">Topic</label>
                        <input type="text" className="input w-full" placeholder="e.g. Composting, Seeds & Planting, Pest Control" name='topic' />
                        <label className="label">Difficulty Level</label>

                        <select defaultValue="Select difficulty level" className="select *:text-accent text-accent  w-full" >
                            <option disabled={true}>Select difficulty level</option>
                            <option >Easy</option>
                            <option>Medium</option>
                            <option>Hard</option>
                        </select>

                        <label className="label">Description</label>
                        <textarea className="textarea w-full" placeholder="Provide detailed information about your garden tip"></textarea>

                         <label className="label">Image URL</label>
                        <input type="text" className="input w-full" placeholder="Enter the URL for an image that represents your tip" name='photo' />


                         <label className="label">Category</label>

                        <select defaultValue="Select a category" className="select *:text-accent text-accent  w-full" >
                            <option disabled={true}>Select a category</option>
                            <option >Urban Gardening </option>
                            <option>Permaculture</option>
                            <option>Sustainable Gardening  </option>
                            <option>Organic Gardening</option>
                            <option>Fruit Growing</option>
                            <option>DIY Projects</option>
                            <option>Food Production</option>
                        </select>


                        <label className="label">Availability</label>

                        <select defaultValue="Public - Share with everyone" className="select *:text-accent text-accent  w-full" >
                           
                            <option >Public - Share with everyone</option>
                            <option>Hidden - Only visible to you</option>
                            
                        </select>


                       <div className='mt-3 bg-neutral py-5 px-3 rounded-md space-y-1'>
                        <h1 className='text-base text-accent'>Author Information (Read-only)</h1>
                        <div className='flex items-center gap-5'>
                            <div>
                                <label className="label">Name</label>
                        <input type="text" className="input w-full" placeholder="Enter the URL for an image that represents your tip" name='name' />
                            </div>

                            <div>
                                <label className="label">Email</label>
                        <input type="text" className="input w-full" placeholder="Enter the URL for an image that represents your tip" name='email' />
                            </div>

                        </div>
                       </div>
                        <div className='flex items-center justify-end gap-5 mt-4'>
                            <button className='btn-outline btn'>Cancel</button>
                            <button type='submit' className="btn btn-primary ">Share Tip</button>
                        </div>
                    </form>

                    
                </div>
            </div>
        </div>
    );
};

export default ShareTips;