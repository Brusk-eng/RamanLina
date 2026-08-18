/**
 * Raman & Lina Wedding Invitation — Trilingual (English / Kurdish / Arabic)
 * =======================================================================
 * Edit the CONFIG object below to customize names, date, venue, and map.
 * Each text field supports three languages: { en: "...", ku: "...", ar: "..." }.
 */

if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}

function resetPageScroll() {
  window.scrollTo(0, 0);
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
}

resetPageScroll();
window.addEventListener("pageshow", (event) => {
  if (event.persisted) {
    resetPageScroll();
  }
});

const CONFIG = {
  // Couple names
  groomName: { en: "Raman", ku: "ڕامان", ar: "رامان" },
  brideName: { en: "Lina", ku: "لینا", ar: "لينا" },
  coupleName: { en: "Raman & Lina", ku: "ڕامان و لینا", ar: "رامان و لينا" },

  // Dates (shown text only — the live countdown uses countdownDate below)
  weddingDateText: {
    en: "Sunday, 06 September 2026",
    ku: "یەکشەممە، ٦ی ئەیلوولی ٢٠٢٦",
    ar: "الأحد، ٦ أيلول ٢٠٢٦"
  },
  heroDate: {
    en: "Sunday, 06 September 2026",
    ku: "یەکشەممە، ٦ی ئەیلوولی ٢٠٢٦",
    ar: "الأحد، ٦ أيلول ٢٠٢٦"
  },

  // Live countdown target (ISO 8601 with Asia/Baghdad offset +03:00)
  countdownDate: "2026-09-06T19:00:00+03:00",

  // Venue
  venueName: { en: "White Hall Erbil", ku: "وایت هۆڵ هەولێر", ar: "وايت هول أربيل" },
  venuePlace: { en: "Big Ballroom", ku: "هۆڵی ئاهەنگی گەورە", ar: "القاعة الكبرى" },
  venueAddressLines: {
    en: ["White Hall Erbil", "Next to Social Academic Center", "Erbil", "Erbil Governorate 44001", "Iraq"],
    ku: ["وایت هۆڵ هەولێر", "لای سەنتەری ئەکادیمی کۆمەڵایەتی", "هەولێر", "پارێزگای هەولێر ٤٤٠٠١", "عێراق"],
    ar: ["وايت هول أربيل", "بجوار المركز الأكاديمي الاجتماعي", "أربيل", "محافظة أربيل ٤٤٠٠١", "العراق"]
  },

  // Google Maps
  mapUrl: "https://maps.app.goo.gl/qM9R4CKw6C7FyEYA9"
};

/* ============================================
   Translations (static UI strings)
   ============================================ */

