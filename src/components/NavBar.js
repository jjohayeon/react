import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../asset/logo.png";

export default function NavBar() {
  const [scrollY, setScrollY] = useState(0);
  const [lastScroll, setLastScroll] = useState(0);
  const [scrollState, setScrollState] = useState(true);
  const [navOpacity, setNavOpacity] = useState(false);
  const navigate = useNavigate();

  //scroll Event
  const navBackground = {
    background: navOpacity ? "black" : "none",
  };
  const handleScroll = () => {
    setScrollY(window.pageYOffset);
    if (scrollY > lastScroll) {
      setScrollState(false);
    } else if (scrollY < lastScroll) {
      setScrollState(true);
    }
    setLastScroll(scrollY);
  };

  //scroll page offset
  const clickNavMenu = (page, e) => {
    e.preventDefault();
    if (window.location.pathname === "/") {
      let offset;
      switch (page) {
        case "about":
          offset =
            document.getElementsByClassName("aboutUsSection")[0].offsetTop;
          console.log(offset);
          break;
        case "team":
          offset = document.getElementsByClassName("teamSection")[0].offsetTop;
          break;
        case "contact":
          offset =
            document.getElementsByClassName("contactSection")[0].offsetTop;
          break;
        default:
          break;
      }
      window.scrollTo({ top: offset, behavior: "smooth" });
    } else {
      navigate("/", { state: { page: page } });
    }
  };
  useEffect(() => {
    if (window.scrollY === 0) {
      setScrollState(true);
    }
    // About Us section부터 nav background 검정색으로
    if (window.location.pathname === "/") {
      if (window.scrollY < 937) {
        setNavOpacity(false);
      } else if (window.scrollY > 937) {
        setNavOpacity(true);
      }
    } else {
      setNavOpacity(true);
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <div
      style={navBackground}
      className={scrollState ? "navBar down" : "navBar up"}
    >
      <div className="logo point">
        <img
          src={Logo}
          alt="logo"
          onClick={() => {
            window.location.href = "/";
          }}
        />
      </div>
      <div className="navMenu">
        <ul>
          <li
            className="prom-regular point"
            onClick={(e) => {
              clickNavMenu("about", e);
            }}
          >
            ABOUT US
          </li>
          <li
            className="prom-regular point"
            onClick={(e) => {
              clickNavMenu("team", e);
            }}
          >
            TEAM
          </li>
          <li
            className="prom-regular point"
            onClick={(e) => {
              clickNavMenu("contact", e);
            }}
          >
            CONTACT
          </li>
        </ul>
      </div>
    </div>
  );
}
