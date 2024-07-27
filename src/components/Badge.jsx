import React from "react";

export default function Badge(props) {
    return (
        <>
            <img src={props.logo} alt="badge" />
            <div>
                <div>{props.content.achievement}</div>
                <div>{props.content.year}</div>
                <div>{props.content.additional}</div>
            </div>
        </>
    );
}