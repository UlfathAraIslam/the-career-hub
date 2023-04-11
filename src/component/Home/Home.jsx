import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const jobCategories = useLoaderData();
    console.log(jobCategories)
    return (
        <div>
            <h2>Home: {jobCategories.length}</h2>
        </div>
    );
};

export default Home;