const TRANSLATIONS = {
  en: {
    "portal.tagline": "A celebration of love",
    "portal.choose": "Choose your language",
    "gate.invited": "You Are Invited",
    "gate.hint": "Tap to enter the celebration",
    "gate.openAria": "Open wedding invitation",
    "nav.home": "Home",
    "nav.blessing": "Blessing",
    "nav.countdown": "Countdown",
    "nav.event": "Event",
    "nav.venue": "Venue",
    "nav.story": "Story",
    "nav.note": "Note",
    "ticket.title": "Your Invitation",
    "hero.tagline": "Together, start forever",
    "envelope.invited": "You are invited",
    "envelope.hint": "Tap the seal to open",
    "envelope.openAria": "Open wedding invitation",
    "controls.langAria": "Switch language",
    "controls.musicPlayAria": "Play wedding music",
    "controls.musicPauseAria": "Pause wedding music",
    "hero.weddingDay": "Wedding Day",
    "hero.thursday": "Thursday",
    "hero.scroll": "Discover",
    "blessing.soul1": "Two Souls",
    "blessing.soul2": "One Destiny",
    "blessing.sub": "A Lifetime Written by Allah",
    "blessing.dear": "Dear Family & Friends,",
    "blessing.msg1": "With gratitude to Allah, we warmly invite you to celebrate the beginning of our forever.",
    "blessing.msg2": "Your love, prayers, and presence will make this day truly unforgettable.",
    "countdown.title": "The Celebration Begins In",
    "countdown.days": "Days",
    "countdown.hours": "Hours",
    "countdown.minutes": "Minutes",
    "countdown.seconds": "Seconds",
    "countdown.today": "Today is the day.",
    "schedule.title": "Schedule of Events",
    "schedule.s1": "Guest Arrival",
    "schedule.s2": "Bride & Groom Grand Entrance",
    "schedule.s3": "Dinner Service",
    "schedule.s4": "Cake Cutting",
    "schedule.s5": "First Dance",
    "schedule.s6": "Celebration & Photography",
    "schedule.s7": "Closing Ceremony",
    "venue.title": "Venue",
    "venue.maps": "Open in Google Maps",
    "story.title": "Our Story",
    "story.s1t": "First Meeting",
    "story.s1p": "Where it all began.",
    "story.s2t": "Engagement",
    "story.s2p": "The promise of forever.",
    "story.s3t": "Wedding Day",
    "story.s3p": "The beginning of our new chapter.",
    "story.s4t": "Forever Begins",
    "story.s4p": "A lifetime written by Allah.",
    "rsvp.title": "RSVP",
    "rsvp.subtitle": "Kindly confirm your attendance.",
    "rsvp.name": "Full Name",
    "rsvp.namePh": "Your full name",
    "rsvp.phone": "Phone Number",
    "rsvp.phonePh": "Your phone number",
    "rsvp.guests": "Number of Guests",
    "rsvp.attend": "Will Attend?",
    "rsvp.yes": "Yes",
    "rsvp.no": "No",
    "rsvp.message": "Message / Dua",
    "rsvp.messagePh": "Share your wishes or dua",
    "rsvp.submit": "Send RSVP via WhatsApp",
    "rsvp.note": "Your RSVP will be sent through WhatsApp.",
    "dress.title": "Dress Code",
    "dress.main": "Elegant Formal",
    "dress.ladies": "Ladies",
    "dress.ladiesVal": "Evening Dresses",
    "dress.gentlemen": "Gentlemen",
    "dress.gentlemenVal": "Suit or Formal Attire",
    "dress.note": "Soft colors and classic styles are warmly appreciated.",
    "gift.title": "A Small Note",
    "gift.text": "Your love, prayers, and presence are the greatest gifts we could ever receive.",
    "footer.love": "With Love",
    "footer.wish": "Sweet dreams for your children",
    // WhatsApp message labels
    "wa.header": "Wedding RSVP",
    "wa.name": "Name",
    "wa.phone": "Phone",
    "wa.guests": "Guests",
    "wa.attending": "Attending",
    "wa.message": "Message"
  },
  ku: {
    "portal.tagline": "ئاهەنگێکی خۆشەویستی",
    "portal.choose": "زمانەکەت هەڵبژێرە",
    "gate.invited": "بانگهێشتکراویت",
    "gate.hint": "دابگرە بۆ چوونە ناو ئاهەنگەکە",
    "gate.openAria": "کردنەوەی بانگهێشتنامەی زەماوەند",
    "nav.home": "سەرەتا",
    "nav.blessing": "بەخت",
    "nav.countdown": "کاتژمێر",
    "nav.event": "بەرنامە",
    "nav.venue": "شوێن",
    "nav.story": "چیرۆک",
    "nav.note": "نامە",
    "ticket.title": "بانگهێشتنامەکەت",
    "hero.tagline": "پێکەوە، هەمیشەیی دەستپێدەکات",
    "envelope.invited": "بانگهێشتکراویت",
    "envelope.hint": "مۆرەکە دابگرە بۆ کردنەوە",
    "envelope.openAria": "کردنەوەی بانگهێشتنامەی زەماوەند",
    "controls.langAria": "گۆڕینی زمان",
    "controls.musicPlayAria": "لێدانی مۆسیقای زەماوەند",
    "controls.musicPauseAria": "ڕاگرتنی مۆسیقا",
    "hero.weddingDay": "ڕۆژی هاوسەرگیری",
    "hero.thursday": "پێنجشەممە",
    "hero.scroll": "ببینە",
    "blessing.soul1": "دوو ڕۆح",
    "blessing.soul2": "یەک چارەنووس",
    "blessing.sub": "ژیانێک کە خودا نووسیویەتی",
    "blessing.dear": "خێزان و هاوڕێیانی ئازیز،",
    "blessing.msg1": "بە سوپاسەوە بۆ خودا، بە دڵخۆشییەوە بانگهێشتتان دەکەین بۆ ئاهەنگی دەستپێکی هەمیشەییمان.",
    "blessing.msg2": "خۆشەویستی، نزا و ئامادەبوونتان ئەم ڕۆژە دەکاتە ڕۆژێکی هەرگیز لەبیرنەکراو.",
    "countdown.title": "ئاهەنگەکە دەستپێدەکات لە",
    "countdown.days": "ڕۆژ",
    "countdown.hours": "کاتژمێر",
    "countdown.minutes": "خولەک",
    "countdown.seconds": "چرکە",
    "countdown.today": "ئەمڕۆ ئەو ڕۆژەیە.",
    "schedule.title": "خشتەی بەرنامەکان",
    "schedule.s1": "گەیشتنی میوانان",
    "schedule.s2": "هاتنەژوورەوەی بووک و زاوا",
    "schedule.s3": "خواردنی ئێوارە",
    "schedule.s4": "بڕینی کێک",
    "schedule.s5": "یەکەم سەما",
    "schedule.s6": "ئاهەنگ و وێنەگرتن",
    "schedule.s7": "ئاهەنگی کۆتایی",
    "venue.title": "شوێن",
    "venue.maps": "کردنەوە لە گووگڵ ماپس",
    "story.title": "چیرۆکی ئێمە",
    "story.s1t": "یەکەم چاوپێکەوتن",
    "story.s1p": "لێرەوە هەموو شتێک دەستیپێکرد.",
    "story.s2t": "نیشانکردن",
    "story.s2p": "بەڵێنی هەمیشەیی.",
    "story.s3t": "ڕۆژی هاوسەرگیری",
    "story.s3p": "دەستپێکی بەشێکی نوێی ژیانمان.",
    "story.s4t": "هەمیشەیی دەستپێدەکات",
    "story.s4p": "ژیانێک کە خودا نووسیویەتی.",
    "rsvp.title": "دڵنیاکردنەوەی ئامادەبوون",
    "rsvp.subtitle": "تکایە ئامادەبوونتان دڵنیا بکەنەوە.",
    "rsvp.name": "ناوی تەواو",
    "rsvp.namePh": "ناوی تەواوت بنووسە",
    "rsvp.phone": "ژمارەی مۆبایل",
    "rsvp.phonePh": "ژمارەی مۆبایلت بنووسە",
    "rsvp.guests": "ژمارەی میوانان",
    "rsvp.attend": "ئامادە دەبیت؟",
    "rsvp.yes": "بەڵێ",
    "rsvp.no": "نەخێر",
    "rsvp.message": "نامە / دۆعا",
    "rsvp.messagePh": "ئاواتەکانت یان دۆعا بنووسە",
    "rsvp.submit": "ناردنی بەشداری لە ڕێگەی واتساپ",
    "rsvp.note": "بەشدارییەکەت لە ڕێگەی واتساپەوە دەنێردرێت.",
    "dress.title": "جلوبەرگ",
    "dress.main": "فەرمی و شیک",
    "dress.ladies": "خانمان",
    "dress.ladiesVal": "جلی ئێوارە",
    "dress.gentlemen": "پیاوان",
    "dress.gentlemenVal": "کۆت و جلی فەرمی",
    "dress.note": "ڕەنگی نەرم و ستایلی کلاسیک بە گەرمی پێشوازییان لێ دەکرێت.",
    "gift.title": "تێبینییەکی بچووک",
    "gift.text": "خۆشەویستی، نزا و ئامادەبوونتان گەورەترین دیارین کە دەتوانین وەریبگرین.",
    "footer.love": "بە خۆشەویستییەوە",
    "footer.wish": "خەوێکی خۆش بۆ مناڵەکانتان",
    "wa.header": "بەشداری زەماوەند",
    "wa.name": "ناو",
    "wa.phone": "مۆبایل",
    "wa.guests": "میوان",
    "wa.attending": "ئامادەبوون",
    "wa.message": "نامە"
  },
  ar: {
    "portal.tagline": "احتفال بالحب",
    "portal.choose": "اختر لغتك",
    "gate.invited": "أنتم مدعوون",
    "gate.hint": "اضغط للدخول إلى الاحتفال",
    "gate.openAria": "فتح دعوة الزفاف",
    "nav.home": "الرئيسية",
    "nav.blessing": "الدعاء",
    "nav.countdown": "العد",
    "nav.event": "المناسبة",
    "nav.venue": "المكان",
    "nav.story": "القصة",
    "nav.note": "كلمة",
    "ticket.title": "دعوتكم",
    "hero.tagline": "معاً، نبدأ الأبد",
    "envelope.invited": "أنتم مدعوون",
    "envelope.hint": "اضغط على الختم للفتح",
    "envelope.openAria": "فتح دعوة الزفاف",
    "controls.langAria": "تغيير اللغة",
    "controls.musicPlayAria": "تشغيل موسيقى الزفاف",
    "controls.musicPauseAria": "إيقاف الموسيقى",
    "hero.weddingDay": "يوم العرس",
    "hero.thursday": "الخميس",
    "hero.scroll": "اكتشف",
    "blessing.soul1": "روحان",
    "blessing.soul2": "قدر واحد",
    "blessing.sub": "حياة كتبها الله",
    "blessing.dear": "أعزّائنا من العائلة والأصدقاء،",
    "blessing.msg1": "بحمد الله، ندعوكم بكل حب للاحتفال ببداية حياتنا الأبدية.",
    "blessing.msg2": "حبكم ودعواتكم وحضوركم سيجعل هذا اليوم لا يُنسى.",
    "countdown.title": "يبدأ الاحتفال بعد",
    "countdown.days": "يوم",
    "countdown.hours": "ساعة",
    "countdown.minutes": "دقيقة",
    "countdown.seconds": "ثانية",
    "countdown.today": "اليوم هو يوم العرس.",
    "schedule.title": "جدول المناسبة",
    "schedule.s1": "استقبال الضيوف",
    "schedule.s2": "دخول العروسين",
    "schedule.s3": "تقديم العشاء",
    "schedule.s4": "تقطيع الكيك",
    "schedule.s5": "الرقصة الأولى",
    "schedule.s6": "الاحتفال والتصوير",
    "schedule.s7": "ختام المناسبة",
    "venue.title": "المكان",
    "venue.maps": "فتح في خرائط Google",
    "story.title": "قصتنا",
    "story.s1t": "اللقاء الأول",
    "story.s1p": "من هنا بدأ كل شيء.",
    "story.s2t": "الخطوبة",
    "story.s2p": "وعد الأبدية.",
    "story.s3t": "يوم العرس",
    "story.s3p": "بداية فصل جديد من حياتنا.",
    "story.s4t": "يبدأ الأبد",
    "story.s4p": "حياة كتبها الله.",
    "rsvp.title": "تأكيد الحضور",
    "rsvp.subtitle": "يرجى تأكيد حضوركم.",
    "rsvp.name": "الاسم الكامل",
    "rsvp.namePh": "اكتب اسمك الكامل",
    "rsvp.phone": "رقم الهاتف",
    "rsvp.phonePh": "اكتب رقم هاتفك",
    "rsvp.guests": "عدد الضيوف",
    "rsvp.attend": "هل ستحضر؟",
    "rsvp.yes": "نعم",
    "rsvp.no": "لا",
    "rsvp.message": "رسالة / دعاء",
    "rsvp.messagePh": "اكتب أمنياتك أو دعاءك",
    "rsvp.submit": "إرسال التأكيد عبر واتساب",
    "rsvp.note": "سيتم إرسال تأكيدك عبر واتساب.",
    "dress.title": "اللباس",
    "dress.main": "رسمي أنيق",
    "dress.ladies": "السيدات",
    "dress.ladiesVal": "فساتين سهرة",
    "dress.gentlemen": "الرجال",
    "dress.gentlemenVal": "بدلة أو لباس رسمي",
    "dress.note": "الألوان الهادئة والأناقة الكلاسيكية موضع تقدير.",
    "gift.title": "كلمة صغيرة",
    "gift.text": "حبكم ودعواتكم وحضوركم أغلى هدية نتمنىها.",
    "footer.love": "مع المحبة",
    "footer.wish": "أحلام سعيدة لأطفالكم",
    "wa.header": "تأكيد حضور العرس",
    "wa.name": "الاسم",
    "wa.phone": "الهاتف",
    "wa.guests": "الضيوف",
    "wa.attending": "الحضور",
    "wa.message": "الرسالة"
  }
};

