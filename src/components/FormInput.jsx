import {useState} from "react";
import "./formInput.css"

export default function FormInput(props) {
    const [focused, setFocused] = useState(false);
    function handleFocus() {
        setFocused(true);
    }

    return (
        <div className="formInput">
            <label>{props.label}</label>
            <input {...props}
                   onChange={props.onChange}
                   onBlur={handleFocus}
                   onFocus={() =>
                       props.name === "confirmPassword" && setFocused(true)
                   }
                   focused={focused.toString()}
            />
            <span>{props.error}</span>
        </div>
    )
}