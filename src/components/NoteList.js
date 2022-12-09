import React from "react";
import NoteItem from "./NoteItem";
import PropTypes from 'prop-types'

function NoteList({ notes, onDelete }) {
  if (notes.length) {
    return (
      <div className="notes-list">
        {notes.map((list) => ( <NoteItem key={list.id} {...list} onDelete={onDelete} />))}
      </div>
    );
  } 
  else {
    return <div className = "tidak"><p>Catatan Tidak Ada</p></div>;
  }
}
NoteList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDelete: PropTypes.func.isRequired,
}

export default NoteList;
