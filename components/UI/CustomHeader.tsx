import Image, { StaticImageData } from "next/image";

interface Props {
  title: string;
  text: string;
  src: StaticImageData;
}

const CustomHeader = ({ title, text, src }: Props) => {
  return (
    <section className="max-h-[490px] mx-auto flex flex-row">
      <div className="bg-pure-black flex items-center">
        <div className="w-[100%] min-w-[610px] flex gap-[106px] py-[173px] pr-[111px]">
          <div className="bg-gradient-to-b from-spc-blue to-spc-pink w-[6px] h-[144px]" />
          <div className="w-[100%] min-w-[387px] flex flex-col text-pure-white">
            <h1 className="text-pure-white mb-[21px]">{title}</h1>
            <p className="ptext text-pure-white/[.6] mb-[48px]">{text}</p>
          </div>
        </div>
      </div>

      <div>
        <Image
          className="object-fit min-w-[830px] w-[100%] h-[490px]"
          src={src}
          alt="Hero"
          priority
        />
      </div>
    </section>
  );
};

export default CustomHeader;