const SUPPORTED_LANGS = ["en", "ku", "ar"];

const LANG_META = {
  en: { htmlLang: "en", dir: "ltr", bodyClass: "lang-en", next: "ku", toggleLabel: "کوردی" },
  ku: { htmlLang: "ckb", dir: "rtl", bodyClass: "lang-ku", next: "ar", toggleLabel: "عربي" },
  ar: { htmlLang: "ar-IQ", dir: "rtl", bodyClass: "lang-ar", next: "en", toggleLabel: "EN" }
};

const LANG_STORAGE_KEY = "rl-wedding-lang";
let currentLang = "en";

function t(key) {
  return (TRANSLATIONS[currentLang] && TRANSLATIONS[currentLang][key]) || TRANSLATIONS.en[key] || key;
}

/* ============================================
   Image Error Handler (global for onerror attr)
   ============================================ */

function handleImageError(img) {
  const parent = img.parentElement;
  if (parent) parent.classList.add("img-error");
  img.classList.add("img-failed");
}

/* ============================================
   DOM Ready
   ============================================ */

document.addEventListener("DOMContentLoaded", () => {
  resetPageScroll();
  initLanguage();
  initLanguageSplash();
  initGate();
  initGateDust();
  initAmbient();
  initMagicStardust();
  initCountdown();
  initRevealAnimations();
  initChapterRail();
  initMusic();
});

