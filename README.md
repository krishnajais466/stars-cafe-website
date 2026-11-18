# Star's Cafe — Nalasopara East

A premium, mobile-first **display / marketing website** for **Star's Cafe, Since 2022** —
B-01, Laxmi Dhule Complex, near Achole Talav Gate No. 2, Nalasopara East, Palghar 401209.
Phone 9326222019, starscafe466@gmail.com, open 9am–11pm daily. Veg cafe, ₹350 for two.
Dine-in / takeout / delivery / outdoor seating.

**This is NOT an ordering website.** There is no cart, no Add to cart, no ordering by
table number, no live order status, and no staff admin. It is a display site to market
the cafe: hero, menu, birthday packages, offers, location and Instagram.

Plain HTML/CSS/JS — no build step, no backend server, no heavy external libraries.
All editable content (menu, banners, packages, terms, birthday enquiries) is stored in
the browser with `localStorage`, so it works as a static deploy.

## Pages

- **index.html — homepage.** Hero, About, Our Story, a small **menu preview (6 featured items only) + "View full menu" link**, Gallery, small preview cards for Birthday bookings, Contact and Work with us (each just a "Birthday Booking →" / "Contact Us →" / "Work With Us →" button to its own page), Offers, Location, Terms, footer. The full 37-item menu is **NOT** on the homepage, and **no full form is on the homepage** — the birthday, contact and job forms live on their own pages (19 Nov 2026, homepage kept clear).
- **[menu.html](sandbox://workspace/stars-cafe-app/menu.html) — separate menu page.** The full display menu lives here only: categories, search, veg filter, sort, all 37 items with prices, Zomato/Swiggy links, and a "Back to home" link. Same header (with hamburger menu), same footer, same styles.css / app.js / logo.jpg, same colours and design as the homepage. Every "Menu" link in the header, hamburger menu, hero and footer goes to menu.html.
- **[birthday.html](sandbox://workspace/stars-cafe-app/birthday.html) — separate birthday page.** Birthday packages, the WhatsApp enquiry (package/date/time/name/phone/guests/note) and the birthday Netlify form — moved verbatim from the homepage. Same header, footer, styles.css / app.js / logo.jpg and design.
- **[contact.html](sandbox://workspace/stars-cafe-app/contact.html) — separate contact page.** Full contact details (phone, WhatsApp, email, address, hours, Get Directions, Instagram) and the contact Netlify form — moved verbatim from the homepage. Same header, footer, styles.css / app.js / logo.jpg and design.
- **[job.html](sandbox://workspace/stars-cafe-app/job.html) — separate jobs page.** "Work with us" intro and the job Netlify form — moved verbatim from the homepage. Same header, footer, styles.css / app.js / logo.jpg and design.

## Files

- [index.html](sandbox://workspace/stars-cafe-app/index.html) — structure: sticky header (real logo, NO Owner button, hamburger three-line menu on mobile with Home, Menu, Gallery, Birthday Bookings, Offers, Jobs, Location, Contact, Instagram, and a small Owner link at the very bottom; desktop nav is plain text links: Menu, Birthdays, Gallery, Jobs, Visit Us), large hero with the real logo and call-to-action pill buttons (View Menu, Book a Birthday, Get Directions, Call), About, Our Story, display Menu preview, Gallery, Reviews panel with the "Write a Review on Google" button, birthday / contact / jobs preview cards (buttons only — no full forms on the homepage), Offers (banners, Combo of the Day, Loyalty Offer), Location & basics, terms; footer (3 columns: About, Quick links, Contact). Section order on the page: Hero, About, Menu preview, Gallery, Reviews, Birthday preview, Offers, Location, Contact preview, Jobs preview, Footer.
- [menu.html](sandbox://workspace/stars-cafe-app/menu.html) — separate full menu page (see Pages above).
- [birthday.html](sandbox://workspace/stars-cafe-app/birthday.html) — separate birthday page (see Pages above).
- [contact.html](sandbox://workspace/stars-cafe-app/contact.html) — separate contact page (see Pages above).
- [job.html](sandbox://workspace/stars-cafe-app/job.html) — separate jobs page (see Pages above).
- [app.js](sandbox://workspace/stars-cafe-app/app.js) — all logic: display menu (search/filter/sort, no cart), homepage menu preview (6 items), gallery showcase, banners, Combo of the Day, Loyalty Offer, birthday enquiry via WhatsApp, owner login and editors, scroll-in animations. All render functions guard for missing elements, so the same app.js runs safely on every page (index, menu, birthday, contact, job).
- [styles.css](sandbox://workspace/stars-cafe-app/styles.css) — warm & cosy theme (cream + brown, purple accents), mobile-first, large touch buttons, premium hero, hover effects, scroll animations, gallery cards, big birthday banner, polished footer. **MNC-style button system (19 Nov 2026): no link anywhere shows as default blue text — every link is a proper pill button/chip: primary filled purple pill (.btn), secondary outlined cream pill (.btn.secondary), brown filled pill (.btn.brown), plain content links (phone, email, directions, Instagram) as small cream pill chips with a brown border, footer links as cream pill chips on the tan band; generous padding, subtle shadow, smooth hover lift.**
- [logo.jpg](sandbox://workspace/stars-cafe-app/logo.jpg) — the cafe's real logo (Star's Cafe, Since 2022, purple/black). Used as the header logo, the large hero logo and the favicon; the inline SVG logo in the header is the fallback if the image fails to load.

## Design match to the selected UI images (19 Nov 2026)

The user said the live site was "not the same UI design, not the same colour, not the same pattern" as the design images shown. The site was re-styled to match those images (traditional home, menu page, birthday page, gallery/contact page, menu bar, Zomato/Swiggy hero):

- **Colours:** warm pale-cream paper background `#f6eeda` (not white), cream panels `#fdf8ec`, caramel/tan bands and footer `#b98a5a` → `#a67c52` (not dark brown), dark brown text `#4a2e1b`, purple `#6d3fa0` used ONLY as an accent (pill badges, active tab underline, primary buttons).
- **Pattern:** faint dotted paper texture on the page background, faint paisley-style radial pattern in the hero, thin purple flourish dividers (`— ❧ —`) under main headings, brown double rules under the header and hero.
- **Typography:** dark-brown **serif** headings (Georgia / Palatino / Times), hero title in uppercase serif with letter-spacing; body text stays a clean sans-serif.
- **Header:** cream paper bar, brown serif "STAR'S CAFE" brand name (not purple), hamburger with dark-brown bars on cream.
- **Hero:** purple pill badges (Top Rated + 4.9 ★ rating badge, white text, gold star), large brown serif title, tagline in brown serif.
- **Menu:** category strip as a cream bar with brown rules — active tab in purple with a purple underline (not a brown pill); menu cards are cream rounded cards, item name in brown serif, price in brown (not purple), green veg dot with a white ring, food image on the right.
- **Birthday packages:** cream cards with an ornate brown double frame and a purple price ribbon at the top-right corner, package name in centred brown serif.
- **Zomato / Swiggy:** stacked white cards with logo chips (red "zomato" chip, orange "S" chip), as in the hero image — not small purple buttons.
- **Footer:** caramel/tan background with purple small-caps labels (ADDRESS / PHONE / EMAIL) and cream text.
- **Form containers — matched STRICTLY to the design images:** NO boxed card around any form. Each form (Contact, Birthday, Job) sits directly on the cream paper; the fields carry the style — cream inputs, thin brown borders, 12px rounded corners, generous spacing, dark-brown serif labels above each field, and one purple full-width submit button. No gradient card, no border box, no shadow around the forms.

## Owner access (hidden from the main page)

There is **no Owner button** on the main page header or hero. Owner access is:

1. **Hamburger menu, small link at the bottom** — open the three-line menu and the last, small "Owner" link at the bottom opens the owner login.
2. **Hidden URL** — opening the site with `#owner` in the URL (e.g. https://stars-cafe-order-online.netlify.app/#owner) shows the owner login directly. This URL is documented here in the README only, not on the site itself.

Owner login is **aashi / starcafe@456** — both username and password are
case-insensitive ("Aashi", "AASHI", "STARCAFE@456" all work). The credentials
are **not shown anywhere on the site** — they live only in the login check in
`app.js` and in this README, for the owner. The owner can edit: menu, birthday
packages, banner offers, Combo of the Day, Loyalty Offer, terms & conditions,
and see birthday enquiries. There is no staff view and no staff login.

## Owner — production-ready (19 Nov 2026)

- **No animations in the owner view.** While the owner view is open, `showView()`
  adds `owner-mode` to `<body>` and `styles.css` switches off every animation
  and transition there (`body.owner-mode, body.owner-mode *, #view-owner,
  #view-owner * { animation: none !important; transition: none !important; }`)
  and forces reveal elements visible immediately. The public site keeps all of
  its animations.
- **No placeholder login or login hints anywhere.** The previous owner login
  and the login hint that used to be shown on the login screen are removed.
  No placeholder text remains on the site.
- **Security note:** this is still a static site with `localStorage` — the
  login is a simple gate, not server-side security. Real security would need a
  backend with proper auth; do not treat the owner login as bank-grade
  protection.
- **Owner login: aashi / starcafe@456**, case-insensitive for both fields.
  The credentials appear only in the login check in `app.js` and in this README
  — never in any page text visitors can see.
- **Organised owner dashboard** (all in `index.html` → `#view-owner` →
  `#ownerApp`, rendered by `renderOwner()` in `app.js`):
  1. **Menu** — "Arrange categories" (↑ / ↓ per category), menu items grouped
     by category (each item: Edit name/category/price/veg inline, ↑ / ↓ move
     within its category, Delete, Mark available/unavailable, Add/Change/
     Remove photo), and "Add a menu item" (name, category, price, veg, photo).
     Category order is stored in `localStorage` (`sc_cat_order`).
  2. **Birthday Packages** — edit name, price and features per package.
  3. **Offers** — banner offers (add / edit / enable / disable), Combo of the
     Day, Loyalty Offer.
  4. **Settings** — contact details (phone, email, address, hours, price for
     two — saved in `localStorage` `sc_contact`, shown on the homepage via
     `[data-contact-*]` hooks) and terms & conditions.
  5. **Birthday enquiries** — enquiries made on this browser, newest first.

## Redesign — clean traditional website (19 Nov 2026)

After the user's feedback ("too many buttons everywhere", "footer is very poor",
"hide the specifications"), the site was redesigned as a clean, traditional website:

- **"Top Rated Cafe in Nalasopara" badge** — a prominent purple badge in the hero
  with the exact wording "Top Rated Cafe in
  Nalasopara — 4.9 ★ (199 Google reviews)". Based on the verified 4.9/5 Google
  rating from 199 reviews — not a numbered #1 claim. It is plain text, not a
  link, and there is a small Reviews panel with a single "Write a Review on
  Google" button (added 19 Nov 2026 — see "Google review link" below).
- **Order on Zomato / Swiggy** — two clean buttons in the menu area ("Order on
  Zomato", "Order on Swiggy"). These are **search links only** — Zomato search
  and Swiggy search for "Star's Cafe Nalasopara East". No Zomato/Swiggy
  restaurant URL or ID was invented; the owner should replace them with the
  cafe's exact Zomato/Swiggy restaurant links when available.
- **Verified ratings** — Google **4.9 ★ (199 Google reviews)** only
  (checked live 19 Nov 2026 from the Google listing), shown as plain text in the
  hero badge, plus a single "Write a Review on Google" button (see "Google
  review link" below). No "Read reviews on Google" section with review text,
  no WhatsApp review option, and no other review site's rating anywhere on the
  site.
- **Our Story** — a short section after About, before the Menu: Star's Cafe began
  in 2022 in Nalasopara East, a small, warm, cosy veg cafe where friends and
  families come together over pizza, coffee and freakshakes. No founder names or
  claims beyond the known facts.
- **Reserve a Table** — a button in the hero and in the Contact section. Tapping it
  opens a direct phone call to the cafe (`tel:+919326222019`). No booking form for
  table reservation — it is a direct call.
- **Buttons cut back hard.** The visitor site now has only the essential buttons:
  hero — View Menu, Book a Birthday, Call, Get Directions, Reserve a Table; birthday enquiry —
  Enquire on WhatsApp; and the three form submit buttons (Send birthday enquiry,
  Send enquiry, Send job application). The extra header "Menu" button is gone,
  the desktop nav is plain text links (not pill buttons), the banner "Book a
  birthday" button is gone, package "Choose" buttons are gone (tap a package card
  to select it in the enquiry form), and the Location / Contact
  buttons are plain text links instead. Owner-page editing buttons are unchanged
  (they are admin controls, not visitor clutter).
- **Item specifications hidden.** Menu rows now show name, veg dot and price only —
  the `MENU_DESC` short descriptions and the category/spec line are removed
  (no description text anywhere on a menu card). Gallery cards show name and
  category only, no price.
- **Footer rebuilt properly** — 3 columns: About Star's Cafe (with Instagram link),
  Quick links (Menu, Gallery, Birthday bookings, Work with us), and
  Contact (address, phone, email, hours, Get Directions), plus a copyright bar.
  No buttons in the footer at all.
- **Three Netlify Forms** (all plain HTML, no JS submit, each with hidden
  `form-name` input and honeypot `bot-field`):
  1. `contact` — Contact section (name, phone, email, subject, message).
  2. `birthday` — Birthday section (name, phone, date, time slot, package,
     guests, message), in addition to the WhatsApp enquiry. Package and time-slot
     options are filled by `renderPackages()` in `app.js`.
  3. `job` — new **"Work with us" / Jobs** section (name, phone, email, role —
     Server/Waiter, Kitchen/Cook, Barista, Cashier, Cleaner/Helper, Other —
     message). Linked from the desktop nav, the mobile hamburger menu and the
     footer Quick links.
  Netlify only registers forms on deploy — redeploy after this change, then check
  Netlify dashboard → Forms. Form-notification emails are configured in Netlify,
  not in the code.

## What visitors see (display site)

- **Hero** — large real logo, "Star's Cafe", tagline, veg / Nalasopara East / ₹350 for two / 9am–11pm, and buttons: View Menu, Book a Birthday, Get Directions, Call.
- **Offer banners** carousel + birthday banner; **Combo of the Day** and **Loyalty Offer** sections (shown when the owner enables them).
- **About** — the cafe since 2022, dine-in / takeout / delivery / outdoor seating.
- **Gallery** — "Gallery": compact cards for Margherita Pizza, Chocolate Freakshake, Cold Coffee, Chocolate Milkshake, Paneer Pizza and Loaded Nachos, with prices. Gallery cards use the menu items' photos (CSS gradient placeholders until the owner adds real dish photos) — the owner adds/changes a dish photo from the Owner page, under Menu management, and it shows in the Gallery and on the menu card.
- **Menu (display only)** — the homepage shows only a small preview (6 featured items) with a "View full menu" link. The **full menu lives on the separate [menu.html](sandbox://workspace/stars-cafe-app/menu.html) page**: Zomato/Swiggy-style compact rows: food image on the right, item name, veg dot and price on the left (no descriptions / specifications), with category tabs in logical order (All, Combo Packs, Pizza, Sandwich, Burger, Fries, Pasta, Maggie, Wedges, Nachos, Fried Rice, Noodles, Tea, Coffee, Mojito, Milkshake, Freakshake, Dessert, Icecream, Drinks), pill search, veg-only filter and sort. **No cart, no ordering.**
- **Birthday bookings (showcase)** — Basic / Premium / Deluxe packages (owner-editable), date + time-slot picker, name/phone/guests/note — enquiry opens WhatsApp to 919326222019 with everything prefilled. This is a booking enquiry, not an order.
- **Location & basics** — full address, Get Directions link, phone, email, hours, veg, ₹350 for two, and a "Follow us on Instagram" link. Instagram: @stars_cafe_since2022, also linked in the footer.
- **Contact** — dedicated Contact section: phone 9326222019 (tap to call), WhatsApp, email starscafe466@gmail.com, address, hours 9am–11pm, Get Directions, and Instagram @stars_cafe_since2022 — plus a **contact/enquiry form (Netlify Forms, `contact`)**: name (required), phone (required), email (optional), subject — Enquiry / Birthday Booking / Feedback — and message (required). Submissions are captured by Netlify, not by any JavaScript or backend.
- **Terms & conditions** (owner-editable).

## Owner only

- **Owner** — login **aashi / starcafe@456** (case-insensitive, both fields;
  not shown on the site — see "Owner login" above). The owner can edit: menu
  (create items, edit name/category/price/veg, delete items, move items up/down
  inside a category, arrange/reorder categories, mark available/unavailable,
  add/change/remove food photos), birthday packages (name, price, features),
  banner offers (add / edit / enable / disable offer and birthday banners),
  **Combo of the Day** (name, items, price, banner, on/off), **Loyalty Offer**
  (offer, terms, on/off), terms & conditions, contact details (phone, email,
  address, hours, price for two), and see birthday enquiries.
- There is **no staff view and no staff login** — staff order handling was removed with the ordering pivot.

Terms & conditions (owner-editable) cover: advance payment confirms a booking, cancellation/refund rules, fixed time slot with extra time charged, damage to property charged, outside food/cake rules, guest count, and the cafe's right to cancel for safety reasons.

## What was removed in the ordering → display pivot (19 Nov 2026)

Cart, Add to cart / quantity controls, order by table number, live order status (Received → Preparing → Ready → Served), staff live orders and order management, the entire Staff Admin view and staff login, order totals / sales / best sellers, and all `sc_orders` order code. The site title changed from "Star's Cafe — Order Online" to "Star's Cafe — Nalasopara East". The live site at https://stars-cafe-order-online.netlify.app/ still serves the old ordering version until it is redeployed with these files.

## ⚠️ Prices are placeholders

Menu and package prices in the site are **placeholder estimates**, clearly marked in the site ("Prices are placeholder estimates for now — prices to be updated with the new menu"). The cafe menu has changed; the new menu arrives in the morning and prices must be updated then — in the site via the Owner menu editing, or in `app.js` (`DEFAULT_MENU` / `DEFAULT_PKGS`).

Food photos are pure CSS gradient placeholders with the item name (no external images, so nothing breaks offline). The owner can replace photos with real dish photos (upload, max about 180 KB after shrinking, in the Owner menu management).

## Premium look

Large hero with the real logo, bold typography, warm cosy cream/brown with purple accents, smooth scroll-in animations (IntersectionObserver, no library, with a safety timeout so content is never left hidden), hover lift on menu / gallery / package cards and buttons, a gallery-style food showcase, a big birthday banner, standout offer banners, clean spacing and a polished footer. Mobile-first and fast — no heavy external libraries.

## Instagram

Follow us on Instagram — **@stars_cafe_since2022**,
https://www.instagram.com/stars_cafe_since2022 — linked as a button in the Location & basics section and in the footer on every view. Link only; no Instagram feed is embedded.

## Google review option removed (19 Nov 2026)

At the user's request ("No Google review option", confirmed Yes), the Google
review option was removed completely from the site:

- The entire **Reviews section** ("What customers say on Google", Google Maps
  embed, "Read reviews on Google" link, "Write a review on WhatsApp" link) was
  deleted from `index.html`, along with every Reviews link in the header,
  hamburger menu, desktop nav and footer on both `index.html` and `menu.html`.
- The owner-page **Google Reviews editor** (Place ID / reviews link) and all
  related code in `app.js` (`googleReviews` state, `googleEmbedUrl`,
  `googleReviewsUrl`, `renderGoogleReviews`, `saveGoogleReviews`, `sc_google`
  localStorage key) were removed, plus the `#googleReviewsFrame` CSS rule.
- **Kept:** the hero **Top Rated 4.9 ★ badge** only — plain text, no link.
  Get Directions links to Google Maps are still there (directions, not reviews).

## Google review link (19 Nov 2026 — change of plan)

After the removal above, the user changed his mind: instead of a review on
WhatsApp, the site now has a single **"Write a Review on Google"** button that
links directly to the cafe's Google listing share link
`https://share.google/OY9cJPErdoLdT4YHh` — clicking it opens the Google
listing where customers can leave a Google review.

- The button is in a small Reviews panel (`#reviewsPanel` in `index.html`,
  after Gallery, before Birthday bookings) and as a link in the footer Quick
  links.
- **Not** added back: the "Write a review on WhatsApp" option, the Google Maps
  reviews embed, a "Read reviews on Google" section, or any review text. The
  owner-page Google Reviews editor and all related `app.js` code stay removed.

## Contact form (Netlify Forms)

The Contact section has a working enquiry form powered by **Netlify Forms** — no
backend, no JavaScript submit, no fetch. It is a plain HTML form in `index.html`:

- `<form name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">`
- Hidden `<input type="hidden" name="form-name" value="contact">` plus a honeypot
  `bot-field` (a normal text input hidden off-screen with the `.hp-field` CSS class,
  so spam bots fill it and Netlify rejects those submissions).
- Fields: **Name** (required), **Phone** (required), **Email** (optional),
  **Subject** — Enquiry / Birthday Booking / Feedback — and **Message** (required).
- **No `action` attribute** — this is the simplest reliable Netlify Forms pattern:
  after sending, Netlify shows its default thank-you page. (If a custom thank-you
  page is wanted later, add `action="/thank-you.html"` and that page.)

**Where submissions appear:** Netlify dashboard → the stars-cafe-order-online site
→ **Forms** (verified submissions, with spam filtering) — and Netlify can email new
submissions to the site owner from Forms → Settings → Form notifications.

**Important:** Netlify only detects the form when the site is deployed — the form
must be **redeployed to Netlify** after this change for Netlify to register it.
Testing locally (plain HTTP) will not reach Netlify: the browser will POST to the
local server and get a 404/405 instead, which is expected. After redeploy, send one
test enquiry from the live site and check Netlify → Forms to confirm it arrived.

## Deploy to Netlify

1. Go to https://app.netlify.com/drop (or your Netlify dashboard → the stars-cafe-order-online site → Deploys → Deploy manually).
2. Drag the whole `stars-cafe-app` folder (index.html, app.js, styles.css, logo.jpg) onto Netlify Drop.
3. The live URL is https://stars-cafe-order-online.netlify.app/ (rename the site in Netlify under Site settings if you want a nicer URL).

## Tested

- `node --check app.js` — passes.
- HTML tag-balance check — no unclosed tags; every static `getElementById` in app.js has a matching `id` in index.html (combo / loyalty / Google / package / banner editor input ids are generated by `renderOwner()` at runtime).
- All files served over local HTTP (200): index.html, app.js, styles.css, logo.jpg.
- Node DOM-stub run of app.js — covering: 37 display menu cards with no Add to cart / cart / order code, 6 gallery cards, hero + nav ids present, birthday WhatsApp enquiry (no order created), owner login only (no staff login, no `renderStaff`/`placeOrder`/`setStatus`), banner/combo/loyalty show-edit-hide, Google Reviews defaults + Place ID + reviews-link behaviour, Instagram links, real logo as header + hero image and favicon with SVG fallback, no `sc_orders` / `cart` / `staff` ordering code remaining.
- Node DOM-stub run (15 checks, 0 failed) for the hamburger menu + Zomato/Swiggy menu + sorted categories: hamburger opens/closes (open class + active state), tapping a link closes the menu, category order is All, Combo Packs, Pizza, Sandwich, Burger, Fries, Pasta, Maggie, Wedges, Nachos, Fried Rice, Noodles, Tea, Coffee, Mojito, Milkshake, Freakshake, Dessert, Icecream, Drinks; 37 Zomato-style menu rows with short descriptions, veg dot, price and right-side food image; 6 compact gallery cards; owner login works. Verified in HTML: section order Hero, About, Menu, Gallery, Birthday, Offers, Reviews, Location, Contact; hamburger links Home, Menu, Gallery, Birthday Bookings, Offers, Reviews, Location, Contact, Instagram; Contact section has tap-to-call phone, WhatsApp, email, address, hours, Get Directions and Instagram.
- Headless Chromium could **not** be run in this environment (Hatch WebGL domain policy blocks browser startup) — the site has not been click-tested in a real browser yet. Please open it once after deploying. The Google Maps embed also needs a live internet connection to render; if it does not load, the "Read reviews on Google" link still works.

- Node DOM-stub run (8 checks, 0 failed) for the 19 Nov 2026 traditional redesign: 37 menu rows with no description text, banner with no button, packages with no Choose button (tap-to-select), birthday-form package/time-slot selects populated, gallery cards with no price, terms rendered, Google Reviews map src set. All files served over local HTTP (200): index.html, app.js, styles.css, logo.jpg.
- Design-match + separate-menu + hidden-owner test (`/tmp/test-stars-design-match.js`, 33 checks, 0 failed, 19 Nov 2026): homepage preview renders exactly 6 items (not 37), no full menu grid/chips on the homepage, "View full menu" links to menu.html, menu.html renders all 37 items with categories in order + search/sort/veg filter, no header Owner button on either page, Owner link is the last link in the hamburger menu, `#owner` hash opens the owner view, all 3 forms carry the `form-card` class, no Add to cart, no Justdial anywhere on either page, CSS has the cream `#f6eeda` paper, brown Georgia serif headings, uppercase hero title, tan/caramel footer, purple pill rating badge, unboxed form containers, Zomato/Swiggy white cards with logo chips, purple flourish dividers, ornate double-frame packages. All 5 files served over local HTTP (200): index.html, menu.html, app.js, styles.css, logo.jpg.
- Google review option removal test (`/tmp/test-no-google-reviews.js`, 26 checks, 0 failed, 19 Nov 2026): no Reviews section, no "Read reviews on Google" / "Write a review on WhatsApp" links, no Reviews nav/footer links on either page, no Google Reviews code/editor/`sc_google` key in app.js, no `#googleReviewsFrame` CSS rule; hero 4.9 ★ badge kept as plain text (not a link), Get Directions links kept, all 3 Netlify forms intact, app.js runs under a DOM stub and still renders the 6-item preview and the full 37-item menu. All 5 files served over local HTTP (200): index.html, menu.html, app.js, styles.css, logo.jpg.
- Google review link re-added (19 Nov 2026, change of plan — instead of a review on WhatsApp): a single "Write a Review on Google" button in a small Reviews panel (`#reviewsPanel`, after Gallery) and in the footer, linking directly to the cafe's Google listing share link `https://share.google/OY9cJPErdoLdT4YHh`. No WhatsApp review option, no Google Maps reviews embed, no "Read reviews on Google" section, no review text. The owner-page Google Reviews editor stays removed.
- Separate birthday/contact/job pages + MNC pill button system test (`/tmp/test-separate-pages.js`, 55 checks, 0 failed, 19 Nov 2026): homepage has zero `<form>` tags and no birthday/contact/job form fields — only "Birthday Booking →" / "Contact Us →" / "Work With Us →" pill buttons to birthday.html / contact.html / job.html; each new page has exactly 1 Netlify form with its original name (birthday / contact / job), honeypot and `form-card` class, all original field ids, and a "Back to home" link; all nav/footer links on all 5 pages point to the new pages (no old `#birthdayPanel` / `#jobsPanel` / `#contactPanel` links); Google review share link present on all 5 pages (panel + footer on index); CSS has no default-blue colour value, base links are purple with no underline, `.btn` is a 999px pill with shadow (primary purple, secondary outlined cream, brown filled), content links and footer links are pill chips with a purple hover, submit buttons are pills; app.js runs under a DOM stub both as the homepage (no packageGrid/menuGrid — preview and gallery still render) and as the birthday page (packages render, bkPackage/bfPackage/bfTime/bkTime selects populated). All 8 files served over local HTTP (200): index.html, menu.html, birthday.html, contact.html, job.html, app.js, styles.css, logo.jpg.
