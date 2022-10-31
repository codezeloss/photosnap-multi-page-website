import DetailDesign from "../../components/Home/DetailDesign";
import DetailStories from "../../components/Home/DetailStories";
import PSFeatures from "../../components/Home/PSFeatures";
import Gallery from "../../components/Home/Gallery";
import Header from "../../components/Home/Header";

const Homepage = () => {
  return (
    <main>
      <Header />
      <DetailStories />
      <DetailDesign />
      <Gallery/>
      <PSFeatures/>
    </main>
  );
};

export default Homepage;
