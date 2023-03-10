import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Navbar from "../components/navbar/Navbar";
import NewsContent from "../components/newsContent/NewsContent";

const CategoryDetails = () => {
  return (
    <div className="news-container">
      <Header />
      <Navbar />
      <NewsContent />
      <Footer />
    </div>
  );
};

export default CategoryDetails;
