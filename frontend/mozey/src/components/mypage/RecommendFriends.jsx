import { useEffect, useState } from "react";
import useStore from "../../store/userInfoStore";
import { Routes, Route, Link } from "react-router-dom";
import React from "react";
import styled from "styled-components";
import axios from "axios";
import SearchModal from "./SearchFriends";
import SearchImage from "assets/images/icon-searchFriends.png";
import ProfileImage from "assets/images/icon-profileImg-default.svg";

const RecommendFriends = () => {
  const userInfo = useStore((state) => state.User);
  const [recommend, setRecommend] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const getRecommend = async () => {
      try {
        const id = userInfo.id;
        axios
          .get(`https://j9a510.p.ssafy.io/api/users/friends/recommend/${id}`)
          .then((data) => {
            if (data.data.message === "친구 조회 완료") {
              setRecommend(data.data.data);
              console.log("추천 친구 조회", data.data.data);
            }
          });
      } catch (e) {
        console.log(e);
      }
    };
    getRecommend();
  }, []);

  const addFriend = (id) => {
    try {
      const senderId = userInfo.id;
      // console.log("친구 아이디", id);
      axios
        .post(`https://j9a510.p.ssafy.io/api/users/friends/follow/${senderId}/${id}`)
        .then((data) => {
          alert("친구를 추가했습니다");
          window.location.href = "/mypage";
        });
    } catch (e) {
      console.log(e);
    }
  };

  const leaveModalOpen = async () => {
    setModalOpen(true);
  };

  const leaveModalClose = async () => {
    setModalOpen(false);
  };

  return (
    <S.Wrap>
      <S.Top>
        <S.Title>
          <h2>추천 친구들</h2>
        </S.Title>
        <S.Search>
          <button>
            <img src={SearchImage} alt="search" />
            <a onClick={() => leaveModalOpen()}>검색</a>
          </button>
        </S.Search>
      </S.Top>
      <S.Container>
        <ul>
          {recommend.map((friend) => (
            <S.Friend key={friend.userId}>
              <S.FriendProfileBox>
                {friend.image === null || !friend.image ? (
                  <img src={ProfileImage} alt="profile" />
                ) : (
                  <img src={friend.image} alt="profile" />
                )}
              </S.FriendProfileBox>
              <S.FriendInfo>
                <h2>{friend.name}</h2>
                {friend.campus && friend.term && friend.group && (
                  <h4>
                    {friend.campus}캠퍼스 | {friend.term}기 | {friend.group}반
                  </h4>
                )}
              </S.FriendInfo>
              <S.FriendAdd>
                <button onClick={() => {
                  const friendId = friend.userId;
                  console.log("칭구칭구", friend);
                  addFriend(friendId);
                }}>추가</button>
              </S.FriendAdd>
            </S.Friend>
          ))}
        </ul>
      </S.Container>
      {modalOpen && (
        <SearchModal open={modalOpen} close={leaveModalClose}></SearchModal>
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
  `,
  Top: styled.div`
    width: 87.7%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  `,
  Title: styled.div`
    display: flex;
    flex-direction: column;
    font-size: 16px;
    font-weight: bold;
    color: #040404;
  `,
  Search: styled.div`
    > button {
      background-color: ${({ theme }) => theme.color.yellow};
      color: ${({ theme }) => theme.color.lightgray};
      box-shadow: ${({ theme }) => theme.shadow.card};
      border-radius: 10px;
      width: 100%;
      height: 100%;
      font-size: 14px;
      font-weight: bold;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 4px 8px;
    }
    > button:hover {
      background-color: ${({ theme }) => theme.color.white};
      border: 1px solid ${({ theme }) => theme.color.yellow};
      color: ${({ theme }) => theme.color.yellow};
    }
    > button > img {
      margin: 2px;
      :hover {
        color: ${({ theme }) => theme.color.yellow};
      }
    }
  `,
  Container: styled.div`
    background: ${({ theme }) => theme.color.white};
    width: 90%;
    border-radius: 10px;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    padding: 3% 7% 3%;
    box-shadow: ${({ theme }) => theme.shadow.card};
    overflow-y: auto;
    max-height: 250px;
    min-height: 50px;

    > ul > li {
      width: 100%;
    }
  `,
  Friend: styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 5%;
  `,
  FriendProfileBox: styled.div`
    width: 12yw;
    height: 12vw;
    background: ${({ theme }) => theme.color.background};
    border-radius: 70%;
    overflow: hidden;
    > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  `,
  FriendInfo: styled.div`
    text-align: left;
    width: 60%;
    margin-left: 2.5vw;

    > h2 {
      font-size: 16px;
      font-weight: bold;
      color: #040404;
    }
    > h4 {
      color: ${({ theme }) => theme.color.darkgray};
      font-size: 12px;
      font-weight: bold;
      margin-top: 5px;
    }
  `,
  FriendAdd: styled.div`
    > button {
      background-color: ${({ theme }) => theme.color.blue};
      color: ${({ theme }) => theme.color.white};
      border-radius: 10px;
      width: 40px;
      height: 20px;
      font-size: 12px;
      font-weight: bold;
      margin: auto;
    }
  `,
};

export default RecommendFriends;
