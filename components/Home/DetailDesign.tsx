import Image from "next/image";
import designImg from "../../public/assets/home/desktop/designed-for-everyone.jpg";
import ContentCard from "./ContentCard";

const DetailDesign = () => {
  return (
    <section className="h-[600px] mx-auto flex flex-row 6bp:flex-col-reverse 6bp:h-[100%]">
      <ContentCard
        title="Design for everyone"
        paragraph="Photosnap can help you create stories that resonate with your audience.  Our tool is designed for photographers of all levels, brands, businesses you name it."
      />

      <div>
        <Image
          className="w-[830px] h-[650px] 1bp:w-[100%] 1bp:min-w-[830px] 2bp:object-cover 2bp:min-w-[100%] 4bp:w-[495px]"
          src={designImg}
          alt="Photographer"
          priority
        />
      </div>
    </section>
  );
};

export default DetailDesign;
