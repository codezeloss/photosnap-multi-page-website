import MainButtonPrice from "../UI/Buttons/MainButtonPrice";

interface Props {
  price: string;
  period: string;
}

const MainPricingPlan = ({ price, period }: Props) => {
  return (
    <div className="bg-pure-black w-[350px] h-[470px] flex flex-col items-center justify-center px-[40px] border-t-spc-pink border-t-[6px] 3bp:w-[689px] 3bp:flex-row 3bp:justify-between 3bp:h-[270px]">
      <div className="3bp:max-w-[270px]">
        <h2 className="text-pure-white mb-[18px] 3bp:text-left">Pro</h2>
        <p className="ptext text-pure-white/[.6] text-center mb-[40px] 3bp:text-left">
          More advanced features available. Recommended for photography veterans
          and professionals.
        </p>
      </div>

      <div>
        <div className="mb-[40px]">
          <h1 className="text-pure-white 3bp:text-right">${price}</h1>
          <p className="ptext text-pure-white/[.6] text-center 3bp:text-right">
            per {period}
          </p>
        </div>

        <MainButtonPrice />
      </div>
    </div>
  );
};

export default MainPricingPlan;
