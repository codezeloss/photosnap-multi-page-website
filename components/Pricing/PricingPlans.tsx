import { useState } from "react";
import MainPricingPlan from "./MainPricingPlan";
import SecPricingPlan from "./SecPricingPlan";

const PricingPlans = () => {
  const [planToggled, setPlanToggled] = useState(false);

  const planToggleHandler = () => {
    setPlanToggled((prevState) => !prevState);
  };

  return (
    <section className="flex flex-col items-center mb-[160px]">
      <div className="flex flex-row gap-[32px] mb-[48px]">
        <p
          className={`font-dm-sans font-bold text-[18px] leading-[25px] text-pure-black ${
            planToggled ? "text-pure-black/[.5]" : "text-pure-black"
          } `}
        >
          Monthly
        </p>

        <div
          className="w-[64px] h-[32px] rounded-[16px] bg-light-grey flex items-center relative cursor-pointer"
          onClick={planToggleHandler}
        >
          <div
            className={`w-[24px] h-[24px] bg-pure-black rounded-full py-[4px] absolute ml-[4px] left-0 ${
              planToggled ? "hidden" : ""
            } `}
          />
          <div
            className={`w-[24px] h-[24px] bg-pure-black rounded-full py-[4px] absolute mr-[4px] right-0 ${
              !planToggled ? "hidden" : ""
            }`}
          />
        </div>

        <p
          className={`font-dm-sans font-bold text-[18px] leading-[25px] text-pure-black ${
            !planToggled ? "text-pure-black/[.5]" : "text-pure-black"
          } `}
        >
          Yearly
        </p>
      </div>

      <div className="flex flex-grow gap-[30px] items-center">
        <SecPricingPlan title="Basic" description="Includes basic usage of our platform. Recommended for new and aspiring photographers." price={!planToggled ? "19.00" : "190.00"} period={!planToggled ? "month" : "year"} />

        <MainPricingPlan
          price={!planToggled ? "39.00" : "390.00"}
          period={!planToggled ? "month" : "year"}
        />

        <SecPricingPlan title="Business" description="Additional features available such as more detailed metrics. Recommended for business owners." price={!planToggled ? "99.00" : "990.00"} period={!planToggled ? "month" : "year"} />
      </div>
    </section>
  );
};

export default PricingPlans;
