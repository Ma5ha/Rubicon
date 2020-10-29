import React from "react";
import { isElement, mockComponent } from "react-dom/test-utils";
import renderer from "react-test-renderer";
import NavigationWarper from "../tab";

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
