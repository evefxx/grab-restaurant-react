import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthService from "../services/auth.service";

const SignIn = () => {
    const [user, setUser] = useState({
        username: "",
        password: "",
    });
    const navigate = useNavigate();
    const [error, setError] = useState(false);
    const handleChange = (e) => {
        setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };
    const handleClear = (e) => {
        setUser({
            username: "",
            password: "",
        });
        setError(false);
    };
    const handleClick = async (e) => {
        e.preventDefault();
        try {
            const login = await AuthService.login(user.username, user.password);
            navigate("/");
        } catch (error) {
            console.error(error);
            setError(true);
        }
    };
    return (
        <div className="container">
            <h1>Grab Restaurant</h1>
            <div className="row from">
                <div className="col-6 card justify-content-center">
                    <h5 className="card-header">Sign In</h5>
                    <div className="error">{error && "Something went wrong !!"}</div>
                    <div className="card-body">
                        <form>
                            <div className="from-group">
                                <lable htmlFor="name">Username</lable>
                                <input
                                  type="text"
                                  className="form-control"
                                  name="username"
                                  placeholder="Username"
                                  onChange={handleChange}
                                  value={user.username}  
                                />
                            </div>
                            <div className="from-group">
                                <lable....
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

