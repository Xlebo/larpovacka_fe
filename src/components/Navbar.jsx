import {Link, Outlet, useNavigate} from "react-router";
import "./navbar.css"
import { signOut } from "firebase/auth";
import {auth} from "../firebase/firebaseConfig.js";

export default function Navbar({user, setUser}) {
    const navigate = useNavigate();

    function logout() {

        signOut(auth).then(() =>
        {
            setUser(null);
            navigate("/")
        }).catch(error => alert(error.message)
        )
    }

    function rightCorner() {
        if (user == null) {
            return (
                <>
                    <li className="right-li"><Link to="/login">Login</Link></li>
                    <li className="right-li"><Link to="/register">Register</Link></li>
                </>
            )
        }
        return (
            <li className="right-li"><a onClick={logout}>Log out</a></li>
        )
    }

    return (
        <>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    {rightCorner()}
                </ul>
            </nav>
            <Outlet/>
        </>
    )
}