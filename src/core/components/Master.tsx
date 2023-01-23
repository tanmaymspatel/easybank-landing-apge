import Footer from "./Footer";
import Header from "./Header";
import Routing from "./Routing";

function Master() {
    return (
        <div className="h-100 d-flex flex-column">
            <header id="header">
                <Header />
            </header>
            <main className="flex-grow-1 d-flex flex-column overflow-y-auto">
                <div className="flex-grow-1">
                    <Routing />
                </div>
                <footer id="footer" className="h-100 bg-primary">
                    <Footer />
                </footer>
            </main>
        </div>
    )
};

export default Master;