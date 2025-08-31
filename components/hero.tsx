"use client"

import Link from "next/link"
import { motion, useReducedMotion, type Transition } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from "lucide-react"

export function Hero() {
  const reduce = useReducedMotion()

  const commonTransition: Transition = reduce
    ? { duration: 0 }
    : { duration: 0.5, ease: [0.16, 1, 0.3, 1] }

  return (
    <section className="py-24 sm:py-32" id="hero" aria-labelledby="hero-heading">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <motion.h1
          id="hero-heading"
          initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...commonTransition }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-center sm:text-left"
        >
          Fatih Ünal
        </motion.h1>

        <motion.p
          className="mt-4 text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl text-center sm:text-left"
          initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...commonTransition, delay: reduce ? 0 : 0.08 }}
        >
          Minimalist, hızlı ve erişilebilir web deneyimleri üreten yazılım geliştirici. Modern
          Next.js, TypeScript ve shadcn/ui ekosisteminde ürün odaklı çözümler geliştiriyorum.
        </motion.p>

        <motion.div
          className="mt-8 flex flex-wrap items-center gap-3 justify-center sm:justify-start"
          initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...commonTransition, delay: reduce ? 0 : 0.16 }}
        >
          <Button asChild size="lg">
            <Link href="#contact" aria-label="İletişim bölümüne git">İletişime geç</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a
              href="https://www.linkedin.com/in/fatihunal"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profilimi yeni sekmede aç"
            >
              LinkedIn
            </a>
          </Button>
        </motion.div>

        <motion.div
          className="mt-6 flex items-center gap-2 justify-center sm:justify-start"
          initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...commonTransition, delay: reduce ? 0 : 0.24 }}
          aria-label="Sosyal bağlantılar"
        >
          <Button asChild variant="ghost" size="icon">
            <a href="https://github.com/fthdev" target="_blank" rel="noopener noreferrer" aria-label="GitHub profilimi yeni sekmede aç">
              <Github aria-hidden className="size-5" />
              <span className="sr-only">GitHub</span>
            </a>
          </Button>
          <Button asChild variant="ghost" size="icon">
            <a href="https://www.linkedin.com/in/fatihunal" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profilimi yeni sekmede aç">
              <Linkedin aria-hidden className="size-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
          </Button>
          <Button asChild variant="ghost" size="icon">
            <a href="mailto:contact@example.com" aria-label="E-posta gönder">
              <Mail aria-hidden className="size-5" />
              <span className="sr-only">E-posta</span>
            </a>
          </Button>
        </motion.div>

        <motion.div className="mt-10 flex justify-center sm:justify-start">
          <motion.a
            href="#about"
            aria-label="Hakkımda bölümüne in"
            initial={reduce ? undefined : { opacity: 0.8, y: -4 }}
            animate={reduce ? undefined : { opacity: [0.8, 1, 0.8], y: [0, 6, 0] }}
            transition={reduce ? undefined : { duration: 1.6, ease: [0.445, 0.05, 0.55, 0.95], repeat: Infinity }}
            className="group inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground hover:bg-accent hover:text-foreground focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50"
          >
            {/* Chevron icon shows a subtle nudge to scroll */}
            <svg aria-hidden viewBox="0 0 24 24" className="size-5 transition-transform group-hover:translate-y-0.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m6 9 6 6 6-6" />
            </svg>
            <span className="sr-only">Aşağı kaydır</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}