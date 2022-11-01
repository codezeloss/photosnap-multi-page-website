import SecButtonPrice from "../UI/Buttons/SecButtonPrice";

interface Props {
  title: string;
  description: string;
  price: string;
  period: string;
}

const SecPricingPlan = ({ title, description, price, period }: Props) => {
  return (
    <div className="bg-custom-grey w-[350px] h-[407px] flex flex-col items-center justify-center px-[40px] ">
      <h2 className="text-pure-black mb-[18px]">{title}</h2>

      <p className="ptext text-pure-black/[.6] text-center mb-[40px]">
        {description}
      </p>

      <div className="mb-[40px]">
        <h1 className="text-pure-black">${price}</h1>
        <p className="ptext text-pure-black/[.6] text-center">per {period}</p>
      </div>

      <SecButtonPrice />
    </div>
  );
};

export default SecPricingPlan;
