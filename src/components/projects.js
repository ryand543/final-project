import React from "react";
import {Link, Route, Routes} from "react-router-dom";
import HW1 from "./hw1";
import HW2 from "./hw2";
import HW3 from "./hw3";
import HW4 from "./hw4";
import ProjectsPage from "./projectsPage";
import ProjectsDesc from "./projectsDesc";

function Projects(){
    return(
        <Routes>
            <Route path={"/"} element={<ProjectsPage />}>
                <Route index element={<ProjectsDesc />}/>
                <Route path={"1"} element={<HW1 />}/>
                <Route path={"2"} element={<HW2 />}/>
                <Route path={"3"} element={<HW3 />}/>
                <Route path={"4"} element={<HW4 />}/>
            </Route>

        </Routes>
    )
}

export default Projects