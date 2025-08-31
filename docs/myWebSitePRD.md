# Fatih Ünal – Personal Website PRD

### TL;DR

Fatih Ünal’s personal website is a minimalist, one-page site designed to succinctly showcase his skills, biography, and contact details to employers, collaborators, and potential clients. The site’s core features ensure easy access to background and expertise, offer accessible contact methods, and adopt a contemporary design ethos with dark/light mode and fully responsive layout.

---

## Goals

### Business Goals

* Increase inbound contact requests and networking opportunities by 50% within 6 months.

* Establish a compelling personal brand presence online for Fatih Ünal.

* Enable employers and potential collaborators to quickly assess Fatih’s competence.

* Facilitate new collaborations and freelance/project offers through easily accessible contact information.

### User Goals

* Quickly understand Fatih Ünal’s skills, expertise, and professional background.

* Effortlessly find contact methods to reach out for networking, job offers, or collaborations.

* Enjoy a modern, distraction-free, and accessible browsing experience on any device.

* Switch easily between dark and light modes to suit personal preferences.

### Non-Goals

* No support for e-commerce, payments, or selling services/products directly.

* No integrated blog, news, or regularly updated content.

* No user authentication, protected content, or personalized dashboards.

---

## User Stories

### Employer

* As an Employer, I want to review Fatih’s professional background and skills, so that I can determine if he is a suitable candidate for our open position.

* As an Employer, I want to find contact information quickly, so that I can initiate an interview or recruitment process seamlessly.

* As an Employer, I want to scan the website easily on both desktop and mobile, so that my experience is efficient regardless of where I discover the site.

### Collaborator

* As a Collaborator, I want to understand Fatih’s expertise areas, so that I can gauge the potential for mutually beneficial projects.

* As a Collaborator, I want to view or at least verify past projects and contributions, so that I can assess credibility.

* As a Collaborator, I want to contact Fatih using my preferred channel, so that initial communication is frictionless.

### Customer

* As a Customer, I want to learn about what services Fatih offers, so that I can determine if he can meet my needs.

* As a Customer, I want to send an inquiry or message without unnecessary barriers, so that I feel encouraged to make contact.

---

## Functional Requirements

* Core Features (Priority: High)

  * **Bio Section:** Clearly presents a concise, engaging summary of Fatih Ünal’s background.

  * **Skills Section:** Showcases key skills and expertise in a visually scannable format.

  * **Contact Section:** Lists multiple accessible methods (email, LinkedIn, optionally other platforms) for reach-out.

  * **One-Page Navigation:** Smooth scrolling and anchor links enabling users to navigate to each section instantly.

  * **Dark/Light Mode Toggle:** Clean UI toggle for switching between appearance modes, persisting user preference.

  * **Responsive Design:** Seamless experience on desktop, tablet, and mobile devices..

  * **Accessibility:** Semantic HTML, appropriate color contrast, and keyboard navigation.

* Secondary Features (Priority: Medium/Low)

  * **Portfolio/Projects Placeholder:** Reserved section for future expansion; indicates readiness for detailed project showcases.

  * **Animated Section Transitions:** Subtle effects to enhance user perception of quality.

  * **Downloadable Resume/CV:** Option to download Fatih’s résumé.

---

## User Experience

**Entry Point & First-Time User Experience**

* Users discover the website via search engines, LinkedIn, or through a direct link shared by Fatih.

* Landing immediately on a minimal welcome/hero section with intuitive navigation cues (e.g., anchor menu or scroll prompt).

* No formal onboarding required, but non-intrusive tooltips or hints indicate dark/light toggle and contact options.

**Core Experience**

* **Step 1:** View the hero section with Fatih’s name, title, and a professional summary.

  * Minimal visual distractions; clear “scroll” or navigation cues.

  * High-contrast and clearly legible typography.

  * Error handling: fallback text/images if media fails to load.

* **Step 2:** Scan down to the “Skills” section.

  * Use of badges, icons, or well-organized lists for clarity.

  * Optional tooltip explanations for less-common skills.

* **Step 3:** Visit “Contact” section via anchor link or scrolling.

  * Prominent, easy-to-copy email address and/or simple contact form (if implemented).

  * LinkedIn and other professional links prominently accessible.

  * Clear confirmation or feedback upon copying contact info or submitting the form.

* **Step 4:** Toggle dark/light mode at any point.

  * Immediate UI response, with preference locally stored for future visits.

