import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import JobCategory from '../JobCategory/JobCategory';
import FeaturedJob from '../FeaturedJob/FeaturedJob';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Home = () => {
  const { jobCategories } = useLoaderData();
  const { featuredJobs } = useLoaderData();
  const [numToShow, setNumToShow] = useState(4);

  const handleSeeAllClick = () => {
    setNumToShow(featuredJobs.length);
  }

  return (
    <div className='container mt-3'>
      <header className=' container bg-light'>
        <section className='mt-3'>
          <Row className='g-3'>
            <Col><h3>One Step <br /> Closer To Your <br /><span className='text-color'>Dream Job</span></h3>
              <p>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
              <button className='btn'>Get Started</button></Col>

            <Col className='img-fluid'><img src="https://monteluke.com.au/wp-content/gallery/linkedin-profile-pictures/9.JPG" alt="" /></Col>
          </Row>
          <div>

          </div>
          <div>

          </div>
        </section>
      </header>
      <div>
        <h3 className='text-center'>Job Category List</h3>
        <p className='text-center'>Explore thousands of job opportunities with all the information you need. Its your future</p>
        {
          jobCategories.map(jobCategory => (
            <JobCategory key={jobCategory.id} jobCategory={jobCategory} />
          ))
        }
      </div>
      <div>
        <h3 className='text-center'>Featured Jobs</h3>
        <p className='text-center'>Explore thousands of job opportunities with all the information you need. Its your future</p>
        <div className='row'>
          {featuredJobs.slice(0, numToShow).map(featuredJob => (
            <div className='card col-md-6 col-lg-6 col-sm-12 g-4' key={featuredJob.id}>
              <FeaturedJob featuredJob={featuredJob} />
              <div className='p-2'>
                <button className="btn btn-primary">View Details</button>
              </div>
            </div>
          ))}
        </div>
        {numToShow < featuredJobs.length &&
          <button className='btn p-3 mt-3 my-auto d-block mx-auto' onClick={handleSeeAllClick}>See all job</button>
        }
      </div>
    </div>
  );
};

export default Home;
