import Image from "next/image";
import ContentCard from "./ContentCard";
import storiesImg from "../../public/assets/home/desktop/beautiful-stories.jpg";

const DetailStories = () => {
  return (
    <section className="max-h-[650px] mx-auto flex flex-row">
      <div>
        <Image
          className="min-w-[830px] w-[100%] h-[650px]"
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
