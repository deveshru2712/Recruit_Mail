import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import Overlay from "@/components/Overlay";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RecruiterReach - Automated Personalized Email Outreach",
  description:
    "Streamline your job search with AI-powered personalized email automation for recruiters. Send tailored, professional outreach emails that get results.",
  keywords: [
    "automated email",
    "recruiter outreach",
    "personalized emails",
    "job search automation",
    "recruitment emails",
    "AI email writing",
    "professional networking",
    "career development",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${bricolage.variable} antialiased overflow-x-hidden `}>
        <div className="h-screen w-screen fixed pointer-events-none -z-50">
          <Overlay />
        </div>

        <div className="relative z-10 min-h-screen">{children}</div>
      </body>
    </html>
  );
}
