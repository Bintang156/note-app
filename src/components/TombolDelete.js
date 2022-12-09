import React from 'react';
import PropTypes from 'prop-types'

function TombolDelete({ id, onDelete }) {
  return <button className='btn-delete' onClick={() => onDelete(id)}>Hapus</button>
}

TombolDelete.propTypes = {
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
}
export default TombolDelete;