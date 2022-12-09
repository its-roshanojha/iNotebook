import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [credential, setcredential] = useState({ name:"", email: "", password: "", confirmpassword:"" });
  let Navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const {name, email, password} = credential
    const response = await fetch("http://localhost:5000/api/auth/createuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name,email, password }),
    });
    const json = await response.json();
    console.log(json);
    if(json.success){
   //save the auth token and redirect
        localStorage.setItem('token', json.authtoken);
        Navigate('/login');
    }
    else{
      alert('Invalid Credentials')
    }
  };
  const onChange =(e)=>{
    setcredential({...credential, [e.target.name]: e.target.value})
  }
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input type="text" 
          className="form-control" 
          id="name"  
          name="name"
          onChange={onChange} required/>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            name="email"
            id="email"
            onChange={onChange}
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" 
          className="form-label">
            Password
          </label>
          <input type="password"
          className="form-control" 
          id="password"
          name="password" 
          onChange={onChange} minLength={5} required/>
        </div>
        <div className="mb-3">
          <label htmlFor="confirmpassword" 
          className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            className="form-control"
            id="confirmpassword" 
            name="confirmpassword"
            onChange={onChange} minLength={5} required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Signup;