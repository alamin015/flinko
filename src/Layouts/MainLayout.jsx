import Header from "../common/Header/Header";
import Footer from "../common/Footer/Footer";
import Faq from "../pages/Faq/Faq";
import Map from "../pages/Map/Map";
import Phone from "../pages/Phone/Phone";
import Join from "../pages/Join/Join";
import Price from "../pages/Price/Price";
import Banner from "../pages/Home/Banner";
// import Testimonial from "../pages/Testimonial/Testimonial";

const MainLayout = () => {
  return (
    <>
      <Header />
      <Banner />
      <Faq />
      <Map />
      <Phone />
      <Join />
      <Price />
      {/* <Testimonial /> */}
      <Footer />
    </>
  );
};

export default MainLayout;
