import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { addProject, updateProject } from './ProjectSlice';


const FormProject = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const params = useParams();
    const [listTask, setListTask] = useState([]);
    const [nameProject, setNameProject] = useState('');
    const [projectDescription, setProjectDescription] = useState('');
    const proj = useSelector( state => state.projects.find(proj => proj.id === Number(params.id)))
    
    const initialState = {
        title : '',
        description:'',
        completed: false,
        id:0    
    };

    const [task, setTask] = useState( initialState );

    const project = {
        nameProject,
        projectDescription,
        listTask
    };

   
    const handleTaskChange = (e) => {
        e.preventDefault()     
        setTask({
            ...task,
            [e.target.name] : e.target.value,
            id: new Date().valueOf() 
        })
    };


    const SubmitTask = (e) => {
        e.preventDefault()
        setListTask([
            ...listTask, task
        ]) 
        setTask(initialState);  
    };


    const handleSubmit = (e) => {
        e.preventDefault()

        if(params.id){
            dispatch(updateProject({
                ...project,
                id: params.id
            }))
            navigate('/projects')
        }else{
            dispatch(addProject({
                ...project,
                id: new Date().valueOf()
            }))
        }
        setListTask([]);
        setNameProject('');
        setProjectDescription('');
        navigate('/projects')
    };


    useEffect(() => {
        if(params.id){  
            setNameProject(proj.nameProject)
            setProjectDescription(proj.projectDescription)
        } 
         
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [params.id]);


    return (
        <div className='container-form'>
            <div className='col-10 col-sm-7 col-md-6 col-xl-4'>
                <form onSubmit={ handleSubmit } className='form-projects m-2'>
                    <legend className='text-center mb-3'>Create projects</legend>
                    <div className='mb-2'>
                        <label htmlFor='nameProject' className =" col-form-label-sm">Title Project</label>
                        <input name='nameProject' className="form-control form-control-sm"  type='text' placeholder='New Project' id='nameProject' 
                        value= { project.nameProject } aria-describedby="nameHelpProject" onChange={ (e) => setNameProject(e.target.value )} />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor='projectDescription' className ="col-form-label-sm">Description</label>
                        <textarea id='projectDescription'  className="form-control form-control-sm" name='projectDescription' placeholder='description' 
                        onChange={ (e) => setProjectDescription(e.target.value) }  
                        value={ projectDescription }/>   
                    </div>
                 
                    { 
                        !params.id ?
                        (   <>
                                <div className='mb-2'>
                                    <div id="title" className="form-text">Add the new tasks to your project.</div>
                                    <hr></hr>
                                    <label htmlFor='title' className =" col-form-label-sm">Title Task</label>
                                    <input id='title' name='title' className="form-control form-control-sm" placeholder='task' onChange={ handleTaskChange } value={ task.title }/>
                                </div>
                                <div className='mb-2'>
                                    <label htmlFor='description' className =" col-form-label-sm">Description</label>
                                    <textarea id='description'  className="form-control form-control-sm" name='description' placeholder='description' onChange={ handleTaskChange }  value={ task.description }/>
                                </div>
                                <div className="row mb-1">
                                    <button className=" btn btn-outline-primary btn-sm col-5 col-sm-4 col-md-3 m-2" onClick={ SubmitTask }>Add Task</button> 
                                </div>
                            </>
                        )
                        :
                        null
                    }
                   
                    <div className="row">
                        <button type="submit" className="btn btn-primary btn-sm col-8 m-auto">{ params.id ? 'Edit Project' : 'Create Project'}</button>   
                    </div>
                        
                </form>
            </div>
            
        </div>
        
    );
};


export default FormProject;
