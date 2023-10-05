import { useEffect, useState } from "react";
import React from "react";
import coinPriceAPI from "api/coinPriceAPI";
import styled from "styled-components";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import { FaCoins, FaCommentDollar } from "react-icons/fa";
import { AiOutlineArrowRight } from "react-icons/ai";
import useStore from "../../store/chartDataStore";
import useStore1 from "../../store/userInfoStore";
import axios from "axios";

//  코인 교환 파트

const ExchangeCoin = () => {
  const chartDataStore = useStore((state) => state.chartData);
  const userInfo = useStore1((state) => state.User);

  console.log(chartDataStore);
  console.log(userInfo);
  console.log(userInfo.coin1);
  console.log(userInfo.coin2);
  console.log(userInfo.point);

  const distributeData = (rawData) => {
    const transformedData = {};
    rawData.forEach((item) => {
      const { coinName, coinPrice, date } = item;
      const seriesName = coinName === "Coin1" ? "KOSPI 50" : "S&P 500";
      if (!transformedData[coinName]) {
        transformedData[coinName] = {
          name: seriesName,
          data: [],
        };
      }
      transformedData[coinName].data.push({
        x: new Date(
          `${date.toString().slice(0, 4)}-${date.toString().slice(4, 6)}-${date
            .toString()
            .slice(6, 8)}`
        ).toISOString(),
        y: coinPrice,
      });
    });
    return Object.values(transformedData);
  };

  const UseChartData = distributeData(chartDataStore);

  const series_KOSPI = UseChartData.filter((item) => item.name === "KOSPI 50");

  console.log(series_KOSPI);
  const [series1, setSeries1] = useState(series_KOSPI);

  const series_SandP = UseChartData.filter((item) => item.name === "S&P 500");
  console.log(series_SandP);
  const [series2, setSeries2] = useState(series_SandP);

  const [fromCoin, setFromCoin] = useState("");
  const [toCoin, setToCoin] = useState("");
  const [selectFromOption, setSelectFromOption] = useState("Point");
  const [selectToOption, setSelectToOption] = useState("KOSPI 50");
  const [error, setError] = useState(false);
  // 테스트
  const myCoin = 1000;
  const calculateExchange = (value, selectFromOption, selectToOption) => {
    const todayKospi = series1[0].data[series1[0].data.length - 1].y;
    const todaySandP = series2[0].data[series2[0].data.length - 1].y;
    console.log(todayKospi);
    console.log(todaySandP);
    console.log(selectFromOption);
    let exchangeRate = 1;
    const KToS = todayKospi / todaySandP;
    const PToS = todaySandP;
    const PToK = todayKospi;
    const SToK = todaySandP / todayKospi;
    if (selectFromOption === "Point") {
      if (selectToOption === "KOSPI 50") {
        exchangeRate = PToK;
      } else if (selectToOption === "S&P 500") {
        exchangeRate = PToS;
      }
    } else if (selectFromOption === "KOSPI 50") {
      if (selectToOption === "S&P 500") {
        exchangeRate = KToS;
      }
    } else if (selectFromOption === "S&P 500") {
      if (selectToOption === "KOSPI 50") {
        exchangeRate = SToK;
      }
    }
    const result = Math.round(value * exchangeRate);
    setToCoin(result);
  };
  const handleFromCoinChange = (e) => {
    console.log(fromCoin, "프롬코");
    console.log(selectFromOption);
    console.log(userInfo.coin1);
    console.log(userInfo.coin2);
    console.log(userInfo.point);

    if (e > myCoin) {
      setError(true);
    } else {
      setError(false);
      setFromCoin(e);
    }
  };
  const handleSelectFromOpitonChange = (e) => {
    setSelectFromOption(e);
  };
  const handleSelectToOpitonChange = (e) => {
    setSelectToOption(e);
  };

  const handleExchangeClick = async (
    selectFromOption,
    selectToOption,
    fromCoin,
    toCoin
  ) => {
    try {
      const postData = {
        fromCoinName: selectFromOption,
        toCoinName: selectToOption,
        minusCoinAmount: fromCoin,
        plusCoinAmount: toCoin,
      };
      const response = await coinPriceAPI.exchangeCoin(postData);
      console.log(response.data);
      axios
        .post(`https://j9a510.p.ssafy.io:/api/coins/exchange`)
        .then((res) => {
          console.log(res.data);
        });
    } catch (error) {
      console.log("에러", error);
    }
  };

  useEffect(() => {
    calculateExchange(fromCoin, selectFromOption, selectToOption);
  }, [fromCoin, selectFromOption, selectToOption]);
  return (
    <S.ExContainer>
      <S.CoinCentered>
        <div>
          <FaCommentDollar size="30%" padding="10%" />
          <br />
          <Select
            name="fromOption"
            className="select"
            value={selectFromOption}
            onChange={(e) => handleSelectFromOpitonChange(e.target.value)}
          >
            <MenuItem value="Point">Point</MenuItem>
            <MenuItem value="KOSPI 50">KOSPI 50</MenuItem>
            <MenuItem value="S&P 500">S&P 500</MenuItem>
          </Select>
          <br />
          <TextField
            type="number"
            value={fromCoin}
            onChange={(e) => handleFromCoinChange(e.target.value)}
            error={error} // Add the error prop to display error styling
            label={error ? "보유 금액을 초과했습니다." : ""}
          />
        </div>
        <div>
          <AiOutlineArrowRight size="30%" padding="10%" />
        </div>
        <div>
          <FaCoins size="30%" padding="10%" />
          <br />
          <Select
            name="toOption"
            className="select"
            value={selectToOption}
            onChange={(e) => handleSelectToOpitonChange(e.target.value)}
          >
            <MenuItem value="KOSPI 50">KOSPI 50</MenuItem>
            <MenuItem value="S&P 500">S&P 500</MenuItem>
          </Select>
          <br />
          <TextField
            type="number"
            value={toCoin}
            InputProps={{
              readOnly: true,
            }}
          />
        </div>
      </S.CoinCentered>
      <S.YellowButton
        onClick={() =>
          handleExchangeClick(
            selectFromOption,
            selectToOption,
            fromCoin,
            toCoin
          )
        }
      >
        환전
      </S.YellowButton>
    </S.ExContainer>
  );
};
const S = {
  CoinCentered: styled.form`
    margin-top: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100%;
  `,
  ExContainer: styled.div`
    height: 300px;
    margin: 0% auto;
    margin-top: 30px;
    padding: 15px;
    width: 90%;
    background-color: white;
  `,
  Logo: styled.img`
    height: 15px;
  `,
  YellowButton: styled.button`
    background-color: #ffd94a;
    padding: 10px 30px;
    margin: auto;
    display: block;
    border-radius: 10px;
    margin-top: 20px;
  `,
};
export default ExchangeCoin;
