import articleImg1 from '../assets/images/image-currency.jpg'

function Articles() {
    return (
        <section className="section bg-warning">
            <div className="container">
                <h3 className="heading text-primary pb-5">Latest Articles</h3>
                {/* Articles section */}
                <div className="row">
                    <div className="col-sm-6 col-md-3">
                        <div className="card bg-light">
                            <figure className='rounded-top-left rounded-top-right'>
                                <img src={articleImg1} alt="article-1" className='article-img img-fluid' />
                            </figure>
                            <div className='px-4 py-3'>
                                <small className='article-author text-success'>By Claire Robinson</small>
                                <h5 className='py-1'>Receive money in any currency with no fees</h5>
                                <p className='article-description text-success'>
                                    The world id getting smaller and we're becoming more mobile. So why should you be forced to only receive money in single...
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-3">
                        <div className="card bg-light">
                            <figure className='rounded-top-left rounded-top-right'>
                                <img src={articleImg1} alt="article-1" className='article-img img-fluid' />
                            </figure>
                            <div className='px-4 py-3'>
                                <small className='article-author text-success'>By Claire Robinson</small>
                                <h5 className='py-1'>Receive money in any currency with no fees</h5>
                                <p className='article-description text-success'>
                                    The world id getting smaller and we're becoming more mobile. So why should you be forced to only receive money in single...
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-3">
                        <div className="card bg-light">
                            <figure className='rounded-top-left rounded-top-right'>
                                <img src={articleImg1} alt="article-1" className='article-img img-fluid' />
                            </figure>
                            <div className='px-4 py-3'>
                                <small className='article-author text-success'>By Claire Robinson</small>
                                <h5 className='py-1'>Receive money in any currency with no fees</h5>
                                <p className='article-description text-success'>
                                    The world id getting smaller and we're becoming more mobile. So why should you be forced to only receive money in single...
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-3">
                        <div className="card bg-light">
                            <figure className='rounded-top-left rounded-top-right'>
                                <img src={articleImg1} alt="article-1" className='article-img img-fluid' />
                            </figure>
                            <div className='px-4 py-3'>
                                <small className='article-author text-success'>By Claire Robinson</small>
                                <h5 className='py-1'>Receive money in any currency with no fees</h5>
                                <p className='article-description text-success'>
                                    The world id getting smaller and we're becoming more mobile. So why should you be forced to only receive money in single...
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Articles;
