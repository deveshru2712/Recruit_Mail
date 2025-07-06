interface PricingCardProps {
  title: string;
  price: string;
  period: string;
  description: string;
  features: Feature[];
  buttonText: string;
  isPopular?: boolean;
  buttonVariant?: "default" | "secondary";
}

interface Feature {
  text: string;
  icon?: React.ReactNode;
}
