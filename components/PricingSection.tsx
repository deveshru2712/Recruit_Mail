import React from "react";
import Link from "next/link";
import PricingCard from "./PricingCard";
import {
  FileText,
  TrendingUp,
  Users,
  Mail,
  BarChart2,
  Calendar,
  MessageSquare,
  Zap,
  PackageCheck,
  PanelsTopLeft,
} from "lucide-react";

export default function PricingSection() {
  const recruiterReachFeatures = [
    {
      text: "AI-Powered Email Personalization",
      icon: <Mail className="w-5 h-5 text-purple-400" />,
    },
    {
      text: "Recruiter Database Integration",
      icon: <Users className="w-5 h-5 text-purple-400" />,
    },
    {
      text: "Smart Email Scheduling",
      icon: <Calendar className="w-5 h-5 text-purple-400" />,
    },
    {
      text: "Dynamic Email Templates",
      icon: <FileText className="w-5 h-5 text-purple-400" />,
    },
  ];

  const professionalFeatures = [
    {
      text: "Everything inside of the free plan",
      icon: <PackageCheck className="w-5 h-5 text-purple-400" />,
    },
    {
      text: "CRM-Like Tracking",
      icon: <PanelsTopLeft className="w-5 h-5 text-purple-400" />,
    },
    {
      text: "AI Reply Suggestions",
      icon: <MessageSquare className="w-5 h-5 text-purple-400" />,
    },
    {
      text: "Job Description Analyzer",
      icon: <Zap className="w-5 h-5 text-purple-400" />,
    },
  ];

  const premiumFeatures = [
    {
      text: "Everything inside of the pro plan",
      icon: <PackageCheck className="w-5 h-5 text-purple-400" />,
    },
    {
      text: "Multi-Channel Outreach",
      icon: <TrendingUp className="w-5 h-5 text-purple-400" />,
    },
    {
      text: "Meeting Scheduler",
      icon: <Calendar className="w-5 h-5 text-purple-400" />,
    },
    {
      text: "Advanced Analytics Dashboard",
      icon: <BarChart2 className="w-5 h-5 text-purple-400" />,
    },
  ];

  const getLimitedFeatures = (features: Feature[]) => {
    const limitedFeatures = features.slice(0, 6);
    if (features.length > 6) {
      return [
        ...limitedFeatures,
        {
          text: `+ ${features.length - 6} more features`,
          icon: null,
          isMuted: true,
        },
      ];
    }
    return limitedFeatures;
  };

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
            description="Essential tools to begin your recruiter outreach journey"
            features={getLimitedFeatures(recruiterReachFeatures)}
            buttonText="Get Started Now"
            buttonVariant="secondary"
          />

          <PricingCard
            title="Pro"
            price="$9.99"
            period="/month"
            description="Advanced features for serious job seekers with tracking"
            features={getLimitedFeatures(professionalFeatures)}
            buttonText="Start 7-Day Free Trial"
            isPopular={true}
          />

          <PricingCard
            title="Premium"
            price="$19.99"
            period="/month"
            description="Complete suite with premium support and analytics"
            features={getLimitedFeatures(premiumFeatures)}
            buttonText="Get Premium Access"
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
