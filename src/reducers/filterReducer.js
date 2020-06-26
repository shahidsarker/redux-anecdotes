const UPDATE = "UPDATE";

export const updateFilter = (input) => {
  return {
    type: UPDATE,
    data: input,
  };
};

const reducer = (state = "", action) => {
  switch (action.type) {
    case UPDATE:
      return action.data;
    default:
      return state;
  }
};

export default reducer;
