import React from "react";
import "./slider.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { useGetNewsHomeQuery } from "../../redux/newsApi/newsSlice";
import Spinner from "../loading-animation/Spinner";

const Slider = () => {
  const {
    data: news = [],
    isLoading,
    isFetching,
    isError,
    error,
  } = useGetNewsHomeQuery();
  if (isLoading || isFetching) {
    return <Spinner />;
  }
  if (isError) {
    console.log({ error });
    return <div>{error.status}</div>;
  }

  return (
    <div className="slider-container">
      <Carousel
        showThumbs={false}
        showArrows={false}
        showStatus={false}
        infiniteLoop={true}
      >
        {news.articles.slice(0, 3).map((article, index) => (
          <div key={index}>
            <div className="carousel-container">
              <img
                src={article.urlToImage}
                alt=""
                style={{ width: "65%", objectFit: "cover" }}
              />
              <section>
                <h2>{article.title}</h2>
                <p>{article.description}</p>
              </section>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Slider;
