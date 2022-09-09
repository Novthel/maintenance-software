import { useSelector,  useDispatch } from 'react-redux';
import { removeProject } from '../../feature/project/ProjectSlice';
import { Link } from 'react-router-dom';


/**
 * 
 * @returns 
 */
const ProjectList = () => {

    const dispatch = useDispatch()
    const projects = useSelector( state => state.projects )
  
    const deleteProject = (id)=> {
        dispatch(removeProject(id))
    }

  
    return (
        <div className='container py-3 col-8 col-lg-6'>
            <div className='row list-project'>
                <h1 className='text-center my-3'> Yours Projects</h1>
                    { projects.map((project, index)=> (
                        <div key={index} className='card p-1 mb-3'>
                            <Link to={ `/project/${project.id}` } className='card-header p-1'  style={{ textDecoration: 'none' }}>
                                <h3 style={{ cursor: 'pointer' }} className='card-title w-75'> { project.nameProject } </h3>
                            </Link>
                            <div  className='card-body mt-1'>      
                                <p className='card-text'>{ project.projectDescription }</p>  
                            </div>        
                            <div className='projectList-btn d-flex p-1 justify-content-center gap-2'>
                                <button className='btn btn-danger btn-sm' onClick={ () => deleteProject(project.id) }>Delete</button> 
                                <Link className='btn btn-primary btn-sm' to= { `/editProject/${project.id}` }  style={{ textDecoration: 'none' }}>Edit</Link>  
                            </div>    
                        </div>  
                    ))} 
            </div>
        </div>
    );
}

export default ProjectList;
