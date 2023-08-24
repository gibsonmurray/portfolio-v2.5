import Navbar from "../components/navbar/Navbar";
import Hero from "../components/hero/Hero";
import About from "../components/about/About";
import Portfolio from "../components/portfolio/Portfolio";
import Contact from "../components/contact/Contact";
import Footer from "../components/footer/Footer";

export default function Home() {

    return (
        <div className="h-screen w-screen text-neutral-800">
            <Navbar/>
            <Hero />
            <About />
            <Portfolio />
            <Contact />
            <Footer />
        </div>
    );
}
