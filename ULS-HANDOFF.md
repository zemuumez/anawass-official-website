# ANAWASS Website — ULS Developer Handoff

This package contains the complete source code for the ANAWASS public website currently published at:

https://anawass.yonatansemere2.chatgpt.site

## What is included

- English and Amharic website pages
- HIV and STI education pages
- ANAWASS vending-machine presentation
- Interactive five-step machine demonstration
- Machine-locator page prepared for confirmed locations
- Ananika Health Solutions and WASS Global Solutions partner presentation
- Responsive navigation, footer, sliders, images and social-sharing assets
- Complete project configuration and dependency lockfile

## Website technical scope

This is the complete website handoff—not the ANAWASS ERP or physical vending-machine operating system.

- **Frontend:** all public pages, responsive layouts, navigation, images, English/Amharic content, teaching sliders and interactions are included.
- **Website runtime:** the React/Vinext server-rendering and production build configuration are included so ULS can run, build and host the site.
- **Machine interface on the website:** the guided five-step demonstration is included as a safe educational simulation.
- **Application database:** none is currently required because the website does not create accounts, accept payments, save orders, collect private health data or operate a physical machine.

If ANAWASS later approves a contact form, content-management portal, live machine locations, account system or payment/order flow, ULS should add the corresponding protected API, database, authentication and privacy controls as a separately approved website phase.

## Technology

- React 19
- TypeScript
- Vinext / Vite
- Tailwind CSS
- shadcn components
- Cloudflare-compatible production output

## Requirements

- Node.js 22.13 or newer
- pnpm

## Run locally

From the project folder:

```bash
pnpm install
pnpm dev
```

Open the local address printed in the terminal.

## Validate a production build

```bash
pnpm lint
pnpm build
```

## Important project areas

- `app/` — website pages, global styling and metadata
- `components/` — shared interface, visual lessons and machine demo
- `public/` — logos, photography and public media assets
- `package.json` — scripts and dependencies
- `pnpm-lock.yaml` — exact dependency versions
- `.openai/hosting.json` — current OpenAI Sites project association

## Content and launch notes

- The machine demonstration is an educational simulation. It does not place an order, process payment or collect personal information.
- Public machine locations are intentionally not fabricated. Replace the pilot message with verified venue names, addresses, operating hours, map links and service status when ANAWASS approves them.
- Review medical education with the designated qualified health partner before final commercial launch and whenever guidance changes.
- Confirm final product catalogue, pricing, payment provider, machine API, regulatory requirements and privacy terms before connecting the website to live vending operations.
- Preserve the native anchor-based navigation unless the hosting runtime is changed and retested.

## Hosting options

The project can continue on its current OpenAI Sites hosting, or ULS can adapt it for another React/Vite-compatible host. If moving hosts, ULS should test every route, direct URL navigation, public images, metadata and the interactive machine demonstration before changing DNS.

## Recommended ULS next phase

1. Connect the confirmed ANAWASS domain.
2. Add approved contact details and legal/privacy wording.
3. Add verified machine locations and map directions.
4. Perform medical, privacy, accessibility, mobile and security acceptance testing.
5. Treat live machine inventory, payments and physical dispensing as a separate system-integration project when its APIs are ready.
