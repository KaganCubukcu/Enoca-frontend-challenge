import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useGetNewsCategoryQuery } from "../../redux/newsApi/newsSlice";
import Spinner from "../loading-animation/Spinner";
import Pagination from "../pagination/Pagination";

const NewsContent = () => {
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
    <div className="news-content">
      <section className="news-section-content">
        <p className="news-content-categoryname">{selectedCategory} news</p>
        {filterText === "" ? (
          <div>
            {news.articles
              .slice(0 + (page - 1) * 10, 0 + page * 10)
              .map((article, index) => (
                <div className="news-content-container" key={index}>
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
          </div>
        ) : (
          <div>
            {filteredNews.map((filternew, index) => (
              <div className="news-content-container" key={index}>
                <section className="news-content-img">
                  <img
                    src={filternew.urlToImage}
                    alt=""
                    style={{ width: "400px", height: "100%" }}
                  />
                </section>
                <section className="news-content-heading">
                  <h4>{filternew.title}</h4>
                  <p>{filternew.description}</p>
                </section>
              </div>
            ))}
          </div>
        )}
        <Pagination
          page={page}
          setPage={setPage}
          newsLength={news.articles.length}
        />
      </section>
    </div>
  );
};

export default NewsContent;
