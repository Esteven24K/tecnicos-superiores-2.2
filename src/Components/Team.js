import React from "react";
import {persons} from '../data'
import CardPerson from "./Widgets/CardPerson";


function Team(){

    return(
        <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5">
            <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{maxWidth:"600px"}}>
                <h5 className="fw-bold text-success text-uppercase">Nuestro equipo de trabajo</h5>
                <h1 className="mb-0">Profecionales listos para ayudarles</h1>
            </div>
            <div className="row g-5">
                
            <CardPerson persons={persons[0]}/>
            <CardPerson persons={persons[1]}/>
            <CardPerson persons={persons[2]}/>
            
                
            </div>
        </div>
    </div>
    )
}


export default Team;