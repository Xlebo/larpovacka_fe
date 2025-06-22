import {useState} from "react";
import FormInput from "../components/FormInput.jsx";
import "./page.css"
import {auth} from "../firebase/firebaseConfig.js";
import {createUserWithEmailAndPassword} from "firebase/auth";
import {useNavigate} from "react-router";

// "skurvený javascript" counter: 3

export default function Register() {
    const navigate = useNavigate();
    const [values, setValues] = useState({
        email: "", password: "", confirmPassword: ""
    });

    async function createUser(e) {
        e.preventDefault()
        const formData = new FormData(e.target);
        console.log(`creating user ${formData.get("email")} with pwd ${formData.get("password")}`);
        await createUserWithEmailAndPassword(auth, formData.get("email").toString(), formData.get("password").toString())
            .then((credential) => {
                    alert(`User ${credential} created successfully`);
                    navigate("/login");
                }
            )
            .catch((error) => {
                alert(`${error}`)
            })
    }

    function onChange(e) {
        setValues({...values, [e.target.name]: e.target.value})
    }

    const formInputs = [
        {type: "email", name: "email", label: "Email", required: true, error: "Enter a valid email address"},
        {type: "password", name: "password", label: "Password", required: true},
        {
            type: "password",
            name: "confirm-pwd",
            label: "Confirm Password",
            required: true,
            pattern: values.password,
            error: "Passwords must match"
        },
    ]

    return (<main>
        <h1>Register</h1>
        <form onSubmit={createUser} noValidate>
            {formInputs.map(input => <FormInput key={input.name}
                                                {...input}
                                                values={values[input.name]}
                                                onChange={onChange}/>)}
            <button type="submit">Register</button>
        </form>
    </main>)
}