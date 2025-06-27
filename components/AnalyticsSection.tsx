import React from "react";
import { Card } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

const AnalyticsSection = () => {
  return (
    <section className="px-6 py-16 md:px-12 md:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-teal-400">
            Data-Driven Outreach Performance
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Measure what matters with actionable insights
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-4">
          {/* Key Metrics */}
          <div className="lg:col-span-1 space-y-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-100">
                Optimize Your Strategy
              </h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start">
                  <span className="mr-2 text-teal-400">✓</span>
                  <span>Track open & response rates in real-time</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-teal-400">✓</span>
                  <span>Identify best-performing templates</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-teal-400">✓</span>
                  <span>Discover optimal sending times</span>
                </li>
              </ul>
            </div>

            <div className="p-4 bg-gray-800 rounded-lg border border-gray-700">
              <h4 className="font-medium text-teal-400 mb-2">Pro Tip</h4>
              <p className="text-sm text-gray-300">
                Emails sent between 10-11 AM have 27% higher open rates based on
                your history.
              </p>
            </div>
          </div>

          {/* Graph Card */}
          <div className="lg:col-span-3">
            <Card className="h-full p-6 bg-slate-100 border-gray-700">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-semibold text-gray-800">
                  Outreach Performance
                </h3>

                <DropdownMenu>
                  <DropdownMenuTrigger className="flex items-center gap-2 text-sm px-3 py-1.5 font-semibold rounded-md border border-gray-600 hover:bg-slate-200/80 transition-colors text-gray-800">
                    Last 7 days
                    <ChevronDown className="w-4 h-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-slate-100 border-gray-700 text-gray-800 font-semibold">
                    <DropdownMenuLabel className="text-gray-400 font-semibold">
                      Time Range
                    </DropdownMenuLabel>
                    <DropdownMenuItem className="focus:bg-gray-300/60 cursor-pointer font-semibold">
                      Last 7 days
                    </DropdownMenuItem>
                    <DropdownMenuItem className="focus:bg-gray-300/60 cursor-pointer font-semibold">
                      Last 30 days
                    </DropdownMenuItem>
                    <DropdownMenuItem className="focus:bg-gray-300/60 cursor-pointer font-semibold">
                      Last quarter
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              {/* Graph Placeholder */}
              <div className="bg-slate-100 rounded-lg h-80 flex items-center justify-center border ">
                <p className="text-gray-500">[Chart Component]</p>
              </div>

              <div className="mt-4 flex justify-center space-x-6 text-sm font-semibold">
                <span className="flex items-center text-slate-700">
                  <span className="w-3 h-3 bg-teal-500 rounded-full mr-2"></span>
                  Open Rate
                </span>
                <span className="flex items-center text-slate-700">
                  <span className="w-3 h-3 bg-blue-400 rounded-full mr-2"></span>
                  Reply Rate
                </span>
                <span className="flex items-center text-slate-700">
                  <span className="w-3 h-3 bg-purple-400 rounded-full mr-2"></span>
                  Conversion
                </span>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnalyticsSection;
