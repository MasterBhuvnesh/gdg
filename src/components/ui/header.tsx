"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-b-zinc-700 ${
        isScrolled
          ? "bg-background/90 backdrop-blur-lg shadow-sm"
          : "bg-background/70 backdrop-blur-md"
      }`}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center" aria-label="Home">
            <Image
              src="/icons/gdgico.svg"
              alt="GDG Logo"
              width={40}
              height={40}
              priority
            />
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="nav-link">
              Home
            </Link>
            <Link href="/events" className="nav-link">
              Events
            </Link>
            <Link href="/blog" className="nav-link">
              Blogs
            </Link>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur- z-40 flex flex-col items-center p-6 space-y-6">
          <button
            className="absolute top-4 right-4 p-2"
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
          <Link href="/" className="nav-link" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link
            href="/events"
            className="nav-link"
            onClick={() => setIsOpen(false)}
          >
            Events
          </Link>
          <Link
            href="/blog"
            className="nav-link"
            onClick={() => setIsOpen(false)}
          >
            Blogs
          </Link>
        </div>
      )}
    </header>
  );
}