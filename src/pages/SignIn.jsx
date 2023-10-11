import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthService from "../services/auth.service";
import { useAuthContext } from "../context/AuthContext";

const SignIn = () => {
    const [user, setUser] = useState({
        username: "",
        password: "",
    });
    const navigate = useNavigate();
    const {login} = useAuthContext();
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
            const currentUser = await AuthService.login(user.username, user.password);
            login(currentUser);
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
                                <label htmlFor="name">Username</label>
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
                                <label htmlFor="name">Password</label>
                                <input
                                  type="password"
                                  className="from-control"
                                  name="password"
                                  placeholder="Password"
                                  onChange={handleChange}
                                  value={user.password}
                                />
                            </div>
                            <Link to="" className="btn btn-success" onClick={handleClick}>
                                Sign In
                            </Link>{" "}
                            <Link to="" className="btn btn-danger" onClick={handleClear}>
                                Cancel
                            </Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
