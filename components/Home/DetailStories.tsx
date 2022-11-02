import Image from "next/image";
import ContentCard from "./ContentCard";
import storiesImg from "../../public/assets/home/desktop/beautiful-stories.jpg";

const DetailStories = () => {
  return (
    <section className="max-h-[600px] mx-auto flex flex-row 6bp:flex-col 6bp:max-h-[100%]">
      <div>
        <Image
          className="w-[830px] h-[650px] 1bp:w-[100%] 1bp:min-w-[830px] 2bp:object-cover 2bp:min-w-[100%] 4bp:w-[495px]"
          src={storiesImg}
          alt="Photographer"
          priority
        />
      </div>

      <ContentCard
        title="Beautiful stories every time"
        paragraph="We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone."
      />
    </section>
  );
};

export default DetailStories;
