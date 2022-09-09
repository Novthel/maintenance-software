import { BrowserRouter, Routes, Route } from "react-router-dom";
import FormProject from "./feature/project/FormProject";
import ProjectList from "./feature/project/ProjectList";
import Project from "./feature/project/Project";
import Home from "./pages/Home";
import TaskForm from "./feature/project/TaskForm";


function App() {
  return (
    
      <BrowserRouter>
          <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/projects-form" element={ <FormProject /> } /> 
            <Route path="/projects" element={ <ProjectList /> } /> 
            <Route path="/project/:id" element={ <Project /> } /> 
            <Route path="/editProject/:id" element={ <FormProject /> } />  
            <Route path="/editTask/:id" element={ <TaskForm /> } />  
          </Routes>
     </BrowserRouter>
  );
}

export default App;