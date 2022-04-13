export function userInfoReducer(state, action) {
  switch (action.type) {
    case "UPDATE_ROLE":
      return { ...state, role: action.value };
    default:
      throw new Error();
  }
}
