import React from "react";

const PostCard = () => {
  return (
    <div className="min-h-60 md:h-72 border-2 grid md:grid-cols-4">
      <div className="h-72 overflow-hidden">
        <img
          src="/images/eDOCTOR1.jpg"
          alt="NEW"
          className="h-full object-cover"
        />
      </div>
      <div className="col-span-3">
        <h3 className="text-2xl font-semibold text-gray-700">
          This is the post
        </h3>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
          repellat eaque et facilis suscipit deleniti ipsum est eveniet. Alias
          ex ducimus numquam vero. Tempore eos, deleniti ea nostrum unde iste.
        </p>
        <button className="border border-cyan-800 px-7 py-2 rounded text-cyan-500 hover:bg-cyan-500 hover:text-white duration-200 mt-2">
          Read more...
        </button>
      </div>
    </div>
  );
};

export default PostCard;
