import React from 'react';
import { useLoaderData } from 'react-router';

const TipsDetails = () => {
    const data=useLoaderData()
    console.log(data)
    return (
        <div>
            tips details
        </div>
    );
};

export default TipsDetails;