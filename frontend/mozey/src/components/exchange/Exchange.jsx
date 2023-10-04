import { useEffect, useState } from "react";
import React from "react";
import coinPriceAPI from "api/coinPriceAPI";
import Chart from "react-apexcharts";
import styled from "styled-components";
import axios from "axios";
import useStore from "../../store";

// firebase
import { auth, messaging } from "config/firebase";
// css
import "semantic-ui-css/semantic.min.css";

import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import { FaCoins, FaCommentDollar } from "react-icons/fa";
import { AiOutlineArrowRight } from "react-icons/ai";
import { ExchangeCoin } from "components";

const Exchange = () => {
  const [options] = useState({
    colors: ["#0fbcf9"],
    chart: {
      width: "80%",
      height: "30%",
      type: "line",
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: 1,
      colors: ["#fff"],
    },
    theme: {
      mode: "dark",
      palette: "palette1",
      monochrome: {
        enabled: false,
        color: "#255aee",
        shadeTo: "light",
        shadeIntensity: 0.65,
      },
    },
    // 보조선
    grid: {
      show: false,
    },
    // 선에 대한 옵션
    stroke: {
      curve: "smooth",
      width: 3,
    },

    fill: {
      type: "gradient",
      gradient: { gradientToColors: ["#f7dc6f"], stops: [0, 500] },
    },
  });

  const transformedData = useStore().CoinData;

  // 날짜를 원하는 형식으로 변환 (YYYYMMDD을 YYYY-MM-DD로 변환)
  const formatDate = (date) => {
    const date2 = date.toString();
    const year = date2.slice(0, 4);
    const month = date2.slice(4, 6);
    const day = date2.slice(6, 8);
    const newDate = `${year}-${month}-${day}`;
    return new Date(newDate);
  };

  // 코스피 차트 상태
  const [filteredSeries1, setFilteredSeries1] = useState([]);
  const [selectedPeriod1, setSelectedPeriod1] = useState("default");

  // S&P 차트 상태
  const [filteredSeries2, setFilteredSeries2] = useState([]);
  const [selectedPeriod2, setSelectedPeriod2] = useState("default");

  // 코스피 차트 구현
  useEffect(() => {
    if (selectedPeriod1 === "total") {
      console.log(transformedData.filter((item) => item.name === "KOSPI 50"));
      setFilteredSeries1(
        transformedData.filter((item) => item.name === "KOSPI 50")
      );
    } else if (selectedPeriod1 === "7days") {
      const filteredData1 = filteredSeries1.map((item) => {
        const filteredData1 = item.data.filter((dataItem) => {
          const sevenDaysAgo = new Date();
          sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
          return (
            formatDate(dataItem.x) >= sevenDaysAgo && item.name === "KOSPI 50"
          );
        });
        return { ...item, data: filteredData1 };
      });
      setFilteredSeries1(filteredData1);
    } else if (selectedPeriod1 === "30days") {
      const filteredData1 = filteredSeries1.map((item) => {
        const filteredData1 = item.data.filter((dataItem) => {
          const monthAgo = new Date();
          monthAgo.setDate(monthAgo.getDate() - 30);
          return formatDate(dataItem.x) >= monthAgo && item.name === "KOSPI 50";
        });
        return { ...item, data: filteredData1 };
      });
      setFilteredSeries1(filteredData1);
    }
  }, [selectedPeriod1]);

  // S&P 차트 구현
  useEffect(() => {
    if (selectedPeriod2 === "total") {
      setFilteredSeries2(
        transformedData.filter((item) => item.name === "S&P 500")
      );
    } else if (selectedPeriod2 === "7days") {
      const filteredData = filteredSeries2.map((item) => {
        const filteredData = item.data.filter((dataItem) => {
          const sevenDaysAgo = new Date();
          sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
          return (
            formatDate(dataItem.x) >= sevenDaysAgo && item.name === "S&P 500"
          );
        });
        return { ...item, data: filteredData };
      });
      setFilteredSeries2(filteredData);
    } else if (selectedPeriod2 === "30days") {
      const filteredData = filteredSeries2.map((item) => {
        const filteredData = item.data.filter((dataItem) => {
          const monthAgo = new Date();
          monthAgo.setDate(monthAgo.getDate() - 30);
          return formatDate(dataItem.x) >= monthAgo && item.name === "S&P 500";
        });
        return { ...item, data: filteredData };
      });
      setFilteredSeries2(filteredData);
    }
  }, [selectedPeriod2]);

  // 코인 테스트

  return (
    <div>
      <S.Wrap>
        <br />
        <S.Chart1>
          {/* <a class="ui red ribbon label">오늘의 KOSPI 50 시세</a> */}
          <div class="ui black ribbon label">KOSPI 50 차트</div>
          <Select
            name="period"
            className="select"
            value={selectedPeriod1}
            onChange={(e) => setSelectedPeriod1(e.target.value)}
          >
            <MenuItem value="default">조회 기간 변경 🍊</MenuItem>
            <MenuItem value="7days">7일</MenuItem>
            <MenuItem value="30days">30일</MenuItem>
            <MenuItem value="total">전체</MenuItem>
          </Select>
        </S.Chart1>
        <br />
        <S.Centered>
          <Chart options={options} series={filteredSeries1} />
        </S.Centered>
        <S.Chart1>
          <a class="ui red ribbon label">S&P 500 차트</a>
          <Select
            name="period"
            className="select"
            value={selectedPeriod2}
            onChange={(e) => setSelectedPeriod2(e.target.value)}
          >
            <MenuItem value="default">조회 기간 변경 🍊</MenuItem>
            <MenuItem value="7days">7일</MenuItem>
            <MenuItem value="30days">30일</MenuItem>
            <MenuItem value="total">전체</MenuItem>
          </Select>
        </S.Chart1>
        <br />
        <S.Centered>
          <Chart options={options} series={filteredSeries2} />
        </S.Centered>

        <ExchangeCoin></ExchangeCoin>
      </S.Wrap>
    </div>
  );
};

const S = {
  Bottom: styled.div`
    bottom: 0%;
    height: 15%;
    width: 100%;
    position: absolute;
    text-align: center;
  `,

  Wrap: styled.div`
    width: 100%;
    background: ${({ theme }) => theme.color.background};
    flex-direction: column;
    align-items: center;
  `,

  Chart1: styled.div`
    margin: 0% auto;
    width: 90%; // 차트크기와 동일하게
    display: flex;
    justify-content: space-between;
  `,

  Centered: styled.div`
    max-width: 1500px;
    margin: 35px auto;
    padding: 20px;
    opacity: 0.9;
  `,
};

export default Exchange;
