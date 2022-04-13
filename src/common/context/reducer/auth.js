export function profileReducer(state, action) {
  switch (action.type) {
    case "UPDATE_PROFILE":
      return {
        ...action.value,
        isLoading: action.isLoading || false,
      };
    default:
      throw new Error();
  }
}
