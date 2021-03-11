import commentsReducer from "reducers/comment";
import { SAVE_COMMENT } from "actions/types";

it("Properly handles actions with type SAVE_COMMENT", () => {
  const action = {
    type: SAVE_COMMENT,
    payload: "new comment",
  };

  const newState = commentsReducer([], action);

  expect(newState).toEqual(["new comment"]);
});

it("handle actions with unkown type", () => {
  const newState = commentsReducer([], { type: "unkown" });
  expect(newState).toEqual([]);
});
