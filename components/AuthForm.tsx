"use client";
import { signIn } from "next-auth/react";
import Image from "next/image";
import { Cover } from "./ui/cover";
import { SparklesCore } from "./ui/sparkles";

const AuthForm = () => {
  const handleGoogleSignIn = () => {
    signIn("google", { callbackUrl: "/dashboard" });
  };

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

      <div className="relative flex flex-col items-center z-10">
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
            className="animate-float cursor-pointer"
          />
        </div>

        {/* Main Headline */}
        <div className="my-5 text-center">
          <Cover>
            <span className="text-2xl font-bold cursor-pointer bg-gradient-to-r  from-amber-300 to-orange-500 bg-clip-text text-transparent">
              Supercharge Your Job Search
            </span>
          </Cover>
          <p className="text-gray-300 mt-3 text-sm max-w-md">
            AI-crafted emails that make recruiters{" "}
            <span className="font-semibold text-white">excited</span> to contact
            you
          </p>
        </div>

        <button
          onClick={handleGoogleSignIn}
          className="flex items-center justify-center gap-3 cursor-pointer w-full max-w-xs px-6 py-3 bg-white text-gray-800 rounded-lg font-medium hover:bg-gray-100 transition-colors border border-gray-300"
        >
          <Image src={"/google.png"} alt="google" height={25} width={25} />
          Continue with Google
        </button>

        {/* Terms Notice */}
        <p className="text-xs text-gray-500 mt-6 text-center max-w-xs">
          By continuing, you agree to our Terms of Service and Privacy Policy
        </p>
      </div>
    </div>
  );
};

export default AuthForm;
