import Articles from "../components/Articles"
import HeroSection from "../components/HeroSection"
import Whychoose from "../components/WhyChoose"

function Home() {
    return (
        <div className="h-100 d-flex flex-column">
            <HeroSection />
            <Whychoose />
            <Articles />
        </div>
    )
}

export default Home
