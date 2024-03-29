import { faBookmark } from '@fortawesome/free-regular-svg-icons';
import { faCheckDouble } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from "react";


const BlogCard = (props) => {
    // console.log(props)
    const {author_name, author_image, blog_title, cover_image, publish_date, read_time} = props.blog;
    const handleBookmark = props.handleBookmark;
    const handleReadTime = props.handleReadTime;
    // console.log(handleReadTime);


  return (
    <>
    <div className='border border-slate-200 mb-5 rounded-lg '>
      <div className='w-full p-2'>
        <img
        className='rounded-lg w-full'
          src={cover_image}
          alt="cover-images"
        />
        <div>
          <div className='flex justify-between items-center px-2 my-3'>
            <div className='flex justify-between'>
              <img
                className="w-12 h-12 rounded-full"
                src={author_image}
                alt="author-image"
              />
              <div className='ms-2'>
              <h4 className='font-bold text-xl'>{author_name}</h4>
              <p className='text-gray-400'>{publish_date}</p>
              </div>
            </div>
            <div className='flex justify-between gap-2'>
                <h4>{read_time} Min to read</h4>
                <button 
                  className='text-orange-500'
                  onClick={()=>handleBookmark(props.blog)}
                ><FontAwesomeIcon icon={faBookmark} /></button>
            </div>
          </div>
        </div>
        <div className='p-2'>
            <h1 className='font-bold text-3xl'>{blog_title}</h1>
            <p className='text-gray-500 my-4 cursor-pointer'>#programming #AIupdates</p>

            <button 
            onClick={()=>handleReadTime(props.blog)}
            
            className=' underline underline-offset-4 text-orange-500 font-bold mb-4'>
            <FontAwesomeIcon icon={faCheckDouble} /> Mark As Read 
            </button>
        </div>
      </div>
      </div>
    </>
  );
};

export default BlogCard;
