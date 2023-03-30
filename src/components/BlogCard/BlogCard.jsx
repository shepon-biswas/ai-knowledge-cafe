import { faBookmark } from '@fortawesome/free-regular-svg-icons';
import { faEnvelopeCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from "react";


const BlogCard = () => {
  return (
    <>
    <div className='w-8/12'>
      <div className='w-full'>
        <img
        className='rounded-lg w-full'
          src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=500&h=750&dpr=1"
          alt=""
        />
        <div>
          <div className='flex justify-between items-center px-1 my-3'>
            <div className='flex justify-between'>
              <img
                className="w-12 h-12 rounded-full"
                src="https://images.pexels.com/photos/3366753/pexels-photo-3366753.jpeg?auto=compress&cs=tinysrgb&w=500&h=750&dpr=1"
                alt=""
              />
              <div className='ms-2'>
              <h4 className='font-bold text-xl'>Name</h4>
              <p className='text-gray-400'>20th March 2023</p>
              </div>
            </div>
            <div className='flex justify-between gap-2'>
                <h4>05 Min to read</h4>
                <button><FontAwesomeIcon icon={faBookmark} /></button>
            </div>
          </div>
        </div>
        <div className='p-2'>
            <h1 className='font-bold text-3xl'>That was fast! Microsoft slips ads into AI-powered Bing Chat</h1>
            <p className='text-gray-500 my-4 cursor-pointer'>#programming #AIupdates</p>

            <button className=' underline underline-offset-4 text-orange-500 font-bold mb-4'>
            <FontAwesomeIcon className='me-1' icon={faEnvelopeCircleCheck} />
                
                Mark As Read 
            
            </button>
        </div>
      </div>
      </div>
    </>
  );
};

export default BlogCard;
