import Head from "next/head";
import Header from "../../components/Pricing/Header";
import PricingFeatures from "../../components/Pricing/PricingFeatures";
import PricingPlans from "../../components/Pricing/PricingPlans";
import CTAInvite from "../../components/UI/CTAInvite";

const Pricing = () => {
  return (
    <main>
      <Head>
        <title>Pricing</title>
        <meta name="description" content="Pricing page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <PricingPlans />
      <PricingFeatures/>
      <CTAInvite />
    </main>
  );
};

export default Pricing;
