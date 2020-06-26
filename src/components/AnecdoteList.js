import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { voteAnecdote } from "../reducers/anecdoteReducer";
import {
  setNotification,
  clearNotification,
} from "../reducers/notificationReducer";

const AnecdoteList = (props) => {
  const anecdotes = useSelector((state) => state.anecdotes);
  const filter = useSelector((state) => state.filter);

  const dispatch = useDispatch();
  const vote = (id) => {
    console.log("vote", id);
    dispatch(voteAnecdote(id));
    dispatch(setNotification(`Voted for ${id}`));
    setTimeout(() => {
      dispatch(clearNotification());
    }, 5000);
  };

  const filteredAnecdotes = anecdotes.filter((a) => a.content.includes(filter));
  console.log(filteredAnecdotes);

  return (
    <>
      {filteredAnecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      ))}
    </>
  );
};

export default AnecdoteList;
