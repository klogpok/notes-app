import React from 'react';

export default class NoteSearch extends React.Component {
    constructor() {
        super();

        this.state ={};
    }

    render() {
        return (
            <input className="note-search"
                type="text"
                placeholder="Search note..."
            />
        );
    }
}