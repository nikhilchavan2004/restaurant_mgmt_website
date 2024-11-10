import React from "react";
// import { Link } from "react-router-dom";
// import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const About = () => {
  return (
    <section
      className="about"
      id="about"
      style={{
        backgroundColor: "black",
        color: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "2rem 0",
     
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          width: "100%",
          maxWidth: "1200px",
             position:"relative",
        left:"8rem"
        }}
      >
        <div className="banner" style={{ flex: 1, paddingRight: "2rem" }}>
          <h1
            className="heading"
            style={{ color: "white", marginBottom: "1rem" }}
          >
            About Us
          </h1>
          <p style={{ color: "" ,fontSize:"1.5rem" }}>
            Welcome to NIKHIL's, located in the heart of downtown! Our
            restaurant was inspired by generations of family recipes, bringing
            authentic Italian cuisine to life. We pride ourselves on using
            locally sourced ingredients, ensuring every dish is fresh and
            flavorful. Our signature Truffle Risotto, made with hand-picked
            mushrooms and a drizzle of white truffle oil, is a must-try. Join us
            for an unforgettable culinary journey—reserve your table today!
          </p>
        </div>

        <div
          className="banner"
          style={{ flex: 1, display: "flex", justifyContent: "center" }}
        >
          <img
            src="/hw.jpeg"
            alt="Bella Cucina"
            style={{
              width: "550px",
              height: "550px",
              objectFit: "cover",
              objectPosition: "center",
              borderRadius: "50%",
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default About;
