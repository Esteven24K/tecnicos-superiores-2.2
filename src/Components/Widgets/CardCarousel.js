import React from "react";
import InfoCarousel from "./InfoCarousel";


function CardCarousel({ card, setValue, tamano }) {

    return (

        <div className={tamano+" "+card.className}>
            <img className="w-100" src={card.img} alt="Image" />
            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <InfoCarousel setValue={setValue}/>
            </div>
        </div>

    )
}



export default CardCarousel;