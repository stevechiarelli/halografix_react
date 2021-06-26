import React from "react";
import {useContext} from "react";
import {DataContext} from "../AppData";
import ListItem from "../components/ListItem";
import video_camera from "../assets/images/video-camera.svg";
import web_browser from "../assets/images/web-browser.svg";
import youtube from "../assets/images/youtube.svg";

function VideographyFeatures() {
    const data = useContext(DataContext);
    let videography_features = [];

    if (data != null) {
        let section = data.filter(item => item.videography_features);
        videography_features = section[0].videography_features[0].fields;
    }

    return (
        <section className="videography-features">
            <div className="container">
                <ul>
                    <ListItem image={video_camera} alt="video camera icon" heading={videography_features.list_item_heading1} content={videography_features.list_item_content1} />
                    <ListItem image={web_browser} alt="web brwoser icon" heading={videography_features.list_item_heading2} content={videography_features.list_item_content2} />
                    <ListItem image={youtube} alt="youtube icon" heading={videography_features.list_item_heading3} content={videography_features.list_item_content3} />
                </ul>
            </div>
        </section>
    );
}

export default VideographyFeatures;