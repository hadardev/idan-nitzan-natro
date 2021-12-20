import React from 'react';
import About from '../About/About';
import Footer from '../Footer/Footer';
import Herocard from '../HeroCard/HeroCard';
import Treatments from '../TreatmentsTypes/Treatments';
import homepageHeroCardImage from './../../assets/images/tapuz1_new.jpg';

const Homepage = () => {

    return (
        <div className="homepage">
            <Herocard heroCardImage={homepageHeroCardImage} text='סוגי טיפולים' />
            <About />
            <Treatments />
            <Footer />
        </div>
    );
}

export default Homepage;
