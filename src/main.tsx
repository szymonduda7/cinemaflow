import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.scss";
import Home from "./pages/Home/Home.tsx";

import { store } from "./redux/store.ts";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router";
import { Search } from "./pages/Search/Search.tsx";
import { MovieDetails } from "./pages/MovieDetails/MovieDetails.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>

          <Route path="/search" element={<Search />}></Route>

          <Route path="/:movieId" element={<MovieDetails />}></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>,
);
