import Image, { StaticImageData } from "next/image";
import arrow from "/assets/shared/desktop/arrow-white.svg";

interface Props {
  picture: StaticImageData;
  title: string;
  credit: string;
}

const Story = ({ picture, title, credit }: Props) => {
  return (
    <div className="w-[100%] h-[500px] relative hover:-translate-y-[24px]">
      <div>
        <Image
          className="min-w-[360px] w-[100%] h-[500px] z-[-5]"
          src={picture}
          alt="Mountains"
          priority
        />
      </div>

      <div className="w-[100%] z-[10] absolute bottom-0 p-[40px]">
        <div className="mb-[16px]">
          <h3 className="text-pure-white">{title}</h3>
          <p className="font-dm-sans font-normal text-[13px] leading-[17px] text-pure-white">
            by {credit}
          </p>
        </div>
        <div className="w-[100%] flex flex-row items-center justify-between pt-[20px] border-t-[1px] border-t-pure-white/[.25] cursor-pointer">
          <p className="font-dm-sans font-bold text-[12px] leading-[16px] tracking-[2px] text-pure-white uppercase">
            Read story
          </p>
          <Image
            className="w-[42px] h-[12px]"
            src={arrow}
            alt="Arrow"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Story;
