"use client";
import { ChevronRight } from "lucide-react";
import { usePathname } from "next/navigation";
import React from "react";

export default function Mail() {
  enum Active {
    ALLMESSAGE = "allMessage",
    ALREADY_READ = "alreadyRead",
    UNREAD = "unread",
  }

  const pathname = usePathname();

  const getActiveTab = (): Active => {
    if (pathname.includes(Active.ALREADY_READ)) return Active.ALREADY_READ;
    if (pathname.includes(Active.UNREAD)) return Active.UNREAD;
    // default
    return Active.ALLMESSAGE;
  };

  const activeTab = getActiveTab();

  const getDisplayText = (tab: Active): string => {
    switch (tab) {
      case Active.ALLMESSAGE:
        return "All Messages";
      case Active.ALREADY_READ:
        return "Already Read";
      case Active.UNREAD:
        return "Unread";
      default:
        return "All Messages";
    }
  };

  return (
    <div className="w-full h-full">
      <nav className="px-6 py-4 text-xl font-semibold bg-gradient-to-r from-slate-200 to-slate-300 bg-clip-text text-transparent flex items-center">
        RecruitMail
        <ChevronRight size={22} color="#40E0D0" />
        <span className="text-white text-sm font-medium">
          {getDisplayText(activeTab)}
        </span>
      </nav>
    </div>
  );
}
