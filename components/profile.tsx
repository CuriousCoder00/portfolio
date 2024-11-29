import { Img } from "@/assets";
import Link from "next/link";
import React from "react";

const Profile = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="flex items-center justify-end w-full">
        <Link
          className="text-xs flex items-center gap-2 justify-center"
          href={"/"}
        >
          <span className="w-2 h-2 dark:bg-green-600 bg-green-800 rounded-full animate-pulse"></span>
          Available now
        </Link>
      </div>
      <div className="flex items-center justify-start gap-4">
        <div className="flex items-center justify-center ">
          <div className="mx-auto flex w-full max-w-lg items-center justify-center">
            <div className="relative z-10 flex w-full items-center overflow-hidden rounded-full border p-[3px]">
              <div className="animate-rotate absolute inset-0 h-full w-full rounded-full dark:bg-[conic-gradient(#5cdcff_20deg,transparent_120deg)] bg-[conic-gradient(#ff16b1_20deg,transparent_120deg)] transition-colors delay-200"></div>
              <div className="relative z-20 flex w-full rounded-full">
                <div className="flex items-center justify-center w-28 h-28 rounded-full overflow-hidden object-cover">
                  <Img />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start pr-6">
          <h1 className="font-bold text-xl">Hi, I am Kapil Kumar Jangid</h1>
          <p className="font-thin dark:text-zinc-300 text-sm">
            a full stack developer, specializing in UI design and creating
            engaging user experiences with a strong attention to details.
          </p>
          <p className="mt-3 font-thin dark:text-zinc-300 text-sm">
            Rajasthan, India
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
