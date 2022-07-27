import React from "react";
import { useScrollFadeIn } from "../../lib/useIntersectionObserver";

const aboutUsTitleMobile =
  "https://onecollection.co.kr/resources/resource/client/aboutUsTitle_mobile.png";

export default function AboutUsSection() {
  return (
    <div className="aboutUsSection">
      <div className="container">
        <p className="pageTitle prom-regular">ABOUT US</p>
        <div className="aboutUsTitle prom-medium">
          <p {...useScrollFadeIn("up", 1.5, 0)}>Connect the Countless Dots.</p>
          <p {...useScrollFadeIn("up", 1.5, 0.1)}>We are One Collection</p>
          <div className="hiddenBox">
            <p {...useScrollFadeIn("up", 1.5, 0.2)}>We are One Collection</p>
          </div>

          <img
            className="aboutUsTitleMobileImg"
            src={aboutUsTitleMobile}
            alt="aboutUsTitleMobile"
          />
        </div>
        <div className="aboutUsSubTitle" {...useScrollFadeIn("up", 1.5, 0.1)}>
          <p>
            열정을 가진 젊은 인재들이 모여 하나의 팀을 이루고, 팀이 모여서
            하나의 사업체가 만들어집니다.
          </p>
          <p>
            우리는 무수한 점들을 이어 하나의 컬렉션을 완성하는 원컬렉션입니다.
          </p>
        </div>
      </div>
    </div>
  );
}
