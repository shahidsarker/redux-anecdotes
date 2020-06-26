export const VOTE_ANECDOTE = "VOTE_ANECDOTE";
export const ADD_ANECDOTE = "ADD_ANECDOTE";
export const INIT_ANECDOTES = "INIT_ANECDOTES";

const getId = () => (100000 * Math.random()).toFixed(0);

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0,
  };
};

export const initializeAnecdotes = (anecdotes) => {
  return { type: INIT_ANECDOTES, data: anecdotes };
};

export const voteAnecdote = (id) => {
  return {
    type: VOTE_ANECDOTE,
    data: id,
  };
};

export const addAnecdote = (data) => {
  return {
    type: ADD_ANECDOTE,
    data,
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
