import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const Login = () => {
  const [credential, setcredential] = useState({ email: "", password: "" });
  let Navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email:credential.email, password:credential.password }),
    });
    const json = await response.json();
    console.log(json);
    if(json.success){
        //save the auth token and redirect
        localStorage.setItem('token', json.authtoken);
        Navigate('/');
    }
    else{
        alert("Invalid Credentials");
    }
  };
  const onChange =(e)=>{
    setcredential({...credential, [e.target.name]: e.target.value})
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={credential.email}
            onChange={onChange}
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={credential.password}
            onChange={onChange}
            name="password"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;