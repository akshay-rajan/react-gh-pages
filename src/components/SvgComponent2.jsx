import react from "react";


export default function SvgComponent2(props) {

  const svgStyle = {
    
  }
  const hide = {
    display: 'none',
  }

  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" style={window.innerWidth < 798 ? hide: svgStyle}>
        <path d="M0,50 C100,50 100,162 150,0" stroke={props.currentEdu == 1 || props.currentEdu == 2 ? "#4493f8": "grey"} strokeWidth="4px" fill="transparent" />
      </svg>
    </>
  );
}
