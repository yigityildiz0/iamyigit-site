import Link from "next/link";
import { ThemeToggle } from "./theme-provider";
import { getDict, type Locale } from "@/lib/i18n";

export function Nav({ locale }: { locale: Locale }) {
  const t = getDict(locale);
  const other = locale === "tr" ? "en" : "tr";
  return (
    <header className="nav">
      <div className="nav-inner">
        <Link href={`/${locale}`} style={{ fontWeight: 700 }}>
          iamyigit
        </Link>
        <nav className="nav-links">
          <Link href={`/${locale}/hakkimda`}>{t.nav.about}</Link>
          <Link href={`/${locale}/isler`}>{t.nav.work}</Link>
          <Link href={`/${locale}/yazilar`}>{t.nav.blog}</Link>
          <Link href={`/${locale}/iletisim`}>{t.nav.contact}</Link>
        </nav>
        <div className="nav-controls">
          <Link href={`/${other}`} className="icon-btn">
            {other.toUpperCase()}
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
