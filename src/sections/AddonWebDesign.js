import React from "react";
import {useContext} from "react";
import {DataContext} from "../AppData";
import webdesign_left from "../assets/images/webdesign-left.jpg";
import webdesign_right from "../assets/images/webdesign-right.jpg";

function AddonWebDesign() {
    const data = useContext(DataContext);
    let webdesign = [];

    if (data != null) {
        let section = data.filter(item => item.addon_webdesign);
        webdesign = section[0].addon_webdesign[0].fields;
    }

    return (
        <section className="web-design" id="addons">
            <div className="image-container">
                <img src={webdesign_left} className="web-design-left" alt="web design" />
                <div className="web-design-center">
                    <h2>Event Website</h2>
                    <img src={webdesign_right} alt="web design" />
                </div>
            </div>
            <div className="web-design-right">
                <div className="container">
                    <h3>{webdesign.heading1}</h3>
                    <p>{webdesign.heading2}</p>
                    <ul>
                        <li>{webdesign.list_item1}</li>
                        <li>{webdesign.list_item2}</li>
                        <li>{webdesign.list_item3}</li>
                        <li>{webdesign.list_item4}</li>
                    </ul>
                    <p>{webdesign.content}</p>
                </div>
            </div>
        </section>
    );
}

export default AddonWebDesign;