import React, { useState } from "react";
// import { Button, Error, Input, FormField, Label } from "../styles";
import { useNavigate } from "react-router-dom";

function LoginForm({ setUser }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    let navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        setIsLoading(true);
        fetch("/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
        }).then((r) => {
        setIsLoading(false);
        if (r.ok) {
            navigate("/");
            console.log('login success')
            r.json().then((user) => setUser(user));
        } else {
            console.log('login failed')
            r.json().then((err) => setErrors(err.errors));
        }
        });
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="username"> Username </label>
                <input
                type="text"
                id="username"
                autoComplete="off"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="password"> Password </label>
                <input
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <div>
                <button variant="fill" color="primary" type="submit">
                {isLoading ? "Loading..." : "Login"}
                </button>
            </div>
            <div>
                {errors.map((err) => (
                <error key={err}>{err}</error>
                ))}
            </div>
        </form>
    );
    }

    export default LoginForm;