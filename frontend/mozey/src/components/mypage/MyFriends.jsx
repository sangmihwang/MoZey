import { useEffect, useState } from "react";
import useStore from "../../store/userInfoStore";
// import {} from "./config/firebase";
import React from "react";
import styled from "styled-components";
import axios from "axios";
import ProfileImage from "assets/images/icon-profileImg-default.svg";

const MyFriends = () => {
  const userInfo = useStore((state) => state.User);
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    const userFriends = async () => {
      try {
        const id = userInfo.id;
        // 친구의 캠퍼스, 기수, 반 조회에 포함되는지 확인 필요
        axios
          .get(`https://j9a510.p.ssafy.io/api/users/friends/${id}`)
          .then((data) => {
            if (data.data.message === "친구 전체 목록 조회 성공") {
              setFriends(data.data.data);
            }
          });
      } catch (e) {
        console.log(e);
      }
    };
    userFriends();
  }, []);

  const deleteFriend = (id) => {
    try {
      const senderId = userInfo.id;
      axios
        .delete(`https://j9a510.p.ssafy.io/api/users/friends/${senderId}/${id}`)
        .then((data) => {
          if (data.data.message === "친구 삭제 완료") {
            alert("삭제가 완료되었습니다");
            window.location.href = "/mypage";
          }
        });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <S.Wrap>
      <S.Title>
        <h2>내 친구들</h2>
      </S.Title>
      <S.Container>
        {friends.length === 0 && (
          <h4>추가된 친구가 없습니다. 추천 친구 목록에서 추가해보세요!</h4>
        )}
        <ul>
          {friends.map((friend) => (
            // map 함수 같은 Array Method 쓸 때, iteration 돌면서 렌더링되는 요소마다 key값 부여해줘야함.
            // <S.Friend key={friend.userId}>
            <S.Friend key={friend.userId}>
              <S.FriendProfileBox>
                {friend.image === null ? (
                  <img src={ProfileImage} alt="profile" />
                ) : (
                  <img src={friend.image} alt="profile" />
                )}
              </S.FriendProfileBox>
              <S.FriendInfo>
                <h2>{friend.name}</h2>
              </S.FriendInfo>
              <S.FriendDelete>
                <button onClick={deleteFriend(friend.userId)}>삭제</button>
              </S.FriendDelete>
            </S.Friend>
          ))}
        </ul>
      </S.Container>
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
  Title: styled.div`
    width: 87.7%;
    > h2 {
      font-size: 16px;
      font-weight: bold;
      color: #040404;
    }
  `,
  Container: styled.div`
    background: ${({ theme }) => theme.color.white};
    width: 87.7%;
    border-radius: 10px;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    padding: 3% 7% 3%;
    box-shadow: 0 4px 4px rgb(0, 0, 0, 0.25);
    overflow-y: auto;
    max-height: 250px;

    > h4 {
      font-size: 12px;
      font-weight: bold;
      line-height: 20px;
      margin-left: 7px;
      text-align: left;
    }
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
  FriendDelete: styled.div`
    > button {
      background-color: ${({ theme }) => theme.color.lightgray};
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

export default MyFriends;
