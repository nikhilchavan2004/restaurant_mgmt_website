import React, { useState } from "react";
import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const restApidata = {
    data: [
      {
        navbarLinks: [
          { id: 1, title: "HOME", link: "heroSection" },
          { id: 2, title: "ABOUT US", link: "about" },
          { id: 3, title: "SERVICES", link: "qualities" },
          { id: 4, title: "TEAM", link: "team" },
          { id: 5, title: "RESERVATION", link: "reservation" },
        ],
      },
    ],
  };

  return (
    <nav>
      <div className="logo">NIKHIL</div>
      <div className={show ? "navLinks showmenu" : "navLinks"}>
        <div className="links">
          {restApidata.data[0].navbarLinks.map((element) => (
            <Link
              key={element.id}
              to={element.link}
              spy={true}
              smooth={true}
              duration={500}
            >
              {element.title}
            </Link>
          ))}
        </div>
        <button className="menuBtn">our menu</button>
      </div>
      <div className="hamburger">
        <GiHamburgerMenu onClick={() => setShow(!show)} />
      </div>
    </nav>
  );
};

export default Navbar;
