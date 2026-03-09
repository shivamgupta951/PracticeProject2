"use client";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { FormEvent, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { GiFishbone } from "react-icons/gi";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="bg-linear-to-t from-black to-[#260202] via-black  min-h-screen flex justify-center items-center text-white px-4">
      {/* Normal Sign-In section */}
      <div className="border-2 border-white rounded-2xl px-10 max-w-md p-8 shadow-lg shadow-yellow-900 bg-linear-to-tr transition-all transform duration-700 ease-in-out from-black via-black to-indigo-950 hover:bg-linear-to-tl hover:to-red-950 hover:scale-110 relative cursor-grabbing">
        <div className="text-2xl top-3 left-3 animate-spin [animation-duration:2s] hover:[animation-play-state:paused] absolute">
          <GiFishbone />
        </div>
        <h1 className="mx-12 text-xl text-center font-semibold mb-4 text-amber-300">
          User Sign-In Card
        </h1>
        <form className="mx-1" onSubmit={handleSignIn}>
          <div>
            <label className="block font-medium">Email</label>
            <input
              className="w-full mt-1 my-4 text-[80%] bg-gray-950 p-1 rounded-md px-2 border-b border-white"
              type="text"
              placeholder="Enter Email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div>
            <label className="block font-medium">Password</label>
            <input
              className="w-full mt-1 my-4 text-[80%] bg-gray-950 p-1 rounded-md px-2 border-b border-white"
              type="password"
              placeholder="Enter Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
          <p className="text-[65%] text-center">
            Want to Register an Account ?{" "}
            <span
              className="text-blue-400 hover:underline"
              onClick={() => router.push("/register")}
            >
              Register
            </span>
          </p>
          <button className="mt-4 mb-2 w-full flex justify-center items-center border border-red-600 transition-all transform duration-300 ease-in-out hover:scale-105 p-1 rounded-sm bg-black text-orange-300 font-medium tracking-wider cursor-grab hover:bg-black hover:bg-linear-to-br from-black via-black to-red-900">
            Login
          </button>
        </form>

        {/* Partition Section */}
        <div className="flex justify-center items-center gap-1">
          <hr className="grow border-purple-700" />
          <span>OR</span>
          <hr className="grow border-purple-700" />
        </div>

        {/*  Google Sign-In Section */}
        <button
          className="mt-2 text-sm tracking-tight mb-2 w-full flex justify-center items-center border border-red-600 transition-all transform duration-300 ease-in-out hover:scale-105 p-2 rounded-sm bg-black text-orange-300 font-medium  cursor-grab hover:bg-black hover:bg-linear-to-br from-black via-black to-red-900"
          onClick={async () => {
            await signIn("google", { callbackUrl:"/" });
          }}
        >
          <FcGoogle size={18} className="mx-1" />
          <span>Sign In With Google</span>
        </button>
      </div>
    </div>
  );
}

export default Login;
