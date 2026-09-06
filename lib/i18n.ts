export const locales = ["tr", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "tr";

const en = {
  nav: { about: "About", work: "Work", blog: "Blog", contact: "Contact" },
  hero: {
    eyebrow: "Personal Website",
    title: "I'm Yiğit",
    sub: "A curious mind building things on the web. This is my corner on the internet — projects, writings and a bit of who I am.",
    hint: "Scroll",
    who: "Who am I?",
    whoText:
      "I'm Yiğit Yıldız. I like technology, design and learning new things. This site is the home base for everything I make and think.",
  },
  sections: {
    interests: "Things I care about",
    cards: [
      { t: "Technology", d: "New tools, AI and everything that moves the web forward." },
      { t: "Design", d: "Clean, minimal interfaces that feel effortless to use." },
      { t: "Learning", d: "Every day something new — and I write about it here." },
    ],
  },
  pages: {
    about: { title: "About Me", text: "Hi! I'm Yiğit. This page will tell my story soon — for now, know that I'm building this site piece by piece." },
    work: { title: "My Work", text: "Projects and experiments will live here. Stay tuned." },
    blog: { title: "Blog", text: "Writings are on the way. First posts coming soon." },
    contact: { title: "Contact", text: "The easiest way to reach me: yigityildiz0 on GitHub. A contact form is coming soon." },
  },
  footer: "Built with Next.js · Hosted on Vercel",
};

const tr: typeof en = {
  nav: { about: "Hakkımda", work: "İşlerim", blog: "Yazılar", contact: "İletişim" },
  hero: {
    eyebrow: "Kişisel Web Sitesi",
    title: "I'm Yiğit",
    sub: "Web'de bir şeyler inşa eden meraklı bir zihin. Burası internetteki köşem — projeler, yazılar ve biraz da ben.",
    hint: "Kaydır",
    who: "Ben kimim?",
    whoText:
      "Ben Yiğit Yıldız. Teknolojiyi, tasarımı ve yeni şeyler öğrenmeyi severim. Bu site, yaptığım ve düşündüğüm her şeyin ana üssü.",
  },
  sections: {
    interests: "Önemsediğim şeyler",
    cards: [
      { t: "Teknoloji", d: "Yeni araçlar, yapay zekâ ve web'i ileri taşıyan her şey." },
      { t: "Tasarım", d: "Sade, minimal ve zahmetsiz hissettiren arayüzler." },
      { t: "Öğrenme", d: "Her gün yeni bir şey — ve burada yazıyorum." },
    ],
  },
  pages: {
    about: { title: "Hakkımda", text: "Merhaba! Ben Yiğit. Bu sayfa yakında hikâyemi anlatacak — şimdilik bu siteyi parça parça inşa ettiğimi bilin." },
    work: { title: "İşlerim", text: "Projeler ve denemeler burada yaşayacak. Takipte kalın." },
    blog: { title: "Yazılar", text: "Yazılar yolda. İlk gönderiler yakında." },
    contact: { title: "İletişim", text: "Bana ulaşmanın en kolay yolu: GitHub'da yigityildiz0. İletişim formu yakında." },
  },
  footer: "Next.js ile yapıldı · Vercel'de barındırılıyor",
};

const dicts: Record<Locale, typeof en> = { tr, en };

export function getDict(locale: string) {
  return dicts[(locales as readonly string[]).includes(locale) ? (locale as Locale) : defaultLocale];
}
