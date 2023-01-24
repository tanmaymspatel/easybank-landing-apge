import Footer from "./Footer";
import Header from "./Header";
import Routing from "./Routing";

function Master() {
    return (
        <div className="h-100 d-flex flex-column">
            <input type="checkbox" id="mobileToggle" className='d-none' />
            <header id="header">
                <Header />
            </header>
            <main className="main-content flex-grow-1 d-flex flex-column overflow-y-auto transition">
                <div className="flex-grow-1">
                    <Routing />
                </div>
                <footer id="footer" className="h-100 bg-primary text-center text-md-start">
                    <Footer />
                </footer>
            </main>
        </div>
    )
};

export default Master;