# UI Foundation – Shadcn + Motion + Lucide for fthdev.com

Version: 1.0
Owner: Team Lead (You)
Date: 2025-08-31

1) Amaç ve Kapsam
- Amaç: Shadcn UI, Framer Motion ve Lucide React kütüphanelerini projeye entegre ederek, erişilebilir ve performanslı bir Navbar ve Hero bölümü oluşturmak.
- Kapsam: Kurulumlar, tema (dark/light) hazırlığı, responsif ve erişilebilir Navbar, etkileyici ama ölçülü animasyonlara sahip Hero.
- Kapsam Dışı: Tam site içerikleri, contact form backend’i, proje/portfolio sayfaları, admin özellikleri.

2) Paydaşlar ve Personalar
- Ziyaretçi (genel kullanıcı)
- İşveren/Recruiter
- İş birliği yapacak partnerler
- İç ekip (tasarım, frontend, QA)

3) Varsayımlar ve Bağımlılıklar
- Teknoloji: Next.js (App Router), Tailwind CSS mevcut; bunların üstüne Shadcn kurulacak.
- next-themes kullanılacak (tema seçimi için).
- İkonlar Lucide React.
- Animasyonlar Framer Motion.
- Analitik (GA4) ileride eklenecek; bu fazda sadece tıklama/event hook noktaları tanımlanacak.

4) Kullanıcı Hikayeleri
- US-1 (Navigasyon): Bir Ziyaretçi olarak, sayfadaki ana bölümlere (Hero, Hakkımda/Bio, Yetenekler, İletişim) hızlıca geçiş yapmak istiyorum ki aradığım bilgiye hemen ulaşabileyim.
- US-2 (Tema): Bir Ziyaretçi olarak, karanlık/aydınlık modu kolayca değiştirmek istiyorum ki görüntü tercihlerime uygun bir deneyim yaşayayım.
- US-3 (Erişilebilirlik): Bir Ziyaretçi olarak, klavye ve ekran okuyucu ile siteyi rahatça kullanmak istiyorum ki engel yaşamadan gezineyim.
- US-4 (Hero Etkisi): Bir İşveren olarak, ilk ekranda Fatih’in kim olduğunu ve değer önerisini net görmek istiyorum ki ilgim hızla oluşsun.
- US-5 (Güven ve Sosyal Kanıt): Bir İşbirlikçi olarak, sosyal linkleri/ikonları görerek profesyonel profillere geçiş yapmak istiyorum ki güven kazanayım.

5) Fonksiyonel Gereksinimler ve Kabul Kriterleri
FR-1: Kütüphane Kurulumu
- GIVEN yeni Next.js app WHEN Shadcn, Framer Motion, Lucide React eklenirse THEN bağımlılıklar bun ile kurulmuş olmalı ve build/dev başarıyla çalışmalı.

FR-2: Navbar
- GIVEN masaüstü ekran WHEN kullanıcı sayfaya girerse THEN üstte yapışkan (sticky) ve şeffaf/blur destekli bir Navbar görünmeli.
- WHEN ekran daralırsa THEN mobil menü (Sheet/Drawer) ile bağlantılar erişilebilir olmalı.
- WHEN kullanıcı klavye ile gezinirse THEN odak halkaları görünür ve sırayla tüm öğelere erişilebilir olmalı.
- WHEN tema anahtarı kullanılırsa THEN görünüm anında değişmeli, tercih kalıcı olmalı (localStorage/cookie).

FR-3: Hero
- GIVEN ilk görünüm WHEN sayfa yüklenirse THEN başlık, kısa açıklama ve birincil/ikincil CTA butonları görünmeli.
- WHEN sayfa yüklenir THEN mikro animasyonlar (fade/slide) performanslı ve dikkat dağıtmayacak şekilde çalışmalı.
- WHEN ekran boyutu değişirse THEN tipografi ve spacing kırılımlara göre uyumlu kalmalı.

FR-4: İkonlar ve Linkler
- WHEN ikonlu bağlantılar gösterilirse THEN Lucide ikonları kullanılmalı ve her ikon için erişilebilir isim/aria-label sağlanmalı.

6) Non-Fonksiyonel Gereksinimler
NFR-1 Performans: LCP < 1.5s hedefi, CLS ≈ 0; gereksiz client JS yüklenmemeli; RSC tercih edilecek.
NFR-2 Erişilebilirlik: WCAG 2.1 AA uyumu; kontrast yeterli; odak görünür; aria-etiketleri mevcut.
NFR-3 SEO: Meta ve başlık yapısı bozulmamalı; semantik HTML.
NFR-4 Güvenlik: Üçüncü parti script yok (bu fazda); header ve CSP gelecekte.
NFR-5 Bakım: Bileşenler ayrık, yeniden kullanılabilir ve test edilebilir olmalı.

7) Tamamlanma Tanımı (DoD)
- Tüm kabul kriterleri karşılandı.
- Desktop/tablet/mobil manuel testleri geçti.
- Klavye ve ekran okuyucu temel senaryoları çalışıyor.
- Lint ve typecheck temiz.
- PR açıklamasında kapsam, görseller ve notlar mevcut.

8) Riskler ve Azaltımlar
- Tasarım/UX belirsizliği → Wireframe ve örnek ekran görüntüleri üretilecek.
- A11y ihlalleri → Checklist ve manuel test.
- Tema uyumsuzluğu → next-themes örüntüsü ve test.
- Animasyon aşırılığı → Süre ve mesafeler kısıtlanacak, reduce motion tercihi dikkate alınacak.