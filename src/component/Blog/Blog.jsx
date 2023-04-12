import React from 'react';

const Blog = () => {
    return (
        <div className='container'>
            <div>
                <h3>When should you use context API?</h3>
                <p>Context API in React should be used when you want to share data or state between multiple components that are nested deep in the component tree, without having to pass props through every intermediate component.</p>
            </div>
            <div>
                <h3>What is a custom hook?</h3>
                <p>A custom hook is a reusable function that contains stateful logic and can be shared across multiple components in a React application.</p>

            </div>
            <div>
                <h3>What is useRef?</h3>
                <p>useRef is a hook in React that returns a mutable ref object, which can be used to store a value or reference to a DOM element that persists across re-renders. It can also be used to access the current value of a state variable without triggering a re-render.</p>
            </div>
            <div>
                <h3>What is useMemo?</h3>
                <p>useMemo is a hook in React that memoizes the result of a function call and returns the cached value until the dependencies of the function change. This can be used to optimize performance by preventing expensive computations from being recalculated on every render.</p>
            </div>
        </div>
    );
};

export default Blog;
