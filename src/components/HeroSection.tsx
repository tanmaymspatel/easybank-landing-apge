import heroBkg from '../assets/images/image-mockups.png'

function HeroSection() {
    return (
        <section className='bg-warning'>
            <div className="container-lg">
                <div className="row justify-content-between align-items-center hero-bkg position-relative">
                    <div className="col-md-6">
                        <h1 className='hero-heading text-primary text-center text-md-start'>Next generation digital banking</h1>
                        <p className='hero-sub-heading text-success py-3'>Take your financial online. Your easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more. </p>
                        <div className="my-3 text-center text-md-start">
                            <button className="btn btn-gradient text-light">Request Invite</button>
                        </div>
                    </div>
                    <div className="col-md-6 order-0 order-md-1">
                        <figure className="mb-0 ">
                            <img className='position-absolute hero-img' src={heroBkg} alt="Hero Section" />
                        </figure>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default HeroSection;

