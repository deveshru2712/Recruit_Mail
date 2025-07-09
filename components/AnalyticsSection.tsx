import React from "react";
import { Card } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { BadgeQuestionMark, Check, ChevronDown } from "lucide-react";
import { AnalyticsFeature } from "@/constant";
import Overlay_graph from "./Overlay_graph";
import Charts from "./Charts";

export default function AnalyticsSection() {
  return (
    <section id="performance" className="px-4 py-6 sm:px-6 relative md:py-24">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-0 left-1/2 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] -translate-x-1/2 -translate-y-1/2 bg-teal-500/10 rounded-full blur-[75px] sm:blur-[100px]" />
      </div>

      <div className="mx-auto w-full max-w-full lg:max-w-7xl">
        {/* Section Header */}
        <div className="mb-6 sm:mb-8 text-center px-2">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-teal-600">
            Data-Driven Outreach Performance
          </h2>
          <p className="mt-2 sm:mt-3 text-sm sm:text-base text-gray-300 max-w-2xl mx-auto">
            Measure what matters with actionable insights and real-time
            analytics
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 md:gap-6 w-full">
          {/* Left sidebar - becomes top content on mobile */}
          <div className="lg:col-span-1 space-y-4 w-full">
            <div className="w-full space-y-3 p-4 bg-gray-900/50 rounded-xl border border-gray-800 backdrop-blur-sm">
              <h3 className="text-base sm:text-lg font-semibold text-white">
                Optimize Your Strategy
              </h3>
              <ul className="space-y-2">
                {AnalyticsFeature.map((item, index) => (
                  <li key={index} className="flex items-start group">
                    <span className="flex-shrink-0 mt-0.5 mr-2 text-teal-400 opacity-90 group-hover:opacity-100 transition-opacity">
                      <Check className="text-teal-400" size={14} />
                    </span>
                    <span className="text-xs sm:text-sm text-gray-300 group-hover:text-white transition-colors">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="w-full p-3 bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl border border-gray-700/50 hover:border-teal-400/30 transition-colors duration-300 group">
              <div className="flex items-start">
                <div className="flex-shrink-0 p-1.5 bg-teal-500/10 rounded-lg mr-3 group-hover:bg-teal-500/20 transition-colors">
                  <BadgeQuestionMark className="text-teal-400" size={14} />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-medium text-teal-400 mb-1">
                    Pro Tip
                  </h4>
                  <p className="text-xs text-gray-300 group-hover:text-gray-100 transition-colors">
                    Emails sent between 10-11 AM have 27% higher open rates
                    based on your history. Try scheduling more outreach during
                    this window.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Main chart area - becomes bottom content on mobile */}
          <div className="lg:col-span-3 w-full">
            <Card className="w-full p-4 bg-gray-900/50 border border-gray-800 backdrop-blur-sm hover:shadow-[0_0_30px_-5px_rgba(45,212,191,0.1)] transition-shadow">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-2 w-full">
                <div className="w-full sm:w-auto">
                  <h3 className="text-base sm:text-lg font-semibold text-white">
                    Outreach Performance
                  </h3>
                  <p className="text-xs text-gray-400 mt-0.5">
                    Track your campaign effectiveness over time
                  </p>
                </div>

                <div className="w-full sm:w-auto mt-2 sm:mt-0">
                  <DropdownMenu>
                    <DropdownMenuTrigger className="w-full sm:w-auto flex items-center justify-between gap-2 text-xs px-3 py-1.5 font-medium rounded-lg border border-gray-700 bg-gray-800 hover:bg-gray-700/80 hover:border-gray-600 transition-colors text-gray-200">
                      Last 7 days
                      <ChevronDown className="w-3 h-3 text-gray-400" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-full min-w-[160px] bg-gray-800 border border-gray-700 text-gray-200 font-medium py-1 rounded-lg shadow-xl">
                      <DropdownMenuLabel className="px-2 py-1 text-xs text-gray-400 font-medium">
                        Time Range
                      </DropdownMenuLabel>
                      <DropdownMenuItem className="px-2 py-1 text-xs focus:bg-gray-700/50 cursor-pointer rounded mx-1">
                        Last 7 days
                      </DropdownMenuItem>
                      <DropdownMenuItem className="px-2 py-1 text-xs focus:bg-gray-700/50 cursor-pointer rounded mx-1">
                        Last 30 days
                      </DropdownMenuItem>
                      <DropdownMenuItem className="px-2 py-1 text-xs focus:bg-gray-700/50 cursor-pointer rounded mx-1">
                        Last quarter
                      </DropdownMenuItem>
                      <div className="border-t border-gray-700/50 my-1" />
                      <DropdownMenuItem className="px-2 py-1 text-xs focus:bg-gray-700/50 cursor-pointer rounded mx-1">
                        Custom range...
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>

              <div className="w-full bg-gray-800/50 rounded-xl h-[240px] sm:h-[300px] md:h-[450px] flex items-center justify-center border border-gray-700/50 relative overflow-hidden">
                <div className="absolute inset-0">
                  <Overlay_graph />
                </div>
                <div className="w-full h-full px-2 sm:px-4 py-2">
                  <Charts />
                </div>
              </div>

              <div className="mt-3 flex flex-wrap justify-center gap-2 text-xs font-medium">
                {[
                  { color: "bg-teal-500", text: "Open Rate" },
                  { color: "bg-blue-400", text: "Reply Rate" },
                  { color: "bg-purple-400", text: "Conversion" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center px-2 py-1 rounded-full bg-gray-800/50 border border-gray-700/50 hover:bg-gray-700/30 transition-colors"
                  >
                    <span
                      className={`w-2 h-2 ${item.color} rounded-full mr-1.5`}
                    ></span>
                    <span className="text-gray-300">{item.text}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