/* ============================================
   Language / i18n Engine
   ============================================ */

function initLanguage() {
  let saved = null;
  try {
    saved = localStorage.getItem(LANG_STORAGE_KEY);
  } catch {
    saved = null;
  }
  if (saved && SUPPORTED_LANGS.includes(saved)) {
    currentLang = saved;
  }
  applyLanguage(currentLang, { skipSweep: true });
}

function applyLanguage(lang, options = {}) {
  currentLang = SUPPORTED_LANGS.includes(lang) ? lang : "en";
  const meta = LANG_META[currentLang];

  const html = document.documentElement;
  html.setAttribute("lang", meta.htmlLang);
  html.setAttribute("dir", meta.dir);

  document.body.classList.remove("lang-en", "lang-ku", "lang-ar");
  document.body.classList.add(meta.bodyClass);

  // Static text
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    el.textContent = t(key);
  });

  // Placeholders
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    el.setAttribute("placeholder", t(key));
  });

  // ARIA labels
  document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
    const key = el.getAttribute("data-i18n-aria");
    el.setAttribute("aria-label", t(key));
  });

  // Language toggle cycles en → ku → ar → en
  const flag = document.getElementById("lang-toggle-flag");
  if (flag) flag.textContent = meta.toggleLabel;

  // Dynamic config-driven text
  applyConfig(currentLang);

  // Persist
  try {
    localStorage.setItem(LANG_STORAGE_KEY, currentLang);
  } catch {
    /* storage unavailable — ignore */
  }

  if (!options.skipSweep) triggerMagicSweep();
}

