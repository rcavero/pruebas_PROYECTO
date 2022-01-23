import React from "react";

export const Card = () => {
    return (
        <div className="container-fluid mt-3">
            <div className="card mb-3 w-50 m-auto">
                <img src="https://lp-cms-production.imgix.net/2020-12/Bearfoot%20Theory_California_Joshua%20Tree_Sprinter%20Van_Interior%20Working2.jpg?auto=format&fit=crop&sharp=10&vib=20&ixlib=react-8.6.4&w=850&q=75&dpr=1" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title mb-3"><i class="fas fa-campground text-success"></i> NOMAD Place Camping</h5>
                    <p className="card-text"><i class="fas fa-map-marker-alt text-danger"></i> Algún lugar del desierto, S/N / Valencia (España)</p>
                    <p className="card-text">Este es un lugar perfecto en medio del desierto en el que nadie te va a molestar y puedes pasar la noche tranquilamente. Espectaculares las vistas del amanecer mientras tomas un café.</p>
                    <div className="container-fluid d-flex justify-content-between ps-0 mb-3">
                        <div>
                            <h5 className="card-text text-primary">
                                <i class="fas fa-shower me-2"></i>
                                <i class="fas fa-laptop me-2"></i>
                                <i class="fas fa-gas-pump me-2"></i>
                                <i class="fas fa-bed"></i>
                            </h5>
                        </div>
                        <div>
                            <h5 className="card-text">
                            <i class="fas fa-star text-warning"></i>
                            <i class="fas fa-star text-warning"></i>
                            <i class="fas fa-star text-warning"></i>
                            <i class="fas fa-star text-warning"></i>
                            <i class="fas fa-star"></i>
                            </h5>
                        </div>
                    </div>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div>
        </div>
    );
}