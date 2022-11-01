import MainButtonPrice from "../UI/Buttons/MainButtonPrice";

interface Props {
  price: string;
  period: string;
}

const MainPricingPlan = ({price, period}: Props) => {
  return (
    <div className="bg-pure-black w-[350px] h-[470px] flex flex-col items-center justify-center px-[40px] border-t-spc-pink border-t-[6px]">
      <h2 className="text-pure-white mb-[18px]">Pro</h2>

      <p className="ptext text-pure-white/[.6] text-center mb-[40px]">
        More advanced features available. Recommended for photography veterans
        and professionals.
      </p>

      <div className="mb-[40px]">
        <h1 className="text-pure-white">${price}</h1>
        <p className="ptext text-pure-white/[.6] text-center">per {period}</p>
      </div>

      <MainButtonPrice />
    </div>
  );
};

export default MainPricingPlan;
