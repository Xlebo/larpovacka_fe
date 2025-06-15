import {Link, Outlet} from "react-router";
import "./Navbar.css"

export default function Navbar() {
    return (
        <>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li className="right-li"><Link to="/login">Login</Link></li>
                    <li className="right-li"><Link to="/register">Register</Link></li>
                </ul>
            </nav>
            <Outlet/>
        </>
    )
}