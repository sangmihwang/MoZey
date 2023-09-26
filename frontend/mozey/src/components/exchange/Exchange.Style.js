import styled from "styled-components";

export const Bottom = styled.div`
  bottom: 0%;
  height: 15%;
  width: 100%;
  position: absolute;
  text-align: center;
`;

export const Wrap = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.color.background};
`;

export const Chart1 = styled.div`
  margin: 0% auto;
  width: 600px; // 차트크기와 동일하게
  display: flex;
  justify-content: space-between;
`;

export const Centered = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: left;
`;

export const CoinCentered = styled.form`
  margin-top: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const ExchangeBtn = styled.button``;

export const ExContainer = styled.div`
  height: 300px;
  margin: 0% auto;
  padding: 15px;
  width: 600px;
  background-color: white;
`;

export const Logo = styled.img`
  height: 15px;
`;

export const YellowButton = styled.button`
  background-color: #ffd94a;
  padding: 10px 30px;
  margin: auto;
  display: block;
  border-radius: 10px;
  margin-top: 20px;
`;
