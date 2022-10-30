import Footer from "./Footer";
import Navbar from "./Navbar";

interface Props {
  children: any;
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
