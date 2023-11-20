import React, { useEffect, useState } from "react";
import { Toaster } from 'react-hot-toast';
import { useHistory } from "react-router-dom";

function UserInfo() {
  const [user, setUser] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const userInfo = localStorage.getItem('user-info');
    if (!userInfo) {
      history.push("/login"); // Redirect to login if user is not logged in
    } else {
      const parsedUser = JSON.parse(userInfo);
      setUser(parsedUser);
    }
  }, [history]);

  return (
    <>
      <div className="inner-heading">
        <div className="container">
          <h1>User Details</h1>
        </div>
      </div>

      <div className="inner-wrap">
        <Toaster position="top-center" reverseOrder={true} />
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-2"></div>
            <div className="col-md-6 col-sm-8">
              <div className="login">
                <div className="formint conForm">
                  {user ? (
                    <>
                      <div className="input-wrap">
                        <label>ID:</label>
                        <p>{user.id}</p>
                      </div>
                      {/* ...Other user details */}
                    </>
                  ) : (
                    <p>Loading user information...</p>
                  )}
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-2"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserInfo;
