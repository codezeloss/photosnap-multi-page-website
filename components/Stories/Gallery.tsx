import Story from "../UI/Story";
import { data } from "./data";

const Gallery = () => {
  return (
    <section className="grid grid-cols-4">
      {data.map((post) => (
        <Story
          key={post.id}
          date={post.date}
          src={post.desktop}
          title={post.title}
          credit={post.credit}
        />
      ))}
    </section>
  );
};

export default Gallery;