* **Step 5:** (When implemented) Preview or note “Portfolio” projects section indicating further info is coming soon or available on request.

**Advanced Features & Edge Cases**

* Graceful fallback for older browsers; site remains usable with scripts disabled.

* Error messaging if contact form fails or email copying is not supported.

* Power-users can navigate the site entirely with keyboard shortcuts and tabbing.

**UI/UX Highlights**

* Constant adherence to web accessibility standards (WCAG 2.1).

* Sufficient color contrast, especially between text and backgrounds in both dark/light modes.

* Large, tactile tap targets for navigation/buttons.

* Responsiveness from mobile up through large desktop displays.

* Visually unobtrusive but always accessible dark/light toggle.

---

## Narrative

An experienced tech recruiter is seeking standout candidates for a growing company’s engineering team. A connection shares Fatih Ünal’s name, and after a quick search, the recruiter lands on Fatih’s personal website.

Immediately, the minimalist home page projects professionalism, with a concise bio outlining Fatih’s technical background and approach. Subtle navigation prompts pull the recruiter down the page, where Fatih’s top skills are neatly displayed in a visually clear arrangement—making it easy to benchmark his expertise against current hiring needs.

Curious about Fatih’s accessibility and openness to new opportunities, the recruiter finds contact information within arm’s reach—both a direct email and a LinkedIn profile are prominently listed. Wanting to save this profile for later, the recruiter toggles the site into dark mode, appreciating how comfortable it is to browse regardless of environment or device.

Convinced by the quality, clarity, and user-friendliness of the site, the recruiter immediately drafts an email inviting Fatih for an interview. Within minutes, the website has enabled a real professional opportunity—helping an employer find strong talent and Fatih to grow his personal brand.

---

## Success Metrics

### User-Centric Metrics

* Growth in contact requests/submissions

* User session duration (average time on page)

* Mobile vs. desktop usage rates

* Positive feedback via direct comments

### Business Metrics

* Number of inbound interview/collaboration offers

* New client leads attributed to the website

* Increase in personal network connections

### Technical Metrics

* 

> 99.9% site uptime

* Median load time under 1 second globally

* Accessibility compliance (manual and automated tests)

### Tracking Plan

* Track page views and scroll depth

* Measure contact link clicks and/or form submissions

* Record dark/light mode toggle usage

* Monitor device and browser breakdown

---

## Technical Considerations

### Technical Needs

* Single-page front-end architecture (static site, no database needed)

* Responsive CSS and media queries for layout

* Persistent UI state for dark/light mode (local storage or cookies)

* Simple email/LinkedIn link integration

* Optional lightweight form handling (static form integrations)

### Integration Points

* Email (mailto: link or simple contact form integration with notification)

* LinkedIn profile link integration (external)

* Optional: Google Analytics or privacy-compliant analytics

### Data Storage & Privacy

* No personal data stored on server; all interactions (e.g., contact or resume downloads) client-initiated.

* Complies with privacy best-practices; no 3rd-party trackers by default.

* Contact information is public and can be obfuscated/protected from bots (e.g., via JS/HTML encoding).

### Scalability & Performance

* Designed for low-traffic, high-availability use case.

* Static hosting ensures rapid load times and minimal maintenance.

### Potential Challenges

* Spam protection for contact info (obfuscation or reCAPTCHA if form used)

* Browser compatibility without frameworks

* Ensuring accessibility across all modes and devices

---

## Milestones & Sequencing

### Project Estimate

* Extra-small: 1–2 days for initial build and polish

### Team Size & Composition

* Extra-small: 1 person who covers product design, UI/UX, and engineering

### Suggested Phases

**Phase 1: Design & Architecture (Day 1)**

* Key Deliverables: Single-page site wireframe, color palette for dark/light modes, basic content drafted (Fatih).

* Dependencies: None.

**Phase 2: Core Build (Day 1–2)**

* Key Deliverables: Bio, skills, and contact sections implemented; responsive design; dark/light mode toggle; anchor navigation (Fatih).

* Dependencies: Finalized content and assets.

**Phase 3: Polish, QA, and Launch (End of Day 2)**

* Key Deliverables: Accessibility validation, cross-device testing, contact methods verified, SEO basics, deploy to hosting platform (Fatih).

* Dependencies: Completion of previous phases.

**Phase 4: (Optional/Future) Portfolio Expansion & Maintenance**

* Key Deliverables: Add portfolio/projects section, downloadable resume, additional integrations as needed.

* Dependencies: Portfolio assets and updated content.

---