import Image from "next/image";
import { getDict, type Locale } from "@/lib/i18n";
import { Reveal, ScaleOnScroll } from "@/components/motion";

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = getDict(locale as Locale);

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <Reveal>
          <p className="hero-eyebrow">{t.hero.eyebrow}</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="hero-title">{t.hero.title}</h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="hero-sub">{t.hero.sub}</p>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="hero-photo">
            <Image
              src="/images/yigit.jpg"
              alt="Yiğit Yıldız"
              width={640}
              height={800}
              priority
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </Reveal>
        <div className="scroll-hint">{t.hero.hint} ↓</div>
      </section>

      {/* BEN KİMİM */}
      <section className="section section-alt">
        <div className="container">
          <ScaleOnScroll>
            <h2 className="section-title">{t.hero.who}</h2>
            <p className="section-sub">{t.hero.whoText}</p>
          </ScaleOnScroll>
        </div>
      </section>

      {/* İLGİ ALANLARI */}
      <section className="section">
        <div className="container">
          <Reveal>
            <h2 className="section-title">{t.sections.interests}</h2>
          </Reveal>
          <div className="cards">
            {t.sections.cards.map((c, i) => (
              <Reveal key={c.t} delay={i * 0.12}>
                <div className="card">
                  <h3>{c.t}</h3>
                  <p>{c.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
