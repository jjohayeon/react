import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import scrollama from "scrollama";

export default function Developer() {
  const scroller = scrollama();
  useEffect(() => {
    scroller
        .setup({
          step: ".scrollTrigger",
          once: true
        })
        .onStepEnter((response) => {
          let target = response["element"].getAttribute("data-target");
          response["element"].style.height = "0";
          window.scrollTo(0, 150);
          document.getElementById(target).classList.add("active");
          if (response["element"].classList.contains("six")) {
            document.getElementById("triggerLayout").style.height = "0";
          }
        });

    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();
  return (
    <>
      <div className="teamPage">
        <div className="teamPageWrap">
          <div className="teamIntroduction">
            <div className="titleLayout">
              <div className="teamName prom-regular">we are developer</div>
              <div className="teamMainTitle prom-medium">
                <p><span className="teamMainTitleTop upAnimation">Programming</span></p>
                <p><span className="teamMainTitleBottom upAnimation">A Dream</span></p>
              </div>
              <div className="teamSubTitle">
                <p className="upAnimation">우리는 상상과 현실을 연결하기 위해 미래를 설계합니다.</p>
              </div>
              <div className="animationLayout">
                <ul>
                  <li id="scrollTargetOne" className="scrollTarget one">
                    <small>1</small>
                    <p>집요하게 설계하는</p>
                  </li>
                  <li id="scrollTargetTwo" className="scrollTarget two">
                    <small>2</small>
                    <p>도전을 멈추지 않는</p>
                  </li>
                  <li id="scrollTargetThree" className="scrollTarget three">
                    <small>3</small>
                    <p>누구에게나 차별없이 친절한</p>
                  </li>
                  <li id="scrollTargetFore" className="scrollTarget fore">
                    <small>4</small>
                    <p>선두에서 앞서가는</p>
                  </li>
                  <li id="scrollTargetFive" className="scrollTarget five">
                    <small>5</small>
                    <p>우리의 미래를 개발하는</p>
                  </li>
                  <li id="scrollTargetSix" className="">
                  </li>
                </ul>
              </div>
            </div>
            <div className="contentsLayout">
              <div id="triggerLayout" className="triggerLayout">
                <ul>
                  <li>
                    <small></small>
                    <p></p>
                  </li>
                  <li className="scrollTrigger one" data-target="scrollTargetOne">
                    <small></small>
                    <p></p>
                  </li>
                  <li className="scrollTrigger two" data-target="scrollTargetTwo">
                    <small></small>
                    <p></p>
                  </li>
                  <li className="scrollTrigger three" data-target="scrollTargetThree">
                    <small></small>
                    <p></p>
                  </li>
                  <li className="scrollTrigger fore" data-target="scrollTargetFore">
                    <small></small>
                    <p></p>
                  </li>
                  <li className="scrollTrigger five" data-target="scrollTargetFive">
                    <small></small>
                    <p></p>
                  </li>
                  <li className="scrollTrigger six" data-target="scrollTargetSix">
                    <small></small>
                    <p></p>
                  </li>
                </ul>
            </div>
            </div>
          </div>
        </div>
        <div className="weDoLayout">
          <div className="weDoWrap">
            <div className="weDo prom-regular">We Do</div>
          </div>
          <div className="animationLayout prom-regular">
            <div className="flowFrame prom-regular">
              <div className="circle">
                <p>Front-End</p>
              </div>
              <div className="circle">
                <p>Back-End</p>
              </div>
              <div className="circle">
                <p>
                  Data
                  <br />
                  Engineering
                </p>
              </div>
              <div className="circle">
                <p>
                  Android
                  <br />
                  IOS
                </p>
              </div>
              <div className="circle">
                <p>AI</p>
              </div>
              <div className="circle">
                <p>Graphics</p>
              </div>
              <div className="circle">
                <p>Front-End</p>
              </div>
              <div className="circle">
                <p>Back-End</p>
              </div>
              <div className="circle">
                <p>Data Engineering</p>
              </div>
              <div className="circle">
                <p>Android IOS</p>
              </div>
              <div className="circle">
                <p>AI</p>
              </div>
              <div className="circle">
                <p>Graphics</p>
              </div>




              <div className="circle">
                <p>Front-End</p>
              </div>
              <div className="circle">
                <p>Back-End</p>
              </div>
              <div className="circle">
                <p>
                  Data
                  <br />
                  Engineering
                </p>
              </div>
              <div className="circle">
                <p>
                  Android
                  <br />
                  IOS
                </p>
              </div>
              <div className="circle">
                <p>AI</p>
              </div>
              <div className="circle">
                <p>Graphics</p>
              </div>
              <div className="circle">
                <p>Front-End</p>
              </div>
              <div className="circle">
                <p>Back-End</p>
              </div>
            </div>
          </div>
        </div>
        <div className="contactButtonWrap">
          <button
            className="contactButton point prom-regular"
            onClick={() => {
              navigate("/", { state: { page: "contact" } });
            }}
          >
            CONTACT
          </button>
        </div>
      </div>
    </>
  );
}
