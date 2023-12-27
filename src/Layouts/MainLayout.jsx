import Header from "../common/Header/Header";
import Footer from "../common/Footer/Footer";
import Faq from "../pages/Faq/Faq";
import Map from "../pages/Map/Map";
import Phone from "../pages/Phone/Phone";
import Join from "../pages/Join/Join";

const MainLayout = () => {
  return (
    <>
      <Header />
      <Faq />
      <Map />
      <Phone />
      <Join />
      <Footer />
    </>
  );
};

export default MainLayout;
