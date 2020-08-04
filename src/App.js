import React, { lazy, Suspense } from "react";

import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Countries from "./pages/countries/Countries";

import "./App.css";

const Home = lazy(() => import("./pages/home/Home"));
const Favourites = lazy(() => import("./pages/favourites/Favourites"));
const NotFound = lazy(() => import("./pages/not-found/NotFound"));

const App = () => {
  return (
    <Suspense
      fallback={
        <div className="container">
          <h2>Loading...</h2>
        </div>
      }
    >
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/countries" component={Countries} />
          <Route path="/favourites" component={Favourites} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </Suspense>
  );
};

export default App;
