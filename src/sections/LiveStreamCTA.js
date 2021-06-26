import React from "react";
import {DataContext} from "../AppData";
import FormWizard from "../forms/FormWizard";
import Faq from "../components/Faq";

class LiveStreamCTA extends React.Component {
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
        document.getElementById("livestream-faq-modal").addEventListener('click', this.handleClickOutside, true);
    }

    componentWillUnmount() {
        document.getElementById("livestream-faq-modal").removeEventListener('click', this.handleClickOutside, true);
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
        if (event.target.id === "livestream-faq") {
            document.body.style.position = '';
            window.scrollTo(0, this.position);

            this.setState({
                faq: "none"
            });
        }
    }

    render() {
        let data = this.context;
        let livestream_cta = [];

        if (data != null) {
            let section = data.filter(item => item.livestream_cta);
            livestream_cta = section[0].livestream_cta[0].fields;
        }
        
        return (
            <section className="livestream-cta cta">
                <div className="container">
                    <h2>{livestream_cta.heading}</h2>
                    <p>{livestream_cta.content} <button className="link" id="faq" onClick={this.handleShow}>{livestream_cta.link}</button></p>
                    <button className="btn-primary" name={livestream_cta.button_url} onClick={this.handleShow}>{livestream_cta.button_text}</button>
                </div>

                <div id="modal" className="modal" style={{display: this.state.form}}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-form" id="livestream-modal">
                                <span className="close" onClick={this.handleClose}>&times;</span>
                                <FormWizard type="livestream" />
                            </div>
                        </div>
                    </div>
                </div>

                <div id="livestream-faq-modal" className="modal" style={{display: this.state.faq}}>
                    <div className="modal-dialog" id="livestream-faq">
                        <div className="modal-content">
                            <div className="modal-form">
                                <span className="close" onClick={this.handleClose}>&times;</span>
                                <Faq type="livestream" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default LiveStreamCTA;