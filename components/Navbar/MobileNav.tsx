import Link from "next/link";
import ButtonCTA from "../UI/Buttons/ButtonCTA";

interface Props {
  menuToggle(): void;
}

const MobileNav = ({ menuToggle }: Props) => {
  return (
    <div className="w-[375px] h-[100vh] bg-pure-white flex flex-col absolute right-0 top-[72px] px-[33px] py-[32px] z-[30] 7bp:w-[100%]">
      <div className="flex flex-col gap-[20px] font-dm-sans font-bold text-[15px] uppercase leading-[20px] text-center tracking-[2.5px] text-pure-black pb-[20px] border-b-[1px] border-pure-black/[.25] mb-[20px]">
        <Link href="/stories" passHref legacyBehavior>
          <a onClick={menuToggle}>Stories</a>
        </Link>
        <Link href="/features" passHref legacyBehavior>
          <a onClick={menuToggle}>Features</a>
        </Link>
        <Link href="/pricing" passHref legacyBehavior>
          <a onClick={menuToggle}>Pricing</a>
        </Link>
      </div>

      <div onClick={menuToggle}>
        <ButtonCTA />
      </div>
    </div>
  );
};

export default MobileNav;
