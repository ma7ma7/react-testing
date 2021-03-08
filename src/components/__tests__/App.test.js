import React from "react";
import ReactDom from "react-dom";

import App from "../App";
import CommentBox from "../CommentBox";

it("Shows a CommentBox", () => {
  const div = document.createElement("div");
  ReactDom.render(<App />, div);
  expect(div.innerHTML).toContain("This is a comment box");
  ReactDom.unmountComponentAtNode(div);
});
