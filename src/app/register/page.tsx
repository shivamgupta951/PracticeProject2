import React from "react";
import { FcGoogle } from "react-icons/fc";

function Register() {
  return (
    <div className="bg-linear-to-t from-black to-[#031031] via-black  min-h-screen flex justify-center items-center text-white px-4">
        {/* Normal Registeration section */}
      <div className="border-2 border-white rounded-2xl px-10 max-w-md p-8 shadow-lg shadow-yellow-900 bg-linear-to-tr transition-all transform duration-700 ease-in-out from-black via-black to-red-950 hover:bg-linear-to-tl hover:to-indigo-950 hover:scale-110  cursor-grabbing">
        <h1 className="mx-4 text-xl text-center font-semibold mb-4 text-amber-300">
          User Registeration Card
        </h1>
        <form className="mx-1">
          <div>
            <label className="block font-medium">Name</label>
            <input
              className="w-full mt-1 my-4 text-[80%] bg-gray-950 p-1 rounded-md px-2 cursor-pointer border-b border-white"
              type="text"
              placeholder="Enter Name"
            />
          </div>
          <div>
            <label className="block font-medium">Email</label>
            <input
              className="w-full mt-1 my-4 text-[80%] bg-gray-950 p-1 rounded-md px-2 cursor-pointer border-b border-white"
              type="text"
              placeholder="Enter Email"
            />
          </div>
          <div>
            <label className="block font-medium">Password</label>
            <input
              className="w-full mt-1 my-4 text-[80%] bg-gray-950 p-1 rounded-md px-2 cursor-pointer border-b border-white"
              type="password"
              placeholder="Enter Password"
            />
          </div>
          <p className="text-[65%] text-center">
            Already have an Account ?{" "}
            <span className="text-blue-400 cursor-pointer hover:underline">login</span>
          </p>
          <button className="mt-4 mb-2 w-full flex justify-center items-center border border-red-600 transition-all transform duration-300 ease-in-out hover:scale-105 p-1 rounded-sm bg-black text-orange-300 font-medium tracking-wider cursor-grab hover:bg-black hover:bg-linear-to-br from-black via-black to-blue-900">
            Register
          </button>
        </form>

        {/* Partition Section */}
        <div className="flex justify-center items-center gap-1">
            <hr className="grow border-purple-700"/>
            <span>OR</span>
            <hr className="grow border-purple-700"/>
        </div>

        {/*  Google Registration Section */}
        <button className="mt-2 text-sm tracking-tight mb-2 w-full flex justify-center items-center border border-red-600 transition-all transform duration-300 ease-in-out hover:scale-105 p-2 rounded-sm bg-black text-orange-300 font-medium  cursor-grab hover:bg-black hover:bg-linear-to-br from-black via-black to-blue-900">
            <FcGoogle size={18} className="mx-1"/>
            <span>Sign Up With Google</span>
        </button>

      </div>
    </div>
  );
}

export default Register;
