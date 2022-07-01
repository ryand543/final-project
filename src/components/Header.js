import {Link} from "react-router-dom";

export default function Header(){
    return(
        <>
            <h1>Header!</h1>
            <nav>
                <Link to={"/"}>Home</Link> |{" "}
                <Link to={"/projects"}>Projects</Link> |{" "}
                <Link to={"/test"}>Test Page</Link>
            </nav>
        </>
    )
}
