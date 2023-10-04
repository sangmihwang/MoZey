import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';


const AuthProcess = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const token = searchParams.get('token');
    const email = searchParams.get('email').split("?token=")[0];
    localStorage.setItem("accessToken", token);
    localStorage.setItem("email", email);
    navigate('/join');
  }, []);

  return <div></div>;
};

export default AuthProcess;