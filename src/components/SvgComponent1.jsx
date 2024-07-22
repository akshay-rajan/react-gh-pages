import react from "react";


export default function SvgComponent1(props) {
  return (
    <>
      <svg style={{width: "100%", height: "120px"}} viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg">
        {/*
          Moveto(265, 0) and draw a cubic Beizer curve CurveTo(1050, 605)
          The cubic Beizer curve is defined by two control points and an end point
          The first control point is (250, 250) and the second control point is (400, 100)
        */}
        <path d="M240,0 C250,250,400,100 3050,240" stroke="grey" strokeWidth="10px" fill="transparent" />
      </svg>
    </>
  );
}
