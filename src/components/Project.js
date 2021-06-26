import React from "react";

function Project(props) {
    const { image, title, alt, featured } = props.fields;

    return (
        <div className={featured === 1 ? "item featured" : "item"} onClick={() => props.handleShow(props.fields)}>
            <div className="item-container">
                <div className="overlay"></div>
                <img src={image} alt={alt} />
            </div>
            {featured === 1 ? <h5>{title} | <span>featured project</span></h5> : <h5>{title}</h5>}
        </div>
    );
}

export default Project;