<picture>
  <source media="(prefers-color-scheme: dark)" srcset="assets/hero-dark.svg">
  <img src="assets/hero-light.svg" width="1280" alt="A personal web foundation — clear questions, repeatable workflows, reviewable results">
</picture>

# iamyigit-site

[English](README.md) · [Türkçe](README.tr.md)

**Next.js App Router, React ve TypeScript ile iki dilli kişisel site başlangıç projesi.** Bu depo kaynak projedir; kodun şu anda iamyigit.com’da yayımlandığı iddiası değildir.

## Bugün ne var?

| Özellik | Güncel kapsam |
|---|---|
| Türkçe/İngilizce rotalar | Ana sayfa ve hakkımda, işler, yazılar, iletişim sayfa iskeletleri. |
| Dile duyarlı gezinme | Mevcut rota korunarak dil değişimi. |
| Tema kontrolü | Tarayıcı depolaması engelli/bozukken güvenli varsayılanla koyu/açık tema. |
| Hareket bileşenleri | Yeniden kullanılabilir istemci sunum bileşenleri. |
| Metadata dosyaları | Layout, robots ve sitemap kaynakları; yayından önce gerçek URLler incelenmeli. |
| Doğrulama | Tip kontrolü, odaklı tema-depolama testleri ve üretim derlemesi. |

İşler, yazılar ve iletişim bölümleri **başlangıç içeriğidir**. Tamamlanmış CMS, blog motoru veya çalışan iletişim sunucusu değildir. Otomatik WordPress eşitlemesi yoktur.

## Yerel kurulum

Desteklenen Node.js LTS ve depodaki kilit dosyasını kullan. Projede çalışmak için hesap bağlamak gerekmez.

~~~sh
npm ci
npm run dev
~~~

Geliştirme komutu yerel Next.js sunucusunu açar. Doğrulama ve üretim derlemesi:

~~~sh
npm test
npm run typecheck
npm run build
npm start
~~~

Başarılı derleme canlı yayın değildir. Bu deponun CI kontrolü kaynağı doğrular; hosting hesabına yayınlamaz. Uygulama değişikliğini push etmeden ayrı tanımlanmış hosting entegrasyonlarını gözden geçir.

## Nerede çalışılır?

| Alan | Kaynak |
|---|---|
| Dil sözlükleri | [lib/i18n.ts](lib/i18n.ts) |
| Yerelleştirilmiş layout/sayfalar | [app/[locale]](app/%5Blocale%5D) |
| Gezinme ve dil değişimi | [components/nav.tsx](components/nav.tsx) |
| Tema sağlayıcısı | [components/theme-provider.tsx](components/theme-provider.tsx) |
| Depolama sınırı ve testleri | [tema depolaması](lib/theme-storage.ts) · [testler](tests/theme-storage.test.mjs) |
| Global stiller | [app/globals.css](app/globals.css) |
| Derleme komutları | [package.json](package.json) |

<details>
<summary><strong>Üretime hazır demeden önce</strong></summary>

Başlangıç metinlerini değiştir; iki dili, metadata/canonical URLleri, mobil ve klavye davranışını incele. Yazı/iletişim verisinin nereden geleceğine karar ver. Gerçek yayın ortamını ayrıca doğrula. Özel ortam değerlerini veya tokenları istemci paketine koyma.

</details>

## Proje ailesi

[Profil ve proje dizini](https://github.com/yigityildiz0) · [Universal AI Skill Library](https://github.com/yigityildiz0/universal-ai-skill-library)

Bu proje skill kütüphanesinden bilinçli olarak ayrıdır: bir uygulama başlangıcıdır, çalıştırılabilir ajan skill’i değildir. Framework kurulumu ve desteklenen ortamlar için [Next.js dokümanı](https://nextjs.org/docs) esas alınır.
