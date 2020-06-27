import anecdoteService from "../services/anecdotes";
import { setNotification } from "./notificationReducer";

export const VOTE_ANECDOTE = "VOTE_ANECDOTE";
export const ADD_ANECDOTE = "ADD_ANECDOTE";
export const INIT_ANECDOTES = "INIT_ANECDOTES";

export const initializeAnecdotes = () => {
  return async (dispatch) => {
    const anecdotes = await anecdoteService.getAll();
    dispatch({ type: INIT_ANECDOTES, data: anecdotes });
  };
};

export const voteAnecdote = (id) => {
  return async (dispatch) => {
    const anecdote = await anecdoteService.getOne(id);
    await anecdoteService.updateOne(id, {
      ...anecdote,
      votes: anecdote.votes + 1,
    });
    dispatch({
      type: VOTE_ANECDOTE,
      data: id,
    });
    dispatch(setNotification(`you voted ${anecdote.content}`, 10));
  };
};

export const addAnecdote = (content) => {
  return async (dispatch) => {
    const newAnecdote = await anecdoteService.createNew(content);
    dispatch({
      type: ADD_ANECDOTE,
      data: newAnecdote,
    });
    dispatch(setNotification(`new anecdote '${content}'`));
  };
};

const reducer = (state = [], action) => {
  console.log("state now: ", state);
  console.log("action", action);
  switch (action.type) {
    case VOTE_ANECDOTE:
      return state
        .map((a) => (a.id !== action.data ? a : { ...a, votes: a.votes + 1 }))
        .sort((a, b) => b.votes - a.votes);
    case ADD_ANECDOTE:
      return [...state, action.data];
    case INIT_ANECDOTES:
      return action.data;
    default:
      return state;
  }
};

export default reducer;
