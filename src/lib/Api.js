import * as aes from "./Aes.js";

export async function setQuestion(request) {
  try {
    const apiToken = getApiToken();
    let URL = "https://onecollection.co.kr/api/question/" + apiToken;
    return await fetch(URL, {
      method: "POST",
      body: request,
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (response) {
        return response;
      })
      .catch((error) => console.log("error:", error));
  } catch (error) {
    console.log(error);
    return 0;
  }
}

export async function getSurvey() {
  try {
    const apiToken = getApiToken();
    let URL = "https://onecollection.co.kr/api/survey/" + apiToken;
    return await fetch(URL)
    .then(function (response) {
      return response.json();
    })
    .catch((error) => console.log("error:", error));
  } catch (error) {
    console.log(error);
    return 0;
  }
}

function getApiToken() {
  const date = new Date();
  const year = date.getFullYear();
  const month = ("0" + (date.getMonth() + 1)).slice(-2);
  const day = ("0" + date.getDate()).slice(-2);
  const hour = ("0" + date.getHours()).slice(-2);
  const min = ("0" + date.getMinutes()).slice(-2);
  const sec = ("0" + date.getSeconds()).slice(-2);
  const now =
    "_" + year + "-" + month + "-" + day + "_" + hour + ":" + min + ":" + sec;

  const apiToken = "ipAceno" + now;
  const apiTokenEnc = aes.setEnc(apiToken);
  const apiTokenUrl = encodeURIComponent(apiTokenEnc);
  return apiTokenUrl;
}
