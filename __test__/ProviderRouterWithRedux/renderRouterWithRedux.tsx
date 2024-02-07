import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { ReactNode } from "react";
import { MockStoreEnhanced } from "redux-mock-store";
import React from "react";

export const renderRouterWithRedux = ({
  store,
  children,
}: {
  store: MockStoreEnhanced<unknown, {}>;
  children: ReactNode;
}) =>
  render(
    <Provider store={store}>
      <Router>{children}</Router>
    </Provider>
  );
