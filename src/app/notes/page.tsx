import React from "react";

function page() {
  return (
    <div className="text-white min-h-screen bg-linear-to-br from-red-950 via-black to-red-900 flex justify-around items-center text-2xl">
      <div className="w-[20%] border min-h-screen flex justify-start items-center rounded-4xl bg-linear-to-b from-ourple-400 via-blue-950 to-[#0b0525] flex-col">
        <div className="mt-7 border-b-4 flex justify-center items-center w-full pb-4 border-yellow-600 font-bold">
          Notes Bar
        </div>
        <div className="py-20 relative space-y-12 tracking-tighter text-[80%] border-b-3 border-dashed w-full px-[5%] min-h-[500px]">
          <div className="absolute -bottom-10 left-[22%] bg-linear-to-r from-red-600 via-yellow-400 to-green-700 bg-clip-text text-transparent text-[90%] tracking-widest">max-limit 5 notes!</div>
          <div className="border-2 p-2 px-8 rounded-b-3xl flex justify-center items-center bg-linear-to-tl from-red-950 via-orange-900 to-gray-700 transition-all transform duration-700 ease-in-out hover:scale-105 hover:rotate-2 cursor-pointer shadow-2xl shadow-orange-950">Engneering Mathematics</div>
          <div className="border-2 p-2 px-8 rounded-b-3xl flex justify-center items-center bg-linear-to-tl from-red-950 via-orange-900 to-gray-700 transition-all transform duration-700 ease-in-out hover:scale-105 hover:rotate-2 cursor-pointer shadow-2xl shadow-orange-950">Physics</div>
          <div className="border-2 p-2 px-8 rounded-b-3xl flex justify-center items-center bg-linear-to-tl from-red-950 via-orange-900 to-gray-700 transition-all transform duration-700 ease-in-out hover:scale-105 hover:rotate-2 cursor-pointer shadow-2xl shadow-orange-950">English</div>
        </div>
      </div>
      <div className="w-[78%] p-6 border min-h-screen rounded-l-4xl flex flex-wrap justify-start">
        <div className="h-60 w-60 flex justify-center items-center rounded-bl-4xl border mx-4 bg-yellow-200 text-black">Note Box</div>
        <div className="h-60 w-60 flex justify-center items-center rounded-bl-4xl border mx-4 bg-yellow-200 text-black">Note Box</div>
        <div className="h-60 w-60 flex justify-center items-center rounded-bl-4xl border mx-4 bg-yellow-200 text-black">Note Box</div>
        <div className="h-60 w-60 flex justify-center items-center rounded-bl-4xl border mx-4 bg-yellow-200 text-black">Note Box</div>
        <div className="h-60 w-60 flex justify-center items-center rounded-bl-4xl border mx-4 bg-yellow-200 text-black">Note Box</div>
        <div className="h-60 w-60 flex justify-center items-center rounded-bl-4xl border mx-4 bg-yellow-200 text-black">Note Box</div>
      </div>
    </div>
  );
}

export default page;
