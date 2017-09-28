import React from 'react';

import ColorsPanel from './ColorsPanel';

export default class NoteEditor extends React.Component {
    constructor() {
        super();

        this.state = {
        	text: '',
			currColor: ''
        };
    }

    handleTextChange(event) {
        this.setState({text: event.target.value});
    }

	handleNoteAdd() {
		if (this.state.text !== '') {
			let newNote = {
				text: this.state.text,
				color: this.state.currColor,
				id: Date.now()
			};
			this.setState({ text: '' });
			this.props.onNoteAdd(newNote);
		}
	}

	handleColorChange(color) {
    	this.setState({currColor: color});
	}

    render() {
        return (
			<div className="note-editor">
				<textarea
					placeholder="Enter your note here..."
					rows={5}
					className="textarea"
					value={this.state.text}
					onChange={this.handleTextChange.bind(this)}
				/>
				
				<ColorsPanel onColorChange={this.handleColorChange.bind(this)}/>
				<button
					className="add-button"
					onClick={this.handleNoteAdd.bind(this)}
				>Add
				</button>		
			</div>
		)
    }
}