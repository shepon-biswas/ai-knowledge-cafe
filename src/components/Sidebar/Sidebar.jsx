import React from 'react';

const Sidebar = (props) => {
    const bookmark = props.bookmark.length;
    const bookmarks = props.bookmark;
    const readTime = props.readTime;
    
    return (
        <>
            <div>
                {/* Spent time on read */}
                <div className='bg-orange-100 rounded-lg border border-orange-500'>
                    <h3 className='font-bold text-center text-orange-500 py-3'>Spent time on read: {readTime} min</h3>
                </div>
                {/* Bookmark Count & List */}
                <div className=' my-5 rounded-lg bg-slate-200 p-4'>
                    <h2 className='font-bold text-xl text-center '>Bookmarked Blogs: {bookmark}</h2>
                    <div>
                        <ul className='list-none'> 
                            {
                            bookmarks.map((bookmark, index) => 
                            <li className='bg-white my-4 p-2 rounded-lg font-bold' key={index}>
                                {bookmark.blog_title}
                                
                            </li> )
                            }
                            
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Sidebar;