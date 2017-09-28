import React from 'react';
import Masonry from 'react-masonry-component';

import Note from './Note';

export default class NotesGrid extends React.Component {
    constructor() {
        super();

        this.state = {};
    }

    render() {
        let onNoteDelete = this.props.onNoteDelete;        

        const notes = this.props.notes.map( (note, index) => {
            return (
                <Note
                    key={index}
                    color={note.color}
                    text={note.text}
                    onNoteDelete = {onNoteDelete.bind(null, note)}
                />
            )
        });

        return (
            <Masonry
                className={'notes-grid'} 
                elementType={'div'}
                disableImagesLoaded={false} 
                updateOnEachImageLoad={false}
            >
                {notes}
            </Masonry>           
        );
    }
}