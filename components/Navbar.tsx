import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full py-6 top-0 fixed z-50">
      <div className="rounded-full max-w-[800px] mx-auto px-2 py-1 bg-white/30 backdrop-blur-lg backdrop-filter border border-white/30 shadow-lg flex items-center justify-center">
        <div className="px-4 py-2 w-full flex justify-between items-center">
          <Link href={"/"} className="flex items-center gap-2 group">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              RecruitMail
            </h1>
            <Image
              src={"/mail.png"}
              alt="mail"
              height={32}
              width={32}
              className="group-hover:rotate-12 transition-all duration-300 ease-in-out"
            />
          </Link>

          <div className="flex items-center gap-4">
            <span className="text-lg font-medium text-slate-700/90 hover:text-slate-900 px-3 py-1 rounded-full hover:bg-white/30 transition-all duration-200 cursor-pointer">
              Features
            </span>
            <span className="text-lg font-medium text-slate-700/90 hover:text-slate-900 px-3 py-1 rounded-full hover:bg-white/30 transition-all duration-200 cursor-pointer">
              Testimonials
            </span>
            <span className="text-lg font-medium text-slate-700/90 hover:text-slate-900 px-3 py-1 rounded-full hover:bg-white/30 transition-all duration-200 cursor-pointer">
              Pricing
            </span>
            <span className="text-lg font-medium text-slate-700/90 hover:text-slate-900 px-3 py-1 rounded-full hover:bg-white/30 transition-all duration-200 cursor-pointer">
              Contact
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
