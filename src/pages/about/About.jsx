import React from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import "./about.css";
const About = () => {
  return (
    <div className="about-container">
      <Header />
      <Navbar />
      <div className="about-content">
        <h3>Merhaba, ben Kağan Çubukçu</h3>
        <p>
          Ege Üniversitesi Su Ürünleri Mühendisliği mezunuyum.
          <br />
          2022 Ocak ayında JavaScript öğrenmeye başlayarak yazılım dünyasına
          adım attım.
          <br />
          <br />
          Kullandığım teknolojiler:
          <br />
          <img
            src="https://reactjs.org/logo-og.png"
            alt=""
            className="about-content-image"
          />
          <img
            src="https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg"
            alt=""
            className="about-content-image"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png"
            alt=""
            className="about-content-image"
          />
          <img
            src="https://miro.medium.com/max/1400/1*2tmzU7bve-VlTkOMWsk_Hw.jpeg"
            alt=""
            className="about-content-image"
          />
          <img
            src="https://res.cloudinary.com/hevo/image/upload/v1626694700/hevo-blog/MongoDB-sm-logo-500x400-1-1.gif"
            alt=""
            className="about-content-image"
          />
          <img
            src="https://pluralsight2.imgix.net/paths/images/nodejs-45adbe594d.png"
            alt=""
            className="about-content-image"
          />
          <br />
          <img
            src="https://mui.com/static/logo.png"
            alt=""
            className="about-content-image"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1200px-Bootstrap_logo.svg.png"
            alt=""
            className="about-content-image"
          />
          <img
            src="https://raw.githubusercontent.com/styled-components/brand/master/styled-components.png"
            alt=""
            className="about-content-image"
          />
          <img
            src="https://www.drupal.org/files/project-images/screenshot_361.png"
            alt=""
            className="about-content-image"
          />
          <br />
          Öğrenmeye devam ettiklerim:
          <br />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png"
            alt=""
            className="about-content-image"
          />
          <img
            src="https://www.bairesdev.com/wp-content/uploads/2021/07/Csharp.svg"
            alt=""
            className="about-content-image"
          />
          <br />
          Artık yazılım sektörünün bir parçası olmak ve bu sektörde kendimi en
          iyi yere getirmek istiyorum.
          <br />
          <br />
          Projemi incelediğiniz için çok teşekkür ederim.
        </p>
        <Footer />
      </div>
    </div>
  );
};

export default About;
