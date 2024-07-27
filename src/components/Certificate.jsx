import React from "react";


export default function Certificate({ certification, index }) {
  return (
    <div class="card">
      <div class="card__side card__side--front-1">
        <div className="certification-card" key={index}><div>
          <div style={{color: "black", fontSize: "16px"}} className="card-content">
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
      <div className="card-content" class="card__side card__side--back card__side--back-1">
        <img src={certification.image} alt="certificate" style={{width: "100%", height: "100%"}} />
      </div>
    </div>
  );
}