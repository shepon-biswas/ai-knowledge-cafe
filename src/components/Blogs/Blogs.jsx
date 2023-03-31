import React, { useEffect, useState } from "react";
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
    }

    // HandleReadTime Function
    const handleReadTime = (blog) =>{
      // console.log(blog);
      const readTimeMin = blog.read_time;
      // console.log(readTimeMin);
      const newReadTime = readTime + readTimeMin;
      // console.log(newReadTime);
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogs;
