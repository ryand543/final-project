import Header from "./Header";
import{Outlet} from "react-router-dom"

function Page(){

    return(
        <div>
            <Header/>
            <Outlet/>
        </div>

    )
}

export default Page