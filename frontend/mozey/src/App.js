import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import * as style from "styles";
import * as utils from "utils";
import * as pages from "pages";
import * as components from "components";

const App = () => {
  return (
    <ThemeProvider theme={style.Theme}>
      <style.GlobalStyles />
      <Router>
        <components.TobTab></components.TobTab>
        <Routes>
          <Route path={utils.URL.HOME.MAIN} element={<pages.Main />} />
          <Route path="/api/coin/" element={<pages.Exchange />} />
          {/* <Route path={utils.URL.MESSAGE_BOX.MAIN} element={<pages.MessageBox />} /> */}
          <Route path={utils.URL.MESSAGE.MAIN} element={<pages.Message />} />
          <Route path={utils.URL.VOTE.MAIN} element={<pages.Vote />} />
          <Route path={utils.URL.EXCHANGES.MAIN} element={<pages.Exchanges />} />
          <Route path={utils.URL.NEWS.MAIN} element={<pages.News />} />
        </Routes>
        <components.BottomNav />
      </Router>
    </ThemeProvider>
  );
};

export default App;
