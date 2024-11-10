import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
const Nf = () => {
  return (
    <section>
      <div className="notFound">
        <div className="container">
          <img src="/download.jpeg" alt="" />
          <h1>LOOKS LIKE YOU ARE LOST</h1>
          <p>The page you are looking for does not exist.</p>
          <Link to={"/"}>
            Back to home
            <span>
              <HiOutlineArrowNarrowRight />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Nf;
