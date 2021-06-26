import React from "react";
import ScrollTo from "./ScrollTo";
import SetActiveItem from "./SetActiveItem";
import logo_white from "../assets/images/halografix_light.svg";
import logo_dark from "../assets/images/halografix_primary.svg";
import menu_light from "../assets/images/menu-light.svg";
import menu_dark from "../assets/images/menu-dark.svg";

class Navbar extends React.Component {
    constructor() {
        super();
        this.state = {
            isOpen: false,
            sticky: false,
            section: {
                home: "active",
                videography: "",
                livestream: "",
                addons: "",
                contact: ""
            }
        }
    }

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }

    handleScroll = () => {
        if (window.scrollY > 0) {
            this.setState({
                sticky: true
            });
        }
        else {
            this.setState({
                sticky: false
            });
        }

        if (SetActiveItem("home", 0)) {
            this.setState({ 
                section: { home: "active" }
            });
        }
        if (SetActiveItem("videography", 150)) {
            this.setState({
                section: { videography: "active" }
            });
        }
        if (SetActiveItem("livestream", 150)) {
            this.setState({
                section: { livestream: "active" }
            });
        }
        if (SetActiveItem("addons", 150)) {
            this.setState({
                section: { addons: "active" }
            });
        }
        if (SetActiveItem("contact", 300)) {
            this.setState({
                section: { contact: "active" }
            });
        }
    }

    handleToggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    handleClick = (event) => {
        let section = document.querySelector(event.target.name);
        ScrollTo(section, 1250, 125);
        this.handleToggle();
    }

    render() {
        return (
            <div className={this.state.sticky ? "navbar sticky" : "navbar"} id="navbar">
                <div className="container">
                    <header>
                        <div className="logo">
                            <a href="https://www.halografix.com"><img src={logo_white} className="logo-light" alt="logo" /></a>
                            <a href="https://www.halografix.com"><img src={logo_dark} className="logo-dark hidden" alt="logo" /></a>
                        </div>
        
                        <div className="nav-btn">
                            <button type="button" className="nav-btn-light" onClick={this.handleToggle}>
                                <img src={menu_light} alt="open navigation" />
                            </button>
                            <button type="button" className="nav-btn-dark hidden" onClick={this.handleToggle}>
                                <img src={menu_dark} alt="open navigation" />
                            </button>
                        </div>
                    </header>
                    <nav>
                        <ul className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}>
                            <li className={this.state.section.home}><button name="#home" onClick={this.handleClick}>home</button></li>
                            <li className={this.state.section.videography}><button name="#videography" onClick={this.handleClick}>videography</button></li>
                            <li className={this.state.section.livestream}><button name="#livestream" onClick={this.handleClick}>live stream</button></li>
                            <li className={this.state.section.addons}><button name="#addons" onClick={this.handleClick}>add-ons</button></li>
                            <li className={this.state.section.contact}><button name="#contact" onClick={this.handleClick}>contact</button></li>
                        </ul>
                    </nav>
                </div>
            </div>
        );
    }
}

export default Navbar;