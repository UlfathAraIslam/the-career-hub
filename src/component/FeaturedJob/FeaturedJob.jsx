import React from 'react';
import "./FeaturedJob.css"
const FeaturedJob = ({ featuredJob }) => {
    const { companyLogo, jobTitle, companyName, fullTimeOrPartTime, location, salary, remoteOrOnsite
    } = featuredJob;
    return (
        <div className='featuredJob'>
            <img src={companyLogo} alt="" />
            <h5>{jobTitle}</h5>
            <p>{companyName}</p>
            <p>{fullTimeOrPartTime}</p>
            <p>{remoteOrOnsite}</p>
            <p>{location}</p>
            <p>{salary}</p>

       </div>
    );

};

export default FeaturedJob;

// <div className='container grid '>
{/* <img src={companyLogo} alt="" />
<h5>{jobTitle}</h5>
<p>{companyName}</p>
<p>{fullTimeOrPartTime}</p>
<p>{remoteOrOnsite}</p>
<p>{location}</p>
<p>{salary}</p>
</div> */}
