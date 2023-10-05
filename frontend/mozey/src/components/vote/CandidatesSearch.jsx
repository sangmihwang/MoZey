import React, { useEffect, useState } from "react";
import useStore from "../../store/userInfoStore";
import styled from "styled-components";
import * as components from "components";
import { BiSearch } from "react-icons/bi";
import ProfileImage from "assets/images/icon-profileImg-default.svg"
import Candidates from "./Candidates";

const CandidatesSearch = ({onSelectedUserId}) => {
  const userInfo = useStore((state) => state.User);

  // const [friends, setFriends] = useState([]);
  const [searchResult, setSearchResult] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [selected, setSelected] = useState(null);

  const friends = [
    {
      "userId": 2,
      "name": "조윤상",
      "email": "ysang10@gmail.com",
      "gender": "M",
      "term": "9",
      "campus": "서울",
      "group": "5",
      "sub_yn": 0
    },
    {
      "userId": 3,
      "name": "이민웅",
      "email": "dlalsdnd2@gmail.com",
      "gender": "M",
      "term": "9",
      "campus": "서울",
      "group": "5",
      "sub_yn": 0
    },
    {
      "userId": 4,
      "name": "임병국",
      "email": "lbk5770@gmail.com",
      "gender": "M",
      "term": "9",
      "campus": "서울",
      "group": "5",
      "sub_yn": 0
    },
    {
      "userId": 5,
      "name": "지한얼",
      "email": "gksdjf0626@gmail.com",
      "gender": "M",
      "term": "9",
      "campus": "서울",
      "group": "5",
      "sub_yn": 0
    },
    {
      "userId": 6,
      "name": "송채은",
      "email": "sce9842@gmail.com",
      "gender": "W",
      "term": "9",
      "campus": "서울",
      "group": "5",
      "sub_yn": 0
    },
    {
      "userId": 7,
      "name": "황상미",
      "email": "sangmihwangz@gmail.com",
      "gender": "W",
      "term": "9",
      "campus": "서울",
      "group": "5",
      "sub_yn": 0
    },
    {
      "userId": 47,
      "name": "황상미",
      "email": "sangmi_babe@hotmail.com",
      "gender": "W",
      "image": "http://k.kakaocdn.net/dn/dpk9l1/btqmGhA2lKL/Oz0wDuJn1YV2DIn92f6DVK/img_110x110.jpg",
      "term": "9",
      "campus": "서울",
      "group": "5",
      "sub_yn": 0
    },
    {
      "userId": 48,
      "name": "이민웅",
      "email": "dlalsdnd2@kakao.com",
      "gender": "M",
      "image": "http://k.kakaocdn.net/dn/BdrKU/btsrUunCaLi/iSo1OEkWaeIDvtnLZLUrR1/img_110x110.jpg",
      "term": "9",
      "campus": "서울",
      "group": "5",
      "sub_yn": 0
    },
    {
      "userId": 49,
      "name": "송채은",
      "email": "sce9842@hanmail.net",
      "gender": "W",
      "image": "http://k.kakaocdn.net/dn/dpk9l1/btqmGhA2lKL/Oz0wDuJn1YV2DIn92f6DVK/img_110x110.jpg",
      "term": "9",
      "campus": "서울",
      "group": "5",
      "sub_yn": 0
    },
    {
      "userId": 50,
      "name": "임병국",
      "email": "dla5324@nate.com",
      "gender": "M",
      "image": "http://k.kakaocdn.net/dn/eeBoKD/btspUhKqd13/dSXXOkVXKDV5uOqYBRRkA0/img_110x110.jpg",
      "term": "9",
      "campus": "서울",
      "group": "5",
      "sub_yn": 0
    },
    {
      "userId": 52,
      "name": "지한얼",
      "email": "6531z@naver.com",
      "gender": "M",
      "image": "http://k.kakaocdn.net/dn/8M09M/btsbVd8lmXg/r9uGAJIIDD4YeMQHSEJOE1/img_110x110.jpg",
      "term": "9",
      "campus": "서울",
      "group": "5",
      "sub_yn": 0
    },
    {
      "userId": 55,
      "name": "조윤상",
      "email": "ysang7961@hanmail.net",
      "gender": "M",
      "image": "http://k.kakaocdn.net/dn/dpk9l1/btqmGhA2lKL/Oz0wDuJn1YV2DIn92f6DVK/img_110x110.jpg",
      "term": "9",
      "campus": "",
      "group": "5",
      "sub_yn": 0
    }
  ];

  useEffect(() => {
    setSearchResult(friends);
  }, []);

  // useEffect(() => {
  //   const getAllFriends = async () => {
  //     try {
  //       const id = userInfo.id;
  //       axios.get(`https://j9a510.p.ssafy.io//api/users/friends/${id}`)
  //         .then((data) => {
  //           if (data.data.message === "친구 전체 목록 조회 성공") {
  //             setFriends(data.data.data);
  //           }
  //         })
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   }
  //   getAllFriends();
  // }, []);

  const search = (e) => {
    const searchText = e.target.value;
    setSearchText(searchText);

    const filteredUsers = friends.filter((friend) => {
      const userName = friend.name || '';
      return userName.includes(searchText);
    });

    setSearchResult(filteredUsers);
  }

  const voteFriend = (userId) => {
    // ChooseCandidate(userId, questionData, myuserId);
    // Candidates.ChooseCandidate(userId, Candidates.questionData, Candidates.myuserId);
    // Candidates(userId, Candidates.questionData, Candidates.myuserId);
    onSelectedUserId(userId);
  }

  return (
    <S.Wrap onClick={(e) => e.stopPropagation()}>
      <S.SearchBox>
        <S.StyledBiSearch />
        <S.SearchInput placeholder="친구의 이름을 입력하세요" maxLength="10" onChange={search} value={searchText} />
      </S.SearchBox>
      <S.FriendsList>
        {searchResult.map((friend, index) => (
          <S.Friend key={index}>
            <S.FriendProfileBox>
              {friend.image === null || !friend.image
                ? (<img src={ProfileImage} alt="profile" />)
                : (<img src={friend.image} alt="profile" />)
              }
            </S.FriendProfileBox>
            <S.FriendInfo>
              <h2>{friend.name}</h2>
              {friend.campus && friend.term && friend.group && (
                <h4>{friend.campus}캠퍼스 | {friend.term}기 | {friend.group}반</h4>
              )}
            </S.FriendInfo>
            <S.FriendAdd>
              <button onClick={() => voteFriend(friend.userId)}>투표</button>
            </S.FriendAdd>
          </S.Friend>
        ))}
      </S.FriendsList>
    </S.Wrap>
  );
};

const S = {
  Wrap: styled.div`
    background-color: ${({ theme }) => theme.color.background};
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1000;
    padding: 20px;
    border-radius: 10px;
    box-shadow: ${({ theme }) => theme.shadow.card};
    width: 80%;
    max-height: 500px;
  `,
  SearchBox: styled.div`
    background-color: ${({ theme }) => theme.color.white};
    padding: 8px;
    display: flex;
    align-items: center;
    border-radius: 10px;
    box-shadow: ${({ theme }) => theme.shadow.card};
  `,
  FriendsList: styled.div`
    background-color: ${({ theme }) => theme.color.white};
    padding: 8px;
    margin-top: 10px;
    border-radius: 10px;
    overflow: auto;
    height: 70vw;
    box-shadow: ${({ theme }) => theme.shadow.card};
  `,
  StyledBiSearch: styled(BiSearch)`
    margin: 8px;
  `,
  SearchInput: styled.input`
    border: none;
    flex: 1;
    background-color: transparent;
    outline: none;
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
			color: ${({ theme }) => theme.color.darkgray};;
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

export default CandidatesSearch;
