import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const Task = ({ id, description, completed, title, remove, toggle  }) => {

    return (
        <div>
            <div className='container py-3 col-9 col-lg-6'>
                <div className='row list-project'>
                    <div className='card p-1 mb-3'>
                        <div className='card-header d-flex justify-content-end p-1'>
                        <div  style={{ cursor: 'pointer' }} ><span  onClick={ () => toggle(id) } className= { completed ? "badge text-bg-success p-2" : "badge text-bg-warning p-2" } >
                        {`${ completed ? 'completed' : 'Pending' }`}</span></div>
                        </div>
                        <div className='card-body mt-1'>
                            <div className='card-title'><h5> { title } </h5></div>
                            <hr></hr>
                            <p className='card-text'>{ description }</p> 
                        </div>
                        <div className='projectList-btn d-flex p-1 justify-content-center gap-2'>
                            <button className='btn btn-danger btn-sm' onClick={ () => remove(id) }>Delete</button>
                            <Link className='btn btn-primary btn-sm' to={`/editTask/${id}`} style={{ textDecoration: 'none' }} >Edit</Link>
                        </div>   
                    </div>
                </div>   
            </div>
           
        </div>
    );
};


Task.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    remove: PropTypes.func.isRequired
};


export default Task;
