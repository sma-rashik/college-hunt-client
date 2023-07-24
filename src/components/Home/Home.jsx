import React from 'react';
import GroupGallary from '../HomePages/GroupGallary';
import CollageCard from '../HomePages/CollageCard';

const Home = () => {
    return (
        <div className='container mx-auto'>
            <CollageCard></CollageCard>
            <div className="divider py-5"></div> 
            <GroupGallary></GroupGallary>
            <div className="divider py-5"></div> 
        </div>
    );
};

export default Home;