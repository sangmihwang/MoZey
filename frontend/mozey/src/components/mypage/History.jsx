import { useEffect, useState } from "react";
import useStore from "../../store/userInfoStore";
// import {} from "./config/firebase";
import React from "react";
import styled from "styled-components";
import axios from 'axios';
import pointImage from "assets/images/icon-point.png"
import coin1Image from "assets/images/icon-coin1.png"
import coin2Image from "assets/images/icon-coin2.png"

const Main = () => {
  const userInfo = useStore((state) => state.User);
	const [history, setHistory] = useState([]);
	const [visibleItems, setVisibleItems] = useState(3);

	useEffect(() => {
		const userHistory = async () => {
			try {
        const id = userInfo.id;
				axios.get("https://j9a510.p.ssafy.io/api/users/info/${id}")
					.then((data) => {
						if (data.data.message === "사용자 코인 내역 조회 완료") {
							setHistory(data.data.data);
						}
					})
			} catch (e) {
				console.log(e);
			}
		}
		userHistory();
	}, []);

	return (
		<S.Wrap>
			<S.Title>
				<h2>재산 히스토리</h2>
			</S.Title>
			<S.Container>
        {history.length === 0 && (
          <h4>히스토리 내역이 없습니다</h4>
        )}
				<ul>
					{history.slice(0, visibleItems).map((item, index) => {
						if (item.coinName === "point") {
							if (item.type === "적립") {
								return (
									<li>
										<img src={pointImage} alt="point" />
										<h4>{item.usage} 포인트를 받았습니다</h4>
										<p>{item.date}</p>
									</li>
								)
							} else {
								return (
									<li>
										<img src={pointImage} alt="point" />
										<h4>{item.usage} 포인트를 사용했습니다</h4>
										<p>{item.date}</p>
									</li>
								)
							}
						} else if (item.coinName === "coin1") {
							if (item.type === "적립") {
								return (
									<li>
										<img src={coin1Image} alt="coin1" />
										<h4>{item.usage} 코인을 받았습니다</h4>
										<p>{item.date}</p>
									</li>
								)
							} else {
								return (
									<li>
										<img src={coin1Image} alt="coin1" />
										<h4>{item.usage} 코인을 사용했습니다</h4>
										<p>{item.date}</p>
									</li>
								)
							}
						} else {
							if (item.type === "적립") {
								return (
									<li>
										<img src={coin2Image} alt="coin2" />
										<h4>{item.usage} 코인을 받았습니다</h4>
										<p>{item.date}</p>
									</li>
								)
							} else {
								return (
									<li>
										<img src={coin2Image} alt="coin2" />
										<h4>{item.usage} 코인을 사용했습니다</h4>
										<p>{item.date}</p>
									</li>
								)
							}
						}
					})}
				</ul>
				{history && visibleItems < history.length && (
					<button>더보기</button>
				)}
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
	margin-top: 10px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    padding: 7%;
    box-shadow: 0 4px 4px rgb(0, 0, 0, 0.25);
    text-align: center;
		align-items: center;

    > h4 {
      font-size: 12px;
			font-weight: bold;
			line-height: 20px;
			margin-left: 7px;
			text-align: left;
    }
		> ul {
			width: 100%;
  		padding: 0;
  		margin: 0;
  		display: flex;
			flex-direction: column;
  		justify-content: space-between;
		}
		> ul > li {
			display: flex;
			flex-direction: row;
		}
		> ul > li:not(:first-of-type) {
			margin-top: 10px;
		}
		> ul > li > img {
			width: 20px;
			height: 20px;
		}
		> ul > li > h4 {
			font-size: 12px;
			font-weight: bold;
			line-height: 20px;
			margin-left: 7px;
			width: 65%;
			text-align: left;
		}
		> ul > li > p {
			font-size: 12px;
			font-weight: bold;
			line-height: 20px;
		}
		> button {
			margin-top: 16px;
			background-color: ${({ theme }) => theme.color.yellow};
      color: ${({ theme }) => theme.color.darkgray};
      border-radius: 10px;
      width: 80px;
      height: 20px;
      font-weight: bold;
		}
  `,
};

export default Main;