import Link from "next/link";
import React from "react";
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
        <div className="flex flex-col items-start justify-start sm:pr-6 relative">
          <h1 className="font-bold text-2xl">Hi, I am {p.name}</h1>
          <p className="font-thin dark:text-zinc-300 text-md">
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
          <p className="mt-3 font-thin dark:text-zinc-300 text-md">
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
