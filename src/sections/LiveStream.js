import React from "react";
import {useContext} from "react";
import {DataContext} from "../AppData";
import live_stream from "../assets/images/videography-live-stream.jpg";

function LiveStream() {
    const data = useContext(DataContext);
    let livestream = [];

    if (data != null) {
        let section = data.filter(item => item.livestream);
        livestream = section[0].livestream[0].fields;
    }

    return (
        <section className="live-stream" id="livestream">
            <div className="live-stream-container">
                <img src={live_stream} alt="live stream" />
                <div className="container">
                    <h2>{livestream.heading}</h2>
                    <p>{livestream.content}</p>
                </div>
            </div>
        </section>
    );
}

export default LiveStream;