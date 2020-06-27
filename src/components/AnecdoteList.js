import React from "react";
import { connect } from "react-redux";
import { voteAnecdote } from "../reducers/anecdoteReducer";

const AnecdoteList = (props) => {
  const filteredAnecdotes = props.anecdotes.filter((a) =>
    a.content.includes(props.filter)
  );

  return (
    <>
      {filteredAnecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}{" "}
            <button onClick={() => props.voteAnecdote(anecdote.id)}>
              vote
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    anecdotes: state.anecdotes,
    filter: state.filter,
  };
};

export default connect(mapStateToProps, { voteAnecdote })(AnecdoteList);
