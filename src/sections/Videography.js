import React from "react";
import {useContext} from "react";
import {DataContext} from "../AppData";
import videography_alt from "../assets/images/videography-alt.jpg";

function Videography() {
    const data = useContext(DataContext);
    let videography = [];

    if (data != null) {
        let section = data.filter(item => item.videography)
        videography = section[0].videography[0].fields;
    }

    return (
        <section className="videography" id="videography">
            <div className="container">
                <div className="container-right">
                    <h2>{videography.heading}</h2>
                    <p>{videography.content}</p>
                </div>
            </div>
            <img src={videography_alt} alt="videography" />
        </section>
    );
}

export default Videography;