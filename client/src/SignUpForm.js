import React, { useState } from "react";
// import { Button, Error, Input, FormField, Label, Textarea } from "../styles";

function SignUpForm({ setUser }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        setErrors([]);
        setIsLoading(true);
        fetch("/signup", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            username,
            password,
            password_confirmation: passwordConfirmation,
        }),
        }).then((r) => {
        setIsLoading(false);
        if (r.ok) {
            r.json().then((user) => setUser(user));
        } else {
            r.json().then((err) => setErrors(err.errors));
        }
        });
    }

    return (
        <form className = "signup" onSubmit={handleSubmit}>
            <div className="form-stars">
                <div>
                    <label htmlFor="username" className="signup" > Username </label>
                    <input
                    type="text"
                    id="username"
                    autoComplete="off"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    autoComplete="current-password"
                    />
                </div>
                <div>
                    <label htmlFor="password">Password Confirmation</label>
                    <input
                    type="password"
                    id="password_confirmation"
                    value={passwordConfirmation}
                    onChange={(e) => setPasswordConfirmation(e.target.value)}
                    autoComplete="current-password"
                    />
                </div>
                <div>
                    <button type="submit">{isLoading ? "Loading..." : "Sign Up"}</button>
                </div>
                <div>
                    {errors.map((err) => (
                    <error key={err}>{err}</error>
                    ))}
                </div>
            </div>
        </form>
    );
    }

    export default SignUpForm;