import Head from "next/head";
import Gallery from "../../components/Stories/Gallery";
import Header from "../../components/Stories/Header";

const Stories = () => {
  return (
    <main>
      <Head>
        <title>Stories</title>
        <meta name="description" content="Stories page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>
      <Gallery/>
    </main>
  );
}

export default Stories;