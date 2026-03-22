"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";
import { TbFidgetSpinnerFilled } from "react-icons/tb";

export default function Home() {
  const { data } = useSession();
  const navigate = useRouter();

  return (
    <div
      className="relative overflow-hidden min-h-screen text-white flex justify-center items-center bg-cover bg-center"
      style={{ backgroundImage: "url('/background2.jpg')" }}
    >
      {data && (
        <div className="flex justify-center items-center">
          <div className="p-4 flex justify-start items-center rounded-2xl flex-col space-y-8 py-20 pt-10">
            <div className="text-xl border rounded-xl p-10 px-34 bg-linear-to-tl from-[#0e1175] to-black animate-bounce">
              Your Assets
            </div>
            <div className="w-full flex justify-center items-center flex-col space-y-4">
              <div className="hover:rotate-2 cursor-grab bg-linear-to-br from-red-950  via-black w-[80%] to-red-950 rounded-2xl p-8 px-10 text-center" onClick={()=>navigate.push('/profile')}>
                Profile
              </div>
              <div className="hover:rotate-2 cursor-grab bg-linear-to-br from-red-950  via-black w-[80%] to-red-950 rounded-2xl p-8 px-10 text-center" onClick={()=>navigate.push('/notes')}>
                Your Notes
              </div>
            </div>
          </div>
        </div>
      )}

      {!data && (
        <div className="text-center">
          <TbFidgetSpinnerFilled className="ml-[20%] text-5xl animate-spin [animation-duration:2s]" />
          <div className="text-2xl font-bold text-gray-400">Loading...</div>
        </div>
      )}
    </div>
  );
}