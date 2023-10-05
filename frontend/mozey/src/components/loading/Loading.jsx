import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import Spinner from "../../assets/spinner.gif";

const FlexCenter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BackLoading = styled(FlexCenter)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255, 215, 0, 0.1);
  backdrop-filter: blur(5px);
`;

const Loading = () => {
  const [isVisible, setIsVisible] = useState(true);
  // 1초 후 로딩 컴포넌트가 사라지도록 설정
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 1000);
  }, []);

  return isVisible ? (
    <BackLoading>
      <img src={Spinner} alt="로딩중" width="7%" />
    </BackLoading>
  ) : null;
};

export default Loading;
