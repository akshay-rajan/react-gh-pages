import react from "react";


export default function SvgComponent2(props) {
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg">
        <path d="M0,50 C100,50 100,162 150,0" stroke={props.currentEdu == 1 ? "#4493f8": "grey"} strokeWidth="4px" fill="transparent" />
      </svg>
    </>
  );
}
