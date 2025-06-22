import {BrowserRouter, Route, Routes} from "react-router";
import Home from "./pages/Home.jsx";
import Navbar from "./components/Navbar.jsx";
import About from "./pages/About.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import {useEffect, useState} from "react";
import {doc, getDoc} from "firebase/firestore";
import {db} from "./firebase/firebaseConfig.js";


function App() {
    const [user, setUser] = useState(null);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navbar setUser={setUser} user={user}/>}>
                    <Route index element={<Home/>}/>
                    <Route path="*" element={<Home/>}/>
                    <Route path="about" element={<About/>}/>
                    <Route path="login" element={<Login setUser={(data) => setUser(data)}/>}/>
                    <Route path="register" element={<Register/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
