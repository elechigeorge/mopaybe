import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { Alert } from "react-bootstrap";
import { getCurrentProfile } from "../action/profile";
import Message from "../component/Message";
import Loader from "../component/Loader";

const BusinessDashboard = () => {
  const dispatch = useDispatch();

  const businessLogin = useSelector((state) => state.businessLogin);
  const { businessInfo } = businessLogin;

  const getProfile = useSelector((state) => state.getProfile);
  const { error, loading, profile } = getProfile;

  useEffect(() => {
    dispatch(getCurrentProfile());
  }, [dispatch]);

  if (!businessInfo) {
    return <Redirect to="/business/login" />;
  }
  return (
    <div>
      <h1 className="large text-dark">Dashboard</h1>
      <p className="lead">
        <i className="fas fa-user" /> Welcome{" "}
        {businessInfo && businessInfo.email}
      </p>
       {loading && <Loader />}
      {error && (
        <Message variant="danger">
          You Dont Have a Profile Yet, Create one today{" "}
        </Message>
      )}
     
    </div>
  );
};

export default BusinessDashboard;
