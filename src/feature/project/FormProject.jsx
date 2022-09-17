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
                ...project, project,
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
            setListTask(proj.listTask)
        } 
         
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [params.id]);
    

    return (
        <div className='container-form'>
            <div className='col-10 col-sm-7 col-md-6 col-lg-4'>
                <form onSubmit={ handleSubmit } className='form-projects'>
                    <legend>{ params.id ? 'Edit Project' : 'Create Project'}</legend>

                    <div className="form-floating mb-3 py-1">
                        <input type="text" className="form-control" id="floatingInput" name='nameProject' placeholder="Title project"
                             value= { project.nameProject } onChange={ (e) => setNameProject(e.target.value )} required />
                        <label htmlFor="floatingInput">Title</label>
                    </div>
                    <div className="form-floating mb-3 py-1">
                        <textarea type="text" name='projectDescription' className="form-control" id="floatingDescription" placeholder="Description"
                            onChange={ (e) => setProjectDescription(e.target.value) } value={ projectDescription } required />
                        <label htmlFor="floatingDescription">Description</label>
                    </div>
                 
                    <div className='modal-newTask'>
                        <div className="form-text">Add a new maintenance routine to your project</div>
                        <button type="button" className=" btn-newtask btn btn-outline-secondary btn-sm rounded-circle" data-bs-toggle="modal" data-bs-target="#form-Modal">
                            +
                        </button>
                    </div>   

                    <div className="row">
                        <button type="submit" className="btn btn-outline-light btn-sm col-8 m-auto">{ params.id ? 'Edit' : 'Create'}</button>   
                    </div>                      
                </form>
            </div>

            {/*--------- modal -------- */}

            <div className="modal fade" id="form-Modal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content form-projects">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">New Maintenance Routine</h5>
                        </div>
                        <div className="modal-body ">

                            <div className="form-floating mb-3 py-1">
                                <input type="text" className="form-control form-control-sm" id="floatingInput-Modal" name='title' placeholder='task' onChange={ handleTaskChange } value={ task.title } />
                                <label htmlFor="floatingInput-Modal" className =" col-form-label-sm">Title</label>
                            </div>
                            <div className="form-floating mb-3 py-1">
                                <textarea type="text" name='description' className="form-control form-control-sm" id="floatingDescription-Modal" placeholder="description"
                                    onChange={ handleTaskChange }  value={ task.description } />
                                <label htmlFor="floatingDescription-Modal" className =" col-form-label-sm" >Description</label>
                            </div>
                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary btn-sm" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary btn-sm" onClick={ SubmitTask } data-bs-dismiss="modal">Save</button>
                        </div>
                    </div>
                </div>
            </div>
            
          
        </div>
        
    );
};


export default FormProject;
