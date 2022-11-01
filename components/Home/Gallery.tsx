import mountains from "../../public/assets/stories/desktop/mountains.jpg";
import cityscapes from "../../public/assets/stories/desktop/cityscapes.jpg";
import daysvoyage from "../../public/assets/stories/desktop/18-days-voyage.jpg";
import architecturals from "../../public/assets/stories/desktop/architecturals.jpg";
import Story from "../UI/Story";

const Gallery = () => {
  return (
    <section className="grid grid-cols-4 4bp:grid-cols-2 7bp:grid-cols-1">
      <Story src={mountains} title="The Mountains" credit="John Applesed" />
      <Story
        src={cityscapes}
        title="Sunset Cityscapes"
        credit="Benjamin Cruz"
      />
      <Story src={daysvoyage} title="18 Days Voyage" credit="Alexei Borodin" />
      <Story
        src={architecturals}
        title="Architecturals"
        credit="Samantha Brooke"
      />
    </section>
  );
};

export default Gallery;
