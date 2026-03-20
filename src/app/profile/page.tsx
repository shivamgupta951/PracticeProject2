"use client";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

function page() {
  const { data } = useSession();
  console.log(data);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const handleSignOut = async () => {
    setLoading(true);
    try {
      await signOut({callbackUrl: "/login"});
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };
  return (
    <div className="text-white min-h-screen bg-linear-to-br from-red-950 via-black to-red-900 flex justify-center items-center text-2xl">
      <div className="border p-10 px-28 rounded-2xl flex flex-col justify-center items-center space-y-2 relative">
        {data?.user.image && (
          <div className="relative w-[100px] h-[100px] border-4 rounded-full">
            <Image
              src={data.user.image}
              fill
              alt="user image"
              className="rounded-full"
            />
          </div>
        )}
        <div>Welcome, {data?.user.name}!</div>
        <div className="absolute border top-3 rounded-md text-[60%] p-2 right-0 border-r-0 bg-linear-to-tl from-purple-950 to-orange-800 cursor-pointer transition-all transform duration-300 ease-in-out animate-pulse tracking-wider px-4 hover:scale-105" onClick={handleSignOut}>
          Sign out
        </div>
      </div>
    </div>
  );
}

export default page;
