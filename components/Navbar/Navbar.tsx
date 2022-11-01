import Image from "next/image";
import Link from "next/link";
import ButtonCTA from "../UI/Buttons/ButtonCTA";
import logo from "../../public/assets/shared/desktop/logo.svg";
import menu from "../../public/assets/shared/mobile/menu.svg";
import close from "../../public/assets/shared/mobile/close.svg";
import { useState } from "react";
import MobileNav from "./MobileNav";

const Navbar = () => {
  const [menuToggled, setMenuToggle] = useState(false);

  const menuToggleHandler = () => {
    setMenuToggle((prevState) => !prevState);
  };

  return (
    <nav className="max-w-[1138.8px] h-[72px] mx-auto bg-red flex justify-between items-center py-[16px] px-[1.8rem] relative">
      <div className="w-[170px] h-[16px]">
        <Link href="/">
          <Image
            className="w-[170px] h-[16px]"
            src={logo}
            alt="Logo"
            priority
          />
        </Link>
      </div>

      <div className="flex gap-[37px] font-dm-sans font-bold text-[12px] leading-[16px] tracking-[2px] text-pure-black uppercase 5bp:hidden">
        <Link href="/stories" passHref legacyBehavior>
          <a className="hover:text-pure-black/[.3] cursor-pointer">Stories</a>
        </Link>
        <Link href="/features" passHref legacyBehavior>
          <a className="hover:text-pure-black/[.3] cursor-pointer">Features</a>
        </Link>
        <Link href="/pricing" passHref legacyBehavior>
          <a className="hover:text-pure-black/[.3] cursor-pointer">Pricing</a>
        </Link>
      </div>

      <div className="5bp:hidden">
        <ButtonCTA />
      </div>

      {menuToggled && (
        <Image
          className="hidden 5bp:flex w-[20px] h-[6px] cursor-pointer"
          src={menu}
          alt="Menu"
          onClick={menuToggleHandler}
        />
      )}
      {!menuToggled && (
        <Image
          className="w-[14.85px] h-[14.85px] cursor-pointer ml-auto"
          src={close}
          alt="Menu"
          onClick={menuToggleHandler}
        />
      )}

      {!menuToggled && (
        <div>
          <MobileNav menuToggle={menuToggleHandler} />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
