import React from "react";
import TestRenderer from 'react-test-renderer';
import { render, cleanup, fireEvent } from "@testing-library/react";
import Countries from "../Components/Countries";
import { Provider } from "react-redux";
import store from "../redux/configureStore";
afterEach(cleanup);

it("Calculator renders correctly", () => {
  const { getByPlaceholderText } = render(
    <Provider store={store}>
      <Countries />
    </Provider>
  );
  expect(getByPlaceholderText("search country")).toHaveTextContent("");
});
it("shows user clicking on a button", () => {
  const { getByText } = render(
    <Provider store={store}>
      <Countries />
    </Provider>
  );
  const tree = TestRenderer.create(
    <Provider store={store}>
      <Countries />
    </Provider>,
  ).toJSON();
  fireEvent.click(getByText("SEE ALL COUNTRIES"));
  expect(tree).toMatchSnapshot()
});
