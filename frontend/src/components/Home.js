import React from 'react';
import CarouselSection from '../components/CarouselSection';
import Testimonials from '../components/Testimonials';
import RequestQuote from '../components/RequestQuote';
import WhyUseElectrical from '../components/WhyUseElectrical';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <>
            <CarouselSection />
            <div className="home-container">
                <Testimonials />
                <WhyUseElectrical />
                <RequestQuote />
            </div>
            <Footer />
        </>
    );
};

export default Home;
