import Image from "next/image";
import Link from "next/link";
import bgBeta from "../../public/assets/shared/desktop/bg-beta.jpg";
import arrow from "../../public/assets/shared/desktop/arrow-white.svg";

const CTAInvite = () => {
  return (
    <section className="relative">
      <Image
        className="object-cover w-[100%] h-[280px] z-[-5]"
        src={bgBeta}
        alt="Beta"
      />

      <div className="w-[100%] absolute z-[10] top-0 flex flex-row justify-between gap-[20px] items-center py-[68px] px-[165px]">
        <h1 className="max-w-[400px] text-pure-white">
          We’re in beta. Get your invite today!
        </h1>

        <div>
          <Link href="/pricing" className="flex gap-[16px] cursor-pointer">
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
        </div>
      </div>
    </section>
  );
};

export default CTAInvite;
