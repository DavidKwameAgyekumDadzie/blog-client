import React, { useState } from "react";
import { httpClient } from "../services/httpClient";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleChange = async (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await httpClient.post("/auth/Login", data);
      localStorage.setItem("token", res.data.token);
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="min-h-[calc(100vh_-_68px)] flex justify-center items-center flex-col">
      <h3 className="text-3xl mb-3">Login</h3>
      <form
        className="border-2 max-w-xl w-full p-5 rounded-md shadow-md space-y-3 m-2 bg-gray-50"
        onSubmit={handleSubmit}
      >
        {error && <p className="text-red-500 text-center">{error}</p>}
        <div>
          <label htmlFor="email" className="block  text-xl">
            Email
          </label>
          <input
            type="text"
            id="email"
            name="email"
            className="border w-full p-1 mt-2 outline-none"
            placeholder="johndoe@mail.com"
            onChange={handleChange}
          />
        </div>

        <br />

        <div>
          <label htmlFor="body" name="body" className="block  text-xl">
            Password
          </label>

          <input
            type="password"
            id="password"
            name="password"
            className="border w-full p-1 mt-2 outline-none"
            placeholder="password"
            onChange={handleChange}
          />
        </div>

        <div className="flex justify-end">
          <button
            className="rounded-md 
    shadow-orange-50 border 
    border-cyan-500 px-7 py-2 
    text-cyan-500 hover:bg-cyan-500 
    hover:text-white 
    duration-200 mt-2 "
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
