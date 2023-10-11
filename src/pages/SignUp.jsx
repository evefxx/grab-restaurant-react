import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthService from ". ./services/auth.service";
import SignIn from "./SignIn";

const SignUp = () => {
const [user, setUser] = useState ({
    username: "",
    email: "",
    password: "",
    confirmPassWord: "",
});
    const navigate = useNavigate();
    const [error, setError] = useState (false);
    const [errorMessage, setErrorMessage] = useState ({message: "" });
    const handleChange = (e) => {
        setUser ((prev) => ({ ...prev, [e.target. name]: e.target.value }));
    const handleClear = (e) => {
      setUser ({
        username: "",
        email: "",
        password: "",
        confirmPassWord: "",
      });
      setError(false);
    };
    const handleClick = async (e) => {
        e.preventDefault();
        try {
            if (user.confirmPassWord === user.password) {
                const register = await AuthService.register(
                    user.username,
                    user.email,
                    user.password
                );
                navigate("/signin");
            } else {
                setError(true);
                setErrorMessage({ message: "Failed! Password mismatched !"});
            }
        } catch (error) {
            console.error(error);
            setError(true);
            setErrorMessage(error.response.data);
        }
    };
    return (
        <div className="container">
            <h1>Grab Restaurant</h1>
            <div className="row-from">
                <div className="col-6 card justify-content-center">
                    <h5 className="card-header">Register a new User</h5>
                    <div className="error">{error && errorMessage.message}</div>
                    <div className="card-body">
                        <form>
                            <div className="form-group">
                                 
                            </div>
                        </form>


                </div>
                </div>
            </div>
        </div>
    )
    }
}

export default SignUp;
