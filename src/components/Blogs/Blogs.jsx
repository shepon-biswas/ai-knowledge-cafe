import React, { useEffect, useState } from "react";
import BlogCard from "../BlogCard/BlogCard";
import Sidebar from "../Sidebar/Sidebar";

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [bookmark, setBookmark] = useState([]);
    // console.log(bookmark[0]);

    useEffect(() =>{
        fetch("data.json")
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, [])

    // HandleBookmark Function
    const handleBookmark = (blog)=>{
      // console.log(blog);
      const newBookmark = [...bookmark, blog];
      setBookmark(newBookmark);
    }

  return (
    <>
      <div className="w-8/12 mx-auto ">
        <div className="md:flex justify-between gap-4 my-5">
          <div className="">
            {
                blogs.map(blog =><BlogCard blog={blog} key={blog.id} handleBookmark={handleBookmark}></BlogCard>)
            }
            
          </div>
          <div className="bg-slate-200 md:w-1/3 my-5 md:m-0 rounded-lg p-2">
            <Sidebar bookmark={bookmark}></Sidebar>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogs;
