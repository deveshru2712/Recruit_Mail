"use client";
import React from "react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Page = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <Card className="w-full max-w-sm bg-transparent border border-slate-100">
        <CardHeader>
          <CardTitle className="bg-gradient-to-tr from-teal-400 via-teal-500 to-teal-700 bg-clip-text text-transparent text-2xl font-bold">
            Recruit Mail
          </CardTitle>
          <CardDescription className="text-slate-300 text-base font-semibold">
            Streamline your job search with AI-powered personalized email
            automation for recruiters
          </CardDescription>
        </CardHeader>
        <CardDescription className="flex items-center justify-center">
          <Button className="bg-gradient-to-r from-slate-700/90 via-teal-700/70 to-teal-500/90 font-semibold cursor-pointer">
            Continue with Google
          </Button>
        </CardDescription>
      </Card>
    </div>
  );
};

export default Page;
