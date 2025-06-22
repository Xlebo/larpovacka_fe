import {auth, db} from "../firebase/firebaseConfig"
import "./page.css"
import FormInput from "../components/FormInput.jsx";
import {useState} from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import {doc, getDoc} from "firebase/firestore";
import {useNavigate} from "react-router";


export default function Login({setUser}) {
    const navigate = useNavigate();
    const [values, setValues] = useState({
        email: "", password: ""
    });

    function onChange(e) {
        setValues({...values, [e.target.name]: e.target.value})
    }

    const formInputs = [
        {type: "email", name: "email", label: "Email", required: true, error: "Enter a valid email address"},
        {type: "password", name: "password", label: "Password", required: true},
    ]

    function login(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        signInWithEmailAndPassword(auth, formData.get("email"), formData.get("password"))
            .then(async(result) => {
                const userData = await getDoc(doc(db, "users", result.user.uid))
                const user = userData.data()
                console.log(user)
                setUser(user)
                navigate("/")
            })
    }

    return (
        <main>
            <h1>Login</h1>
            <form onSubmit={login}>
                {formInputs.map(input => <FormInput key={input.name}
                                                    {...input}
                                                    values={values[input.name]}
                                                    onChange={onChange}/>)}
                <button type="submit">Login</button>
            </form>
        </main>
    )
}