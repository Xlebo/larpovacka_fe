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
                        <li><NavLink to="/pravidla">Pravidlá</NavLink></li>
                        <li><NavLink to="/prakticke">Praktické</NavLink></li>
                        <li><NavLink to="/contact">Org Tím</NavLink></li>
                        <li><NavLink to="faq">FAQ</NavLink></li>
                        <li className="login"><NavLink to="/login">Login</NavLink></li>
                        <li className="register"><NavLink to="/register">Registrácia</NavLink></li>
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