import Image from "next/image";
import Link from "next/link";
import arrow from "../../public/assets/shared/desktop/arrow-white.svg";

interface Props {
  date?: string;
  src: any;
  title: string;
  credit: string;
}

const Story = ({ date, src, title, credit }: Props) => {
  return (
    <div className="w-[100%] h-[500px] relative hover:-translate-y-[24px]">
      <div>
        <Image
          className="object-cover w-[100%] h-[500px] z-[-5]"
          src={src}
          alt={title}
          width="500"
          height="500"
          priority
        />
      </div>

      <div className="flex flex-col justify-end w-[100%] z-[10] h-[100%] absolute bottom-0 p-[40px] bg-pure-black/[.15]">
        <div className="mb-[16px]">
          <p className="font-dm-sans font-normal text-[13px] leading-[17px] text-pure-white mb-[4px]">
            {date ? date : ""}
          </p>
          <h3 className="text-pure-white">{title}</h3>
          <p className="font-dm-sans font-normal text-[13px] leading-[17px] text-pure-white">
            by {credit}
          </p>
        </div>
        <Link href=".">
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
        </Link>
      </div>
    </div>
  );
};

export default Story;
