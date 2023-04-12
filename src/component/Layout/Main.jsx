import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import JobCategory from '../JobCategory/JobCategory';
import Navigation from '../Navigation/Navigation';

const Main = () => {
    return (
        <div>
            <Navigation/>
            
            <Outlet/>
            
            <JobCategory></JobCategory>
        </div>
    );
};

export default Main;