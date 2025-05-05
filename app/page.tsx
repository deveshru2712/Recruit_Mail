import Navbar from "@/components/Navbar";
import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <>
      <Navbar />
      <div className="container max-w-6xl mx-auto">
        <section className="w-full px-4 my-36">
          <h1 className="text-center text-6xl font-bold text-slate-600/90 [text-shadow:_0_2px_4px_rgba(0,0,0,0.1)]">
            Send{" "}
            <span className="relative inline-block px-1">
              <span className="relative z-10">Personalized</span>
              <span className="absolute inset-0 top-0.5 h-[70px] -z-0 bg-blue-400/30 -skew-y-2 transform origin-left rounded-sm"></span>
            </span>{" "}
            email to Recruiters with{" "}
            <span className="relative inline-block px-1">
              <span className="relative z-10">ease.</span>
              <span className="absolute inset-0 top-0.5 h-[70px] -z-0 bg-purple-400/30 -skew-y-2 transform origin-left rounded-sm"></span>
            </span>
          </h1>
          <Image
            src={"/hero.jpg"}
            alt="hero"
            width={1920}
            height={300}
            className="w-full mt-12 object-cover rounded-md shadow-lg"
            priority
          />
        </section>
      </div>
    </>
  );
};

export default Page;
