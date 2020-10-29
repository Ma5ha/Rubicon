import React from "react";
import { isElement } from "react-dom/test-utils";
import { create, act } from "react-test-renderer";
import renderer from "react-test-renderer";
import NavigationWarper from "../tab";
import TestRenderer from "react-test-renderer";
it("renders elements <a/> <p/> <h1/>", () => {
  const tree = renderer
    .create(
      <NavigationWarper>
        <h1>Rubicon</h1> <a>Rubicon</a> <p>Rubicon</p>
      </NavigationWarper>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("is react element", () => {
  isElement(<NavigationWarper></NavigationWarper>);
});

let testInstance;
act(() => {
  testInstance = create(<NavigationWarper children={2} />);
});

test("chldren prop to be 2 ", () =>
  expect(testInstance.toTree().props.children).toBe(2));