function initLanguageSplash() {
  const splash = document.getElementById("lang-splash");
  const overlay = document.getElementById("gate-overlay");
  if (!splash) return;

  splash.querySelectorAll(".portal-lang, .lang-choice").forEach((btn) => {
    btn.addEventListener("click", () => {
      const lang = btn.getAttribute("data-lang");
      applyLanguage(lang, { skipSweep: true });
      revealGate();
    });
  });

  function revealGate() {
    resetPageScroll();
    splash.classList.add("dismissed");
    if (overlay) {
      overlay.classList.remove("gate-hidden");
      overlay.setAttribute("aria-hidden", "false");
    }
    triggerMagicSweep();
    setTimeout(() => {
      splash.style.display = "none";
    }, 900);
  }
}

/* ============================================
   Apply CONFIG to DOM (language-aware)
   ============================================ */

function pick(field, lang) {
  if (field && typeof field === "object" && !Array.isArray(field)) {
    return field[lang] !== undefined ? field[lang] : field.en;
  }
  return field;
}

function applyConfig(lang) {
  const heroCouple = document.getElementById("hero-couple");
  const portalCouple = document.getElementById("portal-couple");
  const heroDate = document.getElementById("hero-date");
  const venueName = document.getElementById("venue-name");
  const venuePlace = document.getElementById("venue-place");
  const venueAddress = document.getElementById("venue-address");
  const mapBtn = document.getElementById("map-btn");
  const mapIframe = document.getElementById("map-iframe");
  const footerNames = document.getElementById("footer-names");
  const footerDate = document.getElementById("footer-date");
  const footerVenue = document.getElementById("footer-venue");
  const ticketVenue = document.getElementById("ticket-venue");
  const ticketDate = document.getElementById("ticket-date");

  const couple = pick(CONFIG.coupleName, lang);
  if (heroCouple) heroCouple.textContent = couple;
  if (portalCouple) portalCouple.textContent = couple;
  if (footerNames) footerNames.textContent = couple;

  const dateText = pick(CONFIG.heroDate, lang);
  if (heroDate) heroDate.textContent = dateText;
  if (ticketDate) ticketDate.textContent = pick(CONFIG.weddingDateText, lang);
  if (footerDate) footerDate.textContent = pick(CONFIG.weddingDateText, lang);

  const vName = pick(CONFIG.venueName, lang);
  const vPlace = pick(CONFIG.venuePlace, lang);
  if (venueName) venueName.textContent = vName;
  if (venuePlace) venuePlace.textContent = vPlace;
  if (ticketVenue) ticketVenue.textContent = `${vName} · ${vPlace}`;

  const addrLines = pick(CONFIG.venueAddressLines, lang);
  if (venueAddress && Array.isArray(addrLines)) {
    venueAddress.innerHTML = addrLines.join("<br>");
  }

  if (mapBtn) mapBtn.href = CONFIG.mapUrl;

  if (mapIframe && !mapIframe.src) {
    mapIframe.src = buildMapEmbedUrl(CONFIG.mapUrl);
  }

  if (footerVenue) {
    footerVenue.textContent = `${vName} ${vPlace}`;
  }
}

