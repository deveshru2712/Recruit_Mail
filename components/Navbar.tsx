"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { redirect } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full px-6 py-6 md:px-14 md:py-8">
      <nav className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between">
          <Link href={"/"} className="text-2xl font-bold text-slate-100/90">
            Recruit Mail
          </Link>

          <div className="hidden md:flex items-center gap-10 font-semibold">
            <Link
              href={"/features"}
              className="text-lg text-slate-400 hover:text-slate-200 duration-300 transition-colors"
            >
              Features
            </Link>
            <Link
              href={"/integrations"}
              className="text-lg text-slate-400 hover:text-slate-200 duration-300 transition-colors"
            >
              Integration
            </Link>
            <Link
              href={"/pricing"}
              className="text-lg text-slate-400 hover:text-slate-200 duration-300 transition-colors"
            >
              Pricing
            </Link>
            <Button
              onClick={() => redirect("/sign-in")}
              className="bg-teal-600 hover:bg-teal-500 text-white cursor-pointer transition-colors duration-300"
            >
              Join Now
            </Button>
          </div>

          <button
            className="md:hidden text-slate-400 hover:text-white focus:outline-none transition-transform duration-300 hover:scale-110"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X size={24} className="transition-all duration-300 rotate-180" />
            ) : (
              <Menu size={24} className="transition-all duration-300" />
            )}
          </button>
        </div>

        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isOpen ? "max-h-96 mt-6 pb-6" : "max-h-0"
          }`}
        >
          <div className="space-y-6">
            <Link
              href={"/features"}
              className="block text-lg text-slate-400 hover:text-slate-200 duration-300 transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Features
            </Link>
            <Link
              href={"/integrations"}
              className="block text-lg text-slate-400 hover:text-slate-200 duration-300 transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Integration
            </Link>
            <Link
              href={"/pricing"}
              className="block text-lg text-slate-400 hover:text-slate-200 duration-300 transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Pricing
            </Link>
            <Button
              className="w-full bg-teal-600 hover:bg-teal-500 text-white cursor-pointer transition-colors duration-300 py-4 text-lg"
              onClick={() => setIsOpen(false)}
            >
              Join Now
            </Button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
