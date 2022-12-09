import React from "react";
import PropTypes from 'prop-types';
import { showFormattedDate } from '../utils/network-data';

function NoteArt({ createdAt, body }) {
    return (
        <div className="item-note__body">
            <p className="item-note__date">{showFormattedDate(createdAt)}</p>
            <p className="item-note__notes">{body}</p>
        </div>
    );
}

NoteArt.prototypes = {
    createdAt: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
}

export default NoteArt;