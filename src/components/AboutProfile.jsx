import React from "react";
import dp from "../assets/dp_cartoon.jpeg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

export default function AboutProfile() {
  const flexLeft = {
    container: {
      display: 'block',
      padding: '3rem',
      flex: 1,
      backgroundColor: 'black',
      maxWidth: '100%',
      height: 'auto',
      aspectRatio: 'attr(width) / attr(height)',
      background: '#000',
      borderRadius: '1.5rem 0 0 1.5rem',
    },
    imgContainer: {
      textAlign: 'left',
      maxWidth: '100%',
      height: 'auto',
      aspectRatio: 'attr(width) / attr(height)',
      background: '#000',
      borderRadius: '50%',
    },
    dp: {
      textAlign: 'left',
      borderRadius: '50%',
      border: '1px solid wheat',
      width: '70%',
      height: 'auto',
    },
    details: {
      display: 'block',
      textAlign: 'left',
      maxWidth: '100%',
      height: 'auto',
      aspectRatio: 'attr(width) / attr(height)',
      background: '#000',
      borderRadius: '0 1.5rem 1.5rem 0',
    },
    greyFont: {
      color: 'grey',
      fontSize: '1rem',
      margin: '0px',
    },
    name: {
      color: 'white',
      fontSize: '25px',
      fontWeight: 'bold',
    },
    desc: {
      textAlign: 'left',
      color: 'white',
      fontSize: '1rem',
      marginTop: '5px',
    },
    buttonDiv: {
      textAlign: 'left',
      width: '100%',
      marginTop: '1rem',
      height: 'auto',
    },
    mainButton: {
      width: '80%',
      fontSize: '15px',
      color: '#b1aeae',
      fontWeight: 'normal',
      borderRadius: '0.5rem',
      margin: '0.5rem 0',
    },
    extras: {
      textAlign: 'left',
      color: 'white',
      fontSize: '1rem',
      marginTop: '1rem',
    },
    url: {
      color: 'white',
      textDecoration: 'none',
      fontSize: '14px',
    },
  }
  return (
    <>
      <div style={flexLeft.container}>
        <div style={flexLeft.imgContainer}>
          <img src={dp} style={flexLeft.dp} alt="display picture" />
        </div>
        <div style={flexLeft.details}>
          <div style={flexLeft.name}>Akshay R</div>
          <h3 style={flexLeft.greyFont}>akshay-rajan</h3>
        </div>
        <div style={flexLeft.desc}>
          Software Developer | MCA 25' @ College of Engineering, Trivandrum
          <div style={flexLeft.buttonDiv}>
            <a href="https://github.com/akshay-rajan">
              <button style={flexLeft.mainButton}>Github</button>
            </a>
          </div>
          <div style={flexLeft.extras}>
            <a href="https://akshay-rajan.github.io/" style={flexLeft.url}>akshay-rajan.github.io/</a>
          </div>
        </div>
      </div>
    </>
  );
};
