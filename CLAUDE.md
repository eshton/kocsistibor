# Claude Code Configuration

Personal finance consultancy website for **Kocsis Tibor** ("Tibi") — forex/deviza risk, investment advisory,
direct asset/portfolio management (vagyonkezelés, under MNB license per Tibi), corporate finance and financial
product/process consulting. Site is **Hungarian-only**, informal/tegez tone throughout (he's "Tibi", not "Ön").

Built on **AstroWind** (Astro 6 + Tailwind CSS v4, static output). See [AGENTS.md](./AGENTS.md) for the
template's generic component/widget documentation — use that for how to structure new pages with existing
widgets (`Hero`, `Features2`, `Content`, `Stats`, `FAQs`, etc.).

## Voice & content rules

- Hungarian only, no i18n switcher (`i18n.language: hu` in `src/config.yaml`).
- Informal/tegez ("te", not "Ön") — the brand persona on-page is "Tibi", first person.
- Legal/company name ("Kocsis Tibor Pénzügyi Tanácsadás") stays formal only in footer/legal contexts.
- Do not add fabricated performance/AUM numbers (e.g. "X% average return", "$Xm managed") to marketing copy —
  flagged as a real regulatory risk for a licensed financial services site (MNB rules on misleading financial
  advertising). Any stat counters must be either real figures or clearly-marked placeholders.

## Bio facts (for any future copy)

- MKB Bank, 2006–2017 (11y 7m): Supervisor → Participation Manager → Head of Business Analysis → Head of
  Product Management, Budapest.
- Provident Pénzügyi Zrt., 2018–2024 (6y 4m): Head of Product Development, Budapest.
- Education: Budapesti Gazdasági Egyetem.

## Outstanding TODOs before public launch

1. **`src/pages/impresszum.astro`** — legal entity name, székhely, cégjegyzékszám, adószám, and the **MNB
   engedélyszám** are placeholders. Legally required disclosure for a regulated financial entity in Hungary.
2. **`src/pages/terms.md` / `src/pages/privacy.md`** — still AstroWind's generic English boilerplate (with a
   TODO warning banner injected). Needs real Hungarian ÁSZF + GDPR-compliant adatvédelmi tájékoztató, reviewed
   by a lawyer — non-negotiable given the regulated asset-management activity.
3. **Contact form** (`src/pages/contact.astro`) — posts to Web3Forms but `WEB3FORMS_ACCESS_KEY` is a
   placeholder. Get a free key at web3forms.com and swap it in, or the form silently won't deliver.
4. **Phone number** — currently shows "Hamarosan" on the contact page. Add real number when decided.
5. **Headshot** (`src/assets/images/team/kocsis-tibor.png`) — casual outdoor crop, works as a placeholder but
   should be swapped for a proper professional photo before launch.
6. **About page stats** (ügyfélszám, konzultációk száma, etc. in `src/pages/about.astro`) — marked as TODO
   placeholders, replace with real numbers.
7. **Blog** — disabled (`apps.blog.isEnabled: false` in `src/config.yaml`), sample AstroWind posts deleted.
   Re-enable and write real posts whenever content marketing is wanted.

## Deployment (Cloudflare)

Static build deployed as Cloudflare Workers static assets (not the legacy Pages product) via `wrangler.jsonc`.

- `npm run deploy` → `astro build && wrangler deploy`
- `npm run cf:dev` → local Wrangler preview of the built assets
- One-time: `wrangler login` before first deploy; a Cloudflare account is required, plus a zone/custom domain
  setup for `kocsistibor.hu` (or whatever domain is chosen) if not using the default `workers.dev` subdomain.
