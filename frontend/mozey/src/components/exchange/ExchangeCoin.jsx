// import { useEffect, useState } from "react";
// import React from "react";
// import coinPriceAPI from "api/coinPriceAPI";
// import Chart from "react-apexcharts";
// import useStore from "store";
// import styled from "styled-components";
// import axios from 'axios';

// // firebase
// import { auth, messaging } from "config/firebase";
// // css
// import "semantic-ui-css/semantic.min.css";

// import MenuItem from "@mui/material/MenuItem";
// import Select from "@mui/material/Select";
// import TextField from "@mui/material/TextField";
// import { FaCoins, FaCommentDollar } from "react-icons/fa";
// import { AiOutlineArrowRight } from "react-icons/ai";
// // https://apexcharts.com/docs/react-charts/

// //  코인 교환 파트

// const [fromCoin, setFromCoin] = useState("");
// const [toCoin, setToCoin] = useState("");
// const [selectFromOption, setSelectFromOption] = useState("Point");
// const [selectToOption, setSelectToOption] = useState("KOSPI 50");
// const [error, setError] = useState(false);
// // 테스트
// const myCoin = 1000;

// const calculateExchange = (value, selectFromOption, selectToOption) => {
//   const todayKospi = series1[0].data[series1[0].data.length - 1].y;
//   const todaySandP = series2[0].data[series2[0].data.length - 1].y;

//   let exchangeRate = 1;
//   const KToS = todayKospi / todaySandP;
//   const PToS = todaySandP;
//   const PToK = todayKospi;
//   const SToK = todaySandP / todayKospi;
//   if (selectFromOption === "Point") {
//     if (selectToOption === "KOSPI 50") {
//       exchangeRate = PToK;
//     } else if (selectToOption === "S&P 500") {
//       exchangeRate = PToS;
//     }
//   } else if (selectFromOption === "KOSPI 50") {
//     if (selectToOption === "S&P 500") {
//       exchangeRate = KToS;
//     }
//   } else if (selectFromOption === "S&P 500") {
//     if (selectToOption === "KOSPI 50") {
//       exchangeRate = SToK;
//     }
//   }
//   const result = Math.round(value * exchangeRate);
//   setToCoin(result);
// };