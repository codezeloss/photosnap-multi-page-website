import Image from "next/image";
import designImg from "/assets/home/desktop/designed-for-everyone.jpg";
import ContentCard from "./ContentCard";

const DetailDesign = () => {
  return (
    <section className="h-[650px] mx-auto flex flex-row">
      <ContentCard
        title="Design for everyone"
        paragraph="Photosnap can help you create stories that resonate with your audience.  Our tool is designed for photographers of all levels, brands, businesses you name it."
      />

      <div>
        <Image
          className="min-w-[830px] w-[100%] h-[650px]"
          src={designImg}
          alt="Photographer"
          priority
        />
      </div>
    </section>
  );
};

export default DetailDesign;
