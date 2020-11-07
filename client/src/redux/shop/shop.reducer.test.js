import ShopActionTypes from "./shop.types";
import shopReducer from "./shop.reducer";

const INITIAL_STATE = {
  collections: null,
  isFetching: false,
  errorMessage: undefined,
};

describe("shopReducer", () => {
  it("should return the initial state as default", () => {
    expect(shopReducer(undefined, {})).toEqual(INITIAL_STATE);
  });

  it("should start fetching a collection", () => {
    expect(
      shopReducer(INITIAL_STATE, {
        type: ShopActionTypes.FETCH_COLLECTIONS_START,
      }).isFetching
    ).toBe(true);
  });

  it("should fetch collections on success", () => {
    const mockCollections = [{ id: 1 }, { id: 2 }];
    expect(
      shopReducer(INITIAL_STATE, {
        type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
        payload: mockCollections,
      })
    ).toEqual({
      ...INITIAL_STATE,
      isFetching: false,
      collections: mockCollections,
    });
  });

  it("should attach error message on failure", () => {
    expect(
      shopReducer(INITIAL_STATE, {
        type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
        payload: "ERROR",
      })
    ).toEqual({
      ...INITIAL_STATE,
      isFetching: false,
      errorMessage: "ERROR",
    });
  });
});
