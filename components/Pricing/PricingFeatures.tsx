import Image from "next/image";
import check from "../../public/assets/pricing/desktop/check.svg";
import PricingFeature from "./PricingFeature";

const PricingFeatures = () => {
  const data = [
    {
      id: 1,
      title: "Unlimited story posting",
      basic: true,
      pro: true,
      business: true,
    },
    {
      id: 2,
      title: "Unlimited photo upload",
      basic: true,
      pro: true,
      business: true,
    },
    {
      id: 3,
      title: "Embedding custom content",
      basic: false,
      pro: true,
      business: true,
    },
    {
      id: 4,
      title: "Customize metadata",
      basic: false,
      pro: true,
      business: true,
    },
    {
      id: 5,
      title: "Advanced metric",
      basic: false,
      pro: false,
      business: true,
    },
    {
      id: 6,
      title: "Photo downloads",
      basic: false,
      pro: false,
      business: true,
    },
    {
      id: 7,
      title: "Search engine indexing",
      basic: false,
      pro: false,
      business: true,
    },
    {
      id: 8,
      title: "Sustom analytics",
      basic: false,
      pro: false,
      business: true,
    },
  ];

  const customClasses =
    "w-[140px] h-[16px] text-center items-center justify-center 5bp:w-fit 5bp:ml-[30px] 7bp:text-[7.5px] 7bp:font-bold 7bp:ml-[25px]";

  return (
    <section className="max-w-[731px] mx-auto mb-[160px] font-dm-sans font-bold text-[12px] leading-[16px] tracking-[2px] text-pure-black uppercase">
      <h1 className="mb-[56px] text-center">Compare</h1>

      <div>
        <div className="flex flex-row justify-between items-center pl-[25px] pb-[24px] border-b-[1px] border-b-pure-black">
          <p>The Features</p>
          <div className="flex flex-row">
            <div className={customClasses}>
              <p>Basic</p>
            </div>
            <div className={customClasses}>
              <p>Pro</p>
            </div>
            <div className={`${customClasses} 5bp:mr-[8px]`}>
              <p>Business</p>
            </div>
          </div>
        </div>

        {data.map((feature) => (
          <PricingFeature
            key={feature.id}
            title={feature.title}
            srcBasic={feature.basic && check}
            srcPro={feature.pro && check}
            srcBusiness={feature.business && check}
          />
        ))}
      </div>
    </section>
  );
};

export default PricingFeatures;
