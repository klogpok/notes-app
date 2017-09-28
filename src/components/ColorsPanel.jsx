import React from 'react';

export default class ColorsPanel extends React.Component {
	constructor() {
		super();

		this.state = {
			colors: [
				{ color: 'yellow'},
				{ color: 'orange'},
				{ color: 'red'},
				{ color: 'green'},
				{ color: 'blue'},
				{ color: 'purple'},
				{ color: 'violet'},
			],
			checkedColor: 'yellow'
		}
	}

	handleColorChange(event) {
		this.setState({ checkedColor: event.target.value});
		this.props.onColorChange(event.target.value);
	}

	render() {

		const colors = this.state.colors.map( (color, index) => {
			let style = {backgroundColor: color.color };

			return (
				<div key={index} className="colors-panel-item">
					<input
						name="color"
						type="radio"
						id={color.color}
						value={color.color}
						checked={this.state.checkedColor === color.color}
						onChange={this.handleColorChange.bind(this)}
					/>
					<label style={style} htmlFor = {color.color} />
				</div>
			)
		});

		return (
			<div className="colors-panel">
				{colors}
			</div>
		);
	}
}