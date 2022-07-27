import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

// Components
import Section1 from "../pages/home/Section1";
import AboutUsSection from "../pages/home/AboutUsSection";
import Section3 from "../pages/home/Section3";
import OurValuesSection from "../pages/home/OurValuesSection";
import TeamSection from "../pages/home/TeamSection";
import ContactSection from "../pages/home/ContactSection";

export default function Home() {
  const location = useLocation();
  const navigate = useNavigate();
  let statePage = "";
  try {
    statePage = location.state.page;
  } catch (error) {}

  useEffect(() => {
    if (statePage !== "") {
      let offset;
      switch (statePage) {
        case "about":
          offset =
            document.getElementsByClassName("aboutUsSection")[0].offsetTop;
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
      navigate("/", { replace: true, state: { page: "" } });
    }
  }, []);

  return (
    <>
      <section id="homeContainer">
        <Section1 />
        <AboutUsSection />
        <Section3 />
        <OurValuesSection />
        <TeamSection />
        <ContactSection />
      </section>
    </>
  );
}
