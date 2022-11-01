import Image from "next/image";
import Link from "next/link";
import arrow from "../../public/assets/shared/desktop/arrow-white.svg";
import photographer from "../../public/assets/home/desktop/create-and-share.jpg";

const Header = () => {
  return (
    <section className="max-h-[650px] mx-auto flex flex-row 6bp:flex-col-reverse 6bp:max-h-[100%]">
      <div className="bg-pure-black flex items-center">
        <div className="w-[610px] flex gap-[106px] 3bp:gap-[54px] py-[173px] pr-[111px] 1bp:w-[100%] 1bp:h-[100%] 3bp:pr-[54px] 4bp:w-[495px] 6bp:flex-col 6bp:py-0 6bp:px-[33px] 6bp:pb-[72px] 6bp:w-[100%]">
          <div className="bg-gradient-to-b from-spc-blue to-spc-pink w-[6px] h-[304px] 6bp:w-[128px] 6bp:h-[6px]" />
          <div className="w-[100%] flex flex-col text-pure-white">
            <h1 className="text-pure-white mb-[21px]">
              Create and share your photo stories.
            </h1>
            <p className="ptext text-pure-white/[.6] mb-[48px]">
              Photosnap is a platform for photographers and visual storytellers.
              We make it easy to share photos, tell stories and connect with
              others.
            </p>
            <Link
              href="."
              className="flex gap-[16px] cursor-pointer justify-start items-center"
            >
              <button
                type="button"
                className="font-dm-sans font-bold text-[12px] leading-[16px] tracking-[2px] text-pure-white uppercase"
              >
                Get an invite
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
      </div>

      <div>
        <Image
          className="object-cover w-[830px] h-[650px] 1bp:w-[100%] 1bp:h-[100%] 6bp:w-[100%] 6bp:h-[100%]"
          src={photographer}
          alt="Photographer"
          priority
        />
      </div>
    </section>
  );
};

export default Header;
