import Article from './Article'
import { articleData } from './data'

function Articles() {

    const articleDetails = articleData.map((article: any) => {
        return (
            <Article
                key={article.id}
                id={article.id}
                articleImg={article.articleImg}
                author={article.author}
                title={article.title}
                description={article.description}
            />
        )
    })

    return (
        <section className="section bg-warning">
            <div className="container-lg">
                <h3 className="heading text-primary text-center text-md-start pb-5">Latest Articles</h3>
                {/* Articles section */}
                <div className="row">
                    {articleDetails}
                </div>
            </div>
        </section>
    )
};

export default Articles;
