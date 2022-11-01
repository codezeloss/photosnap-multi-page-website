import Image, { StaticImageData } from "next/image";

interface Props {
  title: string;
  srcBasic: StaticImageData | string;
  srcPro: StaticImageData | string;
  srcBusiness: StaticImageData | string;
}

const PricingFeature = ({ title, srcBasic, srcPro, srcBusiness }: Props) => {
  return (
    <div className="flex flex-row justify-between items-center pl-[24px] pr-[62px] py-[25px] border-b-[1px] border-b-light-grey 5bp:pr-[24px]">
      <div className="6bp:w-[150px]">
        <p>{title}</p>
      </div>
      <div className="flex flex-row gap-[124px] 5bp:gap-[67px] 7bp:gap-[44px]">
        <div>
          {srcBasic && (
            <Image className="w-[16px] h-[12px]" src={srcBasic} alt="check" />
          )}
        </div>
        <div>
          {srcPro && (
            <Image className="w-[16px] h-[12px]" src={srcPro} alt="check" />
          )}
        </div>
        <div>
          {srcBusiness && (
            <Image
              className="w-[16px] h-[12px]"
              src={srcBusiness}
              alt="check"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default PricingFeature;
