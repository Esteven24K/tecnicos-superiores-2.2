import React from "react";


function CardPerson({ persons }) {

    return (

        <div className="col-lg-4" data-wow-delay="0.1s">
            <div className="team-item bg-light rounded overflow-hidden">
                <div className="team-img position-relative overflow-hidden">
                    <img className="img-fluid w-100" src={persons.Img} alt="" />
                    <div className="team-social">
                        <a className="btn btn-lg btn-success btn-lg-square rounded" href={persons.SocialNetworks.urlFacebook}><i className="fab fa-facebook-f fw-normal"></i></a>
                        <a className="btn btn-lg btn-success btn-lg-square rounded" href={persons.SocialNetworks.urlFacebook}><i className="fab fa-instagram fw-normal"></i></a>
                        <a className="btn btn-lg btn-success btn-lg-square rounded" href={persons.SocialNetworks.urlFacebook}><i className="fab fa-linkedin-in fw-normal"></i></a>
                    </div>
                </div>
                <div className="text-center py-4">
                    <h4 className="text-success">{persons.FullName}</h4>
                    <p className="text-uppercase m-0">{persons.Designation}</p>
                </div>
            </div>
        </div>

    )
}



export default CardPerson;