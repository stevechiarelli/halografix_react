import React from "react";
import {useContext} from "react";
import {DataContext} from "../AppData";
import videography_mobile from "../assets/images/videography-mobile.jpg";

function VideographyInfo() {
    const data = useContext(DataContext);
    let videography_info = [];

    if (data != null) {
        let section = data.filter(item => item.videography_info);
        videography_info = section[0].videography_info[0].fields;
    }

    return (
        <section className="videography-info">
            <div className="content">
                <div className="container">
                    <h3>{videography_info.heading1}</h3>
                    <p>{videography_info.heading2}</p>
                    <ul>
                        <li>{videography_info.list_item1}</li>
                        <li>{videography_info.list_item2}</li>
                        <li>{videography_info.list_item3}</li>
                        <li>{videography_info.list_item4}</li>
                    </ul>
                    <p>{videography_info.content}</p>
                </div>
                <img src={videography_mobile} alt="videography" />
            </div>
        </section>
    );
}

export default VideographyInfo;