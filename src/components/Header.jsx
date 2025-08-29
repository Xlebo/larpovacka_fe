import Navbar from "./Navbar.jsx";
import "./header.css"
import {Outlet, useLocation} from "react-router";

const titles = {
    "/": { headerText: "Cesta Machom" },
    "/pravidla": { headerText: "Pravidlá"},
    "/prakticke": { headerText: "Praktické"},
    "/contacts": { headerText: "Org Tím" },
    "/faq": { headerText: "FAQ"},
    "/login": { headerText: "Prihlásenie" },
    "/register": { headerText: "Registrácia"},
};

export default function Header({user, setUser}) {
    const location = useLocation();

    return (
        <>
            <div className="header-background">
                <Navbar user={user} setUser={setUser}/>
                <h1 className="header">{titles[location.pathname].headerText}</h1>
            </div>
            <Outlet/>
        </>
    )
}
