import React, { useState } from 'react'
import { Link, Navigate, useNavigate } from "react-router-dom";
import AuthService from '../services/auth.service';
import { useAuthContext } from '../context/AuthContext';

const NavBar = () => {
  const {user, logout} = useAuthContext();
  const navigate = useNavigate();
  const handleLogout = () => {
    logout();
    navigate("/signin");
  }
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
       <div class="container-fluid">
            <Link className="navbar-brand" to="/">
                Grab Restaurant
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
                <span className="navbar-toggle-icon"></span>
            </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
               <Link className="nav-link active" aria-current="page" to="/">
                Home
               </Link>
            </li>
            {user && (
            <li className="nav-item">
                <Link className="nav-link" to="/add">
                    Add
                </Link>
            </li>
            )}
            {user && (
            <li className="nav-item">
                <Link className="nav-link" to="/search">
                    Search
                </Link>
            </li>
            )}
            {user && (
            <li className="nav-item">
                <Link className="nav-link" to="/signin">
                    SignIn
                </Link>
            </li>
            )}
            {user && (
            <li className="nav-item">
                <Link className="nav-link" to="/signup">
                    SignUp
                </Link>
            </li>
            )}
        </ul>
        {user && (
            <div className="from-inline my-2 my-lg-0">
                <span className="badge">
                    Welcome <span className="mr-sm2 h4">{user.username}</span>
                </span>
                <button className="btn btn-outline-danger my-2 my-sm-0" onClick={handleLogout}>Logout</button>
            </div>
            )}
    </div>
  </div>
</nav>
  );
};

export default NavBar;