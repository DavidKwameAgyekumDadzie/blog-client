import React from "react";
import { useState } from "react";
import axios from "axios";
import { httpClient } from "../services/httpClient";
import { useNavigate } from "react-router-dom";

const AddPost = () => {
  const [data, setData] = useState({
    title: "",
    body: "",
    imageUrl: null,
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // const formData = new FormData();
      // formData.append("file", data.image);
      // formData.append("upload_preset", "mern_blog");

      // //send image to cloudinary
      // const res = await axios.post(
      //   "https://api.cloudinary.com/v1_1/danidavito/image/upload",
      //   formData
      // );
      const post = {
        ...data,
        imageUrl: "danidavito",
      };
      const result = await httpClient.post("/posts", post);
      navigate("/");
      //the console below is replaced with what is above it.
      // console.log(res.data);
    } catch (error) {
      setError(error.message);
    }
    
  };
  return (
    <div className="min-h-[calc(100vh_-_68px)] flex flex-col justify-center items-center">
      <h3 className="text-3xl mb-7">AddPost</h3>
      <form
        className="border-2 max-w-xl w-full p-5 rounded space-y-3"
        onSubmit={handleSubmit}
      >
        {error && <p className="text-red-500 text-center">{error}</p>}
        <div>
          <label htmlFor="title" className="block text-xl">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            className="border w-full p-1 outline-none mt-2"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="body" className="block text-xl">
            Body
          </label>
          <textarea
            name="body"
            type="text"
            id="body"
            cols="30"
            rows="10"
            className="border w-full p-1 outline-none mt-2"
            onChange={handleChange}
          ></textarea>
        </div>
        <div>
          <input
            type="file"
            name="image"
            id="image"
            onChange={(e) => setData({ ...data, image: e.target.files[0] })}
          />
        </div>
        <div className="flex justify-end">
          <button className="border border-cyan-800 px-7 py-2 rounded text-cyan-500 hover:bg-cyan-500 hover:text-white duration-200 mt-2">
            Add Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddPost;
