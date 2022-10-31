import Image from "next/image";
import arrow from "../../public/assets/shared/desktop/arrow-white.svg";

interface Props {
  date: string;
  src: any;
  title: string;
  credit: string;
}

const Story = ({ date, src, title, credit }: Props) => {
  return (
    <div className="w-[100%] h-[500px] relative hover:-translate-y-[24px]">
      <div>
        <Image
          className="object-cover min-w-[360px] w-[100%] h-[500px] z-[-5]"
          src={src}
          alt={title}
          width="500"
          height="500"
        />
      </div>

      <div className="w-[100%] z-[10] absolute bottom-0 p-[40px]">
        <div className="mb-[16px]">
          <p className="font-dm-sans font-normal text-[13px] leading-[17px] text-pure-white mb-[4px]">
            {date}
          </p>
          <h3 className="text-pure-white">{title}</h3>
          <p className="font-dm-sans font-normal text-[13px] leading-[17px] text-pure-white">
            by {credit}
          </p>
        </div>
        <div className="w-[100%] flex flex-row items-center justify-between pt-[20px] border-t-[1px] border-t-pure-white/[.25] cursor-pointer">
          <p className="font-dm-sans font-bold text-[12px] leading-[16px] tracking-[2px] text-pure-white uppercase">
            Read story
          </p>
          <Image className="w-[42px] h-[12px]" src={arrow} alt="Arrow" />
        </div>
      </div>
    </div>
  );
};

export default Story;
