export function profileReducer(state, action) {
  switch (action.type) {
    case "UPDATE_PROFILE":
      return {
        ...action.value,
        isLoading: action.isLoading || false,
      };
  }
}
export function coursesReducer(state, action) {
  switch (action.type) {
    case "UPDATE_COURSE":
      return {
        ...action.value,
        isLoading: action.isLoading || false,
      };
  }
}
