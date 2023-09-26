import { useEffect, useState } from "react";
// import {} from "./config/firebase";
import React from "react";
import styled from "styled-components";
import pointImage from "assets/images/icon-point.png"
import coin1Image from "assets/images/icon-coin1.png"
import coin2Image from "assets/images/icon-coin2.png"

const Main = () => {
	return (
		<S.Wrap>
			<S.Title>
				<h2>재산 히스토리</h2>
			</S.Title>
			<S.Container>
				<ul>
					<li>
						<img src={pointImage} alt="point" />
						<h4>300 포인트를 사용했습니다</h4>
						<p>2023-09-01</p>
					</li>
					<li>
						<img src={coin1Image} alt="coin1" />
						<h4>10 코인을 사용했습니다</h4>
						<p>2023-09-01</p>
					</li>
					<li>
						<img src={coin2Image} alt="coin2" />
						<h4>20 코인을 받았습니다</h4>
						<p>2023-09-01</p>
					</li>
				</ul>
				<button>더보기</button>
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