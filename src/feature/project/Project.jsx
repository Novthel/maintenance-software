import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Task from './Task';   
import { useDispatch } from 'react-redux';
import { deleteTask, toggleTask } from './ProjectSlice';


const Project = () => {

    const [project, setProject ] = useState({})
    const stateProjects = useSelector( state => state.projects )
    const params = useParams();
    const projectID = params.id

    const dispatch = useDispatch()

    const removeTask = (id)=> {
        const taskID = id
        dispatch(deleteTask({
            taskID, projectID
        }))
    };

    const toggle = (id)=> {
        const taskID = id
        dispatch(toggleTask({
            taskID, projectID
        }))
    };

    useEffect(() => {

        if(params.id){    
           const projectFound = stateProjects.find((project) => project.id === Number(params.id))
           setProject({
            ...project, ...projectFound
           })
        }
   
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [params.id, stateProjects]);


    return (
        <div>
            {
                project.listTask? 
                    <div className='container pt-5'>
                        <div className=' row text-center'>
                            <h1 >Project: { project.nameProject }</h1>
                        </div>
                        { project.listTask.map((task, index)=> (
                        <Task key={ index } {...task } remove={ removeTask } toggle={ toggle } />
                        ))}     
                    </div>
                :
                <h3>There are no routines in this project.</h3>
            }
        </div>
    );
};


export default Project;
