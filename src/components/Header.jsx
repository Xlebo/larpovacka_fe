import Navbar from "./Navbar.jsx";
import "./header.css"
import {Outlet} from "react-router";

export default function Header({user, setUser}) {
    const headerText = "Cesta Machom"
    const subText = "družinová hra na štýl LARPu a šifrovacej hry"

    return (
        <>
            <div className="header-background">
                <Navbar user={user} setUser={setUser}/>
                <h1 className="header">{headerText}</h1>
                <a className="sub-header">{subText}</a>
            </div>
            <Outlet/>
        </>
    )
}
