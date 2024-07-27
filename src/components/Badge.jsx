import React from "react";

export default function Badge(props) {

    const container = {
        display: 'flex',
        font: `monospace`,
        color: 'black',
        fontSize: '15px',
        margin: '15px 35px 0 0',
        opacity: '0.8',
        textAlign: 'left',
        padding: '1rem',
        border: '0.1px solid rgb(100, 100, 100)',
        height: 'auto',
        borderRadius: '10px',
        backgroundColor: 'wheat',
    };
    const logo = {
        width: '100px',
        height: '100px',
        margin: '0 10px 0 0',
    };
    const title = {
        display: 'flex',
        font: `monospace`,
        fontSize: '20px',
        textAlign: 'left',
        fontWeight: 'bold',
    };

    return (
        <div style={container}>
            <img src={props.logo} alt="badge" style={logo} />
            <div>
                <div style={title}>{props.content.achievement}</div>
                <div>{props.content.year}</div>
                <div>{props.content.additional}</div>
            </div>
        </div>
    );
}