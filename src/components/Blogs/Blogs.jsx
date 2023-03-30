import React from "react";
import BlogCard from "../BlogCard/BlogCard";
import Sidebar from "../Sidebar/Sidebar";

const Blogs = () => {
  return (
    <>
      <div className="w-8/12 mx-auto ">
        <div className="md:flex justify-between gap-4 my-5">
          <div className="bg-orange-100">
            <BlogCard></BlogCard>
          </div>
          <div className="bg-slate-200 md:w-1/3 my-5 md:m-0 rounded-lg p-2">
            <Sidebar></Sidebar>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogs;
