import { Nav } from "@/components/nav";
import { ScrollProgress } from "@/components/motion";
import { getDict, locales, type Locale } from "@/lib/i18n";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) notFound();
  const t = getDict(locale);
  return (
    <>
      <ScrollProgress />
      <Nav locale={locale as Locale} />
      <main>{children}</main>
      <footer className="footer">
        <div className="container">© {new Date().getFullYear()} Yiğit Yıldız · {t.footer}</div>
      </footer>
    </>
  );
}
