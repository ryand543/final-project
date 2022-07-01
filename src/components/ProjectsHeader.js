import {Link} from "react-router-dom";

export default function ProjectsHeader(){
    return(
        <>
            <h2>Project Header</h2>
            <nav>
                <Link to={"/projects"}>Project Home</Link> |{" "}
                <Link to={"/projects/1"}>NASA API</Link>: This shows nasa api   |{" "}
                <Link to={"/projects/2"}>Grid Layout</Link> |{" "}
                <Link to={"/projects/3"}>P5 Snake Game</Link> |{" "}
                <Link to={"/projects/4"}>D3 Stocks Tracking</Link>
            </nav>
        </>
    )
}
