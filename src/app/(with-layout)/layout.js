import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const withLayout = ({children}) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer/>
    </div>
  );
};

export default withLayout;