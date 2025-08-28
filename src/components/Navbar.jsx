import {NavLink, useNavigate} from "react-router";
import "./navbar.css"
import {signOut} from "firebase/auth";
import {auth} from "../firebase/firebaseConfig.js";

export default function Navbar({user, setUser}) {
    const navigate = useNavigate();

    function logout() {

        signOut(auth).then(() => {
            setUser(null);
            navigate("/")
        }).catch(error => alert(error.message)
        )
    }

    function rightCorner() {
        if (user == null) {
            return (
                <>
                    <ul>
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/about">About</NavLink></li>
                        <li><NavLink to="/login">Login</NavLink></li>
                        <li><NavLink to="/register">Register</NavLink></li>
                    </ul>
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
                <div className="logo">
                    <li><NavLink to="/">
                        <img src="/img/machlogo.png" alt="MACH logo"/>
                        Cesta Machom
                    </NavLink></li>
                </div>
                {rightCorner()}
            </nav>
        </>
    )
}