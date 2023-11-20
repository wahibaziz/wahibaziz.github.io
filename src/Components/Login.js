import React, { useEffect, useState } from "react";
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Login() {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('user-info')) {
       history.push("/add")
    }
  }, []);

  async function handleLogin(event) {
    event.preventDefault();
    if (!email) {
      if (!password){
        toast.error("Please fill in all fields.");
        return;
      }
      toast.error("Please fill in email fields.");
      return;
    }
    else if (!password) {
      if(!email){
        toast.error("Please fill in all fields.");
        return;
      }
      toast.error("Please fill in password fields.");
      return;
    }
    var data = new URLSearchParams();
    data.append('email', email);
    data.append('password', password);

    try {
      let result = await fetch("http://192.168.18.64/cms/apis/login", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: data
      });
      result = await result.json();
      let status = result.status;

      if (status === 200) {
        toast.success('Login Successful');
        localStorage.setItem('user-info', JSON.stringify(result.user[0])); // Store user info
        history.push("/userinfo"); // Redirect to user info page
      } else {
        toast.error(result.message);
      }
    } catch (error) {
      console.error("Error during login:", error);
      toast.error("An error occurred during login.");
    }
  }


  return (
    <>
      <div className="inner-heading">
        <div className="container">
          <h1>Login</h1>
        </div>
      </div>
      {/* inner heading end */}

      {/* login start */}
      <div className="inner-wrap">
        <Toaster position="top-center" reverseOrder={true}/>
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-2"></div>
            <div className="col-md-6 col-sm-8">
              <div className="login">
                {/* <div className="contctxt">User Login</div> */}
                <div className="formint conForm">
                  <form onSubmit={handleLogin}>
                    <div className="input-wrap">
                      <input
                        type="text"
                        name="name"
                        placeholder="User Name"
                        onChange={(e) => setEmail(e.target.value)}
                        className="form-control"
                      />
                    </div>
                    <div className="input-wrap">
                      <input
                        type="Password"
                        name="password"
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                        className="form-control"
                      />
                    </div>
                    <div className="sub-btn">
                      <input
                        type="submit"
                        className="sbutn"
                        value="Login"
                      />
                    </div>
                    <div className="newuser">
                      <i className="fa fa-user" aria-hidden="true"></i> Create a new account?{" "}
                      <Link to="/registration.html">Register Here</Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-2"></div>
          </div>
        </div>
      </div>
      {/* login end */}

      {/* Display user info if logged in */}
      {user && (
        <div className="inner-wrap">
          <Toaster position="top-center" reverseOrder={true} />
          <div className="container">
            <div className="row">
              <div className="col-md-3 col-sm-2"></div>
              <div className="col-md-6 col-sm-8">
                <div className="login">
                  <div className="formint conForm">
                    <div className="input-wrap">
                      <label>ID:</label>
                      <p>{user.id}</p>
                    </div>
                    <div className="input-wrap">
                      <label>Email Id:</label>
                      <p>{user.email}</p>
                    </div>
                    {/* Display other user details */}
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-2"></div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Login;
