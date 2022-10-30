import Image from "next/image";
import Link from "next/link";
import ButtonCTA from "./ButtonCTA";
import logo from "/assets/shared/desktop/logo.svg";

const Navbar = () => {
  return (
    <nav className="max-w-[1138.8px] h-[72px] mx-auto bg-red flex justify-between items-center py-[16px] px-[1.8rem]">
      <div className="w-[170px] h-[16px]">
        <Link href="/">
          <Image className="w-fit h-fit" src={logo} alt="Logo" priority />
        </Link>
      </div>

      <div className="flex gap-[37px] font-dm-sans font-bold text-[12px] leading-[16px] tracking-[2px] text-pure-black uppercase">
        <Link href="/stories" passHref legacyBehavior>
          <a className="hover:text-pure-black/[.3] cursor-pointer">Strories</a>
        </Link>
        <Link href="/features" passHref legacyBehavior>
          <a className="hover:text-pure-black/[.3] cursor-pointer">Features</a>
        </Link>
        <Link href="/pricing" passHref legacyBehavior>
          <a className="hover:text-pure-black/[.3] cursor-pointer">Pricing</a>
        </Link>
      </div>

      <div>
        <ButtonCTA />
      </div>
    </nav>
  );
};

export default Navbar;
