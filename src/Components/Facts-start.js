import React from "react";
import CardFactsStart from "./Widgets/CardFactsStart";
import { Facts } from "../data";


function FactStart() {


    return (
        <div className="container-fluid facts py-5 pt-lg-0">
            <div className="container py-5 pt-lg-0">
                <div className="row gx-0">
                    <CardFactsStart Fact={Facts[0]} />
                    <CardFactsStart Fact={Facts[1]} />
                    <CardFactsStart Fact={Facts[2]} />
                </div>
            </div>
        </div>
    )
}


export default FactStart;

