import React from 'react';
import imgPrincipal from '../../assets/img/completed.svg'

const Principal = () => {
    return (
        <>
            <section className='sec-home'>
                <div className='home-info'>
                    <div className='info-text'>
                        <span>Organize your Maintenance Routines</span>
                    </div>
                    <h2 className='home-title'>maintenance checkup software</h2>
                    <p className='home-description'>
                        This Software allows the visualization, monitoring and control of the execution of the maintenance routines of your company, thus achieving greater efficiency in its maintenance indicators.
                    </p>
                </div>
                <div className='home-img d-none d-md-block'>
                    <img src={ imgPrincipal } alt='foto' />
                </div>  
            </section>
            <section className='sec-details'>
            </section>
        </>
       
    );
}

export default Principal;
