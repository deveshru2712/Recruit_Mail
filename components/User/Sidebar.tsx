"use client";
import {
  Calendar,
  FileText,
  Inbox,
  MailCheck,
  Search,
  Settings,
  User,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Sidebar() {
  enum Active {
    ALLMESSAGE = "allMessage",
    ALREADY_READ = "alreadyRead",
    UNREAD = "unread",
  }

  const router = useRouter();

  const [isActive, setIsActive] = useState<Active>(Active.ALLMESSAGE);

  const getIndicatorPosition = () => {
    switch (isActive) {
      case Active.ALLMESSAGE:
        return "top-2";
      case Active.ALREADY_READ:
        return "top-10";
      case Active.UNREAD:
        return "top-18";
      default:
        return "top-2";
    }
  };

  return (
    <div className="w-72 h-full px-4 py-8 bg-transparent border-r border-gray-800 flex flex-col gap-32">
      <div className="space-y-8">
        {/* Search */}
        <div className="border border-gray-700 gap-2 py-2.5 px-3 rounded-lg flex items-center focus-within:border-teal-400 focus-within:ring-1 focus-within:ring-teal-400/30 transition-all duration-200 w-full bg-gray-800/50">
          <Search className="text-gray-400" size={18} />
          <input
            type="text"
            placeholder="Search..."
            className="text-gray-200 text-sm focus:outline-none bg-transparent w-full placeholder-gray-500"
          />
        </div>

        {/* Inbox Section */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 pl-2">
            <Inbox size={20} className="flex-shrink-0 text-teal-400" />
            <span className="text-lg font-medium text-gray-200 tracking-wide">
              Inbox
            </span>
          </div>

          <div className="flex items-start">
            <div className="relative flex flex-col h-24 w-1 ml-1">
              <div
                className={`absolute h-4 w-1 rounded-md bg-teal-400 transition-all duration-300 ${getIndicatorPosition()}`}
              />
            </div>

            <ul className="text-sm space-y-2 pl-3">
              <li
                onClick={() => {
                  setIsActive(Active.ALLMESSAGE);
                  router.push(`/dashboard/${Active.ALLMESSAGE}`);
                }}
                className={`cursor-pointer transition-all duration-200 py-1.5 px-3 rounded-lg ${
                  isActive === Active.ALLMESSAGE
                    ? "font-medium text-teal-400 bg-gray-800"
                    : "text-gray-400 hover:text-gray-200 hover:bg-gray-800/50"
                }`}
              >
                All Messages
              </li>
              <li
                className={`cursor-pointer transition-all duration-200 py-1.5 px-3 rounded-lg ${
                  isActive === Active.ALREADY_READ
                    ? "font-medium text-teal-400 bg-gray-800"
                    : "text-gray-400 hover:text-gray-200 hover:bg-gray-800/50"
                }`}
                onClick={() => {
                  setIsActive(Active.ALREADY_READ);
                  router.push(`/dashboard/${Active.ALREADY_READ}`);
                }}
              >
                Already Read
              </li>
              <li
                className={`cursor-pointer transition-all duration-200 py-1.5 px-3 rounded-lg ${
                  isActive === Active.UNREAD
                    ? "font-medium text-teal-400 bg-gray-800"
                    : "text-gray-400 hover:text-gray-200 hover:bg-gray-800/50"
                }`}
                onClick={() => {
                  setIsActive(Active.UNREAD);
                  router.push(`/dashboard/${Active.UNREAD}`);
                }}
              >
                Unread
              </li>
            </ul>
          </div>
        </div>

        {/* Menu Section */}
        <div className="space-y-1 pl-2">
          <ul className="space-y-1">
            <li className="flex items-center gap-3 cursor-pointer py-2.5 px-3 rounded-lg text-gray-400 hover:text-gray-200 hover:bg-gray-800/50 transition-all duration-200">
              <MailCheck size={18} className="flex-shrink-0" />
              <span className="text-sm tracking-wide">Sent</span>
            </li>
            <li className="flex items-center gap-3 cursor-pointer py-2.5 px-3 rounded-lg text-gray-400 hover:text-gray-200 hover:bg-gray-800/50 transition-all duration-200">
              <Calendar size={18} className="flex-shrink-0" />
              <span className="text-sm tracking-wide">Scheduled</span>
            </li>
            <li className="flex items-center gap-3 cursor-pointer py-2.5 px-3 rounded-lg text-gray-400 hover:text-gray-200 hover:bg-gray-800/50 transition-all duration-200">
              <FileText size={18} className="flex-shrink-0" />
              <span className="text-sm tracking-wide">Draft</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="space-y-4">
        <div className="flex items-center gap-3 cursor-pointer py-2.5 px-3 rounded-lg text-gray-400 hover:text-gray-200 hover:bg-gray-800/50 transition-all duration-200">
          <Settings size={18} className="flex-shrink-0" />
          <span className="text-sm tracking-wide">Settings</span>
        </div>

        <div className="border border-gray-800 rounded-lg p-3 bg-gray-800/30 hover:bg-gray-800/50 transition-all duration-200">
          <div className="flex items-center gap-3">
            <div className="p-1.5 bg-gray-700 rounded-full flex-shrink-0">
              <User size={16} className="text-gray-300" />
            </div>
            <div className="overflow-hidden">
              <p className="text-sm font-medium text-gray-200 truncate">
                username
              </p>
              <p className="text-xs text-gray-500 truncate">user@mail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
