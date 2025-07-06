import React from "react";
import Link from "next/link";
import PricingCard from "./PricingCard";
import { Award, FileText, Settings, TrendingUp, Users } from "lucide-react";

export default function PricingSection() {
  const basicFeatures = [
    {
      text: "Customized Sales Strategy",
      icon: <Settings className="w-5 h-5 text-purple-400" />,
    },
    {
      text: "Lead Generation Framework",
      icon: <Users className="w-5 h-5 text-purple-400" />,
    },
    {
      text: "Sales Process Audit",
      icon: <FileText className="w-5 h-5 text-purple-400" />,
    },
    {
      text: "Monthly Performance Review",
      icon: <TrendingUp className="w-5 h-5 text-purple-400" />,
    },
    {
      text: "CRM Integration & Automation",
      icon: <Settings className="w-5 h-5 text-purple-400" />,
    },
    {
      text: "Intensive Sales Training Program",
      icon: <Award className="w-5 h-5 text-purple-400" />,
    },
  ];

  const professionalFeatures = [
    {
      text: "Customized Sales Strategy",
      icon: <Settings className="w-5 h-5 text-purple-400" />,
    },
    {
      text: "Lead Generation Framework",
      icon: <Users className="w-5 h-5 text-purple-400" />,
    },
    {
      text: "Sales Process Audit",
      icon: <FileText className="w-5 h-5 text-purple-400" />,
    },
    {
      text: "Monthly Performance Review",
      icon: <TrendingUp className="w-5 h-5 text-purple-400" />,
    },
    {
      text: "CRM Integration & Automation",
      icon: <Settings className="w-5 h-5 text-purple-400" />,
    },
    {
      text: "Intensive Sales Training Program",
      icon: <Award className="w-5 h-5 text-purple-400" />,
    },
  ];

  return (
    <section id="pricing" className="px-6 py-16 md:py-24 ">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-100 mb-4">
          <span className="">Simple</span>{" "}
          <span className="bg-gradient-to-r from-teal-400 to-teal-600 text-transparent bg-clip-text">
            Pricing
          </span>
          ,{" "}
          <span>
            Serious{" "}
            <span className="bg-gradient-to-r from-teal-400 to-teal-600 text-transparent bg-clip-text">
              Results
            </span>
          </span>
        </h2>
        <p className="text-lg text-slate-300 mb-12 max-w-3xl mx-auto">
          Choose the plan that fits your job search intensity.{" "}
          <span className="bg-gradient-to-r from-teal-400 to-teal-600 text-transparent bg-clip-text font-medium">
            Cancel anytime.
          </span>
        </p>

        {/* Pricing Card  */}

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <PricingCard
            title="Free"
            price="$0"
            period="/month"
            description="Wana start looking for jobs?"
            features={basicFeatures}
            buttonText="Get Started Now"
            buttonVariant="secondary"
          />

          <PricingCard
            title="Basic"
            price="$9.99"
            period="/month"
            description="Wana connect to various with various founder."
            features={professionalFeatures}
            buttonText="Get Started Now"
            isPopular={true}
          />

          <PricingCard
            title="Pro"
            price="$19.99"
            period="/month"
            description="Getting Serious? Let's get you a job."
            features={professionalFeatures}
            buttonText="Get Started Now"
            isPopular={false}
          />
        </div>

        <p className="text-slate-400 mt-12 text-sm">
          Need something custom?{" "}
          <Link
            href="https://x.com/deveshru2712"
            className="text-teal-400 hover:underline"
          >
            Contact us
          </Link>{" "}
          for enterprise solutions.
        </p>
      </div>
    </section>
  );
}
