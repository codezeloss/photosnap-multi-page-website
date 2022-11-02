import AllFeatures from "../../components/Features/AllFeatures";
import CTAInvite from "../../components/UI/CTAInvite";
import Header from "../../components/Features/Header";
import Head from "next/head";

const Features = () => {
  return <main>
    <Head>
        <title>Features</title>
        <meta name="description" content="Features page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

    <Header />
    <AllFeatures />
    <CTAInvite />
  </main>;
};

export default Features;
