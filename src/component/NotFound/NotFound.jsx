import React from 'react'
import { Link, useRouteError } from 'react-router-dom'

const NotFound = () => {
    const { error, status } = useRouteError();
    // console.log(error.message, status )
    return (
        <section>

            <div className='text-center mt-5'>
                <h2>
                    <span>Error</span> {status || 400}
                </h2>
                <p>
                    {error?.message}
                </p>
                <Link
                    to='/'

                >
                    Back to homepage
                </Link>
            </div>

        </section>
    )
}

export default NotFound;
