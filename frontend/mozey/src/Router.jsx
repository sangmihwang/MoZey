import { BrowserRouter, Route, Routes } from "react-router-dom";
import * as utils from "utils";
import * as pages from "pages";
import { Exchange } from "pages";
function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={utils.URL.HOME.MAIN} element={<pages.Main />} />
        <Route path={utils.URL.EXCHANGE.MAIN} element={<pages.Exchange />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
<Router>
  <Routes></Routes>
</Router>;
