'use client'
import { useSession } from "next-auth/react";
import React from "react";

export default function Home() {
    const {data} = useSession();
    console.log(data);
  return (
    <div className="bg-linear-to-t from-black to-[#031031] via-black min-h-screen text-white flex justify-center items-center">
      Create new branches and work with branches now!
    </div>
  );
}
