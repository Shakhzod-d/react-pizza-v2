import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import MainLayout from "./layouts/MainLayout";

import "../src/scss/_app.scss";
const Cart = React.lazy(
  () => import(/* webpackChunkName: "Cart" */ "./pages/Cart")
);
const FullPizza = React.lazy(
  () => import(/* webpackChunkName: "FullPizza" */ "./pages/FullPizza")
);
const NotFound = React.lazy(
  () =>
    import(/* webpackChunkName: "NotFoundBlock" */ "./components/NotFoundBlock")
);

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<Home />} />
        <Route
          path="/cart"
          element={
            <React.Suspense fallback={<div>loading...</div>}>
              <Cart />
            </React.Suspense>
          }
        />
        <Route
          path="/pizza/:id"
          element={
            <React.Suspense fallback={<div>loading...</div>}>
              <FullPizza />
            </React.Suspense>
          }
        />
        <Route
          path="/*"
          element={
            <React.Suspense fallback={<div>loading...</div>}>
              <NotFound />
            </React.Suspense>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
