const notificationAtStart = "render here notification...";

const NOTIFY = "NOTIFY";
const CLEAR_NOTIFICATION = "CLEAR_NOTIFICATION";

const initialState = notificationAtStart;

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case NOTIFY:
      return action.data;
    case CLEAR_NOTIFICATION:
      return null;
    default:
      return state;
  }
};

export default reducer;
