import React from "react";
import PropTypes from 'prop-types';
import NoteArt from "./NoteArt";
import { Link } from "react-router-dom";
import TombolDelete from './TombolDelete';

function NoteItem({ id, title, createdAt, body, onDelete }) {
    return (
        <div className="note-item" key={id}>
            <Link to={`/notes/${id}`}>{title}</Link>
            <NoteArt createdAt={createdAt} body={body} />
            <TombolDelete id={id} onDelete={onDelete} />
        </div>
    );
}

NoteItem.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired,
}

export default NoteItem;