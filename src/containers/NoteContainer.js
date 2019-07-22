import React from 'react';
import { Link } from 'react-router-dom';

import NotFoundPage from '../pages/NotFoundPage';
import NoteDetails from '../components/NoteDetails';
import { GrayButton } from '../styles/buttons';

const NotesContainer = ({ data: { note } }) => {
    if (!note) return <NotFoundPage />;

    return (
        <>
            <Link to="/">
                <GrayButton left>Back</GrayButton>
            </Link>
            <Link to={`/edit/${note.id}`}>
                <GrayButton green>Edit</GrayButton>
            </Link>
            <NoteDetails {...note} />
        </>
    );
};

export default NotesContainer;
