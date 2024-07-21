import react from "react";

export default function AboutDetails() {
  const flexRight = {
    container: {
      flex: 2,
      padding: '1rem',
    }
  }
  return (
    <>
      <div style={flexRight.container}>
        <div>about me</div>
        <div>cards of info</div>
      </div>
    </>
  );
};
