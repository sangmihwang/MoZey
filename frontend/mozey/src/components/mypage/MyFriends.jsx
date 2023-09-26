import { useEffect, useState } from "react";
// import {} from "./config/firebase";
import React from "react";
import styled from "styled-components";
import ProfileImage from "assets/images/icon-profileImg-default.svg"

const Main = () => {
	return (
		<S.Wrap>
			<S.Title>
				<h2>내 친구들</h2>
			</S.Title>
			<S.Container>
				<ul>
					<S.Friend>
						<S.FriendProfileBox>
							<img src={ProfileImage} alt="profile" />
						</S.FriendProfileBox>
						<S.FriendInfo>
							<h2>김민태</h2>
							<h4>서울캠퍼스 | 9기 | 4반</h4>
						</S.FriendInfo>
						<S.FriendDelete>
							<button>삭제</button>
						</S.FriendDelete>
					</S.Friend>
					<S.Friend>
						<S.FriendProfileBox>
							<img src={ProfileImage} alt="profile" />
						</S.FriendProfileBox>
						<S.FriendInfo>
							<h2>홍길동</h2>
							<h4>부울경캠퍼스 | 9기 | 2반</h4>
						</S.FriendInfo>
						<S.FriendDelete>
							<button>삭제</button>
						</S.FriendDelete>
					</S.Friend>
					<S.Friend>
						<S.FriendProfileBox>
							<img src={ProfileImage} alt="profile" />
						</S.FriendProfileBox>
						<S.FriendInfo>
							<h2>이민웅</h2>
							<h4>서울캠퍼스 | 9기 | 5반</h4>
						</S.FriendInfo>
						<S.FriendDelete>
							<button>삭제</button>
						</S.FriendDelete>
					</S.Friend>
					<S.Friend>
						<S.FriendProfileBox>
							<img src={ProfileImage} alt="profile" />
						</S.FriendProfileBox>
						<S.FriendInfo>
							<h2>황상미</h2>
							<h4>서울캠퍼스 | 9기 | 5반</h4>
						</S.FriendInfo>
						<S.FriendDelete>
							<button>삭제</button>
						</S.FriendDelete>
					</S.Friend>
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

export default Main;