import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

const NewsSection = () => {
  const [showMore, setShowMore] = useState(false);
  // const title = '뉴욕증시 상승 유지…”인플레이션” 논쟁에 지쳐가는 금융시장'
  // const script = `
  // 미국 8월 물가지표가 발표됐다. 8월 소비자물가지수(CPI)는 전년 동월 대비 3.7% 상승한 것으로 나타났다.
  // 지난달 3.2% 상승보다 크게 확대됐으며 시장 전망치인 3.6%를 소폭 상회했다. 반면, 에너지와 식료품을 제외한
  // 근원CPI는 전년 동기 대비 4.3% 올랐다. 이는 전월의 4.7%에 보다 하락한 것이다. 즉, 8월 한달 동안 국제유가와 농산물 등
  // 원자재 가격의 상승이 가장 큰 원인으로 작용했음을 증명했다. 연준(Fed)에 혼동된 시그널을 줄 것으로 보인다.
  // 시장 전문가들은 이번 보고서가 연준 정책변화에는 큰 영향을 주지 않을 것으로 판단한다. 다음주 19일 시작하는 FOMC
  // 회의 회의에서 이를 반영하여 기준금리 인상이 이루어질 수 있다는 의견이다.  시카고상품거래소(CME)의 페드워치(FedWatch)
  // 미국 8월 물가지표가 발표됐다. 8월 소비자물가지수(CPI)는 전년 동월 대비 3.7% 상승한 것으로 나타났다.
  // 지난달 3.2% 상승보다 크게 확대됐으며 시장 전망치인 3.6%를 소폭 상회했다. 반면, 에너지와 식료품을 제외한
  // 근원CPI는 전년 동기 대비 4.3% 올랐다. 이는 전월의 4.7%에 보다 하락한 것이다. 즉, 8월 한달 동안 국제유가와 농산물 등
  // 원자재 가격의 상승이 가장 큰 원인으로 작용했음을 증명했다. 연준(Fed)에 혼동된 시그널을 줄 것으로 보인다.
  // 시장 전문가들은 이번 보고서가 연준 정책변화에는 큰 영향을 주지 않을 것으로 판단한다. 다음주 19일 시작하는 FOMC
  // 회의 회의에서 이를 반영하여 기준금리 인상이 이루어질 수 있다는 의견이다.  시카고상품거래소(CME)의 페드워치(FedWatch)
  // `;

  // const img_path = 'https://d18-invdn-com.investing.com/content/pic7b07617d73e0756c52d7be4e5623d842.png'

  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const currentDate = new Date();
        let dateToFetch;

        if (currentDate.getUTCHours() >= 2) {
          // 11:00 이후라면 오늘 날짜로 조회
          dateToFetch = currentDate.toISOString().split("T")[0];
        } else {
          // 11:00 이전이라면 어제 날짜로 조회
          currentDate.setDate(currentDate.getUTCDate() - 1);
          dateToFetch = currentDate.toISOString().split("T")[0];
        }

        const response = await axios.get(
          `https://j9a510.p.ssafy.io/api/news?date=${dateToFetch}`
        );
        setNewsData(response.data);
        // console.log("뉴스데이터: ", response.data);
      } catch (error) {
        console.error("Error fetching news by date:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <S.Wrap $isExpanded={showMore}>
      <S.Container $isExpanded={showMore}>
        <ul>
          {newsData.map((news) => (
            <S.NewsItem key={news.newsId}>
              <S.NewsTitle>{news.title}</S.NewsTitle>
              <S.NewsImage src={news.imageUrl} alt="News Thumbnail" />
              <S.NewsContent>{news.content}</S.NewsContent>
            </S.NewsItem>
          ))}
        </ul>
      </S.Container>
      <S.MoreButton onClick={() => setShowMore(!showMore)}>
        {showMore ? "숨기기" : "더보기"}
      </S.MoreButton>
    </S.Wrap>
  );
};

const S = {
  Wrap: styled.div`
    margin-top: 0px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 3%; // 내부 좌우 여백
    height: ${({ $isExpanded }) =>
      $isExpanded ? "auto" : "calc(100vh - 108px - 73px)"};
    background: ${({ theme }) => theme.color.background};
  `,
  Container: styled.div`
    background: ${({ theme }) => theme.color.white};
    width: 100%;
    border-radius: 10px;
    margin: 20px;
    display: flex;
    flex-direction: column;
    padding: 3% 3%;
    box-shadow: ${({ theme }) => theme.shadow.card};
    overflow-y: auto;
    max-height: ${({ $isExpanded }) => ($isExpanded ? "100%" : "547px")};
    min-height: 547px;
  `,
  NewsItem: styled.li`
    display: flex;
    flex-direction: column;
    padding: 8px;
  `,
  NewsImage: styled.img`
    width: 100%;
    height: auto;
    margin: 10px 0;
    border-radius: 8px;
  `,
  NewsTitle: styled.h3`
    font-size: 20px;
    font-weight: 900;
    margin: 10px 0;
    line-height: ${({ theme }) => theme.lineheight.title1};
  `,
  NewsContent: styled.p`
    color: ${({ theme }) => theme.color.darkgray};
    font-size: 14px;
    margin-top: 5px;
    line-height: ${({ theme }) => theme.lineheight.content};
  `,
  MoreButton: styled.button`
    background-color: ${({ theme }) => theme.color.lightgray};
    color: ${({ theme }) => theme.color.white};
    border-radius: 10px;
    width: 60px;
    height: 25px;
    font-size: 12px;
    font-weight: bold;
    margin-top: 10px;
    align-self: center;
  `,
};

export default NewsSection;
