import React from "react";
import {
  NotepadTextDashed,
  Twitter,
  Linkedin,
  Github,
  Mail,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface FooterLink {
  label: string;
  href: string;
}

interface SocialLink {
  icon: React.ReactNode;
  href: string;
  label: string;
}

interface FooterProps {
  brandName?: string;
  brandDescription?: string;
  socialLinks?: SocialLink[];
  navLinks?: FooterLink[];
  creatorName?: string;
  creatorUrl?: string;
  brandIcon?: React.ReactNode;
  className?: string;
}

export const Footer = ({
  brandName = "YourBrand",
  brandDescription = "Your description here",
  socialLinks = [],
  navLinks = [],
  creatorName,
  creatorUrl,
  brandIcon,
  className,
}: FooterProps) => {
  return (
    <section className={cn("relative w-full mt-0 overflow-hidden", className)}>
      <footer className="border-t border-slate-800 bg-slate-900 mt-0 relative">
        <div className="max-w-7xl flex flex-col justify-between mx-auto relative p-4 py-12 md:py-16">
          <div className="flex flex-col mb-12 w-full">
            <div className="w-full flex flex-col items-center">
              <div className="space-y-2 flex flex-col items-center flex-1">
                {brandIcon && (
                  <div className="mb-4">
                    {brandIcon}
                  </div>
                )}
                <div className="flex items-center gap-2">
                  <span className="text-white text-3xl font-bold font-display tracking-tight">
                    {brandName}
                  </span>
                </div>
                <p className="text-slate-400 font-medium text-center w-full max-w-sm sm:w-96 px-4 sm:px-0">
                  {brandDescription}
                </p>
              </div>

              {socialLinks.length > 0 && (
                <div className="flex mb-8 mt-6 gap-4">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      className="text-slate-400 hover:text-white transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="w-6 h-6 hover:scale-110 duration-300">
                        {link.icon}
                      </div>
                      <span className="sr-only">{link.label}</span>
                    </a>
                  ))}
                </div>
              )}

              {navLinks.length > 0 && (
                <div className="flex flex-wrap justify-center gap-6 text-sm font-medium text-slate-400 max-w-full px-4 mt-4">
                  {navLinks.map((link, index) => (
                    <a
                      key={index}
                      className="hover:text-brand-400 duration-300 hover:font-semibold transition-colors"
                      href={link.href}
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col gap-4 md:gap-1 items-center justify-center md:flex-row md:items-center md:justify-between px-4 md:px-0 z-20 relative">
            <p className="text-sm text-slate-500 text-center md:text-left">
              ©{new Date().getFullYear()} {brandName}. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-2">
              <span className="text-sm text-slate-500">Desenvolvido por:</span>
              <img 
                src="https://pub-db8ed4fb33634589a6ce5fb07e85cb46.r2.dev/logo/op7/logo.svg" 
                alt="OP7" 
                className="h-5 object-contain" 
                referrerPolicy="no-referrer" 
              />
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};
