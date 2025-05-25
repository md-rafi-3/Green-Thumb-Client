import React, { useContext, useState, useEffect } from 'react';
import { useLoaderData } from 'react-router';
import FetCard from '../Components/FetCard';
import { AuthContext } from '../Context/AuthContext';

const Gardeners = () => {
  const { user } = useContext(AuthContext);
  const originalData = useLoaderData(); 
  const [gardenersData, setGardenersData] = useState(originalData);
  const [searchText, setSearchText] = useState("");

  // Filter out logged-in user from originalData
  useEffect(() => {
    if (user?.email) {
      const withoutUser = originalData.filter(gardener => gardener.email !== user.email);
      setGardenersData(withoutUser);
    } else {
      setGardenersData(originalData);
    }
  }, [originalData, user]);

  const handleSearch = () => {
    if (!searchText.trim()) {
      const filtered = user?.email 
        ? originalData.filter(gardener => gardener.email !== user.email)
        : originalData;
      setGardenersData(filtered);
      return;
    }

    const search = searchText.toLowerCase().trim();

    const filtered = originalData.filter((data) =>
      (data.name?.toLowerCase().includes(search) ||
      data.location?.toLowerCase().includes(search)) &&
      data.email !== user?.email 
    );

    setGardenersData(filtered);
  };

  return (
    <div className='w-11/12 mx-auto'>
      <h1 className='text-3xl font-bold mt-5'>Explore Gardeners</h1>

      <div className='flex gap-2 py-5'>
        <label className="input w-full rounded-xl">
          <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor">
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input 
            type="text" 
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)} 
            placeholder="Search gardeners by name or location..." 
          />
        </label>
        <button onClick={handleSearch} className='btn btn-primary rounded-xl'>Search</button>
      </div>

      <div className='grid md:grid-cols-3 grid-cols-1 gap-5 py-10'>
        {
          gardenersData.map((gardeners, index) => (
            <FetCard key={index} fetGarden={gardeners} />
          ))
        }
      </div>
    </div>
  );
};

export default Gardeners;
