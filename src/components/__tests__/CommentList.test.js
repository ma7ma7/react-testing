import { mount } from "enzyme";
import Root from "Root";
import CommentList from "components/CommentList";

let wrapped;

beforeEach(() => {
  const initialState = {
    comments: ["comment 1", "comment 2"],
  };

  wrapped = mount(
    <Root initialState={initialState}>
      <CommentList />
    </Root>
  );
});

it("Creates one LI peer Comment", () => {
  expect(wrapped.find("li").length).toEqual(2);
});

it("IT show comments on the screen", () => {
  expect(wrapped.render().text()).toContain("comment 1");
  expect(wrapped.render().text()).toContain("comment 2");
});
