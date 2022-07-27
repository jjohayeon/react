import React, { useEffect, useState } from "react";
import * as api from "../../lib/Api.js";
import checkIcon from "../../asset/icon.png";

const contactTitle =
  "https://onecollection.co.kr/resources/resource/client/contactTitle.png";

export default function ContactSection() {
  const [input, setInput] = useState({
    name: "",
    company: "",
    contact: "",
    title: "",
    contents: "",
  });
  const [inputCheck, setInputCheck] = useState({
    name: true,
    company: true,
    contact: true,
    title: true,
    contents: true,
  });
  const [success, setSuccess] = useState(false);

  useEffect(() => {}, [success]);
  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };
  const clickEvent = () => {
    const form = document.getElementById("formData");
    const formData = new FormData(form);
    if (input.name === "") {
      setInputCheck({ ...input, name: false });
    } else if (input.company === "") {
      setInputCheck({ ...input, company: false });
    } else if (input.contact === "") {
      setInputCheck({ ...input, contact: false });
    } else if (input.title === "") {
      setInputCheck({ ...input, title: false });
    } else if (input.contents === "") {
      setInputCheck({ ...input, contents: false });
    } else {
      api.setQuestion(formData).then(function (response) {
        console.log(response);
      });
      setSuccess(true);
    }
  };
  const homeButton = () => {
    setInput({
      name: "",
      company: "",
      contact: "",
      contents: "",
    });
    window.scrollTo(0, 0);
    setSuccess(false);
  };

  return (
    <>
      <div className="contactSection">
        <div className="section6Wrap">
          <p className="pageTitle prom-regular contactPageTitle">Contact</p>
          <p className="emailInfo">
            <img src={contactTitle} alt="contact-main-title" />
          </p>
          <div className="informationBox">
            <div className="office">
              <span className="prom-medium">OFFICE</span>
              <div className="officeText">
                <span>
                  서울특별시 강남구 테헤란로 19길 77-11 (역삼동), B1~2F
                </span>
                <span>070-4773-9688</span>
              </div>
              <p>77-11, Teheran-ro 19-gil Gangnam-gu, Seoul</p>
            </div>
            {success ? (
              <div className="successBox">
                <h1 className="prom-regular">Thank you!</h1>
                <p>성공적으로 전송되었습니다</p>
                <div className="submitButtonWrap">
                  <button
                    className="submitButton homeButton point"
                    onClick={homeButton}
                  >
                    HOME
                  </button>
                </div>
              </div>
            ) : (
              <div className="withUsWrap">
                <div className="withUs">
                  <div className="withUsForm">
                    <span>우리는 언제나 열려있습니다.</span>
                    <form id="formData">
                      <table>
                        <tbody>
                          <tr>
                            <td className="inputRelative">
                              <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                value={input.name}
                                onChange={handleChange}
                                autoComplete="off"
                              ></input>
                              <div
                                className={
                                  inputCheck.name
                                    ? "checkIconWrap hide"
                                    : "checkIconWrap"
                                }
                              >
                                <img
                                  src={checkIcon}
                                  className="inputCheckIcon"
                                  alt="inputCheckIcon"
                                ></img>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="inputRelative">
                              <input
                                type="text"
                                name="company"
                                placeholder="Company"
                                value={input.company}
                                onChange={handleChange}
                                autoComplete="off"
                              ></input>
                              <div
                                className={
                                  inputCheck.company
                                    ? "checkIconWrap hide"
                                    : "checkIconWrap"
                                }
                              >
                                <img
                                  src={checkIcon}
                                  className="inputCheckIcon"
                                  alt="inputCheckIcon"
                                ></img>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="inputRelative">
                              <input
                                type="text"
                                name="contact"
                                placeholder="Number"
                                value={input.contact}
                                onChange={handleChange}
                                autoComplete="off"
                              ></input>
                              <div
                                className={
                                  inputCheck.contact
                                    ? "checkIconWrap hide"
                                    : "checkIconWrap"
                                }
                              >
                                <img
                                  src={checkIcon}
                                  className="inputCheckIcon"
                                  alt="inputCheckIcon"
                                ></img>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="inputRelative">
                              <input
                                type="text"
                                name="title"
                                placeholder="Title"
                                value={input.title}
                                onChange={handleChange}
                                autoComplete="off"
                              ></input>
                              <div
                                className={
                                  inputCheck.title
                                    ? "checkIconWrap hide"
                                    : "checkIconWrap"
                                }
                              >
                                <img
                                  src={checkIcon}
                                  className="inputCheckIcon"
                                  alt="inputCheckIcon"
                                ></img>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="inputRelative">
                              <textarea
                                placeholder="Message"
                                name="contents"
                                value={input.contents}
                                onChange={handleChange}
                                autoComplete="off"
                              ></textarea>
                              <div
                                className={
                                  inputCheck.contents
                                    ? "checkIconWrap hide"
                                    : "checkIconWrap"
                                }
                              >
                                <img
                                  src={checkIcon}
                                  className="inputCheckIcon"
                                  alt="inputCheckIcon"
                                ></img>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </form>
                    <div className="submitButtonWrap">
                      <button
                        className="submitButton point prom-regular"
                        onClick={clickEvent}
                      >
                        SUBMIT
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
