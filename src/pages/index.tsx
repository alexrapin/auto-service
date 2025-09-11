import Head from "next/head";
import Home from "../components/Outlet/Home";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Автосервіс AUTOBAND — СТО Миколаїв, ремонт авто</title>
        <meta
          name="description"
          content="Професійний автосервіс AUTOBAND у Миколаєві. Діагностика, ремонт, запчастини. Запис онлайн!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="автосервіс, Миколаїв, ремонт авто, автодіагностика, запчастини"
        />

        {/* Open Graph — соцмережі */}
        <meta
          property="og:title"
          content="Автосервіс AUTOBAND — СТО Миколаїв"
        />
        <meta
          property="og:description"
          content="Якісний автосервіс у Миколаєві: ремонт, діагностика, запчастини. Запис онлайн!"
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
              image: "https://autoband.com.ua/logo.png",
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
              ],
            }),
          }}
        />

        <link rel="canonical" href="https://autoband.com.ua/" />
        <link rel="icon" href="./favicon.ico" />
      </Head>

      <Home />
    </>
  );
}
