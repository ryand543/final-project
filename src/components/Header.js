import {Link} from "react-router-dom";

export default function Header(){
    return(
        <>
            <h1>Ryan Dyke's CS3744 Work Page</h1>
            <nav>
                <Link to={"/"}>Home</Link> |{" "}
                <Link to={"/projects"}>Projects</Link>
            </nav>
        </>
    )
}
