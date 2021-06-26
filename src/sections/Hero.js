import React from "react";
import {DataContext} from "../AppData";
import Loading from "../components/Loading";
import ScrollTo from "../components/ScrollTo";

class Hero extends React.Component {
    static contextType = DataContext;

    handleClick = (event) => {
        let section = document.querySelector(event.target.name);
        ScrollTo(section, 1250, 65);
    };

    render() {
        let data = this.context;

        if (data != null) {
            let section = data.filter(item => item.hero);
            let hero = section[0].hero[0].fields;
    
            return (
                <section className="hero" id="home">
                    <div className="container hero-container">
                        <h1>{hero.heading}</h1>
                        <h5>{hero.subheading}</h5>
                        <button className="btn-primary" name={hero.button_url} onClick={this.handleClick}>{hero.button_text}</button>
                    </div>
                    <div className="triangle-down"></div>
                </section>
            );
        }

        return (
            <section className="hero">
                <Loading />
            </section>
        );
    }
}

export default Hero;