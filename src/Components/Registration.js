// import React, { useState } from "react";
// import { Toaster, toast } from "react-hot-toast";
// import { Link } from "react-router-dom/cjs/react-router-dom.min";

// function Registration() {
//   const [name, setName] = useState("");
//   const [password, setPassword] = useState("");
//   const [email, setEmail] = useState("");

//   async function Register(event) {
//     debugger;
//     let data = new URLSearchParams();
//     data.append('name',name);
//     data.append('email',email);
//     data.append('password',password);
//     console.log(data);

//     event.preventDefault();

//     if (!name || !email || !password) { 
//       toast.error("Please Fill all the feilds");
//     } else if (!email) {
//       toast.error("Please enter your email");
//     } else if (!password) {
//       toast.error("Please enter your password");
//     } else if (!name) {
//       toast.error("Please enter your name");
//     }


//       // POST request using fetch inside useEffect React hook
//       const requestOptions = {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
//         body: data
//       };
//       fetch('http://192.168.18.64/apis/', requestOptions)
//       .then(async response => {
//           const isJson = response.headers.get('content-type')?.includes('application/json');
//           const data = isJson && await response.json();

//           // check for error response
//           if (!response.ok) {
//               // get error message from body or default to response status
//               const error = (data && data.message) || response.status;
//               return Promise.reject(error);
//           }
//       })
//       .catch(error => {
//           console.error('There was an error!', error);
//       });


    // let result = await fetch("http://192.168.18.64/cms/register", {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/x-www-form-urlencoded'
    //   },
    //   body: data
    // })

    // result = await result.json();
    // let status = result.status;
    // if (status == 200) {
    //   toast.success('Successfully Registered');
    // } else {
    //   toast.error(result.message)
    // }

// import React, { useEffect, useState } from "react";
// import toast, { Toaster } from 'react-hot-toast';
// import { useHistory } from "react-router-dom";

//   function Registration() {

//   const [name,setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   //const history = useHistory();

//   useEffect(() => {
//     if (localStorage.getItem('user-info')) {
//         // history.push("/add")
//     }
//   }, [])
//   async function handleLogin(event){
//       event.preventDefault();

//       if (!name) { 
//       toast.error("Please enter your name");
//     } else if (!email) {
//       toast.error("Please enter your email");
//     } else if (!password) {
//       toast.error("Please enter your password");
//     } else if (!name) {
//       toast.error("Please enter your name");
//     }
//       var data = new URLSearchParams();

//         data.append('name',name);
//         data.append('email',email);
//         data.append('password', password);


//         try {
//           let result = await fetch("http://192.168.18.64/apis/register", {
//             method: 'POST',
//             headers: {
//               'Content-Type': 'application/x-www-form-urlencoded'
//             },
//             body: data
//           });
        
//           if (!result.ok) {
//             throw new Error('Network response was not ok');
//           }
        
//           let resultJson = await result.json();
        
//           if (resultJson.status === 200) {
//             // Check if 'toast' is properly defined and accessible
//             toast.success('Login Successful');
//           } else {
//             // Check if 'toast' is properly defined and accessible
//             toast.error(resultJson.message);
//           }
        
//           localStorage.setItem('Resultdata', JSON.stringify(resultJson));
//         } catch (error) {
//           // Handle errors (network, server, etc.)
//           console.error('An error occurred:', error);
//           // Show an error message to the user using 'toast' or other mechanisms
//           toast.error('An error occurred during the request');
//         }
        
//       // history.push("/add")
//   }







// function Registration() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const history = useHistory();

//   useEffect(() => {
//     if (localStorage.getItem('user-info')) {
//       history.push("/add");
//     }
//   }, []);

//   async function handleLogin(event) {
//     event.preventDefault();

//     if (!name || !email || !password) {
//       toast.error("Please fill in all fields");
//       return;
//     }
//     var data = new URLSearchParams();
//     data.append('name', name);
//     data.append('email', email);
//     data.append('password', password);

//     try {
//       let result = await fetch("http://192.168.18.64/cms/apis/register", {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/x-www-form-urlencoded'
//         },
//         body: data
//       });

//       if (!result.ok) {
//         throw new Error('Network response was not ok');
//       }

//       let resultJson = await result.json();
//       console.log()

//       if (resultJson.status === 200) {
//         toast.success('Registration Successful');
//       } else {
//         toast.error(resultJson.message);
//       }

//       localStorage.setItem('Resultdata', JSON.stringify(resultJson));
// }
//       catch (error) {
//       console.error('An error occurred:', error);
//       toast.error('An error occurred during the request');
//     }
//   }

import React, { useEffect, useState, useRef } from "react";
import toast, { Toaster } from 'react-hot-toast';
// import ClipLoader from "react-spinners/ClipLoader";


  function Registration() {

    // const ref = useRef(null)
    // const [progress,setProgress] = useState(0);
    const [userName,setuserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(true);
    const [color, setColor] = useState("#2d0bc1");

    const override = {
      display: "inline-block",
      marginLeft: "10px",
      borderColor: "red",
    };


    //const history = useHistory();
  
    useEffect(() => {
      if (localStorage.getItem('user-info')) {
          // history.push("/add")
      }
    }, [])
    async function handleLogin(event){
        event.preventDefault();
        // if (!email) {
        //   if (!password){
        //     toast.error("Please fill in all fields.");
        //     return;
        //   }
        //   toast.error("Please fill in email fields.");
        //   return;
        // }
        // else if (!password) {
        //   if(!email){
        //     toast.error("Please fill in all fields.");
        //     return;
        //   }
        //   toast.error("Please fill in password fields.");
        //   return;
        // }

        var data = new URLSearchParams();
        data.append('userName',userName)
          data.append('email',email);
          data.append('password', password);
  debugger
  
        let result = await fetch("http://192.168.18.64/cms/apis/register",{
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          body: data
        });
        result = await result.json();
        let status = result.status;
        if(status == 200){
          toast.success('Login Successfull');
          localStorage.setItem('Resultdata', JSON.stringify(result));
        }else{
          toast.error(result.message);
        }
  
        localStorage.setItem("user-info",JSON.stringify(result))
        // history.push("/add")
    }

  return (
    <>
      <div className="inner-heading">
        <div className="container">
          <h1>Registration</h1>
        </div>
      </div>

      {/* Registration start */}
      <div className="inner-wrap">
        <Toaster position="top-center" reverseOrder={true} />
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
                        placeholder="Email Id"
                        className="form-control"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="input-wrap">
                      <input
                        type="text"
                        name="userName"
                        placeholder="User Name"
                        className="form-control"
                        value={userName}
                        onChange={(e) => setuserName(e.target.value)}
                      />
                    </div>
                    <div className="input-wrap">
                      <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        className="form-control"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                    
                    <div className="sub-btn" style={{ display: "flex", flexDirection: "colum", alignItems: "center" }} >
                    {/* <LoadingBar color='#f11946' ref={ref} /> */}
                      <input
                        type="submit"
                        className="sbutn"
                        value="Register"
                        // onClick={() => ref.current.continuousStart()}
                        onClick={() => setLoading(!loading)}
                        style={{ position: "relative" }}
                      />
                      {/* <ClipLoader
                          color={color}
                          loading={loading}
                          css={override} // Use "css" instead of "cssOverride"
                          size={35}
                          aria-label="Loading Spinner"
                          data-testid="loader"
                          
                        /> */}
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
    </>
  );
}

export default Registration;
