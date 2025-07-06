import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";

export default function PricingCard({
  title,
  price,
  period,
  description,
  features,
  buttonText,
  isPopular = false,
  buttonVariant = "default",
}: PricingCardProps) {
  return (
    <div className="relative">
      {isPopular && (
        <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-teal-500 hover:bg-teal-600 text-white px-4 py-1 z-10">
          Popular
        </Badge>
      )}

      <Card
        className={`bg-transparent border-gray-800/50 backdrop-blur-sm transition-all duration-300 hover:border-teal-500/50 hover:shadow-2xl hover:shadow-teal-500/10 ${
          isPopular ? "ring-2 ring-teal-500" : ""
        }`}
      >
        <CardHeader className="text-center pb-4">
          <CardTitle className="text-2xl font-bold text-white mb-2">
            {title}
          </CardTitle>
          <CardDescription className="text-gray-400 text-sm mb-4">
            Starting from
          </CardDescription>
          <div className="flex items-baseline justify-center mb-4">
            <span className="text-4xl font-bold text-white">{price}</span>
            <span className="text-gray-400 ml-2">{period}</span>
          </div>
          <CardDescription className="text-gray-300 text-sm">
            {description}
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-4">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-5 h-5 mt-0.5">
                {feature.icon || <Check className="w-5 h-5 text-teal-500" />}
              </div>
              <span className="text-gray-300 text-sm leading-relaxed">
                {feature.text}
              </span>
            </div>
          ))}
        </CardContent>

        <CardFooter className="pt-4">
          <Button
            className={`w-full py-3 font-semibold transition-all duration-300 ${
              buttonVariant === "default"
                ? "bg-teal-500 hover:bg-teal-600 text-white"
                : "bg-gray-800/50 hover:bg-gray-700/50 text-white border border-gray-700 hover:border-teal-500 backdrop-blur-sm"
            }`}
          >
            {buttonText}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
