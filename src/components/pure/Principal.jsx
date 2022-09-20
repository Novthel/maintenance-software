import React from 'react';
import portatil from '../../assets/img/portatil.svg'


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
                    <img src={ portatil } alt='foto' />
                </div>  
            </section>
            <section className='sec-details'>
                        <div className='details-info'>
                            <h2 className='details-title'>Organize maintenance requests</h2>
                            <p className='details-description'>
                                Easily track the progress of maintenance requests using the projects view. Use the maintenance routines list to organize and plan activities.
                                Your team will love using this task visualization interface to organize their daily tasks.
                            </p>
                        </div>
            </section>
        </>
       
    );
}

export default Principal;
