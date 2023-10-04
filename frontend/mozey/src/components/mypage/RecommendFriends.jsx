import { useEffect, useState } from "react";
import useStore from "../../store/userInfoStore";
import { Routes, Route, Link } from 'react-router-dom'
// import {} from "./config/firebase";
import React from "react";
import styled from "styled-components";
import axios from 'axios';
import SearchImage from "assets/images/icon-searchFriends.png"
import ProfileImage from "assets/images/icon-profileImg-default.svg"

const Main = () => {
	const userInfo = useStore((state) => state.User);
	const [recommend, setRecommend] = useState([]);

	useEffect(() => {
		const getRecommend = async () => {
			try {
				const id = userInfo.id;
				//친구의 캠퍼스, 기수, 반 조회에 포함되는지 확인 필요
				axios.get("https://j9a510.p.ssafy.io/api/users/friends/recommend/${id}")
					.then((data) => {
						if (data.data.message === "친구 조회 완료") {
							setRecommend(data.data.data);
						}
					})
			} catch (e) {
				console.log(e);
			}
		}
		getRecommend();
	}, []);

	const addFriend = (id) => {
		try {
			const senderId = userInfo.id;
			axios.post("https://j9a510.p.ssafy.io/api/users/friends/follow/${senderId}/${id}")
				.then((data) => {
					if (data.data.message === "친구 추가 완료") {
						alert("추가했습니다");
						window.location.href = "/mypage";
					}
				})
		} catch (e) {
			console.log(e);
		}
	}

	return (
		<S.Wrap>
			<S.Top>
				<S.Title>
					<h2>추천 친구들</h2>
				</S.Title>
				<S.Search>
					<button>
						<img src={SearchImage} alt="search" />
						<Link to="/request">친구검색</Link>
					</button>
				</S.Search>
			</S.Top>
			<S.Container>
				<ul>
					{recommend.map(friend => (
						<S.Friend>
							<S.FriendProfileBox>
								{friend.image === null
									? (<img src={ProfileImage} alt="profile" />)
									: (<img src={friend.image} alt="profile" />)
								}
							</S.FriendProfileBox>
							<S.FriendInfo>
								<h2>{friend.name}</h2>
							</S.FriendInfo>
							<S.FriendAdd>
								<button onClick={addFriend(friend.userId)}>추가</button>
							</S.FriendAdd>
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
	Top: styled.div`
		width: 87.7%;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	`,
	Title: styled.div`
	font-size: 16px;
	font-weight: bold;
	color: #040404;
    `,
	Search: styled.div`
		> button {
		background-color: ${({ theme }) => theme.color.white};
		color: ${({ theme }) => theme.color.lightgray};
		box-shadow: 0 4px 4px rgb(0, 0, 0, 0.25);
		border-radius: 10px;
		width: 83px;
		height: 25px;
		font-size: 14px;
		font-weight: bold;
		display: flex;
    align-items: center;
    justify-content: center;
		}
		> button:hover {
    	background: #FBF7EF;
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

export default Main;