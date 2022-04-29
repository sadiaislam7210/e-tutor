import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import { useSendEmailVerification } from 'react-firebase-hooks/auth';
import auth from "../../firebase.init";
const RequireAuth = ({ children }) => {
  const [user, loading, error] = useAuthState(auth);
  const location = useLocation();
  const [sendEmailVerification, sending, error1] = useSendEmailVerification(auth);
  console.log(user);
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  }
  if (!user.emailVerified) {
    return (
      <div className=" justify-content-center align-items-center">
        <h3 className="text-danger">Your email is not verified</h3>
        <h5 className="text-success">Please verify your email address</h5>
        <button
          className="btn btn-primary"
          onClick={async () => {
            await sendEmailVerification();
            alert("Sent email");
          }}
        >
          Send Verification
        </button>
        
      </div>
    );
  }
  return children;
};

export default RequireAuth;