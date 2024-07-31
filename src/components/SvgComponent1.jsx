import react from "react";


export default function SvgComponent1(props) {

  const svgStyle = {
    width: '100%',
    height: '120px',
  }
  const hide = {
    display: 'none',
  }

  return (
    <>
      <svg style={window.innerWidth < 798 ? hide : svgStyle} viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg">
        {/*
          Moveto(265, 0) and draw a cubic Beizer curve CurveTo(1050, 605)
          The cubic Beizer curve is defined by two control points and an end point
          The first control point is (250, 250) and the second control point is (400, 100)
        */}
        <path d="M240,0 C250,250,400,100 1000,250" stroke={props.currentEdu == 0 || props.currentEdu == 1 ? "#4493f8": "grey"} strokeWidth="10px" fill="transparent" />
      </svg>
    </>
  );
}
