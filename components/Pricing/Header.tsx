import CustomHeader from "../UI/CustomHeader";
import heroImg from "../../public/assets/pricing/desktop/hero.jpg";

const Header = () => {
  return (
    <section className="mb-[120px]">
      <CustomHeader
        src={heroImg}
        title="Pricing"
        text="Create a your stories, Photosnap is a platform for photographers and visual storytellers. It's the simple way to create and share your photos."
      />
    </section>
  );
};

export default Header;
