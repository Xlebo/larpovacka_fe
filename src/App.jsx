import {BrowserRouter, Route, Routes} from "react-router";
import Home from "./pages/Home.jsx";
import {useState} from "react";
import Header from "./components/Header.jsx";
import Register from "./pages/Register.jsx";
import Login from "./pages/Login.jsx";
import Pravidla from "./pages/Pravidla.jsx";
import Prakticke from "./pages/Prakticke.jsx";
import Contacts from "./pages/Contacts.jsx";
import FAQ from "./pages/FAQ.jsx";

function App() {
    const [user, setUser] = useState(null);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Header setUser={setUser} user={user}/>}>
                    <Route index element={<Home/>}/>
                    <Route path="*" element={<Home/>}/>
                    <Route path="pravidla" element={<Pravidla/>}/>
                    <Route path="prakticke" element={<Prakticke/>}/>
                    <Route path="faq" element={<FAQ/>}/>
                    <Route path="contacts" element={<Contacts/>}/>
                    <Route path="login" element={<Login setUser={(data) => setUser(data)}/>}/>
                    <Route path="register" element={<Register/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
