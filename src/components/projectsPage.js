import Header from "./Header";
import ProjectsHeader from "./ProjectsHeader"
import{Outlet} from "react-router-dom"

function ProjectsPage(){

    return(
        <div>
            <ProjectsHeader/>
            <Outlet/>
        </div>

    )
}

export default ProjectsPage