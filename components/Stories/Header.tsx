import Image from "next/image";
import Link from "next/link";
import appalacia from "../../public/assets/stories/desktop/moon-of-appalacia.jpg";
import arrow from "../../public/assets/shared/desktop/arrow-white.svg";

const Header = () => {
  return (
    <section className="w-[100%] h-[650px] relative">
      <Image
        className="object-cover w-[100%] h-[650px]"
        src={appalacia}
        alt="Moon of appalacia"
      />

      <div className="max-w-[387px] absolute top-0 ml-[112px] my-[122px]">
        <div>
          <div>
            <p className="font-dm-sans font-bold text-[12px] leading-[16px] tracking-[2px] text-pure-white mb-[24px] uppercase">
              Last months featured story
            </p>
            <h1 className="text-pure-white mb-[16px]">
              Hazy full moon of appalachia
            </h1>
            <div className="flex gap-[9px] mb-[24px]">
              <p className="font-dm-sans font-normal text-[13px] leading-[17px] text-pure-white/[.75]">
                March 2nd 2020
              </p>
              <p className="ont-dm-sans font-normal text-[13px] leading-[17px] text-pure-white">
                by John Appleseed
              </p>
            </div>
          </div>

          <p className="ptext text-pure-white/[.6] mb-[24px]">
            The dissected plateau area, while not actually made up of geological
            mountains, is popularly called mountains, especially in eastern
            Kentucky and West Virginia, and while the ridges are not high, the
            terrain is extremely rugged.
          </p>

          <Link
            href="/stories"
            className="flex gap-[16px] cursor-pointer justify-start items-center"
          >
            <button
              type="button"
              className="font-dm-sans font-bold text-[12px] leading-[16px] tracking-[2px] text-pure-white uppercase"
            >
              Read the story
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
    </section>
  );
};

export default Header;
