import React from "react";
import {DataContext} from "../AppData";
import Package from "./Package";
import Event from "./Event";
import Customer from "./Customer";
import Summary from "./Summary";
import Loading from "../components/Loading";

class FormWizard extends React.Component {
    static contextType = DataContext;

    url = "";
    database = "";
    user = "";

    constructor() {
        super();
        this.state = {
            page: 1,
            error: "",
            loading: false,
            required: { color: "#111111" },
            name: "",
            email: "",
            phone: "",
            referral: "",
            total: 0,
            category: "",
            date: null,
            location: "",
            requests: "",
            details: "",
            spouse_name: "",
            flashdrive: false,
            footage: false,
            ceremony: false,
            ceremony_edit: false,
            trailer: false,
            montage: false,
            website: false,
            cms: false,
            dbms: false
        }
    }

    handleChange = (event) => { 
        const {name, value} = event.target;
        if (name === "category") {
            let arr = event.target.value.split(",");
            this.setState({
                total: Number(arr[1]),
                category: arr[0],
                flashdrive: false,
                footage: false,
                ceremony: false,
                ceremony_edit: false,
                trailer: false,
                montage: false,
                website: false,
                cms: false,
                dbms: false,
                details: ""
            });
        }
        else if (event.target.type === "checkbox") {
            let arr = event.target.value.split(",");

            if (event.target.checked === true) {
                this.setState((state) => ({
                    total: state.total + Number(arr[1]),
                    [name]: true
                }));
            }
            else {
                this.setState((state) => ({
                    total: state.total - Number(arr[1]),
                    [name]: false
                }));
            }
        }
        else {
            this.setState({
                [name]: value
            });
        }
    }

    handleDayClick = (day, modifiers = {}) => {
        if (modifiers.disabled) {
            return;
        }

        this.setState({
          date: modifiers.selected ? null : day
        });
    }

    handleClick = (event) => {
        if (event.target.value === "next" && this.formValidation() === true) {
            if (this.props.type === "webdesign" && this.state.page === 1) {
                this.setState((state) => ({
                    page: state.page + 2,
                    error: "",
                    required: { color: "#111111" } 
                }));
            }
            else {
                this.setState((state) => ({
                    page: state.page + 1,
                    error: "",
                    required: { color: "#111111" } 
                }));
            }
        }
        else if (event.target.value === "previous") {
            if (this.props.type === "webdesign" && this.state.page === 3) {
                this.setState((state) => ({
                    page: state.page - 2,
                    error: "",
                    required: { color: "#111111" } 
                }));
            }
            else {
                this.setState((state) => ({
                    page: state.page - 1,
                    error: "",
                    required: { color: "#111111" } 
                }));
            }
        }
        else {
            this.setState({  
                required: { color: "red" }
            });
        }

        document.querySelector("#videography-modal").scrollTo(0, 0);
        document.querySelector("#livestream-modal").scrollTo(0, 0);
        document.querySelector("#addon-modal").scrollTo(0, 0);
        event.preventDefault();
    }

    handleSubmit = () => {
        this.setState({ loading: true }, () => {  
            setTimeout(() => {
                this.setState((state) => ({
                    page: state.page + 1,
                    loading: false
                }));
             }, 3000);
        });

        document.querySelector("#videography-modal").scrollTo(0, 0);
        document.querySelector("#livestream-modal").scrollTo(0, 0);
        document.querySelector("#addon-modal").scrollTo(0, 0);
    }

    handleClose = (event) => {
        document.body.style.position = '';
        document.querySelector("." + this.props.type + "-cta .modal").style.display = "none";
        event.preventDefault();
    }

    formValidation() {
        const mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        const phoneformat = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im;
        /* const zipformat = /(^\d{5}$)|(^\d{5}-\d{4}$)/; */

        if (this.state.page === 1) {
            if (this.state.category === "") {
                this.setState({ 
                    error: "Fields indicated with * are required!" 
                });
                
                return false;
            }
        }

        if (this.state.page === 2) {
            if (this.state.location === "") {
                this.setState({ 
                    error: "Fields indicated with * are required!" 
                });
                
                return false;
            }

            if (this.state.date === null) {
                this.setState({
                    error: "Please select an event date!"
                });

                return false;
            }
        }

        if (this.state.page === 3) {
            if (this.state.name === "" || this.state.email === "" || this.state.phone === "") {
                this.setState({
                    error: "Fields indicated with * are required!"
                });
            
                return false;
            }

            if (!mailformat.test(this.state.email)) {
                this.setState({
                    error: "Invalid email format!"
                });

                return false;
            }

            if (!phoneformat.test(this.state.phone)) {
                this.setState({
                    error: "Invalid phone number format!"
                });

                return false;
            }
        }

        return true;
    }

