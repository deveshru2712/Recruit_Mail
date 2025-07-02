import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Overlay from "@/components/Overlay";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RecruiterMail - Automated Personalized Email Outreach",
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
      <body className={`${geist.variable} antialiased overflow-x-hidden `}>
        <div className="h-screen w-screen fixed pointer-events-none -z-50">
          <Overlay />
        </div>

        <div className="relative z-10 min-h-screen">{children}</div>
      </body>
    </html>
  );
}
