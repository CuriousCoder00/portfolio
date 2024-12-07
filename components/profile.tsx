import Link from "next/link";
import React from "react";
import Image from "next/image";
import { profileData as p } from "@/data/profile";

const Profile = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="flex items-center justify-end w-full my-3">
        <Link
          className="text-xs flex items-center gap-2 justify-center border p-1 rounded-xl px-5 dark:bg-black dark:hover:bg-slate-950 hover:bg-slate-100"
          href={"mailto:kapiljangid040@gmail.com"}
        >
          <span className="w-2 h-2 dark:bg-green-600 bg-green-800 rounded-full animate-pulse"></span>
          Contact Me
        </Link>
      </div>
      <div className="flex items-center justify-start gap-4">
        <div className="flex items-center justify-center ">
          <div className="mx-auto flex w-full max-w-lg items-center justify-center">
            <div className="relative z-10 flex w-full items-center overflow-hidden rounded-full border p-[3px]">
              <div className="animate-rotate absolute inset-0 h-full w-full rounded-full dark:bg-[conic-gradient(#5cdcff_20deg,transparent_120deg)] bg-[conic-gradient(#ff16b1_20deg,transparent_120deg)] transition-colors delay-200"></div>
              <div className="relative z-20 flex w-full rounded-full">
                <div className="flex items-center justify-center w-28 h-28 rounded-full overflow-hidden object-cover">
                  <Image
                    className="saturate-150 contrast-125"
                    src={p.image}
                    alt="pfp"
                    width={120}
                    height={120}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start sm:pr-6 relative">
          <h1 className="font-bold text-xl">Hi, I am {p.name}</h1>
          <p className="font-thin dark:text-zinc-300 text-sm">
            {p.roles.map((role, idx) => (
              <span key={idx}>
                <span className="font-bold text-sky-700 dark:text-sky-400">
                  {role}
                </span>
                {idx === p.roles.length - 1 ? "" : " and a "}
              </span>
            ))}
            , {p.description}
          </p>
          <p className="mt-3 font-thin dark:text-zinc-300 text-sm">
            {p.location}
          </p>
          <span
            className="absolute inset-0 animate-glow bg-gradient-to-r from-blue-500/60 to-pink-500/60 blur-2xl"
            aria-hidden="true"
          ></span>
        </div>
      </div>
    </div>
  );
};

export default Profile;
