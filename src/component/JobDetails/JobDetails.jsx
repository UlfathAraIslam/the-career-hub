import React from 'react';
import { useParams } from 'react-router-dom';

const JobDetails = () => {
  const { id } = useParams(); // get the job ID from the URL parameter
  // TODO: fetch job details using the ID

  return (
    <div className='container mt-3'>
      <h3>Job Details</h3>
      {/* TODO: display job banner and details */}
    </div>
  );
};

export default JobDetails;
