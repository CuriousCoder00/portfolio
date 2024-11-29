import { Img } from "@/assets";
import Link from "next/link";
import React from "react";

const Profile = () => {
  return (
    <div className="flex flex-col p-2 w-full">
      <div className="flex items-center justify-end w-full">
        <Link href={"/"}>Available now</Link>
      </div>
      <div className="flex items-center justify-between">
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
      </div>
    </div>
  );
};

export default Profile;
