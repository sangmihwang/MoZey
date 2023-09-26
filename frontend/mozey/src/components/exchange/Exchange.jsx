import { useEffect, useState } from "react";
import React from "react";
import coinPriceAPI from "api/coinPriceAPI";
import Chart from "react-apexcharts";
import * as S from "components/exchange/Exchange.Style";
import useStore from "store";

import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import { FaCoins, FaCommentDollar } from "react-icons/fa";
import { AiOutlineArrowRight } from "react-icons/ai";
// https://apexcharts.com/docs/react-charts/

function Exchange() {
  // useEffect(() => {
  //   const [series, setSeries] = useState("asd");
  //   const priceData = async () => {
  //     const { priceData } = await coinPriceAPI.getCoinPrice();
  //     setSeries(transformData(priceData));
  //   };
  //   priceData();
  // }, []);

  const [options] = useState({
    colors: ["#0fbcf9"],
    chart: {
      height: 500,
    },
    xaxis: {},
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

  // 코인 정보 받으면 형식 변경해야함
  const transformData = (rawData) => {
    const transformedData = {};
    rawData.forEach((item) => {
      const { coinName, coinPrice, date } = item;
      const seriesName = coinName === 1 ? "KOSPI 50" : "S&P 500";
      if (!transformedData[coinName]) {
        transformedData[coinName] = {
          name: seriesName,
          data: [],
        };
      }
      transformedData[coinName].data.push({
        x: new Date(date).getTime(),
        y: coinPrice,
      });
    });
    return Object.values(transformedData);
  };

  // 더미데이터
  const series = transformData([
    {
      coinName: 1,
      coinPrice: 500,
      date: 20230906,
    },
    {
      coinName: 1,
      coinPrice: 550,
      date: 20230916,
    },
    {
      coinName: 1,
      coinPrice: 510,
      date: 20230917,
    },
    {
      coinName: 1,
      coinPrice: 490,
      date: 20230918,
    },
    {
      coinName: 1,
      coinPrice: 505,
      date: 20230919,
    },
    {
      coinName: 1,
      coinPrice: 495,
      date: 20230920,
    },
    {
      coinName: 1,
      coinPrice: 515,
      date: 20230921,
    },
    {
      coinName: 1,
      coinPrice: 525,
      date: 20230922,
    },
    {
      coinName: 1,
      coinPrice: 485,
      date: 20230923,
    },
    {
      coinName: 1,
      coinPrice: 540,
      date: 20230926,
    },
    {
      coinName: 2,
      coinPrice: 600,
      date: 20230916,
    },
    {
      coinName: 2,
      coinPrice: 620,
      date: 20230917,
    },
    {
      coinName: 2,
      coinPrice: 580,
      date: 20230918,
    },
    {
      coinName: 2,
      coinPrice: 590,
      date: 20230919,
    },
    {
      coinName: 2,
      coinPrice: 610,
      date: 20230920,
    },
    {
      coinName: 2,
      coinPrice: 570,
      date: 20230921,
    },
    {
      coinName: 2,
      coinPrice: 560,
      date: 20230922,
    },
    {
      coinName: 2,
      coinPrice: 530,
      date: 20230923,
    },
    {
      coinName: 2,
      coinPrice: 520,
      date: 20230924,
    },
    {
      coinName: 2,
      coinPrice: 1050,
      date: 20230926,
    },
  ]);

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
  const series_KOSPI = series.filter((item) => item.name === "KOSPI 50");
  const [series1, setSeries1] = useState(series_KOSPI);
  const [filteredSeries1, setFilteredSeries1] = useState([]);
  const [selectedPeriod1, setSelectedPeriod1] = useState("default");

  // S&P 차트 상태
  const series_SandP = series.filter((item) => item.name === "S&P 500");
  const [series2, setSeries2] = useState(series_SandP);
  const [filteredSeries2, setFilteredSeries2] = useState([]);
  const [selectedPeriod2, setSelectedPeriod2] = useState("default");

  // 코스피 차트 구현
  useEffect(() => {
    if (selectedPeriod1 === "default") {
      setFilteredSeries1(series1.filter((item) => item.name === "KOSPI 50"));
    } else if (selectedPeriod1 === "7days") {
      const filteredData1 = series1.map((item) => {
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
      const filteredData1 = series1.map((item) => {
        const filteredData1 = item.data.filter((dataItem) => {
          const sevenDaysAgo = new Date();
          sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 30);
          return (
            formatDate(dataItem.x) >= sevenDaysAgo && item.name === "KOSPI 50"
          );
        });
        return { ...item, data: filteredData1 };
      });
      setFilteredSeries1(filteredData1);
    }
  }, [selectedPeriod1, series1]);

  // S&P 차트 구현
  useEffect(() => {
    if (selectedPeriod2 === "default") {
      setFilteredSeries2(series2.filter((item) => item.name === "S&P 500"));
    } else if (selectedPeriod2 === "7days") {
      const filteredData = series2.map((item) => {
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
      const filteredData = series2.map((item) => {
        const filteredData = item.data.filter((dataItem) => {
          const sevenDaysAgo = new Date();
          sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 30);
          return (
            formatDate(dataItem.x) >= sevenDaysAgo && item.name === "S&P 500"
          );
        });
        return { ...item, data: filteredData };
      });
      setFilteredSeries2(filteredData);
    }
  }, [selectedPeriod2, series2]);

  //  코인 교환 파트

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

    let exchangeRate = 1;
    const KToS = todayKospi / todaySandP;
    const PToS = todaySandP;
    const PToK = todayKospi;
    const SToK = todaySandP / todayKospi;
    console.log(selectFromOption, selectToOption, "프롬, 투 ");
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

  const handleExchangeClick = (e) => {
    console.log(e);
  };

  useEffect(() => {
    calculateExchange(fromCoin, selectFromOption, selectToOption);
  }, [fromCoin, selectFromOption, selectToOption]);

  // 코인 테스트

  return (
    <div>
      <S.Wrap>
        <S.Chart1>
          <div>오늘의 KOSPI 50 시세</div>
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
          <Chart
            options={options}
            series={filteredSeries1}
            type="line"
            width="600"
          />
        </S.Centered>
        <S.Chart1>
          <div>오늘의 S&P 500 시세</div>
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
          <Chart
            options={options}
            series={filteredSeries2}
            type="line"
            width="600"
          />
        </S.Centered>
        <S.ExContainer>
          <S.CoinCentered>
            <div>
              <FaCommentDollar size="50px" padding="200px" />
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
              <AiOutlineArrowRight size="50px" />
            </div>
            <div>
              <FaCoins size="50px" />
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
              coinPriceAPI.exchangeCoin(
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
        <br />
        <br />
      </S.Wrap>
    </div>
  );
}

export default Exchange;
