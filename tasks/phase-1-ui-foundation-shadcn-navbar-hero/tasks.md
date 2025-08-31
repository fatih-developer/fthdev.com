# UI Foundation – Implementation Plan (Tasks)

Version: 1.0
Owner: Team Lead (You)
Date: 2025-08-31
Refs: See requirements.md and design.md in the same folder

Overview
Bu plan, Shadcn UI, Framer Motion ve Lucide React entegrasyonu ile Navbar ve Hero bileşenlerinin teslimine giden adımları tanımlar. Kodlama sırası, bağımlılıklar ve doğrulama adımları listelenmiştir.

Milestone M0 – Hazırlık ve Doğrulama
- [ ] T0.1 Repo ve mevcut Next.js yapı doğrulaması (App Router, Tailwind var)
- [ ] T0.2 Paket yöneticisi: Bun ile kurulum/çalıştırma doğrulaması (bun install, bunx next dev)
- [ ] T0.3 Lint ve typecheck çalışıyor mu? (bunx next lint, tsc --noEmit)

Milestone M1 – Bağımlılıkların Kurulumu
- [ ] T1.1 Shadcn UI CLI kurulumu ve init (class/alias stratejisi belirle)
      - Output: components/ui/*, lib/utils, tailwind config güncellemesi
- [ ] T1.2 Framer Motion kurulumu (client-only kullanım notları)
- [ ] T1.3 Lucide React kurulumu (ikon seti)
- [ ] T1.4 next-themes kurulumu ve tema sağlayıcı entegrasyonu (App layout)
- [ ] T1.5 Temel shadcn bileşenleri import: Button, Sheet/Drawer, NavigationMenu veya alternatif (DropdownMenu), Separator

Milestone M2 – Navbar Uygulaması (A11y + Responsive)
- [ ] T2.1 Navbar wireframe -> UI (logo/ad solda, links ortada/sağda, ThemeToggle sağda)
- [ ] T2.2 Mobile menü (Sheet) + hamburger button (aria-expanded, aria-controls)
- [ ] T2.3 Skip-to-content link eklenmesi
- [ ] T2.4 Klavye navigasyonu ve odak halkaları doğrulaması
- [ ] T2.5 Sticky + backdrop-blur + border stil ayarı, scroll state opsiyonel

Milestone M3 – Hero Uygulaması (Motion + CTA’lar)
- [ ] T3.1 Başlık ve alt başlık tipografisi
- [ ] T3.2 CTA butonları (Primary: Contact anchor; Secondary: LinkedIn/Resume)
- [ ] T3.3 Sosyal ikon linkleri (Lucide) + aria-label’lar
- [ ] T3.4 Giriş animasyonları (fade/slide) ve prefers-reduced-motion desteği
- [ ] T3.5 Responsiveness testleri (sm/md/lg)

Milestone M4 – Test, Kalite ve Son Doğrulama
- [ ] T4.1 Lighthouse lokal ölçüm (Perf ≥ 95, A11y ≥ 95)
- [ ] T4.2 Erişilebilirlik checklist: kontrast, focus, landmark, aria
- [ ] T4.3 Lint + typecheck temiz
- [ ] T4.4 Görsel duman testleri (desktop/mobile)
- [ ] T4.5 README notu: kurulum ve geliştirme komutları (opsiyonel)

Çapraz Referanslar
- Navbar kabul kriterleri: FR-2
- Hero kabul kriterleri: FR-3
- Tema ve ikonlar: FR-4
- Performans ve erişilebilirlik: NFR-1..NFR-3

Risk ve Bağımlılık Notları
- Shadcn kurulumunun Tailwind config ile çakışması → init sonrası diff kontrolü
- next-themes hydration flicker → class strategy + suppressHydrationWarning
- Motion SSR uyumu → island/conditional render

Tamamlanma Tanımı
- M0–M4 tüm madde checkbox’ları işaretlendi
- Preview ile canlı doğrulama yapıldı