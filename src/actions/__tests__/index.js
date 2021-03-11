import { SAVE_COMMENT } from "actions/types";
import { saveComment } from "actions";
import { act } from "react-dom/test-utils";

describe("save comment", () => {
  it("has a type of SAVE_COMMENT", () => {
    const action = saveComment();
    expect(action.type).toEqual(SAVE_COMMENT);
  });

  it("has the correct payload", () => {
    const action = saveComment("new comment");
    expect(action.payload).toEqual("new comment");
  });
});
