import iconOnline from "../assets/images/icon-online.svg"

function Whychoose() {
    return (
        <section className="section bg-danger">
            <div className="container">
                <h3 className="heading text-primary py-3">Why Choose Easybank?</h3>
                <p className="sub-heading mb-0 text-success">We leverage Open Banking to turn your bank account into your financial hub.</p>
                <p className="sub-heading mb-0 text-success">Contol your finances like never before.</p>
                <div className="mt-5">
                    <div className="row">
                        <div className="col-sm-6 col-md-3 mt-4">
                            <figure className="icon-container mb-5">
                                <img src={iconOnline} alt="onlinebanking" />
                            </figure>
                            <h5 className="feature-title text-primary mb-4">Online Banking</h5>
                            <p className="text-success">
                                Our modern web and mobile aoolications allow you to keep track of your finances wherever you are in the world.
                            </p>
                        </div>
                        <div className="col-sm-6 col-md-3 mt-4">
                            <figure className="icon-container mb-5">
                                <img src={iconOnline} alt="onlinebanking" />
                            </figure>
                            <h5 className="feature-title text-primary mb-4">Online Banking</h5>
                            <p className="text-success">
                                Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.
                            </p>
                        </div>
                        <div className="col-sm-6 col-md-3 mt-4">
                            <figure className="icon-container mb-5">
                                <img src={iconOnline} alt="onlinebanking" />
                            </figure>
                            <h5 className="feature-title text-primary mb-4">Online Banking</h5>
                            <p className="text-success">
                                Our modern web and mobile aoolications allow you to keep track of your finances wherever you are in the world.
                            </p>
                        </div>
                        <div className="col-sm-6 col-md-3 mt-4">
                            <figure className="icon-container mb-5">
                                <img src={iconOnline} alt="onlinebanking" />
                            </figure>
                            <h5 className="feature-title text-primary mb-4">Online Banking</h5>
                            <p className="text-success">
                                Our modern web and mobile aoolications allow you to keep track of your finances wherever you are in the world.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Whychoose;
