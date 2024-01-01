import Header from "../common/Header/Header";
import Footer from "../common/Footer/Footer";
import Features from "../pages/Features/Features";
import Price from "../pages/Price/Price";
import Banner from "../pages/Home/Banner";
import Testimonial from "../pages/Testimonial/Testimonial";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";
import WhyFlinko from "../pages/WhyFlinko/WhyFlinko";
import Benefits from "../pages/Benefits/Benefits";
import Community from "../pages/Community/Community";

const MainLayout = () => {
  return (
    <>
      <Header />
      <Banner />
      <Features />
      <WhyFlinko />
      <Benefits />
      <Community />
      <Price />
      <Testimonial />
      <ScrollToTop />
      <Footer />
    </>
  );
};

export default MainLayout;
