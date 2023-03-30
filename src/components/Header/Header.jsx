import React from "react";

const Header = () => {
  return (
    <>
      <div className="bg-slate-100">
        <div className="w-8/12 mx-auto flex justify-between content-center py-4">
          <div className="logo">
            <h1 className="text-2xl font-bold">AI Knowledge Cafe</h1>
          </div>
          <div>
            <img
              className="w-12 h-12 rounded-full"
              src="https://images.pexels.com/photos/3366753/pexels-photo-3366753.jpeg?auto=compress&cs=tinysrgb&w=500&h=750&dpr=1"
              alt="user-image"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
