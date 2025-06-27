import React from "react";
import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export const metadata: Metadata = {
  title: "RecruiterReach - Automated Personalized Email Outreach",
  description:
    "Streamline your job search with AI-powered personalized email automation for recruiters. Send tailored, professional outreach emails that get results.",
  keywords: [
    "automated email",
    "recruiter outreach",
    "personalized emails",
    "job search automation",
    "recruitment emails",
    "AI email writing",
    "professional networking",
    "career development",
  ],
};

const HeroSection = () => {
  return (
    <section className="px-6 py-12 md:px-12 md:py-24 lg:py-32">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-100 mb-6 leading-tight">
          <span className="bg-gradient-to-r from-teal-400 to-teal-600 text-transparent bg-clip-text">
            Automated
          </span>{" "}
          Personalized{" "}
          <span className="bg-gradient-to-r from-teal-400 to-teal-600 text-transparent bg-clip-text">
            Email Outreach
          </span>{" "}
          for{" "}
          <span className="bg-gradient-to-r from-teal-400 to-teal-600 text-transparent bg-clip-text">
            Recruiters
          </span>
        </h1>
        <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-3xl mx-auto">
          Streamline your job search with{" "}
          <span className="bg-gradient-to-r from-teal-400 to-teal-600 text-transparent bg-clip-text font-medium">
            AI-powered
          </span>{" "}
          email automation that helps you send{" "}
          <span className="bg-gradient-to-r from-teal-400 to-teal-600 text-transparent bg-clip-text font-medium">
            tailored, professional
          </span>{" "}
          outreach emails that actually get responses.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
          <Button className="bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-400 hover:to-teal-500 text-white px-8 py-4 text-lg w-full sm:w-auto transition-all duration-300 hover:scale-105 transform shadow-lg hover:shadow-teal-500/20">
            Get Started
          </Button>
        </div>
        <div className="w-full flex items-center justify-center mt-12 md:mt-20 px-4">
          <div className="relative w-full max-w-4xl rounded-2xl overflow-hidden shadow-xl">
            <div className="aspect-w-16 aspect-h-9 w-full">
              <Image
                src="/recruit.jpg"
                alt="application_showcase"
                width={1200}
                height={675}
                className="object-contain w-full h-full"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
