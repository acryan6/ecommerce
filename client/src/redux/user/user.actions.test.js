import UserActionTypes from "./user.types";
import {
  googleSignInStart,
  emailSignInStart,
  signInSuccess,
  signInFailure,
  checkUserSession,
  signOutStart,
  signOutSuccess,
  signOutFailure,
  signUpStart,
  signUpSuccess,
  signUpFailure,
} from "./user.actions";

describe("googleSignInStart action", () => {
  it("should create the action", () => {
    expect(googleSignInStart().type).toEqual(
      UserActionTypes.GOOGLE_SIGN_IN_START
    );
  });
});

describe("emailSignInStart action", () => {
  it("should create the action", () => {
    const mockUser = {
      email: "user@google.com",
      password: "123",
    };

    const action = emailSignInStart(mockUser);

    expect(action.type).toEqual(UserActionTypes.EMAIL_SIGN_IN_START);

    expect(action.payload).toEqual(mockUser);
  });
});

describe("signInSuccess action", () => {
  it("should create the action", () => {
    const mockUser = {
      email: "user@google.com",
      password: "123",
    };

    const action = signInSuccess(mockUser);

    expect(action.type).toEqual(UserActionTypes.SIGN_IN_SUCCESS);

    expect(action.payload).toEqual(mockUser);
  });
});

describe("signInFailure action", () => {
  it("should create the action", () => {
    const action = signInFailure("ERROR");

    expect(action.type).toEqual(UserActionTypes.SIGN_IN_FAILURE);

    expect(action.payload).toEqual("ERROR");
  });
});

describe("checkUserSession action", () => {
  it("should create the action", () => {
    expect(checkUserSession().type).toEqual(UserActionTypes.CHECK_USER_SESSION);
  });
});

describe("signOutStart action", () => {
  it("should create the action", () => {
    expect(signOutStart().type).toEqual(UserActionTypes.SIGN_OUT_START);
  });
});

describe("signOutSuccess action", () => {
  it("should create the action", () => {
    expect(signOutSuccess().type).toEqual(UserActionTypes.SIGN_OUT_SUCCESS);
  });
});

describe("signOutFailure action", () => {
  it("should create the action", () => {
    const action = signOutFailure("ERROR");

    expect(action.type).toEqual(UserActionTypes.SIGN_OUT_FAILURE);

    expect(action.payload).toEqual("ERROR");
  });
});

describe("signUpStart action", () => {
  it("should create the action", () => {
    const mockUser = {
      displayName: "user",
      email: "user@google.com",
      password: "123",
      confirmPassword: "123",
    };

    const action = signUpStart(mockUser);

    expect(action.type).toEqual(UserActionTypes.SIGN_UP_START);

    expect(action.payload).toEqual(mockUser);
  });
});

describe("signUpSuccess action", () => {
  it("should create the action", () => {
    const mockUser = {
      email: "user@google.com",
      password: "123",
    };

    const mockAdditionalData = {
      displayName: "user",
    };

    const action = signUpSuccess({
      user: mockUser,
      additionalData: mockAdditionalData,
    });

    expect(action.type).toEqual(UserActionTypes.SIGN_UP_SUCCESS);

    expect(action.payload).toEqual({
      user: mockUser,
      additionalData: mockAdditionalData,
    });
  });
});

describe("signUpFailure action", () => {
  it("should create the action", () => {
    const action = signUpFailure("ERROR");

    expect(action.type).toEqual(UserActionTypes.SIGN_UP_FAILURE);

    expect(action.payload).toEqual("ERROR");
  });
});
