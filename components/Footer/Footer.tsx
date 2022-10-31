import logo from "../../public/assets/shared/desktop/logo-white.svg";
import facebook from "../../public/assets/shared/desktop/facebook.svg";
import youtube from "../../public/assets/shared/desktop/youtube.svg";
import twitter from "../../public/assets/shared/desktop/twitter.svg";
import pinterest from "../../public/assets/shared/desktop/pinterest.svg";
import instagram from "../../public/assets/shared/desktop/instagram.svg";
import arrow from "../../public/assets/shared/desktop/arrow-white.svg";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-pure-black py-[64px]">
      <div className="max-w-[1132.8px] max-h-[122px] mx-auto flex justify-between px-[1.8rem]">
        <div className="flex gap-[109px]">
          <div className="flex flex-col gap-[85px]">
            <div className="w-[170px] h-[16px]">
              <Image className="w-fit h-fit" src={logo} alt="Logo" priority />
            </div>
            <div className="flex gap-[13.33px] items-center">
              <Image
                className="w-[20px] h-[20px] cursor-pointer"
                src={facebook}
                alt="facebook"
                priority
              />
              <Image
                className="w-[20px] h-[20px] cursor-pointer"
                src={youtube}
                alt="youtube"
                priority
              />
              <Image
                className="w-[20px] h-[18.25px] cursor-pointer"
                src={twitter}
                alt="twitter"
                priority
              />
              <Image
                className="w-[20px] h-[20px] cursor-pointer"
                src={pinterest}
                alt="pinterest"
                priority
              />
              <Image
                className="w-[20px] h-[20px] cursor-pointer"
                src={instagram}
                alt="instagram"
                priority
              />
            </div>
          </div>

          <div className="flex flex-col gap-[19px] font-dm-sans font-bold text-[12px] leading-[16px] tracking-[2px] uppercase text-pure-white">
            <Link href="/" passHref legacyBehavior>
              <a className="hover:text-pure-white/[.3] cursor-pointer">Home</a>
            </Link>
            <Link href="/stories" passHref legacyBehavior>
              <a className="hover:text-pure-white/[.3] cursor-pointer">
                Strories
              </a>
            </Link>
            <Link href="/features" passHref legacyBehavior>
              <a className="hover:text-pure-white/[.3] cursor-pointer">
                Features
              </a>
            </Link>
            <Link href="/pricing" passHref legacyBehavior>
              <a className="hover:text-pure-white/[.3] cursor-pointer">
                Pricing
              </a>
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-[86px] items-end">
          <Link
            href="/pricing"
            className="flex gap-[16px] cursor-pointer justify-end"
          >
            <button
              type="button"
              className="font-dm-sans font-bold text-[12px] leading-[16px] tracking-[2px] text-pure-white uppercase hover:underline"
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
          <div>
            <p className="font-dm-sans font-normal text-[15px] leading-[20px] text-pure-white/[.5]">
              Copyright 2019. All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
