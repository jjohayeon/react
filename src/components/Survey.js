import React, { useEffect, useState } from "react";
import * as api from "../lib/Api.js";
import * as aes from "../lib/Aes";

export default function Survey() {
    const [surveyList, setSurveyList] = useState([]);
    const [surveyCatList, setSurveyCatList] = useState([]);
    
    useEffect(() => {
        api.getSurvey().then(function (response) {
            setSurveyList(aes.getDec(response["surveyList"]));
            setSurveyCatList(aes.getDec(response["surveyCatList"]));
        });
    }, []);

    return (
        <section id="surveySection">
            <div className="surveySection">
            {surveyList.map((element, index) => {
                let count = 0;
                return (
                    <div className="surveyContainer" key={element.idx}>
                        <div className="surveyLayout">
                            <div className="number">{index + 1}.</div>
                            <div className="title">{element.title}</div>
                            <div className="survey">
                                {element.type !== "2"
                                    ?
                                    surveyCatList.map((element2,index2) => {
                                        if (element2.survey_idx === element.idx) {
                                            count++;
                                            return (
                                                    <div className="cat" key={element2.idx}>
                                                        {count}. {element2.title}
                                                        {element.type === "1"
                                                            ?
                                                            <input type="radio" />
                                                            :
                                                            <input type="checkbox" />
                                                        }
                                                        {element2.type === "1" &&
                                                            <div className="inputLayout">
                                                                <textarea></textarea>
                                                            </div>
                                                        }
                                                    </div>
                                            );
                                        } else{
                                            return false;
                                        }
                                    })
                                    :
                                    <div className="cat">
                                        <div className="inputLayout">
                                            <textarea></textarea>
                                        </div>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                );
            })}
            </div>
        </section>
    );
}