function buildMapEmbedUrl(mapUrl) {
  try {
    const url = new URL(mapUrl);
    const q = url.searchParams.get("q") || pick(CONFIG.venueName, "en");
    return `https://maps.google.com/maps?q=${encodeURIComponent(q)}&output=embed`;
  } catch {
    return `https://maps.google.com/maps?q=${encodeURIComponent(pick(CONFIG.venueName, "en"))}&output=embed`;
  }
}

/* ============================================
   Language Toggle (floating)
   ============================================ */

function bindLanguageToggle() {
  const toggle = document.getElementById("lang-toggle");
  if (!toggle) return;
  toggle.addEventListener("click", () => {
    applyLanguage(LANG_META[currentLang].next);
  });
}

/* ============================================
   Magic Shimmer Sweep (on language switch)
   ============================================ */

function triggerMagicSweep() {
  const sweep = document.getElementById("magic-sweep");
  if (!sweep) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  sweep.classList.remove("active");
  // force reflow to restart animation
  void sweep.offsetWidth;
  sweep.classList.add("active");
  setTimeout(() => sweep.classList.remove("active"), 1100);
}

/* ============================================
   Magic Stardust Trail (pointer / touch)
   ============================================ */

function initMagicStardust() {
  const layer = document.getElementById("magic-layer");
  if (!layer) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const colors = ["#8a9870", "#c4d4b0", "#faf6ee", "#b8a878", "#a8c4d4", "#5a6b48"];
  let lastSpawn = 0;
  const minGap = 38; // ms between stars (throttle)

  function spawn(x, y) {
    const now = performance.now();
    if (now - lastSpawn < minGap) return;
    lastSpawn = now;

    const star = document.createElement("span");
    star.className = "stardust";
    const size = 5 + Math.random() * 8;
    const dx = (Math.random() - 0.5) * 40;
    const dy = 20 + Math.random() * 40;
    const rot = (Math.random() - 0.5) * 240;
    star.style.left = `${x}px`;
    star.style.top = `${y}px`;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.color = colors[Math.floor(Math.random() * colors.length)];
    star.style.setProperty("--dx", `${dx}px`);
    star.style.setProperty("--dy", `${dy}px`);
    star.style.setProperty("--rot", `${rot}deg`);
    layer.appendChild(star);
    setTimeout(() => star.remove(), 1100);
  }

  window.addEventListener("pointermove", (e) => {
    if (e.pointerType === "touch") return;
    spawn(e.clientX, e.clientY);
  }, { passive: true });

  window.addEventListener("touchmove", (e) => {
    const touch = e.touches[0];
    if (touch) spawn(touch.clientX, touch.clientY);
  }, { passive: true });

  // Celebratory burst at a point
  window.magicBurst = (x, y) => {
    for (let i = 0; i < 14; i++) {
      setTimeout(() => spawnBurst(x, y), i * 18);
    }
  };

  function spawnBurst(x, y) {
    const star = document.createElement("span");
    star.className = "stardust stardust-burst";
    const size = 6 + Math.random() * 10;
    const angle = Math.random() * Math.PI * 2;
    const dist = 30 + Math.random() * 90;
    star.style.left = `${x}px`;
    star.style.top = `${y}px`;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.color = colors[Math.floor(Math.random() * colors.length)];
    star.style.setProperty("--dx", `${Math.cos(angle) * dist}px`);
    star.style.setProperty("--dy", `${Math.sin(angle) * dist}px`);
    star.style.setProperty("--rot", `${(Math.random() - 0.5) * 360}deg`);
    layer.appendChild(star);
    setTimeout(() => star.remove(), 1100);
  }
}

/* ============================================
   Envelope Gold Dust
   ============================================ */

