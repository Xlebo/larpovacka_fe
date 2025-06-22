import {GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import {auth} from "../firebase/firebaseConfig"
import "./page.css"

export default function Login() {
    // async function handleGoogle() {
    //     const provider = await new GoogleAuthProvider();
    //     return signInWithPopup(auth, provider)
    //         .then((result) => {
    //             const credential = GoogleAuthProvider.credentialFromResult(result);
    //             const token = credential.accessToken;
    //             const user = result.user;
    //         })
    //         .catch((error) => {
    //             // Handle Errors here.
    //             const errorCode = error.code;
    //             const errorMessage = error.message;
    //             // The email of the user's account used.
    //             const email = error.customData.email;
    //             // The AuthCredential type that was used.
    //             const credential = GoogleAuthProvider.credentialFromError(error);
    //             // ...
    //         })
    // }

    return (
        <main>
            <h1>Login</h1>
            <section>
                <input type="email" placeholder="Email Address" name="email"/>
                <input type="password" placeholder="Password" name="password"/>
                <input type="submit" value="Login"/>
                {/*<input onClick={handleGoogle} type="button" value="Login Google"/>*/}
            </section>
        </main>
    )
}