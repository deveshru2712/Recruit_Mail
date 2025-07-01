import Link from "next/link";
import React from "react";
import { Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const navLinks = [
    { name: "Features", href: "/features" },
    { name: "Pricing", href: "/pricing" },
    { name: "Documentation", href: "/docs" },
    { name: "Contact", href: "/contact" },
  ];

  const socialLinks = [
    { icon: <Github size={18} />, href: "https://github.com/deveshru2712" },
    {
      icon: <Linkedin size={18} />,
      href: "https://www.linkedin.com/in/devesh-chandra-ru2712/",
    },
    { icon: <Twitter size={18} />, href: "https://x.com/deveshru2712" },
  ];

  return (
    <footer className="border-t border-gray-800 bg-gray-950/50 px-6 py-12 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <h1 className="text-transparent bg-gradient-to-r from-teal-500/90 via-teal-400 to-teal-300 bg-clip-text text-2xl font-bold">
                Recruit Mail
              </h1>
            </Link>
            <p className="text-sm text-gray-400">
              Automate and personalize your recruitment outreach at scale.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-teal-400 transition-colors"
                >
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Navigation Columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-3">
            <div>
              <h3 className="text-sm font-semibold text-gray-200 mb-4">
                Product
              </h3>
              <ul className="space-y-3">
                {navLinks.slice(0, 2).map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-teal-400 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-200 mb-4">
                Resources
              </h3>
              <ul className="space-y-3">
                {navLinks.slice(2).map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-teal-400 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-200 mb-4">
                Legal
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/privacy"
                    className="text-sm text-gray-400 hover:text-teal-400 transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms"
                    className="text-sm text-gray-400 hover:text-teal-400 transition-colors"
                  >
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800/50">
          <p className="text-xs text-gray-500 text-center">
            © {new Date().getFullYear()} Recruit Mail. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