function initGateDust() {
  const layer = document.getElementById("gate-dust");
  if (!layer || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  for (let i = 0; i < 28; i++) {
    const p = document.createElement("span");
    p.className = "gate-particle";
    const size = 2 + Math.random() * 4;
    p.style.width = `${size}px`;
    p.style.height = `${size}px`;
    p.style.left = `${10 + Math.random() * 80}%`;
    p.style.bottom = `${Math.random() * 40}%`;
    p.style.animationDuration = `${4 + Math.random() * 7}s`;
    p.style.animationDelay = `${Math.random() * 5}s`;
    layer.appendChild(p);
  }
}

/* ============================================
   Olive Gates Opening
   ============================================ */

function initGate() {
  const overlay = document.getElementById("gate-overlay");
  const seal = document.getElementById("gate-seal");
  const mainContent = document.getElementById("main-content");
  const hint = document.getElementById("gate-hint");
  const chapterRail = document.getElementById("chapter-rail");

  bindLanguageToggle();
  resetPageScroll();

  if (!overlay || !seal) return;

  let isOpen = false;
  let scrollTriggered = false;

  function openGate() {
    if (isOpen) return;
    if (overlay.classList.contains("gate-hidden")) return;
    isOpen = true;

    const rect = seal.getBoundingClientRect();
    if (typeof window.magicBurst === "function") {
      window.magicBurst(rect.left + rect.width / 2, rect.top + rect.height / 2);
    }

    void playWeddingMusic();

    overlay.classList.add("opening");
    seal.setAttribute("aria-hidden", "true");
    if (hint) hint.style.opacity = "0";

    setTimeout(() => {
      overlay.classList.add("gate-hidden");
      overlay.setAttribute("aria-hidden", "true");
      document.body.classList.add("palace-open");
      resetPageScroll();

      if (mainContent) {
        mainContent.classList.remove("hidden");
        mainContent.style.visibility = "visible";
      }

      if (chapterRail) chapterRail.hidden = false;

      initRevealAnimations(true);
      requestAnimationFrame(() => resetPageScroll());
      scheduleHeroAutoScroll();

      setTimeout(() => {
        overlay.style.display = "none";
      }, 600);
    }, 1600);
  }

  seal.addEventListener("click", openGate);

  seal.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      openGate();
    }
  });

  function onScrollAttempt() {
    if (isOpen || scrollTriggered) return;
    if (overlay.classList.contains("gate-hidden")) return;
    scrollTriggered = true;
    openGate();
  }

  window.addEventListener(
    "wheel",
    (e) => {
      if (!isOpen && overlay && !overlay.classList.contains("gate-hidden")) {
        e.preventDefault();
        onScrollAttempt();
      }
    },
    { passive: false }
  );

  let touchStartY = 0;
  window.addEventListener("touchstart", (e) => {
    touchStartY = e.touches[0].clientY;
  }, { passive: true });

  window.addEventListener("touchmove", (e) => {
    if (isOpen || !overlay || overlay.classList.contains("gate-hidden")) return;
    const deltaY = touchStartY - e.touches[0].clientY;
    if (Math.abs(deltaY) > 30) onScrollAttempt();
  }, { passive: true });
}

function scheduleHeroAutoScroll() {
  const details = document.getElementById("details");
  if (!details) return;

  let cancelled = false;
  const cancelIfScrolled = () => {
    if (window.scrollY > 48) cancelled = true;
  };

  window.addEventListener("wheel", cancelIfScrolled, { passive: true });
  window.addEventListener("touchmove", cancelIfScrolled, { passive: true });
  window.addEventListener("scroll", cancelIfScrolled, { passive: true });

  const cue = document.querySelector(".scroll-cue");
  if (cue) {
    cue.addEventListener("click", () => {
      cancelled = true;
    }, { once: true });
  }

  setTimeout(() => {
    window.removeEventListener("wheel", cancelIfScrolled);
    window.removeEventListener("touchmove", cancelIfScrolled);
    window.removeEventListener("scroll", cancelIfScrolled);
    if (cancelled || window.scrollY > 48) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    details.scrollIntoView({
      behavior: reduceMotion ? "auto" : "smooth",
      block: "start"
    });
  }, 4000);
}

/* ============================================
   Ambient Petals & Sparkles
   ============================================ */

function initAmbient() {
  const layer = document.getElementById("ambient-layer");
  if (!layer) return;

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const petalCount = 18;
  const sparkleCount = 35;

  for (let i = 0; i < petalCount; i++) {
    const petal = document.createElement("div");
    petal.className = "petal";
    petal.style.left = `${Math.random() * 100}%`;
    petal.style.animationDuration = `${8 + Math.random() * 12}s`;
    petal.style.animationDelay = `${Math.random() * 10}s`;
    petal.style.width = `${6 + Math.random() * 8}px`;
    petal.style.height = `${8 + Math.random() * 10}px`;
    layer.appendChild(petal);
  }

  for (let i = 0; i < sparkleCount; i++) {
    const sparkle = document.createElement("div");
    sparkle.className = "sparkle";
    sparkle.style.left = `${Math.random() * 100}%`;
    sparkle.style.top = `${Math.random() * 100}%`;
    sparkle.style.animationDuration = `${3 + Math.random() * 4}s`;
    sparkle.style.animationDelay = `${Math.random() * 5}s`;
    layer.appendChild(sparkle);
  }
}

/* ============================================
   Countdown Timer
   ============================================ */

