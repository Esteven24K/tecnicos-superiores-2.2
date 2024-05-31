import React from "react"
import { CarouselData } from "../../data";
import CardCarousel from "../Widgets/CardCarousel";


function Carousel({setValue, tamano}) {


	return (
		<div id="header-carousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
			<div className="carousel-inner">
				<CardCarousel setValue={setValue} card={CarouselData[0]} tamano ={tamano}/>
				<CardCarousel setValue={setValue} card={CarouselData[1]} tamano ={tamano}/>
			</div>
			<button className="carousel-control-prev" type="button" data-bs-target="#header-carousel"
				data-bs-slide="prev">
				<span className="carousel-control-prev-icon" aria-hidden="true"></span>
				<span className="visually-hidden">Anterior</span>
			</button>
			<button className="carousel-control-next" type="button" data-bs-target="#header-carousel"
				data-bs-slide="next">
				<span className="carousel-control-next-icon" aria-hidden="true"></span>
				<span className="visually-hidden">Siguiente</span>
			</button>
		</div>
	)
}

export default Carousel;