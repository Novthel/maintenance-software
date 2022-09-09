import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { updateTask } from './ProjectSlice';


const TaskForm = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const stateProject = useSelector( state => state.projects );
    const params = useParams();
    const [task, setTask] = useState({
        title : '',
        description:'',
        completed: false 
    });

    const handleChange = (e) => {
        e.preventDefault()
        
        setTask({
            ...task,
            [e.target.name] : e.target.value,
        })
    }

    const handleSubmit = (e)=> {
        e.preventDefault()
   
        if(params.id){   
            dispatch(updateTask(task))
            navigate(-1)
        }else{

        }
    };

    useEffect(() => {
        if(params.id){ 
            let lists = []
            stateProject.forEach(element => {
                lists = element.listTask
                
            });
            const task = lists.find((list) => list.id === Number(params.id))
            setTask(task)
        };
    }, [params.id, stateProject]);


    return (

        <div className='container-form '>
            <div className='col-10 col-sm-7 col-md-6 col-xl-4'>
                <form onSubmit={ handleSubmit } className='form-projects m-2'>
                    <legend className='text-center mb-3'>Edit Task</legend>
                    <div className='mb-2'>
                        <label htmlFor='title' className =" col-form-label-sm">Title</label>
                        <input id='title'  className="form-control form-control-sm"  name='title' placeholder='task' onChange={ handleChange } value={ task.title }/>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor='description' className ="col-form-label-sm">Description</label>
                        <textarea id='description' className="form-control form-control-sm" name='description' placeholder='description' onChange={ handleChange }  value={ task.description }/>
                    </div>
                    <button type='submit' className="btn btn-primary btn-sm col-3 ">Edit </button>    
                </form>
            </div>
        </div>
    );
}

export default TaskForm;
