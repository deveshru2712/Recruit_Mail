"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { signInWithGoogle } from "@/lib/actions/auth.actions";

const Page = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center relative px-8 py-6">
      <div className="absolute inset-0 bg-gray-950/50 -z-50" />
      {/* Main Card */}
      <Card className="w-full max-w-md border border-teal-400/30 rounded-lg px-4 md:px-6 py-5 relative z-50 bg-gradient-to-br from-slate-950/60 to-teal-900/25 group overflow-visible">
        <div className="absolute -z-10 inset-0 rounded-lg bg-transparent group-hover:shadow-[0px_1px_20px_rgba(94,234,212,0.4)] transition-all duration-500" />

        <CardHeader className="pb-4 space-y-3">
          <CardTitle>
            <h1 className="text-3xl font-bold text-teal-400">Recruiter Mail</h1>
            <p className="text-slate-300 text-sm font-medium mt-1">
              Automated Personalized Email Outreach
            </p>
          </CardTitle>
          <CardDescription>
            <div className="space-y-3">
              <p className="text-neutral-200 text-base font-medium">
                Streamline your job search with AI-powered personalized email
                automation for recruiters. Send tailored, professional outreach
                emails that get results.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {[
                  "automated email",
                  "recruiter outreach",
                  "personalized emails",
                  "job search automation",
                  "AI email writing",
                ].map((keyword) => (
                  <span
                    key={keyword}
                    className="text-xs px-2 py-1 rounded-full bg-teal-900/40 text-teal-200 border border-teal-400/20"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
          </CardDescription>
        </CardHeader>

        <CardContent>
          <div className="space-y-4">
            <div className="text-sm text-neutral-300 space-y-2">
              <p className="flex items-center gap-2">
                <span className="text-teal-400">✓</span> Save 5+ hours per week
                on outreach
              </p>
              <p className="flex items-center gap-2">
                <span className="text-teal-400">✓</span> 3x higher response
                rates
              </p>
              <p className="flex items-center gap-2">
                <span className="text-teal-400">✓</span> AI-powered
                personalization
              </p>
            </div>

            <Button
              onClick={signInWithGoogle}
              className="cursor-pointer w-full flex items-center justify-center gap-3 px-6 py-5 rounded-lg border border-teal-400/20 bg-teal-500 hover:bg-teal-400 transition-colors"
            >
              <Image src="/google.png" alt="google" height={24} width={24} />
              <span className="font-semibold text-base">
                Continue with Google
              </span>
            </Button>

            <p className="text-xs text-center text-neutral-400 mt-2">
              Trusted by 5,000+ job seekers worldwide
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Page;
