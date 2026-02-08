import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Themes from '../components/Themes';
import Pricing from '../components/Pricing';
import Portfolio from '../components/Portfolio';
import Safety from '../components/Safety';
import Testimonials from '../components/Testimonials';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div className="home-page">
            <Navbar />
            <main>
                <Hero />
                <About />
                <Themes />
                <Pricing />
                <Portfolio />
                <Safety />
                <Testimonials />
                <Contact />
            </main>
            <Footer />
        </div>
    );
};

export default Home;