function initCountdown() {
  const daysEl = document.getElementById("count-days");
  const hoursEl = document.getElementById("count-hours");
  const minutesEl = document.getElementById("count-minutes");
  const secondsEl = document.getElementById("count-seconds");
  const countdownEl = document.getElementById("countdown");
  const todayEl = document.getElementById("countdown-today");

  if (!daysEl || !hoursEl || !minutesEl || !secondsEl) return;

  const targetDate = new Date(CONFIG.countdownDate);
  let prevSeconds = null;

  function updateCountdown() {
    const now = new Date();
    const diff = targetDate.getTime() - now.getTime();

    if (diff <= 0) {
      if (countdownEl) countdownEl.classList.add("hidden");
      if (todayEl) todayEl.classList.remove("hidden");
      return;
    }

    if (countdownEl) countdownEl.classList.remove("hidden");
    if (todayEl) todayEl.classList.add("hidden");

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    animateIfChanged(daysEl, days, prevSeconds !== seconds);
    animateIfChanged(hoursEl, hours, false);
    animateIfChanged(minutesEl, minutes, false);
    animateIfChanged(secondsEl, seconds, prevSeconds !== seconds);

    prevSeconds = seconds;
  }

  function animateIfChanged(el, value, shouldAnimate) {
    const formatted = String(value).padStart(2, "0");
    if (el.textContent !== formatted) {
      el.textContent = formatted;
      if (shouldAnimate) {
        el.classList.remove("tick");
        requestAnimationFrame(() => el.classList.add("tick"));
        setTimeout(() => el.classList.remove("tick"), 400);
      }
    }
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);
}

/* ============================================
   Scroll Reveal (Intersection Observer)
   ============================================ */

let revealObserver = null;

function initRevealAnimations(forceObserve = false) {
  const elements = document.querySelectorAll(".reveal, .reveal-child");

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    elements.forEach((el) => el.classList.add("visible"));
    return;
  }

  if (!revealObserver) {
    revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -60px 0px" }
    );
  }

  elements.forEach((el) => {
    if (forceObserve || !el.classList.contains("visible")) {
      revealObserver.observe(el);
    }
  });
}

/* ============================================
   Chapter Rail (scroll spy)
   ============================================ */

function initChapterRail() {
  const dots = document.querySelectorAll(".chapter-dot");
  const chapters = document.querySelectorAll(".chapter[data-chapter]");

  if (!dots.length || !chapters.length) return;

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("data-chapter");
          dots.forEach((dot) => {
            dot.classList.toggle("is-active", dot.getAttribute("data-chapter") === id);
          });
        }
      });
    },
    { threshold: 0.35, rootMargin: "-20% 0px -20% 0px" }
  );

  chapters.forEach((ch) => observer.observe(ch));
}

/* ============================================
   Music Player
   ============================================ */

const weddingMusic = {
  audio: null,
  btn: null,
  isPlaying: false,
  musicAvailable: true
};

function setMusicPlayingUI(playing) {
  const { btn } = weddingMusic;
  if (!btn) return;
  weddingMusic.isPlaying = playing;
  btn.classList.toggle("playing", playing);
  btn.setAttribute("aria-label", t(playing ? "controls.musicPauseAria" : "controls.musicPlayAria"));
  btn.setAttribute("aria-pressed", playing ? "true" : "false");
}

function setMusicUnavailable() {
  weddingMusic.musicAvailable = false;
  if (weddingMusic.btn) {
    weddingMusic.btn.classList.add("music-unavailable");
    weddingMusic.btn.setAttribute("title", "Music unavailable");
  }
  setMusicPlayingUI(false);
}

async function playWeddingMusic() {
  const { audio, btn } = weddingMusic;
  if (!audio || !btn || !weddingMusic.musicAvailable || weddingMusic.isPlaying) return false;

  try {
    if (audio.readyState === 0) {
      audio.load();
    }
    await audio.play();
    setMusicPlayingUI(true);
    return true;
  } catch {
    return false;
  }
}

function pauseWeddingMusic() {
  const { audio } = weddingMusic;
  if (!audio || !weddingMusic.isPlaying) return;
  audio.pause();
  setMusicPlayingUI(false);
}

function initMusic() {
  const btn = document.getElementById("music-btn");
  const audio = document.getElementById("wedding-music");

  if (!btn || !audio) return;

  weddingMusic.audio = audio;
  weddingMusic.btn = btn;

  audio.addEventListener("error", setMusicUnavailable);

  btn.addEventListener("click", async () => {
    if (!weddingMusic.musicAvailable) return;

    if (weddingMusic.isPlaying) {
      pauseWeddingMusic();
      return;
    }

    const started = await playWeddingMusic();
    if (!started) {
      setMusicUnavailable();
    }
  });
}
