import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Designer() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();
  return (
    <>
      <div className="teamPage">
        <div className="teamPageWrap">
          <div className="teamIntroduction">
            <div className="titleLayout">
              <div className="teamName prom-regular">we are designer</div>
              <div className="teamMainTitle prom-medium">
                <p><span className="teamMainTitleTop upAnimation">Creating</span></p>
                <p><span className="teamMainTitleBottom upAnimation">A Special Values.</span></p>
              </div>
              <div className="teamSubTitle">
                <p className="upAnimation">우리는 새로움을 주도하며 특별한 가치를 만들어냅니다.</p>
              </div>
            </div>
            <div className="contentsLayout">
              <ul>
                <li>
                  <small></small>
                  <p></p>
                </li>
                <li className="one">
                  <small>1</small>
                  <p>새로움에 도전하는</p>
                </li>
                <li className="two">
                  <small>2</small>
                  <p>사소함을 놓치지 않는</p>
                </li>
                <li className="three">
                  <small>3</small>
                  <p>경험을 디자인하는</p>
                </li>
                <li className="fore">
                  <small>4</small>
                  <p>방향을 제시하는</p>
                </li>
                <li className="five">
                  <small>5</small>
                  <p>머무르지 않는</p>
                </li>
              </ul>
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
                <p>
                  WEB
                  <br />
                  DESIGN
                </p>
              </div>
              <div className="circle">
                <p>
                  Brand
                  <br />
                  Experience
                  <br />
                  Design
                </p>
              </div>
              <div className="circle">
                <p>
                  User
                  <br />
                  Experience
                  <br />
                  Design
                </p>
              </div>
              <div className="circle">
                <p>
                  Contents
                  <br />
                  Design
                </p>
              </div>
              <div className="circle">
                <p>
                  Design
                  <br />
                  Planning
                </p>
              </div>
              <div className="circle">
                <p>
                  Advertising
                  <br />
                  Design
                </p>
              </div>
              <div className="circle">
                <p>
                  Communication
                  <br />
                  Design
                </p>
              </div>
              <div className="circle">
                <p>
                  WEB
                  <br />
                  DESIGN
                </p>
              </div>
              <div className="circle">
                <p>
                  WEB
                  <br />
                  DESIGN
                </p>
              </div>
              <div className="circle">
                <p>
                  Brand
                  <br />
                  Experience
                  <br />
                  Design
                </p>
              </div>
              <div className="circle">
                <p>
                  User
                  <br />
                  Experience
                  <br />
                  Design
                </p>
              </div>
              <div className="circle">
                <p>
                  Contents
                  <br />
                  Design
                </p>
              </div>
              <div className="circle">
                <p>
                  Design
                  <br />
                  Planning
                </p>
              </div>
              <div className="circle">
                <p>
                  Advertising
                  <br />
                  Design
                </p>
              </div>
              <div className="circle">
                <p>
                  Communication
                  <br />
                  Design
                </p>
              </div>
              <div className="circle">
                <p>
                  WEB
                  <br />
                  DESIGN
                </p>
              </div>
              <div className="circle">
                <p>
                  WEB
                  <br />
                  DESIGN
                </p>
              </div>
              <div className="circle">
                <p>
                  Brand
                  <br />
                  Experience
                  <br />
                  Design
                </p>
              </div>
              <div className="circle">
                <p>
                  User
                  <br />
                  Experience
                  <br />
                  Design
                </p>
              </div>
              <div className="circle">
                <p>
                  Contents
                  <br />
                  Design
                </p>
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
