"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { useTheme } from "next-themes";

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";
  return (
    <Button
      variant="ghost"
      aria-label="Toggle theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      {isDark ? "🌙" : "☀️"}
    </Button>
  );
}

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

const SECTION_IDS = NAV_LINKS.map((l) => l.href.slice(1));

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        // Navbar yüksekliğini ve görünür alanı hesaba katmak için
        rootMargin: "-20% 0px -60% 0px",
        threshold: 0.1,
      }
    );

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-background/60 border-b border-border">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between max-w-[1200px] w-full">
        <div className="flex items-center gap-3">
          <Link href="#hero" className="font-semibold">
            Fatih Ünal
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-6" aria-label="Primary">
          {NAV_LINKS.map((l) => {
            const id = l.href.slice(1);
            const isActive = activeId === id;
            return (
              <Link
                key={l.href}
                href={l.href}
                aria-current={isActive ? "page" : undefined}
                className={
                  "text-foreground/80 hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring rounded " +
                  (isActive ? "text-foreground font-medium" : "")
                }
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                aria-label="Open menu"
                aria-expanded={open}
                aria-controls="mobile-menu"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-72" id="mobile-menu">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <div className="mt-4 flex flex-col gap-4">
                {NAV_LINKS.map((l) => {
                  const id = l.href.slice(1);
                  const isActive = activeId === id;
                  return (
                    <Link
                      key={l.href}
                      href={l.href}
                      onClick={() => setOpen(false)}
                      aria-current={isActive ? "page" : undefined}
                      className={
                        "text-foreground/80 hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring rounded " +
                        (isActive ? "text-foreground font-medium" : "")
                      }
                    >
                      {l.label}
                    </Link>
                  );
                })}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}