import {NavLink, useNavigate} from "react-router";
import "./navbar.css"
import {signOut} from "firebase/auth";
import {auth} from "../firebase/firebaseConfig.js";

export default function Navbar(
    // {user, setUser}
) {
    const navigate = useNavigate();

    // function logout() {
    //
    //     signOut(auth).then(() => {
    //         setUser(null);
    //         navigate("/")
    //     }).catch(error => alert(error.message)
    //     )
    // }

    function rightCorner() {
        return (
            <>
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/pravidla">Pravidlá</NavLink></li>
                    <li><NavLink to="/prakticke">Praktické</NavLink></li>
                    <li><NavLink to="/contacts">Kontakt</NavLink></li>
                    <li><NavLink to="/registracia">Registrácia</NavLink></li>
                    {/*{(user == null) ?*/}
                    {/*    <>*/}
                    {/*        <li className="login"><NavLink to="/login">Login</NavLink></li>*/}
                    {/*        <li className="register"><NavLink to="/register">Registrácia</NavLink></li>*/}
                    {/*    </>*/}
                    {/*    :*/}
                    {/*    <li className="login" onClick={logout}><a style={{ cursor: "pointer" }}>Log out</a></li>*/}
                    {/*}*/}
                </ul>
            </>
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