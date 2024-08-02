import React from "react";


export default function Certificate({ certification, index }) {
  return (
    <div className="card">
      <div className="card__side card__side--front-1">
        <div className="certification-card" key={index}><div>
          <div style={window.innerWidth < 798 ? {color: "black", fontSize: "14px"} : {color: "black", fontSize: "16px"}} className="card-content">
            {certification.certification}
          </div>
          <div className="card-content" style={{color: "grey"}}>
            {certification.year}
          </div>
          <div style={{color: "grey"}}>
            {certification.institution}
          </div>
          </div>
        </div>
      </div>
      <div className="card-content card__side card__side--back card__side--back-1">
        <img src={certification.image} alt="certificate" style={{width: "100%", height: "100%"}} />
      </div>
    </div>
  );
}