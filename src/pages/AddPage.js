import React from 'react';
import { addNote } from '../utils/network-data';
import NoteAdd from '../components/NoteAdd';
import { useNavigate } from 'react-router-dom';
import { LocaleConsumer } from '../contexts/LocaleContext';

function AddPage() {
    const navigate = useNavigate()

    async function onAddNoteHandler(notes) {
        await addNote(notes);
        navigate('/');
    }

    return (
        <LocaleConsumer>
            {
                ({ locale }) => {
                    return (
                        <section>
                            <div className='tambah'>
                                <h2>{locale === 'id' ? 'Tambah Catatan' : 'Add Note'}</h2>
                                <NoteAdd addNote={onAddNoteHandler} />
                            </div>
                        </section>
                    )
                }
            }
        </LocaleConsumer>

    )
}

export default AddPage;
