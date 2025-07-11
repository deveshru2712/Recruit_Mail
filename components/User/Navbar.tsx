"use client";
import { Bell, Search, Settings, User } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="w-full fixed top-0 left-0 right-0 z-50 py-6 px-4 md:px-14 lg:px-6">
      <nav className="md:flex max-w-7xl mx-auto hidden items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href={"/"} className="text-2xl font-bold text-slate-100/90">
            RecruitMail
          </Link>
          <div className="border border-slate-50/20 gap-2 py-1 px-2 rounded-lg flex flex-1 items-center focus-within:border-teal-500 transition-colors duration-200 md:w-56 lg:w-96 ">
            <Search className="text-slate-300" size={18} />
            <input
              type="text"
              placeholder="Search..."
              className="text-slate-300 text-base focus:outline-none bg-transparent w-full"
            />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button className="p-2 rounded-lg border border-slate-50/20 cursor-pointer">
            <Bell className="text-slate-300" size={18} />
          </button>

          <button className="p-2 rounded-lg border border-slate-50/20 cursor-pointer">
            <Settings className="text-slate-300" size={18} />
          </button>

          <div className="flex items-center gap-2 px-1 py-0.5">
            <div className="p-2 rounded-3xl bg-white flex justify-center items-center">
              <User size={24} />
            </div>
            <div className="flex flex-col items-start justify-center">
              <h2 className="text-slate-100">username</h2>
              <span className="text-xs text-muted">user@mail.com</span>
            </div>
          </div>
        </div>
      </nav>

      {/* mobile version */}

      <nav className="flex flex-col space-y-3 md:hidden">
        <Link href={"/"} className="text-2xl font-bold text-slate-100/90">
          RecruitMail
        </Link>

        <div className="border border-slate-50/20 gap-2 py-3 px-4 rounded-lg flex items-center focus-within:border-teal-500 transition-colors duration-200">
          <Search className="text-slate-300" size={18} />
          <input
            type="text"
            placeholder="Search..."
            className="text-slate-300 text-base focus:outline-none bg-transparent w-full"
          />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
