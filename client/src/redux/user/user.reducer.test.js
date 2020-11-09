import UserActionTypes from "./user.types";
import userReducer from "./user.reducer";

const INITIAL_STATE = {
  currentUser: null,
  error: null,
};

describe("userReducer", () => {
  it("should return initial state", () => {
    expect(userReducer(undefined, {})).toEqual(INITIAL_STATE);
  });

  it("should pass user on sign in, drop user on signout", () => {
    const mockCurrentUser = {
      email: "user@gmail.com",
      password: "123",
    };

    const action = userReducer(INITIAL_STATE, {
      type: UserActionTypes.SIGN_IN_SUCCESS,
      payload: mockCurrentUser,
    });

    expect(action).toEqual({
      ...INITIAL_STATE,
      currentUser: mockCurrentUser,
    });

    expect(
      userReducer(action, {
        type: UserActionTypes.SIGN_OUT_SUCCESS,
      })
    ).toEqual(INITIAL_STATE);
  });

  it("should pass error on sign in, out, up failure", () => {
    expect(
      userReducer(INITIAL_STATE, {
        type: UserActionTypes.SIGN_IN_FAILURE,
        payload: "ERROR",
      })
    ).toEqual({
      ...INITIAL_STATE,
      error: "ERROR",
    });

    expect(
      userReducer(INITIAL_STATE, {
        type: UserActionTypes.SIGN_OUT_FAILURE,
        payload: "ERROR",
      })
    ).toEqual({
      ...INITIAL_STATE,
      error: "ERROR",
    });

    expect(
      userReducer(INITIAL_STATE, {
        type: UserActionTypes.SIGN_UP_FAILURE,
        payload: "ERROR",
      })
    ).toEqual({
      ...INITIAL_STATE,
      error: "ERROR",
    });
  });
});
