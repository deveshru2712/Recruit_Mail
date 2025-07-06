import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { recruiterReachFeatures } from "@/constant";

export default function FeatureSection() {
  return (
    <section
      id="features"
      className="px-4 py-8 sm:px-6 lg:px-8 min-h-[calc(100vh-1px)] flex items-center bg-gradient-to-b from-transparent via-gray-900 to-transparent"
    >
      <div className="mx-auto max-w-7xl w-full">
        <div className="mb-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-teal-600">
            Powerful Features for Smarter Outreach
          </h2>
          <p className="mt-3 text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            Everything you need to automate and personalize recruiter outreach
            at scale
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {recruiterReachFeatures.map((feature) => (
            <Card
              key={feature.id}
              className="relative cursor-pointer group overflow-hidden border border-gray-800 bg-gray-900/50 hover:border-teal-400/30 transition-all duration-300 hover:shadow-[0_0_30px_-10px_rgba(45,212,191,0.3)] h-full"
            >
              {/* Animated gradient overlay */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 via-transparent to-teal-500/5"></div>
              </div>

              {/* Glow effect */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-teal-500/0 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="relative z-10 h-full flex flex-col">
                <CardHeader className="pb-2">
                  <div className="flex items-start gap-3">
                    <div className="flex items-center justify-center rounded-lg bg-gradient-to-br from-teal-600 to-teal-500 p-2 text-white shadow-lg shadow-teal-500/20">
                      <span className="text-base font-bold">
                        {feature.id.toString().padStart(2, "0")}
                      </span>
                    </div>
                    <CardTitle className="text-lg font-semibold text-white mt-0.5">
                      {feature.name}
                    </CardTitle>
                  </div>
                </CardHeader>

                <CardContent className="flex-1 pt-0">
                  <p className="text-sm text-gray-400">{feature.description}</p>
                  <div className="mt-4">
                    <span
                      className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-semibold ${
                        feature.category === "Core"
                          ? "bg-teal-900/70 text-teal-400 border border-teal-400/20"
                          : feature.category === "Advanced"
                          ? "bg-purple-900/70 text-purple-400 border border-purple-400/20"
                          : "bg-blue-900/70 text-blue-400 border border-blue-400/20"
                      }`}
                    >
                      {feature.category}
                    </span>
                  </div>
                </CardContent>
              </div>

              {/* Bottom accent */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-teal-500/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
