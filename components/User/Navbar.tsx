"use client";
import { Search } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="w-full py-6 px-4 md:px-14 lg:px-6">
      <nav className="md:flex max-w-7xl mx-auto hidden items-center justify-between">
        <Link href={"/"} className="text-2xl font-bold text-slate-100/90">
          RecruitMail
        </Link>
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
}
