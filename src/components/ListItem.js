import React from "react";

function ListItem(props) {
    return (
        <li>
            <img src={props.image} alt={props.alt} />
            <h3>{props.heading}</h3>
            <p>{props.content}</p>
        </li>
    );
}

export default ListItem;