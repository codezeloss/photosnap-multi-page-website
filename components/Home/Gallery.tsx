import Story from "../Story";
import mountains from "/assets/stories/desktop/mountains.jpg";
import cityscapes from "/assets/stories/desktop/cityscapes.jpg";
import daysvoyage from "/assets/stories/desktop/18-days-voyage.jpg";
import architecturals from "/assets/stories/desktop/architecturals.jpg";

const Gallery = () => {
  return (
    <section className="flex flex-row">
      <Story picture={mountains} title="The Mountains" credit="John Applesed" />
      <Story
        picture={cityscapes}
        title="Sunset Cityscapes"
        credit="Benjamin Cruz"
      />
      <Story
        picture={daysvoyage}
        title="18 Days Voyage"
        credit="Alexei Borodin"
      />
      <Story
        picture={architecturals}
        title="Architecturals"
        credit="Samantha Brooke"
      />
    </section>
  );
};

export default Gallery;
