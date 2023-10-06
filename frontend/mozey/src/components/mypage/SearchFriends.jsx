import { useEffect, useState } from "react";
import useStore from "../../store/userInfoStore";
import axios from 'axios';
import styled from "styled-components";
import ProfileImage from "assets/images/icon-profileImg-default.svg"

const SearchModal = (setModalOpen) => {
	const userInfo = useStore((state) => state.User);

	const [allUsers, setAllUsers] = useState([]);
	const [searchResult, setSearchResult] = useState([]);
	const [searchText, setSearchText] = useState("");
	const { open, close } = setModalOpen;

	useEffect(() => {
		const getAllUsers = async () => {
			try {
				axios.get(`https://j9a510.p.ssafy.io/api/users/all`)
					.then((data) => {
						if (data.data.message === "전체 사용자 조회 완료") {
							setAllUsers(data.data.data);
							setSearchResult(data.data.data);
						}
					})
			} catch (e) {
				console.log(e);
			}
		}
		getAllUsers();
	}, []);

	const search = (e) => {
		const searchText = e.target.value;
		setSearchText(searchText);

		const filteredUsers = allUsers.filter((user) => {
			const userName = user.name || '';
			return userName.includes(searchText);
		});

		setSearchResult(filteredUsers);
	};

	const addFriend = (id) => {
		try {
			const senderId = userInfo.id;
			axios.post(`https://j9a510.p.ssafy.io/api/users/friends/follow/${senderId}/${id}`)
				.then((data) => {
					alert("친구를 추가했습니다");
					window.location.href = "/mypage";
				})
		} catch (e) {
			console.log(e);
		}
	}

	return (
		<S.Wrap>
			<S.BG onClick={close}></S.BG>
			<S.Container>
				<S.Sticky>
					<S.Title>
						<h2>친구 검색</h2>
					</S.Title>
					<input type="text" placeholder="검색할 친구의 이름을 입력하세요" onChange={search} value={searchText} />
				</S.Sticky>
				<S.Result>
					{searchResult.map((friend) => (
						<S.Friend key={friend.id}>
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
								<button onClick={() => addFriend(friend.userId)}>추가</button>
							</S.FriendAdd>
						</S.Friend>
					))}
				</S.Result>
			</S.Container>``
		</S.Wrap>
	);
};

const S = {
	Wrap: styled.div`
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	`,
	BG: styled.div`
	background-color: rgba(0, 0, 0, 0.4);
	width: 100%;
	height: 100%;
	position: fixed;
	bottom: 0;
	left: 0;
	z-index: 1 !important;
	`,
	Sticky: styled.div`
	position: sticky;
	top: 0;
	background-color: ${({ theme }) => theme.color.white};
	z-index: 3;

	> input {
		background-color: ${({ theme }) => theme.color.background};
      width: 100%;
			margin-top: 2vh;
			margin-bottom: 2vh;
      border: none;
      border-radius: 10px;
      font-size: 14px;
      font-weight: bold;
      color: ${({ theme }) => theme.color.gray};
      text-align: center;
      padding: 3%;
      cursor: pointer;

      &:hover {
        outline: 2px solid ${({ theme }) => theme.color.lightgray};
        outline-offset: -2px;
      }
      &:focus {
        outline: 2px solid ${({ theme }) => theme.color.lightgray};
        outline-offset: -2px;
      }
	`,
	Title: styled.div`
		font-size: 20px;
		font-weight: bold;
		color: #040404;
		margin-top: 15px;
		margin-bottom: 10px;
	`,
	Result: styled.div`
	overflow: auto;
	`,
	Container: styled.div`
		background: ${({ theme }) => theme.color.white};
    width: 80%;
		height: 100vw;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    padding: 3% 7% 3%;
    box-shadow: 0 4px 4px rgb(0, 0, 0, 0.25);
    overflow-y: auto;
		z-index: 2 !important;
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

export default SearchModal;