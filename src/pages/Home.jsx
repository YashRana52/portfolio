import Navbar from "../components/layout/Navbar";
import Hero from "../components/hero/Hero";
import Skills from "../components/skills/Skills";
import Projects from "../components/projects/Projects";
import Expertise from "../components/expertise/Expertise";
import Journey from "../components/timeline/Journey";
import Contact from "../components/contact/Contact";
import Footer from "../components/layout/Footer";

const Home = () => {
    return (
        <>
            <Navbar />

            <Hero />

            <Skills />

            <Projects />

            <Expertise />

            <Journey />

            <Contact />

            <Footer />
        </>
    );
};

export default Home;