import React from 'react';

const Sidebar = () => {
    return (
        <>
            <div>
                {/* Spent time on read */}
                <div className='bg-white my-5 rounded-lg'>
                    <h3 className='font-bold text-center py-3'>Spent time on read: 125 min</h3>
                </div>
                {/* Bookmark Count & List */}
                <div className=' my-5 rounded-lg p-2'>
                    <h2 className='font-bold text-xl text-center'>Bookmarked Blogs: </h2>
                    <hr />
                    <div>
                        <ul className='list-none'>
                            <li className='bg-white my-4 p-1 rounded'>That was fast! Microsoft slips ads into AI-powered Bing Chat</li>
                            <li className='bg-white my-4 p-1 rounded'>Book Two</li>
                            <li className='bg-white my-4 p-1 rounded'>Book Three</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Sidebar;