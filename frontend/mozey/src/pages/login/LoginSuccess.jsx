import React, { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { userInfoStore } from "store/userInfoStore";
import { chartDataStore } from "store/chartDataStore";
const LoginSuccess = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const setUserInfo = userInfoStore((state) => state.setUserInfo);
  const setChartData = chartDataStore((state) => state.setChartData);

  useEffect(() => {
    // const email = searchParams.get('email');
    const email = searchParams.get("email").split("?email=")[0];
    console.log(email);
    axios
      .get(`https://j9a510.p.ssafy.io/api/users/info/${email}`)
      .then((res) => {
        console.log(res.data);
        setUserInfo(res.data);
        alert("Mozey에 오신 것을 환영합니다!");
        navigate("/mypage");
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get(`https://j9a510.p.ssafy.io/api/coins/price`)
      .then((res) => {
        console.log(res.data);
        setChartData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return <div></div>;
};

export default LoginSuccess;
