import react from "react";

export default function AboutDetails() {
  const flexRight = {
    container: {
      flex: 2,
      padding: '1rem',
      display: 'block',
      backgroundColor: 'black',
      maxWidth: '100%',
      height: 'auto',
      aspectRatio: 'attr(width) / attr(height)',
      background: '#000',
      borderRadius: '0 1.5rem 1.5rem 0',
    },
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
