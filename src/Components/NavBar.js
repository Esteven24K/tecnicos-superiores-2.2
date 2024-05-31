import React from 'react';
import { style } from '../data'



function NavBar({ setPage, page }) {




	return (

		<div>
			<div className="container-fluid position-relative p-0">
				<nav className="navbar navbar-expand-lg navbar-dark px-5 py-3 py-lg-0">
					<a href="index.html" className="navbar-brand p-0">
						<h1 className="m-0"><i className="fa fa-user-tie me-2"></i>Tecnicos Superiores</h1>
					</a>
					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
						<span className="fa fa-bars"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarCollapse">
						<div className="navbar-nav ms-auto py-0">
							<button
								className={`btn nav-item ${page === "INICIO" ? "active" : ""}`}
								onClick={() => setPage("INICIO")}
							>
								Inicio
							</button>
							<button
								className={`btn nav-item ${page === "ACERCA" ? "active" : ""}`}
								onClick={() => setPage("ACERCA")}
							>
								Acerca de
							</button>
							<button
								className={`btn nav-item ${page === "SERVICIOS" ? "active" : ""}`}
								onClick={() => setPage("SERVICIOS")}
							>
								Servicios
							</button>
							<button
								className={`btn nav-item ${page === "COTIZAR" ? "active" : ""}`}
								onClick={() => setPage("COTIZAR")}
							>
								Cotizar servicio
							</button>

							<div className="nav-item dropdown">
								<a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Paginas</a>
								<div className="dropdown-menu m-0">
									<a href="price.html" className="dropdown-item">Plan de precios</a>
									<a href="feature.html" className="dropdown-item">Nuestras características</a>
									<a href="team.html" className="dropdown-item">Miembros del equipo</a>
									<a href="quote.html" className="dropdown-item">Cotización Gratis</a>
								</div>
							</div>
							<button
								className={`btn nav-item ${page === "CONTACTOS" ? "active" : ""}`}
								onClick={() => setPage("CONTACTOS")}
							>
								Contactos
							</button>
						</div>
						

					</div>
				</nav>



			</div>
			
		</div>


	);
}

export default NavBar;