import React from "react";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import Filter from "../../components/filter/Filter";
import { useGetNewsCategoryQuery } from "../../redux/newsApi/newsSlice";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Spinner from "../../components/loading-animation/Spinner";

const Categories = () => {
  const selectedCountry = useSelector(
    (state) => state.filterSlice.selectedCountry
  );
  const selectedCategory = useSelector(
    (state) => state.filterSlice.selectedCategory
  );

  const fixedNameCategory = selectedCategory.toLowerCase();

  const {
    data: news = [],
    isLoading,
    isFetching,
    isError,
    error,
  } = useGetNewsCategoryQuery({
    selectedCountry,
    selectedCategory: fixedNameCategory,
  });

  if (isLoading || isFetching) {
    return <Spinner />;
  }
  if (isError) {
    console.log({ error });
    return <div>{error.status}</div>;
  }

  return (
    <div className="news-container">
      <Header />
      <Navbar />
      <p className="news-categoryname">{selectedCategory} news</p>
      <div className="news-content">
        <Filter />
        <section className="news-section-content">
          {news.articles.slice(0, 5).map((article, index) => (
            <div key={index} className="news-content-container">
              <section className="news-content-img">
                <img
                  src={article.urlToImage}
                  alt=""
                  style={{ width: "400px", height: "100%" }}
                />
              </section>
              <section className="news-content-heading">
                <h4>{article.title}</h4>
                <p>{article.description}</p>
              </section>
            </div>
          ))}
          <Link
            to={`/${fixedNameCategory}`}
            style={{
              textDecoration: "none",
              color: "black",
              padding: 10,
              marginTop: 30,
              display: "flex",
              justifyContent: "center",
            }}
          >
            Click here for more news
          </Link>
        </section>
      </div>
    </div>
  );
};

export default Categories;
