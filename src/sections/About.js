import React from "react";
import {DataContext} from "../AppData";
import ScrollTo from "../components/ScrollTo";
import halografix_sign from "../assets/images/halografix-sign.jpg";

class About extends React.Component {
    static contextType = DataContext;

    handleClick = (event) => {
        let section = document.querySelector(event.target.name);
        ScrollTo(section, 1250, 150);
    };

    render() {
        let data = this.context;
        let about = [];

        if (data != null) {
            let section = data.filter(item => item.about);
            about = section[0].about[0].fields;
        }

        return (
            <section className="about" id="about">
                <div className="container">
                    <div className="container-left">
                        <h3>{about.heading}</h3>
                        <p>{about.content}</p>
                    </div>
                </div>
                <img src={halografix_sign} alt="halografix sign" />
            </section>
        );
    }
}

export default About;