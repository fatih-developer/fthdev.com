import { Hero } from "@/components/hero"
export default function Home() {
  return (
    <div className="font-sans">
      <Hero />
      <section className="py-24 sm:py-32 border-t border-border scroll-mt-16" id="about">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold">About</h2>
          <p className="mt-2 text-muted-foreground max-w-2xl">
            Kısa bir biyografi alanı. Gelecekte detaylandırılacak.
          </p>
        </div>
      </section>
      <section className="py-24 sm:py-32 border-t border-border scroll-mt-16" id="skills">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold">Skills</h2>
          <ul className="mt-4 list-disc pl-5 text-muted-foreground">
            <li>Next.js (App Router, RSC)</li>
            <li>TypeScript, Tailwind CSS, shadcn/ui</li>
            <li>Performance & A11y odaklı geliştirme</li>
          </ul>
        </div>
      </section>
      <section className="py-24 sm:py-32 border-t border-border scroll-mt-16" id="contact">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold">Contact</h2>
          <p className="mt-2 text-muted-foreground">E-posta: <a href="mailto:contact@example.com" className="underline">contact@example.com</a></p>
          <p className="mt-1 text-muted-foreground">LinkedIn: <a href="#" className="underline">linkedin.com/in/fatihunal</a></p>
        </div>
      </section>
    </div>
  );
}
