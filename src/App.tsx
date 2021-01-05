import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Loader from './components/Loader';

const Landing = lazy(() => import('./components/Landing'));
const Home = lazy(() => import('./pages/Home'));
const WhatWeDo = lazy(() => import('./pages/WhatWeDo'));
const Publications = lazy(() => import('./pages/Publications'));
const Carrees = lazy(() => import('./pages/Carrees'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const NotFound = lazy(() => import('./pages/NotFound'));

const App: React.FC = () => {
  return (
    <Suspense fallback={<Loader />}>
      <BrowserRouter>
        <Landing>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/what-we-do" exact component={WhatWeDo} />
            <Route path="/publications" exact component={Publications} />
            <Route path="/carrees" exact component={Carrees} />
            <Route path="/about" exact component={About} />
            <Route path="/contact" exact component={Contact} />
            <Route component={NotFound} />
          </Switch>
        </Landing>
      </BrowserRouter>
    </Suspense>
  );
};

export default App;

