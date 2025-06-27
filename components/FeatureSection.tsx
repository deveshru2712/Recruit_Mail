import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { recruiterReachFeatures } from "@/constant";

const FeatureSection = () => {
  return (
    <section className="px-6 py-12 md:px-12 md:py-24 lg:py-32 bg-gray-50">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-teal-600">
            Powerful Features for Smarter Outreach
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Everything you need to automate and personalize recruiter outreach
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {recruiterReachFeatures.map((feature) => (
            <Card
              key={feature.id}
              className="relative cursor-pointer overflow-hidden transition-all border border-gray-200 bg-white hover:border-teal-300 hover:shadow-[0_0_20px_-5px_rgba(45,212,191,0.15)] group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-gray-50/50"></div>
              <div className="relative z-10">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center rounded-lg bg-gradient-to-br from-teal-100 to-teal-50 p-2 group-hover:from-teal-200 group-hover:to-teal-100 transition-all">
                      <span className="text-lg font-semibold text-teal-600">
                        {feature.id.toString().padStart(2, "0")}
                      </span>
                    </div>
                    <CardTitle className="text-lg font-semibold text-gray-800">
                      {feature.name}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{feature.description}</p>
                  <div className="mt-4">
                    <span
                      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${
                        feature.category === "Core"
                          ? "bg-teal-100 text-teal-800"
                          : feature.category === "Advanced"
                          ? "bg-purple-100 text-purple-800"
                          : "bg-blue-100 text-blue-800"
                      }`}
                    >
                      {feature.category}
                    </span>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
