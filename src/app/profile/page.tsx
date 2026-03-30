"use client";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useContext, useEffect, useRef, useState } from "react";
import { FaPencilAlt } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { motion } from "framer-motion";
import { FcOpenedFolder } from "react-icons/fc";
import axios from "axios";
import { userDataContext } from "@/context/UserContext";

function Page() {
  const { update } = useSession();
  const data = useContext(userDataContext);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const handleEditDetails = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("name", userName);
      if (backendImage) {
        formData.append("file", backendImage);
      }
      const result = await axios.post("/api/edit", formData);

      await update({
        name: result.data.name,
        image: result.data.image,
      });
      setLoading(false);
      console.log(result);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  const handleSignOut = async () => {
    setLoading(true);
    try {
      await signOut({ callbackUrl: "/login" });
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };
  const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length == 0) return;
    const file = files[0];
    setBackendImage(file);
    setFrontendImage(URL.createObjectURL(file));
  };

  const [editProfileModal, setEditProfileModal] = useState<Boolean>(false);
  const [userName, setUserName] = useState<string>("");
  const [frontendImage, setFrontendImage] = useState<string>("");
  const [backendImage, setBackendImage] = useState<File>();
  const imageInput = useRef<HTMLInputElement>(null);
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get("/api/user");
        setUserName(res.data.name);
        setFrontendImage(res.data.image);
      } catch (error) {
        console.log(error);
      }
    };

    if (data) {
      // fallback (instant UI)
      setUserName(data.user?.name as string);
      setFrontendImage(data.user?.image as string);
    }

    fetchUser(); // overwrite with DB (latest)
  }, [data]);
  return (
    <div className="text-white relative min-h-screen bg-linear-to-br from-red-950 via-black to-red-900 flex justify-center items-center text-2xl">
      {editProfileModal && (
        <>
          <div
            className="min-h-screen bg-black/70 z-40 w-full absolute flex justify-center items-center"
            onClick={() => setEditProfileModal(false)}
          ></div>
          <motion.form
            onClick={(e) => e.stopPropagation()}
            onSubmit={handleEditDetails}
            initial={{ y: -200 }}
            animate={{ y: 0 }}
            transition={{ duration: 2.5 }}
            className="flex w-[60%] rounded-2xl justify-around items-center border p-10 bg-linear-to-br from-pink-950/50 via-black/90 absolute border-dashed z-50"
          >
            <div
              className="absolute border top-2 px-4 bg-yellow-700/20 cursor-pointer p-2 rounded-xl right-2"
              onClick={() => setEditProfileModal(false)}
            >
              X
            </div>
            <div className="relative w-[200px] h-[200px] border-b-8 border-t-4 p-2 rounded-full hover:border-blue-700">
              {data?.user?.image ? (
                <Image
                  src={frontendImage || "/default.png"}
                  fill
                  alt="user image"
                  className="rounded-full object-cover animate-bounce"
                />
              ) : (
                <div className="relative w-[180px] h-[200px] animate-bounce text-8xl flex justify-center items-center rounded-full">
                  <CgProfile />
                </div>
              )}
            </div>
            <div className="w-70 bg-linear-to-tl from-red-950 via-black/30 rounded-r-4xl to-red-950/50 h-100 border text-[60%] flex justify-start pt-20 flex-col items-center space-y-7">
              <div className="flex justify-center items-center">
                Name:{" "}
                <input
                  type="text"
                  className="mx-4 px-6 p-2 border text-[70%] rounded-md bg-gray-900/70"
                  value={userName as string}
                  onChange={(e) => setUserName(e.target.value)}
                />{" "}
              </div>
              <div className="flex justify-center items-center">
                <input
                  type="file"
                  hidden
                  accept="image/*"
                  ref={imageInput}
                  onChange={handleImage}
                />
                Image Upload:{" "}
                <div
                  className="mx-4 underline flex text-[70%] border px-5 rounded-4xl justify-center cursor-pointer items-center hover:scale-105 duration-500"
                  onClick={() => imageInput.current?.click()}
                >
                  file-upload <FcOpenedFolder className="mx-1 text-xl" />
                </div>
              </div>
              <button
                type="submit"
                className="w-[90%] border p-2 flex justify-center items-center bg-blue-950/50 duration-500 hover:scale-90 cursor-pointer rounded-ee-2xl rounded-tl-2xl"
              >
                {loading ? "Saving..." : "Save"}
              </button>
              <div
                className="w-[80%] h-32 border overflow-hidden bg-center bg-cover rounded-3xl"
                style={{ backgroundImage: "url('/background2.jpg')" }}
              ></div>
            </div>
          </motion.form>
        </>
      )}

      <div className="border p-10 px-28 rounded-2xl flex flex-col justify-center items-center space-y-2 relative">
        {data?.user?.image ? (
          <div className="relative w-[100px] h-[100px] flex justify-center items-center border-4 rounded-full">
            <Image
              src={frontendImage}
              fill
              alt="user image"
              className="rounded-full"
            />
          </div>
        ) : (
          <div className="relative w-[100px] h-[100px] text-8xl border-4 flex justify-center items-center rounded-full">
            <CgProfile />
          </div>
        )}
        <div>Welcome, {data?.user?.name ? data.user.name : "User"}!</div>
        <div
          className="absolute border top-0 rounded-bl-2xl text-[60%] p-2 right-0 border-r-0 bg-linear-to-br from-red-700 to-orange-800 via-black cursor-pointer transition-all rounded-se-2xl transform duration-300 ease-in-out animate-pulse tracking-wider px-4 justify-center items-center flex hover:scale-105"
          onClick={() => setEditProfileModal(true)}
        >
          Edit Profile <FaPencilAlt className="mx-1 text-[80%]" />
        </div>
        <div
          className="absolute border top-0 rounded-tl-2xl rounded-br-2xl text-[60%] p-2 left-0 border-r-0 bg-linear-to-tl from-purple-950 to-orange-800 cursor-pointer transition-all transform duration-300 ease-in-out animate-pulse tracking-wider px-4 hover:scale-105"
          onClick={handleSignOut}
        >
          Sign out
        </div>
      </div>
    </div>
  );
}

export default Page;
