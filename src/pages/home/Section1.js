import React from "react";
// import oneCollectionVideo from "../../asset/oneCollectionVideo.mp4";

export default function Section1() {
  return (
    <div className="section1">
      <video
        className="oneCollectionVideo"
        src="oneCollectionVideo.mp4"
        autoPlay={true}
        // loop={true}
        muted
      ></video>
    </div>
  );
}
