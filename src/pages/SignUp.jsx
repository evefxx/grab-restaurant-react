import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthService from ". ./services/auth.service";

const SignUp = () => {
const [user, setUser] = useState ({
    username: "",
    email: "",
    password: "",
    confirmPassWord: "",
});
    const navigate = useNavigate();
    const [error, setError] = useState (false);
    const [errorMessage, setErrorMessage] = usestate ({
    message: "" });
    const handleChange = (e) => {

setUser ((prev) => ({ . . . prev, [e.target. name]: e.

target.value })):

const handleclear = (e) => {

setUser ({

username:

email:

password:

confirmPassWord:

