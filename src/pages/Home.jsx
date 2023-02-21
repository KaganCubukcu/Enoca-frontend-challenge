import Header from "../components/header/Header";
import Navbar from "../components/navbar/Navbar";
import Slider from "../components/slider/Slider";
import RecentNews from "../components/recentNews/RecentNews";
import Footer from "../components/footer/Footer";

const Home = () => {
  return (
    <div className="home-container">
      <Header />
      <Navbar />
      <Slider />
      <RecentNews />
      <Footer />
    </div>
  );
};
export default Home;
