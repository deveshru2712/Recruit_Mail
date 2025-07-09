"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleJoinNow = () => {
    setIsOpen(false);
    router.push("/sign-in");
  };

  return (
    <div className="w-full fixed top-0 z-50 backdrop-blur-md px-6 py-6 md:px-14 md:py-6">
      <nav className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-slate-100/90">
            Recruit Mail
          </Link>

          <div className="hidden md:flex items-center gap-10 font-semibold">
            <a
              href="#features"
              className="text-lg text-slate-400 hover:text-slate-200 duration-300 transition-colors"
            >
              Features
            </a>
            <a
              href="#performance"
              className="text-lg text-slate-400 hover:text-slate-200 duration-300 transition-colors"
            >
              Performance
            </a>
            <a
              href="#integrations"
              className="text-lg text-slate-400 hover:text-slate-200 duration-300 transition-colors"
            >
              Integration
            </a>
            <a
              href="#pricing"
              className="text-lg text-slate-400 hover:text-slate-200 duration-300 transition-colors"
            >
              Pricing
            </a>
            <div>
              <Button
                onClick={handleJoinNow}
                className="bg-teal-600 hover:bg-teal-500 text-white cursor-pointer transition-colors duration-300"
              >
                Join Now
              </Button>
            </div>
          </div>

          <button
            className="md:hidden text-slate-400 hover:text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X size={24} className="transition-all duration-300" />
            ) : (
              <Menu size={24} className="transition-all duration-300" />
            )}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden overflow-hidden">
            <div className="space-y-6 pt-6 pb-6">
              <a
                href="#features"
                className="block text-lg text-slate-400 hover:text-slate-200 duration-300 transition-colors py-2"
              >
                Features
              </a>
              <a
                href="#integrations"
                className="block text-lg text-slate-400 hover:text-slate-200 duration-300 transition-colors py-2"
              >
                Integration
              </a>
              <a
                href="#pricing"
                className="block text-lg text-slate-400 hover:text-slate-200 duration-300 transition-colors py-2"
              >
                Pricing
              </a>
              <div>
                <Button
                  className="w-full bg-teal-600 hover:bg-teal-500 text-white cursor-pointer transition-colors duration-300 py-4 text-lg"
                  onClick={handleJoinNow}
                >
                  Join Now
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}
