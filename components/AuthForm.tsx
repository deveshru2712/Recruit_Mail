import Image from "next/image";
import React from "react";
import { Cover } from "./ui/cover";
import { SparklesCore } from "./ui/sparkles";

interface AuthFormProps {
  type: "sign-in" | "sign-up";
}

const AuthForm = ({ type }: AuthFormProps) => {
  return (
    <div className="bg-gray-950 rounded-2xl lg:min-w-[556px] py-8 px-10 shadow-xl border border-gray-100/50 relative overflow-hidden">
      {/* Sparkles Background */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.5}
          maxSize={1.2}
          particleDensity={25}
          className="w-full h-full"
          particleColor="#FFFFFF60"
        />
      </div>

      <div className="relative flex flex-col gap-3 z-10">
        {/* App Logo/Title */}
        <div className="flex items-center gap-3 mb-1">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            RecruitMail
          </h1>
          <Image
            src="/mail.png"
            alt="Mail icon"
            width={48}
            height={48}
            className="animate-float"
          />
        </div>

        {/* Main Headline */}
        <div className="my-5">
          <Cover>
            <span className="text-2xl font-bold bg-gradient-to-r from-amber-300 to-orange-500 bg-clip-text text-transparent">
              Supercharge Your Job Search
            </span>
          </Cover>
          <p className="text-gray-300/90 mt-3 text-sm">
            AI-crafted emails that make recruiters{" "}
            <span className="font-semibold text-white">excited</span> to contact
            you
          </p>
        </div>

        {/* Context Text */}
        <p className="text-xs text-gray-500 mt-2">
          {type === "sign-in"
            ? "Welcome back! Ready to land your dream job?"
            : "Create your account and start getting responses today"}
        </p>
      </div>
    </div>
  );
};

export default AuthForm;
