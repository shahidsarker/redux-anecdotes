import React from "react";
import { connect } from "react-redux";
import { updateFilter } from "../reducers/filterReducer";

const Filter = (props) => {
  const handleChange = (e) => {
    // input-field value is in variable event.target.value
    console.log(e.target.value);
    props.updateFilter(e.target.value);
  };

  const style = {
    marginBottom: 10,
  };

  return (
    <div style={style}>
      filter <input onChange={handleChange} />
    </div>
  );
};

export default connect(null, { updateFilter })(Filter);
