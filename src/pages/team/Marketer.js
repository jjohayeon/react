import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Marketer() {
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
              <div className="teamName prom-regular">we are marketer</div>
              <div className="teamMainTitle prom-medium">
                <p><span className="teamMainTitleTop upAnimation">Process of</span></p>
                <p><span className="teamMainTitleBottom upAnimation">Being Together</span></p>
              </div>
              <div className="teamSubTitle">
                <p className="upAnimation">우리는 언제 어디서나 함께하는 과정 속에 있습니다.</p>
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
                  <p>끊임없이 소통하는</p>
                </li>
                <li className="two">
                  <small>2</small>
                  <p>창의적인 생각을 공유하는</p>
                </li>
                <li className="three">
                  <small>3</small>
                  <p>과정을 가치있게하는</p>
                </li>
                <li className="fore">
                  <small>4</small>
                  <p>최초에서 최고로</p>
                </li>
                <li className="five">
                  <small>5</small>
                  <p>상상을 연결하는</p>
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
                  Market
                  <br />
                  Research
                </p>
              </div>
              <div className="circle">
                <p>
                  Product
                  <br />
                  Management
                </p>
              </div>
              <div className="circle">
                <p>
                  Digital
                  <br />
                  Marketing
                </p>
              </div>
              <div className="circle">
                <p>Promotion</p>
              </div>
              <div className="circle">
                <p>
                  Brand
                  <br />
                  Management
                </p>
              </div>
              <div className="circle">
                <p>Advertising</p>
              </div>
              <div className="circle">
                <p>
                  Public
                  <br />
                  Relations
                </p>
              </div>
              <div className="circle">
                <p>
                  Market
                  <br />
                  Research
                </p>
              </div>
              <div className="circle">
                <p>
                  Product
                  <br />
                  Management
                </p>
              </div>
              <div className="circle">
                <p>
                  Digital
                  <br />
                  Marketing
                </p>
              </div>
              <div className="circle">
                <p>Promotion</p>
              </div>
              <div className="circle">
                <p>
                  Brand
                  <br />
                  Management
                </p>
              </div>
              <div className="circle">
                <p>Advertising</p>
              </div>
              <div className="circle">
                <p>
                  Public
                  <br />
                  Relations
                </p>
              </div>
              <div className="circle">
                <p>
                  Market
                  <br />
                  Research
                </p>
              </div>
              <div className="circle">
                <p>
                  Product
                  <br />
                  Management
                </p>
              </div>
              <div className="circle">
                <p>
                  Digital
                  <br />
                  Marketing
                </p>
              </div>
              <div className="circle">
                <p>Promotion</p>
              </div>
              <div className="circle">
                <p>
                  Brand
                  <br />
                  Management
                </p>
              </div>
              <div className="circle">
                <p>Advertising</p>
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
