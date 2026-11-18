/* Star's Cafe — Nalasopara East. DISPLAY / MARKETING website, NO ordering.
   Plain JS, no backend. Data lives in localStorage.
   NOTE: menu/package prices below are PLACEHOLDER estimates, NOT verified prices.
   They are marked in the site as "prices to be updated with new menu". */
'use strict';

var LS = { menu:'sc_menu', banners:'sc_banners', pkgs:'sc_pkgs', terms:'sc_terms', bookings:'sc_bookings', combo:'sc_combo', loyalty:'sc_loyalty', session:'sc_session' };
function load(key, fallback){ try{ var v = localStorage.getItem(key); return v ? JSON.parse(v) : fallback; }catch(e){ return fallback; } }
function save(key, val){ try{ localStorage.setItem(key, JSON.stringify(val)); }catch(e){} }
function esc(s){ return String(s==null?'':s).replace(/[&<>"']/g, function(c){ return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]; }); }
function rs(n){ return '\u20B9' + Number(n||0).toLocaleString('en-IN'); }

/* ---------- Default data (placeholders) ---------- */
var DEFAULT_MENU = [
  {id:'m1', name:'Margherita Pizza (9 inch)', cat:'Pizza', price:199, veg:true,  img:'pizza',    out:false},
  {id:'m2', name:'Onion Pizza (9 inch)',      cat:'Pizza', price:219, veg:true,  img:'pizza',    out:false},
  {id:'m3', name:'Corn Pizza (9 inch)',       cat:'Pizza', price:229, veg:true,  img:'pizza',    out:false},
  {id:'m4', name:'Capsicum Pizza (9 inch)',   cat:'Pizza', price:229, veg:true,  img:'pizza',    out:false},
  {id:'m5', name:'Paneer Pizza (9 inch)',     cat:'Pizza', price:259, veg:true,  img:'pizza',    out:false},
  {id:'m6', name:'Veg Sandwich',              cat:'Sandwich', price:99,  veg:true,  img:'sandwich', out:false},
  {id:'m7', name:'Grilled Cheese Sandwich',   cat:'Sandwich', price:129, veg:true,  img:'sandwich', out:false},
  {id:'m8', name:'Veg Burger',                cat:'Burger', price:119, veg:true,  img:'sandwich', out:false},
  {id:'m9', name:'Cheese Burger',             cat:'Burger', price:149, veg:true,  img:'sandwich', out:false},
  {id:'m10', name:'French Fries',             cat:'Fries', price:89,  veg:true, img:'fries', out:false},
  {id:'m11', name:'Peri Peri Fries',          cat:'Fries', price:109, veg:true, img:'fries', out:false},
  {id:'m12', name:'Garlic Bread',             cat:'Fries', price:99,  veg:true,  img:'fries', out:false},
  {id:'m13', name:'White Sauce Pasta',        cat:'Pasta', price:169, veg:true,  img:'default', out:false},
  {id:'m14', name:'Red Sauce Pasta',          cat:'Pasta', price:159, veg:true,  img:'default', out:false},
  {id:'m15', name:'Masala Maggie',            cat:'Maggie', price:79,  veg:true,  img:'default', out:false},
  {id:'m16', name:'Cheese Maggie',            cat:'Maggie', price:99,  veg:true,  img:'default', out:false},
  {id:'m17', name:'Potato Wedges',            cat:'Wedges', price:99,  veg:true,  img:'fries', out:false},
  {id:'m18', name:'Loaded Nachos',            cat:'Nachos', price:149, veg:true,  img:'fries', out:false},
  {id:'m19', name:'Masala Tea',               cat:'Tea', price:29, veg:true, img:'drinks', out:false},
  {id:'m20', name:'Cold Coffee',              cat:'Coffee', price:99,  veg:true, img:'drinks', out:false},
  {id:'m21', name:'Hot Coffee',               cat:'Coffee', price:69,  veg:true, img:'drinks', out:false},
  {id:'m22', name:'Mint Mojito',              cat:'Mojito', price:99,  veg:true,  img:'drinks', out:false},
  {id:'m23', name:'Blue Lagoon Mojito',       cat:'Mojito', price:119, veg:true,  img:'drinks', out:false},
  {id:'m24', name:'Chocolate Milkshake',      cat:'Milkshake', price:129, veg:true, img:'drinks', out:false},
  {id:'m25', name:'Oreo Milkshake',           cat:'Milkshake', price:149, veg:true, img:'drinks', out:false},
  {id:'m26', name:'Chocolate Freakshake',     cat:'Freakshake', price:199, veg:true, img:'dessert', out:false},
  {id:'m27', name:'Veg Fried Rice',           cat:'Fried Rice', price:139, veg:true, img:'default', out:false},
  {id:'m28', name:'Schezwan Fried Rice',      cat:'Fried Rice', price:149, veg:true, img:'default', out:false},
  {id:'m29', name:'Veg Hakka Noodles',        cat:'Noodles', price:139, veg:true,  img:'default', out:false},
  {id:'m30', name:'Schezwan Noodles',         cat:'Noodles', price:149, veg:true,  img:'default', out:false},
  {id:'m31', name:'Chocolate Brownie',        cat:'Dessert', price:99,  veg:true,  img:'dessert', out:false},
  {id:'m32', name:'Vanilla Icecream',         cat:'Icecream', price:69,  veg:true,  img:'dessert', out:false},
  {id:'m33', name:'Chocolate Icecream',       cat:'Icecream', price:79,  veg:true,  img:'dessert', out:false},
  {id:'m34', name:'Cold Drink',               cat:'Drinks', price:39,  veg:true,  img:'drinks', out:false},
  {id:'m35', name:'Mineral Water',            cat:'Drinks', price:20,  veg:true,  img:'drinks', out:false},
  {id:'m36', name:'Pizza + Fries Combo',       cat:'Combo Packs', price:299, veg:true, img:'pizza', out:false},
  {id:'m37', name:'Burger + Fries + Cold Drink Combo', cat:'Combo Packs', price:249, veg:true, img:'sandwich', out:false}
];
var DEFAULT_BANNERS = [
  {id:'b1', title:'Birthday bookings are open!', text:'Celebrate at Star\u2019s Cafe — packages from \u20B91,499. Enquire on WhatsApp in one tap.', kind:'birthday', enabled:true},
  {id:'b2', title:'Pizza + Freakshake combo', text:'Our most-loved combo — ask at the counter for today\u2019s offer.', kind:'offer', enabled:true},
  {id:'b3', title:'Open 9am \u2013 11pm, every day', text:'Veg cafe, dine-in, takeout, delivery & outdoor seating. \u20B9350 for two.', kind:'offer', enabled:true}
];
var DEFAULT_PKGS = [
  {id:'p1', name:'Basic', price:1499, features:['2 hours, up to 10 guests','Birthday decoration (basic)','1 cake (500g)','Tea / coffee for guests'], featured:false},
  {id:'p2', name:'Premium', price:2999, features:['3 hours, up to 20 guests','Full decoration + balloons','1 cake (1kg)','Snacks + mocktails for guests','Photo corner'], featured:true},
  {id:'p3', name:'Deluxe', price:4999, features:['4 hours, up to 30 guests','Premium decoration + theme','1 cake (2kg)','Full snacks + shakes','Dedicated host + photography'], featured:false}
];
/* Combo of the Day and Loyalty Offer — owner-editable, shown on the site
   when enabled. Prices below are PLACEHOLDER estimates, like the menu. */
var DEFAULT_COMBO = { enabled:true, name:'Pizza + Fries Combo', items:'Margherita Pizza (9 inch) + French Fries + Cold Drink', price:299, banner:'Today only — our most-loved combo at one special price!' };
var DEFAULT_LOYALTY = { enabled:true, title:'Loyalty Offer', text:'Order 5 times, get a coffee free!', terms:'One stamp per visit above \u20B9199. Collect 5 stamps and get a free hot coffee. Stamps are tracked in the cafe — please ask staff after every visit. Not valid with other offers. The cafe may change or stop this offer at any time.' };
var DEFAULT_TERMS = ['1. A birthday booking is confirmed only after advance payment. Without advance payment, the slot is not held.',
'2. Cancellation: cancel 48 hours or more before the slot for a full refund of the advance. Cancel less than 48 hours before, and the advance is non-refundable.',
'3. Your time slot is fixed. Extra time beyond your slot is charged per hour, if the slot is free.',
'4. Any damage to cafe property, furniture, crockery or decoration by guests will be charged at actual cost.',
'5. Outside food is not allowed, except a birthday cake with prior permission. Outside drinks and alcohol are not allowed.',
'6. The guest count in your booking is the maximum. Extra guests beyond the package limit may be charged.',
'7. The cafe may cancel or reschedule a booking for safety, maintenance, or reasons beyond its control, with a full refund of the advance.',
'8. Please arrive on time. The cafe is not responsible for items left behind.',
'9. Food orders during a birthday booking are charged separately, unless included in your package.',
'10. By booking, you agree to these terms and to the cafe\u2019s house rules.'
].join('\n');
var TIME_SLOTS = ['11:00 AM - 1:00 PM','1:00 PM - 3:00 PM','3:00 PM - 5:00 PM','5:00 PM - 7:00 PM','7:00 PM - 9:00 PM','9:00 PM - 11:00 PM'];

/* ---------- State ---------- */
var menu = load(LS.menu, null) || DEFAULT_MENU.slice();
var banners = load(LS.banners, null) || DEFAULT_BANNERS.slice();
var packages = load(LS.pkgs, null) || DEFAULT_PKGS.slice();
var terms = load(LS.terms, null) || DEFAULT_TERMS;
var bookings = load(LS.bookings, []);
var combo = load(LS.combo, null) || Object.assign({}, DEFAULT_COMBO);
var loyalty = load(LS.loyalty, null) || Object.assign({}, DEFAULT_LOYALTY);
var activeCat = 'All';
var bannerIdx = 0;
/* Food-photo uploads: pending data URL (small, compressed) for the
   "add menu item" form, plus the menu item targeted by "Change photo". */
var pendingMenuImg = null;
var photoTargetMenuId = null;
var MAX_PHOTO_BYTES = 180000; /* ~180 KB data URL, so localStorage does not overflow */

/* Read an image file, downscale it on a canvas and return a small JPEG data URL.
   done(dataUrl) on success, fail(message) on any problem. Never throws. */
function compressImageFile(file, done, fail){
  if(!file || !file.type || file.type.indexOf('image/')!==0){ fail('Please choose an image file (photo).'); return; }
  if(typeof FileReader === 'undefined' || typeof Image === 'undefined' || typeof document === 'undefined' || !document.createElement){
    fail('Photo upload is not supported in this browser.'); return;
  }
  var reader = new FileReader();
  reader.onerror = function(){ fail('Could not read that photo. Please try another one.'); };
  reader.onload = function(){
    var img = new Image();
    img.onerror = function(){ fail('That file is not a readable photo. Please try another one.'); };
    img.onload = function(){
      try{
        var dataUrl = downscaleImage(img, 480, 0.72);
        if(dataUrl.length > MAX_PHOTO_BYTES) dataUrl = downscaleImage(img, 320, 0.6);
        if(dataUrl.length > MAX_PHOTO_BYTES){ fail('That photo is too large even after shrinking — please try a smaller photo.'); return; }
        done(dataUrl);
      }catch(e){ fail('Could not process that photo. Please try another one.'); }
    };
    img.src = reader.result;
  };
  reader.readAsDataURL(file);
}
function downscaleImage(img, maxDim, quality){
  var w = img.naturalWidth || img.width, h = img.naturalHeight || img.height;
  var scale = Math.min(1, maxDim / Math.max(w, h));
  var canvas = document.createElement('canvas');
  canvas.width = Math.max(1, Math.round(w * scale));
  canvas.height = Math.max(1, Math.round(h * scale));
  canvas.getContext('2d').drawImage(img, 0, 0, canvas.width, canvas.height);
  return canvas.toDataURL('image/jpeg', quality);
}
function onMenuPhotoChange(input){
  var f = input.files && input.files[0];
  if(!f){ pendingMenuImg = null; showMenuPhotoPreview(); return; }
  compressImageFile(f, function(dataUrl){
    pendingMenuImg = dataUrl; showMenuPhotoPreview();
  }, function(msg){
    alert(msg); input.value = ''; pendingMenuImg = null; showMenuPhotoPreview();
  });
}
function showMenuPhotoPreview(){
  var img = document.getElementById('newPhotoPreview');
  var btn = document.getElementById('newPhotoRemove');
  if(pendingMenuImg){ img.src = pendingMenuImg; img.classList.remove('hidden'); btn.classList.remove('hidden'); }
  else{ img.removeAttribute('src'); img.classList.add('hidden'); btn.classList.add('hidden'); }
}
function removeMenuPhoto(){
  pendingMenuImg = null;
  var input = document.getElementById('newPhoto'); if(input) input.value = '';
  showMenuPhotoPreview();
}
/* "Change photo" on an owner menu card: opens the hidden picker for that item. */
function changeMenuPhoto(id){
  photoTargetMenuId = id;
  var input = document.getElementById('changePhotoInput');
  if(input){ input.value = ''; input.click(); }
}
function onChangeMenuPhoto(input){
  var f = input.files && input.files[0];
  if(!f || !photoTargetMenuId) return;
  var id = photoTargetMenuId; photoTargetMenuId = null;
  compressImageFile(f, function(dataUrl){
    var m = menu.find(function(x){ return x.id === id; }); if(!m) return;
    m.photo = dataUrl; save(LS.menu, menu);
    renderOwner(); renderMenu();
  }, function(msg){
    alert(msg); input.value = '';
  });
}
function removeMenuItemPhoto(id){
  var m = menu.find(function(x){ return x.id === id; }); if(!m) return;
  delete m.photo; save(LS.menu, menu);
  renderOwner(); renderMenu();
}
var session = load(LS.session, null); /* 'owner' | null */
save(LS.menu, menu); save(LS.banners, banners); save(LS.pkgs, packages); save(LS.terms, terms); save(LS.bookings, bookings); save(LS.combo, combo); save(LS.loyalty, loyalty);

/* ---------- Views / login (owner only) ---------- */
/* Hamburger (three-line menu bar) — mobile navigation. */
function toggleMobileMenu(){
  var m = document.getElementById('mobileMenu');
  var btn = document.getElementById('hamburgerBtn');
  if(!m || !btn) return;
  var open = m.classList.toggle('open');
  btn.classList.toggle('active', open);
  btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  btn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
}
function closeMobileMenu(){
  var m = document.getElementById('mobileMenu');
  var btn = document.getElementById('hamburgerBtn');
  if(m) m.classList.remove('open');
  if(btn){ btn.classList.remove('active'); btn.setAttribute('aria-expanded', 'false'); btn.setAttribute('aria-label', 'Open menu'); }
}
/* Go to a section on the site view (null = Home / top). Closes the menu. */
function goToSection(id){
  closeMobileMenu();
  showView('site');
  if(!id){ window.scrollTo({top:0, behavior:'smooth'}); return; }
  var el = document.getElementById(id);
  if(el) el.scrollIntoView({behavior:'smooth'});
}
document.addEventListener('keydown', function(e){ if(e.key === 'Escape') closeMobileMenu(); });

function showView(name){
  /* menu.html has no view sections — plain links handle navigation there. */
  if(!document.getElementById('view-site') || !document.getElementById('view-owner')) return;
  closeMobileMenu();
  ['site','owner'].forEach(function(v){
    document.getElementById('view-'+v).classList.toggle('active', v===name);
  });
  if(name==='owner') renderOwner();
  if(name==='site'){
    renderMenu(); renderMenuPreview(); renderBanners(); renderCombo(); renderLoyalty(); renderPackages(); renderTerms();
    /* Leaving the owner view clears the #owner hash (best-effort). */
    try{ if(window.location.hash === '#owner') history.replaceState(null, '', window.location.pathname + window.location.search); }catch(e){}
  }
  window.scrollTo({top:0});
}
function login(role){
  var u = document.getElementById(role+'User').value.trim();
  var p = document.getElementById(role+'Pass').value;
  var ok = (role==='owner' && u==='owner' && p==='stars123');
  var msg = document.getElementById(role+'LoginMsg');
  if(!ok){ msg.textContent = 'Wrong username or password. Demo: owner / stars123'; return; }
  session = role; save(LS.session, session); msg.textContent='';
  renderOwner();
}
function logout(role){
  if(session===role){ session=null; save(LS.session, session); }
  document.getElementById(role+'Login').classList.remove('hidden');
  document.getElementById(role+'App').classList.add('hidden');
  document.getElementById(role+'User').value=''; document.getElementById(role+'Pass').value='';
}

/* ---------- Site: banners, display menu ---------- */
function renderBanners(){
  var list = banners.filter(function(b){ return b.enabled; });
  var area = document.getElementById('bannerArea'), nav = document.getElementById('bannerNav');
  if(!area || !nav) return;
  if(bannerIdx>=list.length) bannerIdx=0;
  var b = list[bannerIdx];
  area.innerHTML = '<div class="banner '+esc(b.kind)+'"><h2>'+esc(b.title)+'</h2><p>'+esc(b.text)+'</p></div>';
  nav.innerHTML = list.map(function(_,i){
    return '<button class="'+(i===bannerIdx?'active':'')+'" onclick="bannerIdx='+i+';renderBanners()" aria-label="Banner '+(i+1)+'">'+(i+1)+'</button>';
  }).join('');
}
/* Combo of the Day + Loyalty Offer — shown on the site only when enabled. */
function renderCombo(){
  var area = document.getElementById('comboArea');
  if(!area) return;
  if(!combo || !combo.enabled || !combo.name){ area.innerHTML=''; return; }
  area.innerHTML = '<div class="panel combo-panel"><h2>\u2605 Combo of the Day</h2>' +
    '<h3>'+esc(combo.name)+'</h3>' +
    '<p>'+esc(combo.items||'')+'</p>' +
    '<p class="price">'+rs(combo.price)+'</p>' +
    (combo.banner ? '<p>'+esc(combo.banner)+'</p>' : '') +
    '<p class="muted">Ask at the counter for today\u2019s Combo of the Day, or call 9326222019.</p></div>';
}
function renderLoyalty(){
  var area = document.getElementById('loyaltyArea');
  if(!area) return;
  if(!loyalty || !loyalty.enabled || !loyalty.title){ area.innerHTML=''; return; }
  area.innerHTML = '<div class="panel loyalty-panel"><h2>\u2605 '+esc(loyalty.title)+'</h2>' +
    '<p><b>'+esc(loyalty.text||'')+'</b></p>' +
    (loyalty.terms ? '<p class="muted">'+esc(loyalty.terms)+'</p>' : '') + '</div>';
}
var CATEGORY_ORDER = ['All','Combo Packs','Pizza','Sandwich','Burger','Fries','Pasta','Maggie','Wedges','Nachos','Fried Rice','Noodles','Tea','Coffee','Mojito','Milkshake','Freakshake','Dessert','Icecream','Drinks'];
function categories(){
  var cats = []; CATEGORY_ORDER.forEach(function(c){ if(c==='All' || menu.some(function(m){return m.cat===c;})) cats.push(c); });
  menu.forEach(function(m){ if(cats.indexOf(m.cat)<0) cats.push(m.cat); }); return cats;
}
function renderMenu(){
  /* Full menu lives on menu.html only. On the homepage there is no
     categoryChips/menuGrid — the preview is rendered by renderMenuPreview. */
  var chips = document.getElementById('categoryChips');
  var grid = document.getElementById('menuGrid');
  if(!chips || !grid) return;
  chips.innerHTML = categories().map(function(c){
    return '<button class="chip '+(c===activeCat?'active':'')+'" onclick="activeCat=\''+esc(c)+'\';renderMenu()">'+esc(c)+'</button>';
  }).join('');
  var q = (document.getElementById('searchInput').value||'').toLowerCase();
  var vegOnly = document.getElementById('vegOnly').checked;
  var sort = document.getElementById('sortSelect').value;
  var list = menu.filter(function(m){
    return (activeCat==='All'||m.cat===activeCat) && (!vegOnly||m.veg) &&
      (!q || m.name.toLowerCase().indexOf(q)>=0 || m.cat.toLowerCase().indexOf(q)>=0);
  });
  if(sort==='low') list.sort(function(a,b){return a.price-b.price;});
  if(sort==='high') list.sort(function(a,b){return b.price-a.price;});
  if(sort==='name') list.sort(function(a,b){return a.name.localeCompare(b.name);});
  if(!grid){ return; }
  if(!list.length){ grid.innerHTML = '<p class="muted">No items match. Try another search or category.</p>'; return; }
  grid.innerHTML = list.map(function(m){
    /* Traditional compact row: name, veg dot and price on the left,
       food image on the right. No descriptions / specifications. Display only — no cart. */
    return '<article class="menu-card '+(m.out?'out':'')+'">' +
      '<div class="menu-body"><h3>'+(m.veg?'<span class="veg-dot" title="Veg"></span>':'')+esc(m.name)+'</h3>' +
      '<p class="price">'+rs(m.price)+'</p>' +
      (m.out?' <p class="muted"><b>Currently unavailable</b></p>':'') +
      '</div>' +
      (m.photo ? '<img class="food-photo" src="'+esc(m.photo)+'" alt="Photo of '+esc(m.name)+'">' :
        '<div class="food-img '+esc(m.img||'default')+'" aria-label="'+esc(m.name)+'"></div>') +
      '</article>';
  }).join('');
}

/* Homepage menu preview — a few most-loved items + a link to menu.html.
   The full menu lives on menu.html only. */
var PREVIEW_IDS = ['m1','m5','m20','m26','m15','m8'];
function renderMenuPreview(){
  var grid = document.getElementById('menuPreviewGrid');
  if(!grid) return;
  var items = PREVIEW_IDS.map(function(id){ return menu.find(function(m){ return m.id===id; }); }).filter(Boolean);
  grid.innerHTML = items.map(function(m){
    return '<article class="menu-card '+(m.out?'out':'')+'">' +
      '<div class="menu-body"><h3>'+(m.veg?'<span class="veg-dot" title="Veg"></span>':'')+esc(m.name)+'</h3>' +
      '<p class="price">'+rs(m.price)+'</p>' +
      (m.out?' <p class="muted"><b>Currently unavailable</b></p>':'') +
      '</div>' +
      (m.photo ? '<img class="food-photo" src="'+esc(m.photo)+'" alt="Photo of '+esc(m.name)+'">' :
        '<div class="food-img '+esc(m.img||'default')+'" aria-label="'+esc(m.name)+'"></div>') +
      '</article>';
  }).join('');
}

/* Gallery showcase — a few most-loved items, large cards, no ordering. */
var GALLERY_IDS = ['m1','m26','m20','m24','m5','m18'];
function renderGallery(){
  var grid = document.getElementById('galleryGrid');
  if(!grid) return;
  var items = GALLERY_IDS.map(function(id){ return menu.find(function(m){ return m.id===id; }); }).filter(Boolean);
  grid.innerHTML = items.map(function(m){
    return '<article class="gallery-card">' +
      (m.photo ? '<img class="gallery-photo" src="'+esc(m.photo)+'" alt="Photo of '+esc(m.name)+'">' :
        '<div class="gallery-img '+esc(m.img||'default')+'">'+esc(m.name)+'</div>') +
      '<div class="gallery-body"><h3>'+esc(m.name)+'</h3>' +
      '<p class="muted">'+esc(m.cat)+' &middot; Veg</p></div></article>';
  }).join('');
}

/* ---------- Birthday enquiry (WhatsApp, not an order) ---------- */
function renderPackages(){
  var grid = document.getElementById('packageGrid');
  if(!grid) return;
  grid.innerHTML = packages.map(function(p){
    return '<div class="pkg '+(p.featured?'featured':'')+'" onclick="selectPackage(\''+p.id+'\')" title="Select '+esc(p.name)+' below"><h3>'+esc(p.name)+(p.featured?' \u2605':'')+'</h3>' +
      '<p class="price">'+rs(p.price)+'</p><ul>' + p.features.map(function(f){ return '<li>'+esc(f)+'</li>'; }).join('') + '</ul>' +
      '<p class="muted">Tap to select this package below.</p></div>';
  }).join('');
  var sel = document.getElementById('bkPackage');
  if(!sel) return;
  sel.innerHTML = packages.map(function(p){ return '<option value="'+p.id+'">'+esc(p.name)+' — '+rs(p.price)+'</option>'; }).join('');
  var bfSel = document.getElementById('bfPackage');
  if(bfSel) bfSel.innerHTML = packages.map(function(p){ return '<option value="'+p.name+' — '+rs(p.price)+'">'+esc(p.name)+' — '+rs(p.price)+'</option>'; }).join('');
  var bfTime = document.getElementById('bfTime');
  if(bfTime) bfTime.innerHTML = TIME_SLOTS.map(function(t){ return '<option>'+esc(t)+'</option>'; }).join('');
  var ts = document.getElementById('bkTime');
  if(ts) ts.innerHTML = TIME_SLOTS.map(function(t){ return '<option>'+esc(t)+'</option>'; }).join('');
}
function selectPackage(id){
  document.getElementById('bkPackage').value = id;
  var p = packages.find(function(x){ return x.id===id; });
  var bfSel = document.getElementById('bfPackage');
  if(p && bfSel) bfSel.value = p.name + ' — ' + rs(p.price);
  document.getElementById('birthdayPanel').scrollIntoView({behavior:'smooth'});
}
function bookBirthdayWhatsApp(){
  var pkg = packages.find(function(p){return p.id===document.getElementById('bkPackage').value;}) || packages[0];
  var date = document.getElementById('bkDate').value;
  var time = document.getElementById('bkTime').value;
  var name = document.getElementById('bkName').value.trim();
  var phone = document.getElementById('bkPhone').value.trim();
  var guests = document.getElementById('bkGuests').value.trim();
  var note = document.getElementById('bkNote').value.trim();
  if(!date){ alert('Please pick a date for the birthday.'); return; }
  if(!name || !phone){ alert('Please enter your name and phone number.'); return; }
  var lines = ['Hello Star\u2019s Cafe! I would like to enquire about a birthday booking.',
    'Package: ' + pkg.name + ' (' + rs(pkg.price) + ')',
    'Date: ' + date, 'Time slot: ' + time,
    'Name: ' + name, 'Phone: ' + phone,
    'Guests: ' + (guests||'—'),
    'Note: ' + (note||'—'),
    'Please confirm my booking. Thank you!'];
  bookings.unshift({id:'B'+Date.now(), pkg:pkg.name, date:date, time:time, name:name, phone:phone, guests:guests, note:note});
  save(LS.bookings, bookings);
  window.open('https://wa.me/919326222019?text=' + encodeURIComponent(lines.join('\n')), '_blank');
}
function renderTerms(){ var el = document.getElementById('termsText'); if(el) el.textContent = terms; }


/* ---------- Menu editing (owner only) ---------- */
function toggleOut(id){
  var m = menu.find(function(x){return x.id===id;}); if(!m) return;
  m.out = !m.out; save(LS.menu, menu); renderOwner(); renderMenu();
}
function editPrice(id){
  var m = menu.find(function(x){return x.id===id;}); if(!m) return;
  var v = prompt('New price for ' + m.name + ' (₹):', m.price);
  if(v===null) return; var n = Number(v); if(isNaN(n)||n<0){ alert('Enter a valid price.'); return; }
  m.price = n; save(LS.menu, menu); renderOwner(); renderMenu();
}
function addMenuItem(){
  var name = document.getElementById('newName').value.trim();
  var cat = document.getElementById('newCat').value.trim() || 'Other';
  var price = Number(document.getElementById('newPrice').value);
  if(!name || isNaN(price)){ alert('Enter a name and a price.'); return; }
  menu.push({id:'m'+Date.now(), name:name, cat:cat, price:price, veg:document.getElementById('newVeg').checked, img:'default', photo:pendingMenuImg, out:false});
  save(LS.menu, menu);
  document.getElementById('newName').value=''; document.getElementById('newCat').value=''; document.getElementById('newPrice').value='';
  pendingMenuImg = null; removeMenuPhoto();
  renderOwner(); renderMenu();
}

/* ---------- Owner ---------- */
function renderOwner(){
  /* menu.html has no owner view — plain links handle navigation there. */
  if(!document.getElementById('ownerLogin') || !document.getElementById('ownerApp')) return;
  var logged = session==='owner';
  document.getElementById('ownerLogin').classList.toggle('hidden', logged);
  document.getElementById('ownerApp').classList.toggle('hidden', !logged);
  if(!logged) return;
  document.getElementById('ownMenuCount').textContent = menu.length;
  document.getElementById('ownBannerCount').textContent = banners.length;
  document.getElementById('ownPkgCount').textContent = packages.length;
  document.getElementById('ownBookingCount').textContent = bookings.length;
  document.getElementById('ownerMenu').innerHTML = menu.map(function(m){
    return '<div class="order-card"><h3>'+esc(m.name)+'</h3>' +
      (m.photo ? '<img class="menu-thumb" src="'+esc(m.photo)+'" alt="Photo of '+esc(m.name)+'">' : '') +
      '<p class="muted">'+esc(m.cat)+' &middot; '+rs(m.price)+(m.out?' &middot; Currently unavailable':'')+'</p>' +
      '<p><button class="btn small secondary" onclick="editPrice(\''+m.id+'\')">Edit price</button> ' +
      '<button class="btn small secondary" onclick="toggleOut(\''+m.id+'\')">'+(m.out?'Mark available':'Mark unavailable')+'</button> ' +
      '<button class="btn small secondary" onclick="changeMenuPhoto(\''+m.id+'\')">'+(m.photo?'Change photo':'Add photo')+'</button>' +
      (m.photo ? ' <button class="btn small secondary" onclick="removeMenuItemPhoto(\''+m.id+'\')">Remove photo</button>' : '') + '</p></div>';
  }).join('');
  /* Packages editor */
  document.getElementById('packageEditor').innerHTML = packages.map(function(p){
    return '<div class="panel"><h3>'+esc(p.name)+'</h3>' +
      '<label>Price (₹)</label><input type="number" id="pkg-price-'+p.id+'" value="'+p.price+'">' +
      '<label>Features (one per line)</label><textarea rows="4" id="pkg-feat-'+p.id+'">'+esc(p.features.join('\n'))+'</textarea>' +
      '<p><button class="btn small" onclick="savePackage(\''+p.id+'\')">Save '+esc(p.name)+'</button></p></div>';
  }).join('');
  /* Banner editor */
  document.getElementById('bannerEditor').innerHTML = banners.map(function(b){
    return '<div class="panel"><label>Title</label><input type="text" id="bn-title-'+b.id+'" value="'+esc(b.title)+'">' +
      '<label>Text</label><textarea rows="2" id="bn-text-'+b.id+'">'+esc(b.text)+'</textarea>' +
      '<label>Type</label><select id="bn-kind-'+b.id+'"><option value="offer"'+(b.kind==='offer'?' selected':'')+'>Offer banner</option><option value="birthday"'+(b.kind==='birthday'?' selected':'')+'>Birthday banner</option></select>' +
      '<label class="veg-toggle"><input type="checkbox" id="bn-on-'+b.id+'" '+(b.enabled?'checked':'')+'> Show this banner</label>' +
      '<p><button class="btn small" onclick="saveBanner(\''+b.id+'\')">Save banner</button> ' +
      '<button class="btn small secondary" onclick="deleteBanner(\''+b.id+'\')">Delete</button></p></div>';
  }).join('');
  /* Combo of the Day editor */
  document.getElementById('comboEditor').innerHTML =
    '<div class="panel"><label for="combo-name">Combo name</label><input type="text" id="combo-name" value="'+esc(combo.name)+'">' +
    '<label for="combo-items">What\u2019s in the combo</label><input type="text" id="combo-items" value="'+esc(combo.items||'')+'">' +
    '<label for="combo-price">Price (₹)</label><input type="number" id="combo-price" min="0" value="'+combo.price+'">' +
    '<label for="combo-banner">Banner text</label><textarea rows="2" id="combo-banner">'+esc(combo.banner||'')+'</textarea>' +
    '<label class="veg-toggle"><input type="checkbox" id="combo-on" '+(combo.enabled?'checked':'')+'> Show Combo of the Day on the site</label>' +
    '<p><button class="btn small" onclick="saveCombo()">Save Combo of the Day</button></p></div>';
  /* Loyalty Offer editor */
  document.getElementById('loyaltyEditor').innerHTML =
    '<div class="panel"><label for="loyalty-title">Offer title</label><input type="text" id="loyalty-title" value="'+esc(loyalty.title)+'">' +
    '<label for="loyalty-text">Offer (e.g. Order 5 times, get a coffee free)</label><input type="text" id="loyalty-text" value="'+esc(loyalty.text||'')+'">' +
    '<label for="loyalty-terms">Terms</label><textarea rows="4" id="loyalty-terms">'+esc(loyalty.terms||'')+'</textarea>' +
    '<label class="veg-toggle"><input type="checkbox" id="loyalty-on" '+(loyalty.enabled?'checked':'')+'> Show Loyalty Offer on the site</label>' +
    '<p><button class="btn small" onclick="saveLoyalty()">Save Loyalty Offer</button></p></div>';
  document.getElementById('termsEditor').value = terms;
  document.getElementById('ownerBookings').innerHTML = bookings.length ?
    bookings.map(function(b){ return '<div class="order-card"><h3>'+esc(b.pkg)+' — '+esc(b.date)+' '+esc(b.time)+'</h3><p>'+esc(b.name)+' &middot; '+esc(b.phone)+' &middot; Guests: '+esc(b.guests||'—')+'</p><p class="muted">'+esc(b.note||'')+'</p></div>'; }).join('') :
    '<p class="muted">No birthday enquiries yet in this browser.</p>';
}
function savePackage(id){
  var p = packages.find(function(x){return x.id===id;}); if(!p) return;
  p.price = Number(document.getElementById('pkg-price-'+id).value)||p.price;
  p.features = document.getElementById('pkg-feat-'+id).value.split('\n').map(function(s){return s.trim();}).filter(Boolean);
  save(LS.pkgs, packages); renderPackages(); renderOwner(); alert('Package saved.');
}
function saveBanner(id){
  var b = banners.find(function(x){return x.id===id;}); if(!b) return;
  b.title = document.getElementById('bn-title-'+id).value.trim() || b.title;
  b.text = document.getElementById('bn-text-'+id).value.trim();
  b.kind = document.getElementById('bn-kind-'+id).value;
  b.enabled = document.getElementById('bn-on-'+id).checked;
  save(LS.banners, banners); renderBanners(); renderOwner(); alert('Banner saved.');
}
function saveCombo(){
  var name = document.getElementById('combo-name').value.trim();
  if(!name){ alert('Please enter a combo name.'); document.getElementById('combo-name').focus(); return; }
  combo.name = name;
  combo.items = document.getElementById('combo-items').value.trim();
  var p = Number(document.getElementById('combo-price').value);
  if(!isNaN(p) && p >= 0) combo.price = p;
  combo.banner = document.getElementById('combo-banner').value.trim();
  combo.enabled = document.getElementById('combo-on').checked;
  save(LS.combo, combo); renderCombo(); renderOwner(); alert('Combo of the Day saved.');
}
function saveLoyalty(){
  var title = document.getElementById('loyalty-title').value.trim();
  if(!title){ alert('Please enter a loyalty offer title.'); document.getElementById('loyalty-title').focus(); return; }
  loyalty.title = title;
  loyalty.text = document.getElementById('loyalty-text').value.trim();
  loyalty.terms = document.getElementById('loyalty-terms').value.trim();
  loyalty.enabled = document.getElementById('loyalty-on').checked;
  save(LS.loyalty, loyalty); renderLoyalty(); renderOwner(); alert('Loyalty Offer saved.');
}
function addBanner(){
  banners.push({id:'b'+Date.now(), title:'New offer', text:'Edit this offer text.', kind:'offer', enabled:true});
  save(LS.banners, banners); renderBanners(); renderOwner();
}
function deleteBanner(id){
  if(!confirm('Delete this banner?')) return;
  banners = banners.filter(function(b){return b.id!==id;});
  save(LS.banners, banners); renderBanners(); renderOwner();
}
function saveTerms(){
  terms = document.getElementById('termsEditor').value;
  save(LS.terms, terms); renderTerms();
  document.getElementById('termsSaved').textContent = 'Saved.';
}

/* ---------- Init ---------- */
renderBanners();
renderCombo();
renderLoyalty();
renderMenu();
renderMenuPreview();
renderGallery();
renderPackages();
renderTerms();
setInterval(renderBanners, 8000); /* rotate banners */
/* Owner access: the hamburger menu's small bottom "Owner" link, plus the
   hidden #owner URL (index.html#owner) — no Owner button on the main page. */
function openOwnerFromHash(){ if(window.location.hash === '#owner') showView('owner'); }
openOwnerFromHash();
window.addEventListener('hashchange', openOwnerFromHash);
/* Deep links from menu.html (e.g. index.html#birthdayPanel) scroll to that section. */
if(window.location.hash && window.location.hash !== '#owner'){
  var target = document.getElementById(window.location.hash.slice(1));
  if(target) setTimeout(function(){ target.scrollIntoView({behavior:'smooth'}); }, 150);
}
if(session==='owner') renderOwner();
/* Header shrinks smoothly on scroll (CSS .scrolled does the sizing). */
var headerEl = document.querySelector('header');
function onPageScroll(){ if(headerEl) headerEl.classList.toggle('scrolled', window.scrollY > 40); }
window.addEventListener('scroll', onPageScroll, {passive:true});
onPageScroll();
/* Smooth scroll-in animations (no external library). */
if(typeof IntersectionObserver !== 'undefined'){
  var revealObserver = new IntersectionObserver(function(entries){
    entries.forEach(function(e){ if(e.isIntersecting){ e.target.classList.add('visible'); revealObserver.unobserve(e.target); } });
  }, {threshold:0.12});
  document.querySelectorAll('.reveal, .panel, .menu-card, .gallery-card, .pkg, .stat, footer').forEach(function(el){ el.classList.add('reveal'); revealObserver.observe(el); });
  /* Safety: never leave content hidden if the observer never fires. */
  setTimeout(function(){ document.querySelectorAll('.reveal').forEach(function(el){ el.classList.add('visible'); }); }, 1500);
}
