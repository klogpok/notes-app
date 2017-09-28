import React from 'react';

export default class Note extends React.Component {
    constructor() {
        super();

        this.state = {};
    }

    render() {
        let style = { backgroundColor: this.props.color };

        return (
            <div className="note" style={style}>
                <span className="delete-note" onClick={this.props.onNoteDelete}> × </span>
                {this.props.text}
            </div>
        );
    }
}