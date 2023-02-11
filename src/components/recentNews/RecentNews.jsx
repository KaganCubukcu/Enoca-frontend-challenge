import React, { useState } from "react";
import "./recentNews.css";
import { useGetNewsHomeQuery } from "../../redux/newsApi/newsSlice";
import Spinner from "../loading-animation/Spinner";

const RecentNews = () => {
  const [page, setPage] = useState(1);
  const {
    data: news = [],
    isLoading,
    isFetching,
    isError,
    error,
  } = useGetNewsHomeQuery(page);
  if (isLoading || isFetching) {
    return <Spinner />;
  }
  if (isError) {
    console.log({ error });
    return <div>{error.status}</div>;
  }
  return (
    <div className="recent-news-container">
      <h4>Recent News</h4>
      <div>
        {news.articles
          .slice(3 + (page - 1) * 10, 3 + page * 10)
          .map((article, index) => (
            <div key={index} className="recent-content-container">
              <section className="content-img">
                <img
                  src={article.urlToImage}
                  alt=""
                  style={{ width: "400px", height: "100%" }}
                />
              </section>
              <section className="content-heading">
                <h4>{article.title}</h4>
                <p>{article.description}</p>
              </section>
            </div>
          ))}
      </div>
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
    </div>
  );
};

export default RecentNews;
