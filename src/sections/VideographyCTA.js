import React from "react";
import {DataContext} from "../AppData";
import FormWizard from "../forms/FormWizard";
import Faq from "../components/Faq";

class VideographyCTA extends React.Component {
    static contextType = DataContext;

    position = 0;

    constructor() {
        super();
        this.state = {
            faq: "none",
            form: "none"
        }
    }

    componentDidMount() {
        document.getElementById("videography-faq-modal").addEventListener('click', this.handleClickOutside, true);
    }

    componentWillUnmount() {
        document.getElementById("videography-faq-modal").removeEventListener('click', this.handleClickOutside, true);
    }

    handleShow = (event) => {
        this.position = window.pageYOffset;
        document.body.style.position = 'fixed';
        document.body.style.width = '100%';
        
        if (event.target.id === "faq") {
            this.setState({
                faq: "block"
            });
        }
        else {
            this.setState({
                form: "block"
            });
        }
    }

    handleClose = () => {
        document.body.style.position = '';
        window.scrollTo(0, this.position);

        this.setState({
            faq: "none",
            form: "none"
        });
    }

    handleClickOutside = (event) => {
        if (event.target.id === "videography-faq") {
            document.body.style.position = '';
            window.scrollTo(0, this.position);

            this.setState({
                faq: "none"
            });
        }
    }

    render() {
        let data = this.context;
        let videography_cta = [];

        if (data != null) {
            let section = data.filter(item => item.videography_cta);
            videography_cta = section[0].videography_cta[0].fields;
        }
        
        return (
            <section className="videography-cta cta">
                <div className="container">
                    <h2>{videography_cta.heading}</h2>
                    <p>{videography_cta.content} <button className="link" id="faq" onClick={this.handleShow}>{videography_cta.link}</button></p>
                    <button id="wizard" className="btn-primary" name={videography_cta.button_url} onClick={this.handleShow}>{videography_cta.button_text}</button>
                </div>

                <div className="modal" style={{display: this.state.form}}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-form" id="videography-modal">
                                <span className="close" onClick={this.handleClose}>&times;</span>
                                <FormWizard type="videography" />
                            </div>
                        </div>
                    </div>
                </div>

                <div id="videography-faq-modal" className="modal" style={{display: this.state.faq}}>
                    <div className="modal-dialog" id="videography-faq">
                        <div className="modal-content">
                            <div className="modal-form">
                                <span className="close" onClick={this.handleClose}>&times;</span>
                                <Faq type="videography" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default VideographyCTA;