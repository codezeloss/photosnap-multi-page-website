import Head from "next/head";
import Homepage from "./home";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home</title>
        <meta name="description" content="Home page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Homepage />
    </div>
  );
}
