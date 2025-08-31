# UI Foundation – Design for Navbar & Hero (Shadcn + Motion + Lucide)

Version: 1.0
Owner: Team Lead (You)
Date: 2025-08-31

1) Görsel ve Etkileşim Tasarımı
- Tema: Light/Dark, otomatik sistem tercihine duyarlı; kullanıcı tercihi kalıcı.
- Renkler: Nötr gri tonları + vurguda birincil renk (örn. indigo/emerald). Kontrast AA.
- Tipografi: Sans-serif (Inter veya benzeri). Başlıklar h1/h2 ölçekli, body 16px taban.
- Spacing: 8px grid; container max-width: 1200px.
- Animasyon: Framer Motion ile düşük genlikte fade/slide, duration 300–500ms; reduce-motion tercihinde animasyon devre dışı.

2) Bilgi Mimarisi ve Bileşen Hiyerarşisi
- Layout
  - Header: <Navbar/>
  - Main
    - <Hero/>
    - (Future) About, Skills, Contact
  - Footer (future)

- Navbar
  - Logo/Ad (sol)
  - Primary nav links: About, Skills, Contact (ankorlar)
  - ThemeToggle (sağ)
  - Mobile: Hamburger -> Sheet/Drawer menü

- Hero
  - Başlık: “Fatih Ünal” + kısa unvan
  - Açıklama: 1–2 cümlelik değer önermesi
  - CTA: Primary (Contact), Secondary (LinkedIn / Resume)
  - Sosyal ikonlar: LinkedIn, GitHub (Lucide)
  - İlustrasyon/Globe (opsiyonel, SVG mevcutsa subtle parallax)

3) Erişilebilirlik
- Header landmark, nav + ul/li semantiği
- Skip to content link (klavye kullanıcıları için)
- Focus ring; aria-label’lar (ikon butonları)
- Kontrast ≥ AA
- Motion preference: respect prefers-reduced-motion

4) Teknik Mimarî
- Next.js App Router + Tailwind + Shadcn UI primitives (Button, Sheet, NavigationMenu/menü alternatifleri)
- next-themes ile tema yönetimi; server + client uyumlu
- Lucide React ile ikon seti
- Framer Motion: motion.div/motion.button ile giriş animasyonları

5) Arayüz Sözleşmeleri (Props/State)
- Navbar
  - props: links: Array<{href: string; label: string;}> (default: anchors)
  - state: isMobileMenuOpen (client component); theme (next-themes)

- Hero
  - props: title: string; subtitle: string; ctas: {primary: {label: string; href: string}, secondary?: {label: string; href: string}}; socials?: Array<{type: 'linkedin'|'github'|'x'|'mail', href: string, label: string}>
  - state: none (animasyon kontrolü reduce-motion ile conditional)

6) Stil Rehberi (Tailwind)
- Container: mx-auto px-4 sm:px-6 lg:px-8
- Navbar: sticky top-0 backdrop-blur bg-background/60 border-b border-border
- Linkler: text-foreground/80 hover:text-foreground focus-visible:outline-primary
- Buttons: shadcn Button variants (primary/secondary/ghost)
- Hero: py-24 sm:py-32; h1: text-4xl sm:text-5xl md:text-6xl; lead: text-muted-foreground

7) Diyagramlar
- Component Tree
  AppLayout
    ├─ Navbar (client)
    └─ Main (server)
       └─ Hero (server with client islands for motion if needed)

- State Flow
  ThemeToggle -> next-themes -> class on html -> Tailwind variants
  MobileMenu -> open/close via state -> <Sheet>

8) Performans ve SEO
- Minimal client tarafı; motion sadece gerekli yerlerde
- next/font ile self-host
- Semantik başlık hiyerarşisi, meta App Router Metadata API

9) Hatalar ve Edge Case’ler
- Nav linkleri bozuk: 404 yerine anchor; boş link engelle
- Motion çakışması: reduce-motion saygı; SSR hydration uyumu için conditional motion
- Tema flicker: class strategy + suppress hydration uyarıları (tasarımda ele alınır)

10) Geleceğe Hazırlık
- Navbar genişlerse: Projects, Blog linkleri
- Hero altına kısa “Highlights” grid’i eklenebilir
- Sosyal ikon seti genişletilebilir