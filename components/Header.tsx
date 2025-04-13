"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { X } from "lucide-react";

const links = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="flex items-center justify-between p-4 text-2xl font-bold tracking-tight border-b select-none border-gray-200/50">
      <Link href="/">
        <h1>The Blog</h1>
      </Link>

      <Menu
        size={24}
        strokeWidth={1.5}
        className="block transition-all duration-300 cursor-pointer sm:hidden"
        onClick={() => setIsMobileMenuOpen(true)}
      />

      <div
        className={`fixed top-0 left-0 w-screen h-screen bg-background  transition-all duration-300 ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute top-0 left-0 w-full h-full select-none">
          {/* p-6 (parent + 2) is required to make ui consistent */}
          <div className="flex items-center justify-between p-6 font-bold tracking-tight border-b border-gray-200 ">
            <Link href="/">
              <h1 className="text-2xl">The Blog</h1>
            </Link>
            <X
              size={24}
              strokeWidth={1.5}
              className="block transition-all duration-300 cursor-pointer sm:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
          </div>
          <div className="flex flex-col h-[calc(100vh-65px)] gap-4 p-4 bg-background">
            <ul className="flex flex-col items-center justify-center h-full gap-8">
              {links.map((link) => (
                <li key={link.href} className="py-4 text-center w-fit ">
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
