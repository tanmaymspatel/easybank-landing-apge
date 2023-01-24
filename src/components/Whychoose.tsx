import { features } from "./data"
import Feature from "./Feature";

function Whychoose() {

    const featuresData = features.map(feature => {
        return (
            <Feature
                key={feature.id}
                id={feature.id}
                img={feature.img}
                title={feature.title}
                description={feature.description}
            />
        )
    })
    return (
        <section className="section bg-danger">
            <div className="container-lg">
                <h3 className="heading text-primary text-center text-md-start py-3">Why Choose Easybank?</h3>
                <p className="sub-heading mb-0 text-success text-center text-md-start">We leverage Open Banking to turn your bank account into your financial hub.</p>
                <p className="sub-heading mb-0 text-success text-center text-md-start">Contol your finances like never before.</p>
                <div className="mt-5">
                    <div className="row text-center text-md-start">
                        {featuresData}
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Whychoose;
