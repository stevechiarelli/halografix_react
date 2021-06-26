import React from "react";

function Package(props) {
    return (
        <>
            <div className="form-group">
                <label style={props.data.required} htmlFor="category">*Select from the list of {props.type} options below and click next when complete.</label><br /><br />
                <select name="category" onChange={props.handleChange}>
                    <option hidden value=""> -- select an option -- </option>
                    {props.service.map(item => {
                        return (
                            <option 
                                key={item.fields.id} 
                                value={item.fields.sub_category + "," + item.fields.price}>
                                {item.fields.description} ({item.fields.price === "0" && item.fields.sub_category === "other" ? "$TBD" : (Number(item.fields.price)).toLocaleString('en-US', {style: 'currency', currency: 'USD'})})
                            </option>
                        );
                    })}                                
                </select>
            </div>
            <div className="service">
                <div style={props.data.category !== "" && props.data.category !== "other" ? {display: "block"} : {display: "none"}}>
                    <h4>Here's what's included</h4>
                    <ul dangerouslySetInnerHTML={{ __html: props.details[0] === undefined ? "" : props.details[0].fields.details }}></ul>
                    <div className="form-group">
                        <h4>Choose your add-ons</h4>
                        {props.addon.map(item => {
                            return (
                                <label key={item.fields.id} className="checkbox">{item.fields.description} (+${item.fields.price})
                                    <input type="checkbox" name={item.fields.sub_category} value={true + "," + item.fields.price} onChange={props.handleChange} checked={props.data[item.fields.sub_category]} />
                                    <span className="checkmark"></span><br />
                                    <small>{item.fields.details}</small>
                                </label>
                            );
                        })}
                    </div>
                    <div className="form-group">
                        <label htmlFor="requests">Do you have any other requests?</label><br />
                        <textarea 
                            name="requests"
                            value={props.data.requests}
                            onChange={props.handleChange}
                        />
                        <small>*Additional fees my apply for requests and will not be reflected in the total price.</small>
                    </div>
                </div>
                <div style={props.data.category === "other" ? {display: "block"} : {display: "none"}}>
                    <div className="form-group">
                        <label htmlFor="requests">Tell us about your event</label><br />
                        <textarea 
                            name="requests"
                            value={props.data.requests}
                            onChange={props.handleChange}
                        />
                    </div>
                </div>
                <p className="highlight" style={props.data.category !== "" ? {display: "block"} : {display: "none"}}>
                    {props.data.total === 0 && props.data.category === "other" ? "$TBD" : (props.data.total).toLocaleString('en-US', {style: 'currency', currency: 'USD'})}
                </p>
            </div>
        </>
    );
}

export default Package;