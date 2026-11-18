# Star's Cafe — Nalasopara East

A premium, mobile-first **display / marketing website** for **Star's Cafe, Since 2022** —
B-01, Laxmi Dhule Complex, near Achole Talav Gate No. 2, Nalasopara East, Palghar 401209.
Phone 9326222019, starscafe466@gmail.com, open 9am–11pm daily. Veg cafe, ₹350 for two.
Dine-in / takeout / delivery / outdoor seating.

**This is NOT an ordering website.** There is no cart, no Add to cart, no ordering by
table number, no live order status, and no staff admin. It is a display site to market
the cafe: hero, menu, birthday packages, offers, Google reviews, location and Instagram.

Plain HTML/CSS/JS — no build step, no backend server, no heavy external libraries.
All editable content (menu, banners, packages, terms, birthday enquiries) is stored in
the browser with `localStorage`, so it works as a static deploy and demo.

## Files

- [index.html](sandbox://workspace/stars-cafe-app/index.html) — structure: sticky header (real logo + Owner button, hamburger three-line menu on mobile with Home, Menu, Gallery, Birthday Bookings, Offers, Reviews, Jobs, Location, Contact, Instagram; desktop nav is plain text links: Menu, Birthdays, Gallery, Reviews, Jobs, Visit Us), large hero with the real logo and only four call-to-action buttons (View Menu, Book a Birthday, Get Directions, Call), About, display Menu, Gallery, birthday booking showcase, Offers (banners, Combo of the Day, Loyalty Offer), Google Reviews, Location & basics, Contact, Jobs (Work with us), terms; footer (3 columns: About, Quick links, Contact). Section order on the page: Hero, About, Menu, Gallery, Birthday, Offers, Reviews, Location, Contact, Jobs, Footer.
- [app.js](sandbox://workspace/stars-cafe-app/app.js) — all logic: display menu (search/filter/sort, no cart), gallery showcase, banners, Combo of the Day, Loyalty Offer, birthday enquiry via WhatsApp, owner login and editors, Google Reviews settings, scroll-in animations.
- [styles.css](sandbox://workspace/stars-cafe-app/styles.css) — warm & cosy theme (cream + brown, purple accents), mobile-first, large touch buttons, premium hero, hover effects, scroll animations, gallery cards, big birthday banner, polished footer.
- [logo.jpg](sandbox://workspace/stars-cafe-app/logo.jpg) — the cafe's real logo (Star's Cafe, Since 2022, purple/black). Used as the header logo, the large hero logo and the favicon; the inline SVG logo in the header is the fallback if the image fails to load.

## Redesign — clean traditional website (19 Nov 2026)

After the user's feedback ("too many buttons everywhere", "footer is very poor",
"hide the specifications"), the site was redesigned as a clean, traditional website:

- **"Top Rated Cafe in Nalasopara" badge** — a prominent purple badge in the hero
  and in the Reviews section with the exact wording "Top Rated Cafe in
  Nalasopara — 4.9 ★ (199 Google reviews)". Based on the verified 4.9/5 Google
  rating from 199 reviews — not a numbered #1 claim.
- **Order on Zomato / Swiggy** — two clean buttons in the menu area ("Order on
  Zomato", "Order on Swiggy"). These are **search links only** — Zomato search
  and Swiggy search for "Star's Cafe Nalasopara East". No Zomato/Swiggy
  restaurant URL or ID was invented; the owner should replace them with the
  cafe's exact Zomato/Swiggy restaurant links when available.
- **Verified ratings** — Google **4.9 ★ (199 Google reviews)** and Justdial **4.8/5**
  (checked live 19 Nov 2026 from the Google listing), shown prominently in the
  hero and in the Reviews section. The Reviews section also quotes the Google
  listing description: "Relaxed lakeside cafe offering diverse menu options
  including pizza and burgers." No other rating is claimed.
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
  to select it in the enquiry form), and the Reviews / Location / Contact
  buttons are plain text links instead. Owner-page editing buttons are unchanged
  (they are admin controls, not visitor clutter).
- **Item specifications hidden.** Menu rows now show name, veg dot and price only —
  the `MENU_DESC` short descriptions and the category/spec line are removed
  (no description text anywhere on a menu card). Gallery cards show name and
  category only, no price.
- **Footer rebuilt properly** — 3 columns: About Star's Cafe (with Instagram link),
  Quick links (Menu, Gallery, Birthday bookings, Work with us, Reviews), and
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
- **Menu (display only)** — Zomato/Swiggy-style compact rows: food image on the right, item name, veg dot and price on the left (no descriptions / specifications), with category tabs in logical order (All, Combo Packs, Pizza, Sandwich, Burger, Fries, Pasta, Maggie, Wedges, Nachos, Fried Rice, Noodles, Tea, Coffee, Mojito, Milkshake, Freakshake, Dessert, Icecream, Drinks), pill search, veg-only filter and sort. **No cart, no ordering.**
- **Birthday bookings (showcase)** — Basic / Premium / Deluxe packages (owner-editable), date + time-slot picker, name/phone/guests/note — enquiry opens WhatsApp to 919326222019 with everything prefilled. This is a booking enquiry, not an order.
- **Reviews:** a "What customers say on Google" section shows Google reviews on-site in a Google Maps view, with a "Read reviews on Google" text link and a "Write a review on WhatsApp" text link (WhatsApp to 919326222019 with "I would like to leave a review for Star's Cafe" prefilled).
- **Location & basics** — full address, Get Directions link, phone, email, hours, veg, ₹350 for two, and a "Follow us on Instagram" link. Instagram: @stars_cafe_since2022, also linked in the footer.
- **Contact** — dedicated Contact section: phone 9326222019 (tap to call), WhatsApp, email starscafe466@gmail.com, address, hours 9am–11pm, Get Directions, and Instagram @stars_cafe_since2022 — plus a **contact/enquiry form (Netlify Forms, `contact`)**: name (required), phone (required), email (optional), subject — Enquiry / Birthday Booking / Feedback — and message (required). Submissions are captured by Netlify, not by any JavaScript or backend.
- **Terms & conditions** (owner-editable).

## Owner only

- **Owner** — login **owner / stars123** (shown on the login screen; **demo only, not real security**). The owner can edit: menu (add items, edit price, mark available/unavailable, add/change/remove food photos), birthday packages, banner offers (add / edit / enable / disable offer and birthday banners), **Combo of the Day** (name, items, price, banner, on/off), **Loyalty Offer** (offer, terms, on/off), **Google Reviews** (Google Place ID and/or Google Maps reviews link), terms & conditions, and see birthday enquiries.
- There is **no staff view and no staff login** — staff order handling was removed with the ordering pivot.

Terms & conditions (owner-editable) cover: advance payment confirms a booking, cancellation/refund rules, fixed time slot with extra time charged, damage to property charged, outside food/cake rules, guest count, and the cafe's right to cancel for safety reasons.

## What was removed in the ordering → display pivot (19 Nov 2026)

Cart, Add to cart / quantity controls, order by table number, live order status (Received → Preparing → Ready → Served), staff live orders and order management, the entire Staff Admin view and staff login (staff / stars123), order totals / sales / best sellers, and all `sc_orders` order code. The site title changed from "Star's Cafe — Order Online" to "Star's Cafe — Nalasopara East". The live site at https://stars-cafe-order-online.netlify.app/ still serves the old ordering version until it is redeployed with these files.

## ⚠️ Prices are placeholders

Menu and package prices in the site are **placeholder estimates**, clearly marked in the site ("Prices are placeholder estimates for now — prices to be updated with the new menu"). The cafe menu has changed; the new menu arrives in the morning and prices must be updated then — in the site via the Owner menu editing, or in `app.js` (`DEFAULT_MENU` / `DEFAULT_PKGS`).

Food photos are pure CSS gradient placeholders with the item name (no external images, so nothing breaks offline). The owner can replace photos with real dish photos (upload, max about 180 KB after shrinking, in the Owner menu management).

## Premium look

Large hero with the real logo, bold typography, warm cosy cream/brown with purple accents, smooth scroll-in animations (IntersectionObserver, no library, with a safety timeout so content is never left hidden), hover lift on menu / gallery / package cards and buttons, a gallery-style food showcase, a big birthday banner, standout offer banners, clean spacing and a polished footer. Mobile-first and fast — no heavy external libraries.

## Instagram

Follow us on Instagram — **@stars_cafe_since2022**,
https://www.instagram.com/stars_cafe_since2022 — linked as a button in the Location & basics section and in the footer on every view. Link only; no Instagram feed is embedded.

## Reviews — Google Reviews, not an inbuilt rating system

There is no inbuilt rating system on this site. Reviews live on Google:

- **On-site:** the site has a "What customers say on Google" section with an embedded Google Maps view for "Star's Cafe Nalasopara East", so customers can see Google reviews on the website, plus a "Read reviews on Google" text link.
- **Direct review:** a "Write a Review" button opens WhatsApp to 919326222019 with "I would like to leave a review for Star's Cafe" prefilled.
- **Owner settings:** in the Owner page, the owner can paste the cafe's Google Business Profile **Place ID** and/or a **Google Maps reviews link**. When a Place ID is set, the on-site map shows that exact place and the button opens Google Maps for it; when only a reviews link is set, the button uses that link. No Place ID is invented — until the owner adds one, the map uses a name search for "Star's Cafe Nalasopara East". Live on-site Google reviews for the cafe's own profile need that Place ID.

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
