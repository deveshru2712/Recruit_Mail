import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";

const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  icons: {
    icon: [
      {
        url: "/mail.png",
        type: "image/png",
      },
    ],
  },
  title: "RecruitMail",
  description: "Send Personalized email to Recruiters with ease.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={` ${bricolageGrotesque.className} bg-black/95 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
