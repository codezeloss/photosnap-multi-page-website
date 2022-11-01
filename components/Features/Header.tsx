import heroImg from "../../public/assets/features/desktop/hero.jpg";
import CustomHeader from "../UI/CustomHeader";

const Header = () => {
  return (
    <CustomHeader src={heroImg} title="Features" text="We make sure all of our features are designed to be loved by every aspiring and even professional photograpers who wanted to share their stories." />
  );
};

export default Header;
