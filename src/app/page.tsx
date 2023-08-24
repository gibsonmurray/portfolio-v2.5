import Navbar from "./(navbar)/Navbar";
import Hero from "./(hero)/Hero";
import About from "./(about)/About";
import Portfolio from "./(portfolio)/Portfolio";
import Contact from "./(contact)/Contact";
import Footer from "./(footer)/Footer";

export default function Home() {
    return (
        <div className="h-screen w-screen text-neutral-800">
            <Navbar />
            <Hero />
            <About />
            <Portfolio />
            <Contact />
            <Footer />
        </div>
    );
}
