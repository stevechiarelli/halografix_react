import React from "react";
import {useContext} from "react";
import {DataContext} from "../AppData";
import halografix_productions from "../assets/images/halografix-productions.jpg";

function AddonPromo1() {
    const data = useContext(DataContext);
    const items = [];
    let promo = [];
    let addons = [];

    if (data != null) {
        let section = data.filter(item => item.services);
        promo = section[0].services;
        addons = promo.filter(item => item.fields.addon === 1 && item.fields.featured === 1);
        
        for (let i = 0; i < 3; i++) {
            items.push(
                <React.Fragment key={addons[i].fields.id}>
                    <h3 key={i}>{addons[i].fields.description}</h3>
                    <p>{addons[i].fields.details}</p>
                </React.Fragment>
            );
        }
    }

    return (
        <section className="promo-1">
            <div className="content">
                <img src={halografix_productions} alt="Halografix Productions" />
                <div className="container">
                    {items}
                </div>
            </div>
        </section>
    );
}

export default AddonPromo1;