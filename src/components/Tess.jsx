import React, { Component } from 'react';
import { Container, Draggable } from 'react-smooth-dnd';


class LockAxis extends Component {
	constructor() {
		super();
		this.state = {
			items: [
				[
					{ type: 'rook', side: "black", data: '01', stylish: 'double', size: 2, id: 'black-0-0', model: 'model-1' },
					{ type: 'knight', side: "black", data: '02', stylish: 'double', size: 2, id: 'black-0-1', model: 'model-2' },
					{ type: 'bishop', side: "black", data: '03', stylish: 'double', size: 2, id: 'black-0-2', model: 'model-3' },
					{ type: 'queen', side: "black", data: '04', stylish: 'double', size: 2, id: 'black-0-3', model: 'model-4' },
				], [
					{ type: 'rook', side: "black", data: '01', stylish: 'double', size: 2, id: 'black-0-0', model: 'model-1' },
					{ type: 'knight', side: "black", data: '02', stylish: 'double', size: 2, id: 'black-0-1', model: 'model-2' },
					{ type: 'bishop', side: "black", data: '03', stylish: 'double', size: 2, id: 'black-0-2', model: 'model-3' },
					{ type: 'queen', side: "black", data: '04', stylish: 'double', size: 2, id: 'black-0-3', model: 'model-4' },
				]
			]
		};
	}
	applyDrag = (arr, dragResult) => {
		const { removedIndex, addedIndex, payload } = dragResult;
		if (removedIndex === null && addedIndex === null) return arr;

		const result = [...arr];
		let itemToAdd = payload;

		if (removedIndex !== null) {
			itemToAdd = result.splice(removedIndex, 1)[0];
		}

		if (addedIndex !== null) {
			result.splice(addedIndex, 0, itemToAdd);
		}

		return result;
	};
	onDrop(e) {

		
		



		 }
	render() {
		// console.log(this.state.items[1])

		return (
			<div>
				<div className="simple-page">
					<Container 
						onDrop={e => this.onDrop(e)}
					>
						{this.state.items[1].map(p => {
							return (
								<Draggable key={p.id}>
									<div className="draggable-item">
										{p.data}
									</div>
								</Draggable>
							);
						})}
					</Container>
				</div>
			</div>
		);
	}
}

export default LockAxis;