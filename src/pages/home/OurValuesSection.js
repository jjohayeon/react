import React from "react";
import { useScrollFadeIn } from "../../lib/useIntersectionObserver";

export default function OurValuesSection() {
  return (
    <div className="ourValuesSection">
      <div className="container">
        <div className="ourValuesWrap">
          <p className="pageTitle white  prom-regular">OUR VALUES</p>
          <div className="ourValuesInfo">
            <ul>
              <li {...useScrollFadeIn("up", 1.5, 0)}>
                <small>1</small>
                <p className="valuesKeword prom-medium">Changing</p>
                <p>
                  우리는 항상 새로움을 향해 계속해서 <b>변화</b>합니다.
                </p>
              </li>
              <li {...useScrollFadeIn("up", 1.5, 0.1)}>
                <small>2</small>
                <p className="valuesKeword prom-medium">Convenient</p>
                <p>
                  우리는 일상 속 혁신을 통한 <b>편리함</b>을 제공합니다.
                </p>
              </li>
              <li {...useScrollFadeIn("up", 1.5, 0.2)}>
                <small>3</small>
                <p className="valuesKeword prom-medium">Connect</p>
                <p>
                  우리는 사람과 사람을, 상상과 현실을 <b>연결</b>합니다.
                </p>
              </li>
              <li {...useScrollFadeIn("up", 1.5, 0.3)}>
                <small>4</small>
                <p className="valuesKeword prom-medium">Center</p>
                <p>
                  우리는 혁신과 시작의 <b>중심</b>에 서있습니다.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
