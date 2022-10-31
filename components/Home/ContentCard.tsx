import Image from "next/image";
import Link from "next/link";
import arrow from "/assets/shared/desktop/arrow.svg";

interface Props {
  title: string;
  paragraph: string;
}

const ContentCard = ({ title, paragraph }: Props) => {
  return (
    <div className="bg-pure-white flex items-center px-[112px]">
      <div className="w-[100%] flex flex-col text-pure-white">
        <h1 className="text-pure-black mb-[21px]">{title}</h1>
        <p className="ptext text-pure-black/[.6] mb-[48px]">{paragraph}</p>
        <Link
          href="/stories"
          className="flex gap-[16px] cursor-pointer justify-start items-center"
        >
          <button
            type="button"
            className="font-dm-sans font-bold text-[12px] leading-[16px] tracking-[2px] text-pure-black uppercase"
          >
            View the stories
          </button>
          <Image
            className="w-[42px] h-[12px]"
            src={arrow}
            alt="Arrow"
            priority
          />
        </Link>
      </div>
    </div>
  );
};

export default ContentCard;
