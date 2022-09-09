import React from 'react';
import Footer from '../components/pure/Footer';
import Header from '../components/container/Header';
import Principal from '../components/pure/Principal';

const Home = () => {
    return (
        <div className='container-xxl'>
            <div className='row'>
                <Header />
            </div>
            <div>
                <Principal />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
}

export default Home;
