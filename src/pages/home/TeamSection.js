import React from "react";
import { useNavigate } from "react-router-dom";

export default function TeamSection() {
  const navigate = useNavigate();
  return (
    <div className="teamSection">
      <div className="teamSectionWrap">
        <div
          className="team point"
          onClick={() => {
            navigate("/developer");
          }}
        >
          <p>Developer.</p>
        </div>
        <div
          className="team point"
          onClick={() => {
            navigate("/designer");
          }}
        >
          <p>Designer.</p>
        </div>
        <div
          className="team point"
          onClick={() => {
            navigate("/marketer");
          }}
        >
          <p>Marketer.</p>
        </div>
        <div className="team"></div>
      </div>
    </div>
  );
}
