import React from "react";
import loading from "../assets/images/loading.gif";

function Loading() {
    return (
        <div className="loading">
            <img src={loading} alt="loading" />
        </div>
    );
}

export default Loading;