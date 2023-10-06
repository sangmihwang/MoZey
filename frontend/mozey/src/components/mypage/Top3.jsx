import { useEffect, useState } from "react";
import useStore from "../../store/userInfoStore";
// import {} from "./config/firebase";
import React from "react";
import styled from "styled-components";
import axios from "axios";
import MusicImage from "assets/images/icon-music.png";
import DanceImage from "assets/images/icon-dance.png";
import FreepassImage from "assets/images/icon-freepass.png";

const Top3 = () => {
  const userInfo = useStore((state) => state.User);
  const [top, setTop] = useState([]);

  useEffect(() => {
    const userTop3 = async () => {
      try {
        const id = userInfo.id;
        axios
          .get(`https://j9a510.p.ssafy.io/api/votes/top/${id}`)
          .then((data) => {
            if (data.data.message === "TOP3 불러오기 완료") {
              setTop(data.data.data);
            }
          });
      } catch (e) {
        console.log(e);
      }
    };
    userTop3();
  }, []);

  return (
    <S.Wrap>
      <S.Title>
        <h2>가장 많이 받은 칭찬 TOP3</h2>
      </S.Title>
      {top.length === 3 ? (
        <S.Container>
          <S.Question>
            <img src={"https://j9a510.p.ssafy.io/api/v1/image/" + top[0].image + "?option=vote" || MusicImage} alt="music" />
            <p>{top[0].qtnContent}</p>
          </S.Question>
          <S.Question>
            <img src={"https://j9a510.p.ssafy.io/api/v1/image/" + top[1].image + "?option=vote" || DanceImage} alt="dance" />
            <p>{top[1].qtnContent}</p>
          </S.Question>
          <S.Question>
            <img src={"https://j9a510.p.ssafy.io/api/v1/image/" + top[2].image + "?option=vote" || FreepassImage} alt="Freepass" />
            <p>{top[2].qtnContent}</p>
          </S.Question>
        </S.Container>
      ) : (
        <S.Empty>
          <h4>아직 받은 칭찬이 없습니다</h4>
        </S.Empty>
      )}
    </S.Wrap>
  );
};

const S = {
  Wrap: styled.div`
    margin-top: 20px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    > h4 {
      font-size: 12px;
      font-weight: bold;
      line-height: 20px;
      margin-left: 7px;
      text-align: left;
    }
  `,
  Title: styled.div`
    width: 87.7%;
    > h2 {
      font-size: 16px;
      font-weight: bold;
      color: #040404;
    }
  `,
  Container: styled.div`
    width: 87.7%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  `,
  Question: styled.div`
    background: ${({ theme }) => theme.color.white};
    width: 31%;
    height: 25vw;
    margin-top: 10px;
    box-shadow: ${({ theme }) => theme.shadow.card};
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 14px 2px 10px 2px;
    transition: background 0.3s ease;

    &:hover {
      background: #fbf7ef;
    }

    > img {
      width: 15vw;
      height: 15vw;
    }
    > p {
      // margin-top: 8px;
      font-size: 12px;
      font-weight: bold;
      color: ${({ theme }) => theme.color.darkgray};
      text-align: center;
      word-break: keep-all;
    }
  `,
  Empty: styled.div`
    background: ${({ theme }) => theme.color.white};
    width: 90%;
    margin-top: 10px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    padding: 7%;
    box-shadow: ${({ theme }) => theme.shadow.card};
    text-align: center;
    align-items: center;
    > h4 {
      font-size: 12px;
      font-weight: bold;
      line-height: 20px;
      margin-left: 7px;
      text-align: left;
    }
  `,
};

export default Top3;
