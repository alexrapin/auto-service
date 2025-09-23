import Head from "next/head";
import Home from "../components/Outlet/Home";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>
          Autoband (СТО &quot;Бумер&quot;) — автосервіс у Миколаєві | Ремонт авто,
          діагностика
        </title>

        <meta
          name="description"
          content="СТО 'Бумер' (Autoband) у Миколаєві. Професійний автосервіс: ремонт ходової, двигуна, заміна масла, діагностика авто. Надійність і якість вже понад 20 років."
        />

        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta
          name="keywords"
          content="СТО Бумер, Autoband, автосервис Николаев, автосервіс Миколаїв, ремонт авто Миколаїв, СТО Николаев, автодиагностика, заміна масла, ремонт ходової, автосервіс"
        />

        {/* Open Graph — соцмережі */}
        <meta
          property="og:title"
          content="СТО 'Бумер' (Autoband) у Миколаєві"
        />
        <meta
          property="og:description"
          content="Надійний автосервіс у Миколаєві. Ремонт двигуна, ходової, діагностика та запчастини. Запис онлайн на СТО 'Бумер' (Autoband)."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://autoband.com.ua/" />
        <meta
          property="og:image"
          content="https://autoband.com.ua/og-image.jpg"
        />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />

        {/* JSON-LD структуровані дані */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AutoRepair",
              name: "Автосервіс AUTOBAND",
              alternateName: "СТО Бумер",
              image: "https://autoband.com.ua/favicon.ico",
              telephone: "+380677216945",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Миколаїв",
                streetAddress: "Троїцька 109б",
                postalCode: "54000",
                addressCountry: "UA",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "46.971013",
                longitude: "32.067455",
              },
              openingHours: "Mo-Sa 09:00-18:00",
              url: "https://autoband.com.ua",
              priceRange: "від 300 ₴",
              serviceOffered: [
                "Ремонт ходової",
                "Заміна масла",
                "Ремонт двигуна",
                "Діагностика авто",
              ],
            }),
          }}
        />

        <link rel="canonical" href="https://autoband.com.ua/" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </Head>

      <Home />
    </>
  );
}
