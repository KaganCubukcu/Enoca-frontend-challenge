import React, { useState } from "react";
import { useSelector } from "react-redux";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Spinner from "../../components/loading-animation/Spinner";
import Navbar from "../../components/navbar/Navbar";
import { useGetNewsCategoryQuery } from "../../redux/newsApi/newsSlice";
import "./technology.css";

const Technology = () => {
  const [page, setPage] = useState(1);

  const selectedCountry = useSelector(
    (state) => state.filterSlice.selectedCountry
  );
  const selectedCategory = useSelector(
    (state) => state.filterSlice.selectedCategory
  );
  const filterText = useSelector((state) => state.filterSlice.filterText);
  const {
    data: news = [],
    isLoading,
    isFetching,
    isError,
    error,
  } = useGetNewsCategoryQuery({
    selectedCountry,
    selectedCategory,
  });
  if (isLoading || isFetching) {
    return <Spinner />;
  }
  if (isError) {
    console.log({ error });
    return <div>{error.status}</div>;
  }
  const filteredNews = news.articles.filter((article) =>
    article.title.toLowerCase().includes(filterText.toLowerCase())
  );
  return (
    <div className="technology-container">
      <Header />
      <Navbar />
      <div className="technology-content">
        <section className="technology-section-content">
          {filterText === "" ? (
            <div>
              {news.articles
                .slice(0 + (page - 1) * 10, 0 + page * 10)
                .map((article, index) => (
                  <div key={index} className="technology-content-container">
                    <section className="technology-content-img">
                      <img
                        src={article.urlToImage}
                        alt=""
                        style={{ width: "400px", height: "100%" }}
                      />
                    </section>
                    <section className="technology-content-heading">
                      <h4>{article.title}</h4>
                      <p>{article.description}</p>
                    </section>
                  </div>
                ))}
            </div>
          ) : (
            <div>
              {filteredNews.map((filternew, index) => (
                <div key={index} className="technology-content-container">
                  <section className="technology-content-img">
                    <img
                      src={filternew.urlToImage}
                      alt=""
                      style={{ width: "400px", height: "100%" }}
                    />
                  </section>
                  <section className="technology-content-heading">
                    <h4>{filternew.title}</h4>
                    <p>{filternew.description}</p>
                  </section>
                </div>
              ))}
            </div>
          )}
          <div className="pagination-buttons">
            <button
              disabled={page <= 1}
              onClick={() => setPage((prev) => prev - 1)}
            >
              Prev
            </button>
            {page}
            <button
              disabled={news.articles.length < (page + 1) * 10}
              onClick={() => setPage((prev) => prev + 1)}
            >
              Next
            </button>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Technology;
