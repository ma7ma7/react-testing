import React from "react";
import { mount } from "enzyme";
import CommentBox from "../CommentBox";
import Root from "Root";

let wrapped;

beforeEach(() => {
  wrapped = mount(
    <Root>
      <CommentBox />
    </Root>
  );
});

afterEach(() => {
  wrapped.unmount();
});

it("it has a text area and a button", () => {
  expect(wrapped.find("textarea").length).toEqual(1);
  expect(wrapped.find("button").length).toEqual(1);
});

describe("the textarea", () => {
  beforeEach(() => {
    wrapped.find("textarea").simulate("change", {
      target: { value: "new comment" },
    });
    wrapped.update();
  });

  it("has a text area that a user can tyupe in", () => {
    expect(wrapped.find("textarea").prop("value")).toEqual("new comment");
  });

  it("when form is submitted the text area is emptied", () => {
    wrapped.find("form").simulate("submit");
    wrapped.update();
    expect(wrapped.find("textarea").prop("value")).toEqual("");
  });
});
