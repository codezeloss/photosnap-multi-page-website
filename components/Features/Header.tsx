import Image from "next/image";
import heroImg from "../../public/assets/features/desktop/hero.jpg";

const Header = () => {
  return (
    <section className="max-h-[490px] mx-auto flex flex-row">
      <div className="bg-pure-black flex items-center">
        <div className="min-w-[610px] w-[100%] flex gap-[106px] py-[173px] pr-[111px]">
          <div className="bg-gradient-to-b from-spc-blue to-spc-pink w-[6px] h-[144px]" />
          <div className="w-[387px] flex flex-col text-pure-white">
            <h1 className="text-pure-white mb-[21px]">Features</h1>
            <p className="ptext text-pure-white/[.6] mb-[48px]">
              We make sure all of our features are designed to be loved by every
              aspiring and even professional photograpers who wanted to share
              their stories.
            </p>
          </div>
        </div>
      </div>

      <div>
        <Image
          className="min-w-[830px] w-[100%] h-[490px]"
          src={heroImg}
          alt="Hero"
          priority
        />
      </div>
    </section>
  );
};

export default Header;
