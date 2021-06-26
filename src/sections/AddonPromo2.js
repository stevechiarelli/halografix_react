import React from "react";
import {useContext} from "react";
import {DataContext} from "../AppData";
import halografix_flyer from "../assets/images/halografix-flyer-mobile.jpg";

function AddonPromo2() {
    const data = useContext(DataContext);
    const items = [];
    let promo = [];
    let addons = [];

    if (data != null) {
        let section = data.filter(item => item.services);
        promo = section[0].services;
        addons = promo.filter(item => item.fields.addon === 1 && item.fields.featured === 1);
        
        for (let i = 3; i < 6; i++) {
            items.push(
                <React.Fragment key={addons[i].fields.id}>
                    <h3 key={i}>{addons[i].fields.description}</h3>
                    <p key={i+1}>{addons[i].fields.details}</p>
                </React.Fragment>
            );
        }
    }

    return (
        <section className="promo-2">
            <div className="container">
                <div className="content">
                    <img src={halografix_flyer} alt="Halografix Flyer" />
                    <div className="overlay">
                        {items}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AddonPromo2;