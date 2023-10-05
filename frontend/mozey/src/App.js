import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import useStore from "./store/userInfoStore";
import * as style from "styles";
import * as utils from "utils";
import * as pages from "pages";
import * as components from "components";
import { FirebaseApp } from "firebase/app";
const App = () => {
  const userInfo = useStore((state) => state.User);

  return (
    <ThemeProvider theme={style.Theme}>
      <style.GlobalStyles />
      <Router>
        <components.TobTab></components.TobTab>
        <S.ContentContainer>
          <Routes>
            <Route path={utils.URL.AUTH.JOIN} element={<pages.Join />} />
            <Route path={utils.URL.AUTH.SUCCESS} element={<pages.Success />} />
            <Route path={utils.URL.AUTH.MAIN} element={<pages.Auth />} />
            <Route path={utils.URL.AUTH.LOGIN} element={<pages.Login />} />
            <Route path={utils.URL.AUTH.KAKAO} element={<pages.Kakao />} />

            <Route path={utils.URL.HOME.MAIN} element={<pages.Main />} />
            <Route
              path={utils.URL.EXCHANGE.MAIN}
              element={<pages.Exchange />}
            />
            <Route path={utils.URL.MESSAGE.MAIN} element={<pages.Message />} />
            <Route path={utils.URL.VOTE.MAIN} element={<pages.Vote />} />
            <Route path={utils.URL.NEWS.MAIN} element={<pages.News />} />
            <Route path={utils.URL.MYPAGE.MAIN} element={<pages.Mypage />} />
            <Route path={utils.URL.REQUEST.MAIN} element={<pages.Request />} />
          </Routes>
        </S.ContentContainer>
        {loginUser.id !== 0 && <components.BottomNav />}
      </Router>
    </ThemeProvider>
  );
};

export default App;

const S = {
  ContentContainer: styled.div`
    padding-bottom: 73px;
    min-height: calc(
      100vh - 108px - 73px
    ); // 100vh에서 TopTab(108px)와 BottomNav(73px)의 높이를 뺀 길이
  `,
};
