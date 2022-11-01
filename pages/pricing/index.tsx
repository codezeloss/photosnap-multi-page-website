import Header from "../../components/Pricing/Header";
import PricingFeatures from "../../components/Pricing/PricingFeatures";
import PricingPlans from "../../components/Pricing/PricingPlans";
import CTAInvite from "../../components/UI/CTAInvite";

const Pricing = () => {
  return (
    <main>
      <Header />
      <PricingPlans />
      <PricingFeatures/>
      <CTAInvite />
    </main>
  );
};

export default Pricing;
