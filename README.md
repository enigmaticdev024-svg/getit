# GetIt public website

Stages 02-04 are complete. Stage 05 provides provisional enquiry forms and a tested server-side Resend adapter; final fields/privacy and live configuration remain pending. Stage 06 local QA/SEO/image work is finished, awaiting client Round 1 feedback. The original visual reference remains in ../website/. Real sending is disabled; no email delivery is verified. The application provides no bookings.

## Run locally

Use Node 22 (the inspected environment has 22.23.3) and npm. From the project root:

```powershell
cd web
npm ci
npm run dev
```

Visit http://127.0.0.1:3000. The development script binds to loopback. Stop it with Ctrl+C. For a build and local production check:

```powershell
npm run build
npm run typecheck
npm start
```

The first install and next/font build require network access to npm and Google Fonts. next/font serves downloaded font files from the application; visitors do not fetch Google Fonts directly. The original DM Sans / Manrope typography and Georgia accents are retained. Do not substitute a different typeface silently if the download fails.

## Files

- src/app/layout.tsx: Dutch document language, fonts and foundation metadata.
- src/app/globals.css: supplied palette, faithful page sections, responsive layouts, typography and CSS logo treatment.
- src/components/Brand.tsx: supplied open-frame mark/wordmark as a reusable component.
- src/app/page.tsx: server-rendered marketing page composed from src/components/Marketing.tsx.
- src/components/AppShowcase.tsx and PhoneCarousel.tsx: server-rendered fictional visuals plus native-swipe/keyboard/button mobile carousel.
- src/app/interesse/creator and interesse/horeca: dynamic provisional form routes using EnquiryPage/EnquiryForm.
- src/lib/enquiries/validation.ts: proposed concise fields and shared validation.
- src/lib/server/: server-only configuration, bounded request handling and Resend delivery adapter.
- src/app/api/enquiries/route.ts: POST notification endpoint, disabled by default.
- public/images/: unchanged copies of the four supplied reference photographs; commercial rights remain unresolved. next/image now provides responsive modern-format delivery; originals remain unchanged.
- public/social/getit.jpg: sharing crop derived from the supplied dining photo; rights still pending.
- .env.example: empty server-only email/approval/origin/privacy settings; no secrets or live delivery configured.

After the required client decisions and approved Stage 08 setup, copy .env.example to .env.local and supply configuration through a safe local/account workflow. See ../implementation-plan/ENQUIRIES.md for each setting and gate. Do not enable sending merely to preview forms. Never prefix email credentials with NEXT_PUBLIC_, commit .env.local or put secrets into the plan. Keep sender and recipient server-controlled. The scope specifies ivanspeakz@gmail.com, with final confirmation tracked in CLIENT-DECISIONS.md. No visitor confirmation email is included.

## Hosting assumption

Use a commercially permitted, approved server-capable Next.js host with Node/runtime support, route handlers, server secrets, HTTPS, custom domains and image delivery. Static export alone will not support the planned enquiry endpoint. No hosting vendor, subscription, deployment or GitHub remote has been configured. Vercel Hobby is excluded by the project scope. Provider compatibility must be checked again against the approved plan before launch.

Foundation robots metadata deliberately disables indexing; revisit it when production content and launch are approved. Canonical/social metadata and responsive AVIF/WebP delivery are configured. Keep the temporary noindex restriction until authorized launch, then verify indexing/metadata on production. Publication still depends on confirmed legal/contact content, asset rights, service costs, account access and explicit approval.

## Technical references

- [Next.js installation and runtime requirements](https://nextjs.org/docs/app/getting-started/installation)
- [Next.js self-hosted font support](https://nextjs.org/docs/app/getting-started/fonts)

See ../implementation-plan/PROGRESS.md for actual checks and stage status. Installation/build success does not verify forms or production deployment.

## Local enquiry checks

From the repository root: `node implementation-plan/checks/stage05-server.mjs` runs synthetic handler/provider tests without contacting Resend. After building and starting the app on port 3100, `node implementation-plan/checks/stage05-review.mjs` uses installed headless Chrome for provisional form/disabled API and intercepted-response browser tests. It never verifies real delivery. Stage 05 remains partial until client confirmations are recorded.
