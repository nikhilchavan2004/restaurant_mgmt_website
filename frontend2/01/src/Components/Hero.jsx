import React from "react";
import Navbar from "./Navbar";
const Hero = () => {
  return (
    <section
      className="heroSection"
      id="heroSection"
      style={{
        background: 'url("/bg.jpg")',
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right",
        backgroundSize: "cover",
        backgroundColor:"black",
        color:"white"
      }}
    >
      <Navbar />
      <div className="container">
        <div className="banner">
          <div className="largeBox">
            <h1 className="title">Delicious</h1>
          </div>
          <div className="combined_boxes">
            <div className="imageBox">
              <img src="/hero1.png" alt="Hero Dish" />
            </div>
            <div
              className="textAndLogo"
              style={{
                position: "relative",
                left: "5rem",
              }}
            >
              <div className="textWithSvg">
                <h1 className="title dishes_title">Dishes</h1>
                <h2 className="title">Food</h2>
                <img
                  src="/threelines.svg"
                  alt="Three Lines Decoration"
                  style={{
                    position: "relative",
                    left: "14rem",
                    top: "-11em",
                  }}
                />
              </div>
              <img src="/logo.svg" alt="Logo" />
            </div>
          </div>
        </div>

        <div className="banner">
          <div className="imageBox">
            <img
              src="/hero2.png"
              alt="Hero Dish 2"
              style={{
                position: "relative",
                top: "4rem",
                backgroundSize: "cover",
              }}
            />
          </div>
          <h1
            className="title dishes_title"
            style={{
              position: "relative",
              left: "5rem",
            }}
          >
            Dishes
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
