import Head from "next/head";
import Home from "../components/Outlet/Home";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Автосервіс AUTOBAND СТО Миколаїв</title>
        <meta name="description" content="Автосервіс AUTOBAND СТО Миколаїв" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="./favicon.ico" />
      </Head>
      <Home />
    </>
  );
}
