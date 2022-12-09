import React from "react";
import PropTypes from "prop-types";

function Notes({ title, body}) {
  return (
    <div className="card-body">
      <h2 className="card-title">{title}</h2>
      <p className="card-text">{body}</p>
      
      
    </div>
  );
}

Notes.propTypes = {
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
};

export default Notes; 