import Link from "next/link";

const ButtonCTA = () => {
  return (
    <Link href="." scroll={false}>
      <button
        type="button"
        className="w-[100%] h-[40px] bg-pure-black text-pure-white uppercase font-dm-sans font-bold text-[12px] leading-[16px] tracking-[2px] py-[12px] px-[24px] hover:bg-light-grey hover:text-pure-black"
      >
        Get an invite
      </button>
    </Link>
  );
};

export default ButtonCTA;
