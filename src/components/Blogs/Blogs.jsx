import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BlogCard from "../BlogCard/BlogCard";
import BlogSection from "../BlogSection/BlogSection";
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
        toast("This Blog Already Added As Bookmarked");
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
      <div className="w-11/12 md:w-8/12 mx-auto my-2 md:my-5">
        <div className="grid md:grid-cols-3 gap-x-10">
          <div className="md:col-span-2 rounded-lg ">
            {
                blogs.map(blog =><BlogCard blog={blog} key={blog.id} handleBookmark={handleBookmark} handleReadTime={handleReadTime}></BlogCard>)
            } 
          </div>
          <div className=" h-min rounded-lg">
            <Sidebar bookmark={bookmark} readTime={readTime}></Sidebar>
            <ToastContainer />
          </div>
        </div>
      </div>
      {/* Question & Answer Section Start */}
      <div className=" w-11/12 md:w-8/12 mx-auto bg-orange-100 my-5 py-5 rounded-lg px-5">
        <BlogSection></BlogSection>
      </div>
    </>
  );
};

export default Blogs;
