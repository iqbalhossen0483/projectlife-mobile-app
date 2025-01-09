import * as React from "react";
import renderer from "react-test-renderer";

import { Typografy } from "../utils/Typografy";

it(`renders correctly`, () => {
  const tree = renderer.create(<Typografy>Snapshot test!</Typografy>).toJSON();

  expect(tree).toMatchSnapshot();
});
