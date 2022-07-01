import React from "react";
import {Route, Routes} from "react-router-dom";
import Page from "./components/page";
import About from "./components/home";
import HW1 from "./components/hw1";
import ProjectsPage from "./components/projects";
import Projects from "./components/projects";
import Test from "./components/testPage"

function App(){
// Inside Route correctly route Component One, Two, and Three to url /1, /2 and /3
  return(
      <Routes>
          <Route path={"/"} element={<Page />}>
              <Route index element={<About />}/>
              <Route path={"projects/*"} element={<Projects />}/>
              <Route path={"test"} element={<Test />}/>
          </Route>

      </Routes>
  )
}

export default App