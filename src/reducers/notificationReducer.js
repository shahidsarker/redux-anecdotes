const notificationAtStart = "render here notification...";

const SET = "SET";
const CLEAR = "CLEAR";

/**
 *
 * @param {string} message Notification message
 */
export const setNotification = (message) => {
  return {
    type: SET,
    data: message,
  };
};

export const clearNotification = () => {
  return { type: CLEAR };
};

const initialState = notificationAtStart;

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET:
      return action.data;
    case CLEAR:
      return null;
    default:
      return state;
  }
};

export default reducer;
