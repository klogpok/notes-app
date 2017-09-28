import React, { Component } from 'react';
import './App.css';

import NoteEditor from './components/NoteEditor';
import NotesGrid from './components/NotesGrid';
import NoteSearch from './components/NoteSearch';


class App extends Component {
  constructor() {
    super();

    this.state = { notes: [] };
  }

	componentDidMount() {
		let localNotes = JSON.parse(localStorage.getItem('notes'));
		if (localNotes) {
				this.setState({ notes: localNotes});				
		}
	}

	componentDidUpdate() {
		this.updateLocalStorage();		
	}

	updateLocalStorage() {
		const notes = JSON.stringify(this.state.notes);
		localStorage.setItem('notes', notes);
	}


	handleNoteAdd(newNote) {
		const notes = [...this.state.notes, newNote];
		this.setState({notes: notes});		
	}

	handleNoteDelete(note) {
		let noteId = note.id;
		const newNotes = this.state.notes.filter((note) => {
			return note.id !== noteId;
		});
		this.setState({ notes: newNotes});
	}

	handleNotesSearch() {

	}

  render() {

    return (
      <div className="notes-app">
        <h2 className="app-header">NotesApp</h2>
        <NoteEditor
						onNoteAdd={this.handleNoteAdd.bind(this)}
        />
				<NoteSearch />
        <NotesGrid notes={this.state.notes} onNoteDelete={this.handleNoteDelete.bind(this)} ref="grid"/>
      </div>
    );
  }
}

export default App;
