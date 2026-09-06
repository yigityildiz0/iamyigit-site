import { getDict, type Locale } from "@/lib/i18n";
import { Reveal } from "@/components/motion";

export default async function SubPage({
  params,
  page,
}: {
  params: Promise<{ locale: string }>;
  page: "about" | "work" | "blog" | "contact";
}) {
  const { locale } = await params;
  const t = getDict(locale as Locale).pages[page];
  return (
    <section className="page-hero">
      <div className="container">
        <Reveal>
          <h1 className="section-title">{t.title}</h1>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="section-sub">{t.text}</p>
        </Reveal>
      </div>
    </section>
  );
}
