import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

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
