import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BlogCard from "../BlogCard/BlogCard";
import Sidebar from "../Sidebar/Sidebar";

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [bookmark, setBookmark] = useState([]);
    const [readTime, setReadTime] = useState(0);
    // console.log(bookmark[0]);

    useEffect(() =>{
        fetch("data.json")
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, [])

    // HandleBookmark Function
    const handleBookmark = (blog)=>{
      const newBookmark = [...bookmark, blog];
      setBookmark(newBookmark);

      const exist = bookmark.find(singleBlog => singleBlog.blog_title === blog.blog_title);
      if(exist){
        toast("This Blog Already Bookmarked");
      }
    }

    // HandleReadTime Function
    const handleReadTime = (blog) =>{
      const readTimeMin = blog.read_time;
      const newReadTime = readTime + readTimeMin;
      setReadTime(newReadTime);
         
    }

  return (
    <>
      <div className="w-8/12 mx-auto ">
        <div className="md:flex justify-between gap-4 my-5">
          <div className="">
            {
                blogs.map(blog =><BlogCard blog={blog} key={blog.id} handleBookmark={handleBookmark} handleReadTime={handleReadTime}></BlogCard>)
            }
            
          </div>
          <div className="bg-slate-200 md:w-2/5 my-5 md:m-0 rounded-lg p-2">
            <Sidebar bookmark={bookmark} readTime={readTime}></Sidebar>
            <ToastContainer />
          </div>
        </div>
      </div>
      {/* Question & Answer Section Start */}
      <div className="w-8/12 mx-auto bg-red-200 my-5 py-5 rounded-lg px-5">
        <div>
          <h2 className="font-bold text-xl my-2">01. Props vs State</h2>
            <p>Props is an object which stores the value of attributes of a tag and work similar to the HTML attributes. Using props, we can pass data from one component to other components. It is similar to function arguments and can be passed to the component the same way as arguments passed in a function. Props are read-only components. That’s mean props is immutable so we cannot modify the props from inside the component. Stateless component can have Props. Props make components reusable.
            <br />
            The state is an updatable structure that is used to contain data or information about the component and can change over time. The change in state can happen as a response to user action or system event. It is the heart of the react component which determines the behavior of the component and how it will render. A state must be kept as simple as possible. It represents the component's local state or information. It can only be accessed or modified inside the component or by the component directly. Stateless components cannot have State. State cannot make components reusable.</p>
        </div>
        <div>
          <h2 className="font-bold text-xl my-2">02. How does useState() work?</h2>
            <p>A Hook is a special function that lets you “hook into” React features. In this case, useState() is a Hook that lets you add React state to function components.
            The useState() is a Hook that allows you to have state variables in functional components . so basically useState is the ability to encapsulate local state in a functional component. React has two types of components, one is class components which are ES6 classes that extend from React and the other is functional components. Class components a Component and can have state and lifecycle methods: class Message extends React. The  useState hook is a special function that takes the initial state as an argument and returns an array of two entries.  UseState encapsulate only singular value from the state, for multiple state need to have useState calls.</p>
        </div>
        <div>
          <h2 className="font-bold text-xl my-2">03. Purpose of useEffect() other than fetching data</h2>
            <p>The useEffect in react js allows you to perform side effects in your components. The react useEffect examples of side effects include retrieving data, direct DOM updates, and timers. The second argument is optional.
            There are more usecase of useEffect(). For example:
            Fetching data
            Reading from local storage
            Registering and deregistering event listeners
            On Every Component, Render
            To call the useEffect function on every component render, skip adding the dependency list. When the dependency list is not present, react will have nothing to compare the previous value with; as a result, the effect will run every time.  

            On Every Component, Render with a Condition
            To call the useEffect functionality based on any condition, we have to specify the list of dependencies. And the thumb rule is always to add those dependencies that you are using inside the useEffect(). 

            When Component Unmounts
            To clean up the mounting actions like removing event listeners or stopping data fetching with a side effect we call the useEffect after the component unmounts. A return statement with a function should be added inside the useEffect() hook.</p>
        </div>
        <div>
          <h2 className="font-bold text-xl my-2">04. How does React work?</h2>
            <p>
            React is a JavaScript library that creates user interfaces in a predictable and efficient way using declarative code. We can use it to help build single page applications and mobile apps, or to build complex apps if you utilize it with other libraries.
            React is divided into two major APIs. First, there’s the React DOM. This is the API that’s used to perform the actual rendering on a web page. Second, there’s the React component API. These are the parts of the page that are actually rendered by React DOM.
            Within a React component, we have the following areas to think about:
            Data: This is data that comes from somewhere (the component doesn’t care where), and is rendered by the component.
            Lifecycle: These are methods that we implement that respond to changes in the lifecycle of the component. For example, the component is about to be rendered.
            Events: This is code that we write for responding to user interactions.
            JSX: This is the syntax of React components used to describe UI structures.
            The syntax used by React components is called JSX (JavaScript XML). The idea is actually quite simple. A component renders content by returning some JSX. The JSX itself is usually HTML markup, mixed with custom tags for the React components. What’s absolutely groundbreaking here is that we don’t have to perform little micro-operations to change the content of a component.
            </p>
        </div>
      </div>
    </>
  );
};

export default Blogs;
