import React from "react";


function InfoCarousel({ setValue }) {

    return (

        <div className="p-3" style={{ maxWidth: "900px" }}>
            <h5 className="text-white text-uppercase mb-3 animated slideInDown">Creativos e innovadores</h5>
            <h1 className="display-1 text-white mb-md-4 animated zoomIn">Solución creativa e innovadora</h1>
            <button className="btn btn-success py-md-3 px-md-5 me-3 animated slideInLeft" onClick={()=>setValue("PRESUPUESTO")}>
                Cotización Gratis
            </button>

            <button className="btn btn-outline-light py-md-3 px-md-5 animated slideInRight" onClick={()=>setValue("CONTACTOS")}>
                Contactenos
            </button>
        </div>

    )
}



export default InfoCarousel;