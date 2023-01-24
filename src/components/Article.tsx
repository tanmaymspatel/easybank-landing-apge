function Article({ id, articleImg, author, title, description }: any) {
    return (
        <div className="col-sm-6 col-lg-3">
            <div className="card bg-light">
                <figure className='rounded-top-left rounded-top-right article-img-container overflow-hidden'>
                    <img src={articleImg} alt={id} className='article-img w-100 h-100' />
                </figure>
                <div className='px-4 py-3'>
                    <small className='article-author text-success'>
                        <span>By</span>
                        <span>{author}</span>
                    </small>
                    <h5 className='py-1'>{title}</h5>
                    <p className='article-description text-success'>{description}</p>
                </div>
            </div>
        </div>
    )
};

export default Article;
