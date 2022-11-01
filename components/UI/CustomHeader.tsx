import Image, { StaticImageData } from "next/image";

interface Props {
  title: string;
  text: string;
  src: StaticImageData;
}

const CustomHeader = ({ title, text, src }: Props) => {
  return (
    <section className="max-h-[490px] mx-auto flex flex-row 6bp:flex-col-reverse 6bp:max-h-[100%]">
      <div className="bg-pure-black flex items-center">
        <div className="w-[610px] flex gap-[106px] py-[173px] pr-[111px] 4bp:w-[495px] 4bp:gap-[48px] 4bp:pr-[54px] 6bp:flex-col 6bp:py-0 6bp:px-[28px]">
          <div className="bg-gradient-to-b from-spc-blue to-spc-pink w-[6px] h-[144px] 6bp:w-[128px] 6bp:h-[6px]" />
          <div className="w-[100%] min-w-[387px] flex flex-col text-pure-white 7bp:min-w-[100%]">
            <h1 className="text-pure-white mb-[21px]">{title}</h1>
            <p className="ptext text-pure-white/[.6] mb-[48px]">{text}</p>
          </div>
        </div>
      </div>

      <div>
        <Image
          className="object-cover w-[830px] h-[490px] 6bp:w-[100%] 6bp:h-[100%]"
          src={src}
          alt="Hero"
          priority
        />
      </div>
    </section>
  );
};

export default CustomHeader;
