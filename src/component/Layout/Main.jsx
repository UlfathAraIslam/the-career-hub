import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import JobCategory from '../JobCategory/JobCategory';

const Main = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
            <JobCategory></JobCategory>
        </div>
    );
};

export default Main;