    render() {
        let data = this.context;
        let service = [];
        let details = [];
        let addon = [];
        let serviceSummary = [];
        let addonSummary = [];
        let page1 = "";
        let page2 = "";
        let page3 = "";
        let page4 = "";

        if (data != null) {
            let section = data.filter(item => item.services);
            let formWizard = section[0].services;

            service = formWizard.filter(item => item.fields.category === this.props.type && item.fields.package === 1 && item.fields.active === 1);
            details = formWizard.filter(item => item.fields.category === this.props.type && item.fields.sub_category === this.state.category && item.fields.package === 1);
            addon = formWizard.filter(item => item.fields.category === this.props.type && item.fields.addon === 1 && item.fields.active === 1);

            serviceSummary = formWizard.filter(item => item.fields.category === this.props.type && item.fields.sub_category === this.state.category && item.fields.package === 1);
            addonSummary = formWizard.filter(item => item.fields.category === this.props.type && item.fields.addon === 1 && this.state[item.fields.sub_category] !== false);

            page1 = <Package data={this.state} type={this.props.type} service={service} details={details} addon={addon} handleChange={this.handleChange} />;
            page2 = <Event data={this.state} handleDayClick={this.handleDayClick} handleChange={this.handleChange} />;
            page3 = <Customer data={this.state} handleChange={this.handleChange} />;
            page4 = <Summary data={this.state} serviceSummary={serviceSummary} addonSummary={addonSummary} />;
        }
        
        return (
            <div className="form-wizard">
                <form id="wizard" action={this.url} target={this.props.type + "-iframe"} method="post">

                    {/* Page 1 */}
                    <div style={this.state.page === 1 ? {display: "block"} : {display: "none"}}>
                        <h3 className="step-title">1. First thing's first, what will this cost me?</h3>
                        <hr />
                        <p className="step-indicator">({this.props.type === "webdesign" ? "1 of 3" : "1 of 4"})</p>
                        {page1}
                    </div>

                    {/* Page 2 */}
                    <div style={this.state.page === 2 ? {display: "block"} : {display: "none"}}>
                        <h3 className="step-title">2. Okay, now a little bit about your event.</h3>
                        <hr />
                        <p className="step-indicator">(2 of 4)</p>
                        {page2}
                    </div>

                    {/* Page 3 */}
                    <div style={this.state.page === 3 ? {display: "block"} : {display: "none"}}>
                        <h3 className="step-title">{this.props.type === "webdesign" ? "2" : "3"}. Now that we got that out of the way, introduce yourself!</h3>
                        <hr />
                        <p className="step-indicator">({this.props.type === "webdesign" ? "2 of 3" : "3 of 4"})</p>
                        {page3}
                    </div>

                    {/* Page 4 */}
                    <div style={this.state.page === 4 ? {display: "block"} : {display: "none"}}>
                        <h3 className="step-title">{this.props.type === "webdesign" ? "3" : "4"}. Finally, let's wrap things up!</h3>
                        <hr />
                        <p className="step-indicator">({this.props.type === "webdesign" ? "3 of 3" : "4 of 4"})</p>
                        {page4}
                    </div>

                    {this.state.loading === true ? <Loading /> : null}

                    {/* Page 5 */}
                    <div style={this.state.page === 5 ? {display: "block"} : {display: "none"}}>
                        <p className="step-title">Click the close button below to exit this form.</p>
                        <hr />
                        <iframe 
                            className="iframe"
                            title={this.props.type + "-iframe"}
                            name={this.props.type + "-iframe"}
                            src={this.url}>
                        </iframe>
                    </div>

                    {/* Navigation */}
                    <div className="error"><small>{this.state.error}</small></div>
                    <div className="btn-group">
                        <button 
                            className="btn-primary" 
                            value="previous" 
                            onClick={this.handleClick} 
                            style={this.state.page > 1 && this.state.page < 5 ? {display: "block"} : {display: "none"}}>
                            Previous
                        </button>
                        <button 
                            className="btn-primary" 
                            value="next" 
                            onClick={this.handleClick}
                            style={this.state.page < 4 ? {display: "block"} : {display: "none"}}>
                            Next
                        </button>
                        <button 
                            className="btn-primary" 
                            value="submit"
                            onClick={this.handleSubmit} 
                            style={this.state.page === 4 ? {display: "block"} : {display: "none"}}>
                            Submit
                        </button>
                        <button 
                            className="btn-primary" 
                            value="close" 
                            onClick={this.handleClose}
                            style={this.state.page === 5 && this.state.loading === false ? {display: "block"} : {display: "none"}}>
                            Close
                        </button>
                    </div>

                    <input type="hidden" name="total" value={this.state.total} />
                    <input type="hidden" name="type" value={this.props.type} />
                    <input type="hidden" name="database" value={this.database} />
                    <input type="hidden" name="user" value={this.user} />
                </form>
            </div>
        );
    }
}

export default FormWizard;