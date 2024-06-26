import React from "react";
import CardChoose from "./Widgets/CardChoose";
import { Chooses } from "../data";


function ChooseUs() {

    return (
        <div className="container-fluid py-5 fadeInUp" data-wow-delay="0.1s">
            <div className="container py-5">
                <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{ maxWidth: "600px" }}>
                    <h5 className="fw-bold text-success text-uppercase">POR QUÉ ELEGIRNOS</h5>
                    <h1 className="mb-0">Estamos aca para ofrecerte soluciones rapidas y eficaces</h1>
                </div>
                <div className="row g-5">
                    <div className="col-lg-4">
                        <div className="row g-5">
                            <CardChoose choose={Chooses[0]} />
                            <CardChoose choose={Chooses[1]} />
                        </div>
                    </div>
                    <div className="col-lg-4 zoomIn" data-wow-delay="0.9s" style={{ minHeight: "350px" }}>
                        <div className="position-relative h-100">
                            <img className="position-center w-100 h-100" data-wow-delay="0.1s" src="img/feature.jpg" style={{ objectFit: "cover" }} />
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="row g-5">
                            <CardChoose choose={Chooses[2]} />
                            <CardChoose choose={Chooses[3]} />
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}



export default ChooseUs;