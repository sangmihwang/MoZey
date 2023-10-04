import React, { useEffect, useState } from "react";
import styled from "styled-components";
import * as components from "components";

const Main = () => {
  const [wrapHeight, setWrapHeight] = useState("40vh");

  useEffect(() => {
    const updateWrapHeight = () => {
      const windowHeight = window.innerHeight * 0.8;
      setWrapHeight(windowHeight + "px");
    };
    updateWrapHeight();
    window.addEventListener("resize", updateWrapHeight);

    return () => {
      window.removeEventListener("resize", updateWrapHeight);
    };
  }, []);

  return (
    <S.Wrap style={{ height: wrapHeight }}>
      <components.Request></components.Request>
    </S.Wrap>
  );
};

const S = {
  Wrap: styled.div`
    background: ${({ theme }) => theme.color.background};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    html, body {
      height: 100%;
      margin: 0;
      padding: 0;
      background-color: ${({ theme }) => theme.color.background};
    }
  `,
};

export default Main;