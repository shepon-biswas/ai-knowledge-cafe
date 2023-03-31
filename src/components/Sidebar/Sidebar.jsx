import React from 'react';

const Sidebar = (props) => {
    const bookmark = props.bookmark.length;
    // const {readTime} = parseInt(props);
    const bookmarks = props.bookmark;
    console.log(bookmarks);
    return (
        <>
            <div>
                {/* Spent time on read */}
                <div className='bg-white my-5 rounded-lg'>
                    <h3 className='font-bold text-center py-3'>Spent time on read: 0 min</h3>
                </div>
                {/* Bookmark Count & List */}
                <div className=' my-5 rounded-lg p-2'>
                    <h2 className='font-bold text-xl text-center'>Bookmarked Blogs: {bookmark}</h2>
                    <hr />
                    <div>
                        <ul className='list-none'> 
                            {
                            bookmarks.map(bookmark => 
                            <li className='bg-white my-4 p-1 rounded' key={bookmark.id}>
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