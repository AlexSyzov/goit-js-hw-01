import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import Loader from "react-loader-spinner";
import routes from "./routes";

const App = () => (
  <Suspense
    fallback={<Loader type="Audio" color="#ee82ee" height={100} width={100} />}
  >
    <Switch>
      {routes.map((route) => (
        <Route key={route.path} {...route} />
      ))}
    </Switch>
  </Suspense>
);

export default App;
