interface IFeatureProps {
    id: string,
    img: string,
    title: string,
    description: string
}

function Feature({ id, img, title, description }: IFeatureProps) {
    return (
        <div className="col-sm-6 col-lg-3 mt-4">
            <figure className="icon-container mb-5">
                <img src={`${img}`} alt={id} />
            </figure>
            <h5 className="feature-title text-primary mb-4">{title}</h5>
            <p className="text-success">{description}</p>
        </div>
    )
};

export default Feature;
