import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { Container, Draggable } from 'react-smooth-dnd';

class ChessBoard extends Component {
	constructor() {
		super();
		this.onDrop = this.onDrop.bind(this);
		this.shouldAcceptDrop = this.shouldAcceptDrop.bind(this);
		this.renderPiece = this.renderPiece.bind(this);
		this.sofaLength = this.sofaLength.bind(this);
		this.handleMouseMove = this.handleMouseMove.bind(this);
		this.newCapacity = 5;
		this.withing = this.newCapacity * 100;
		this.prevSofa = [];
		this.temporary = [];
		this.activeSectionSize = null;
		this.dragging = false

		this.state = {
			board: [
				[
					{ side: "black", data: '01', size: 2, id: 'black-0-0', model: 'model-1' },
					{ side: "black", data: '02', size: 2, id: 'black-0-1', model: 'model-2' },
					{ side: "black", data: '03', size: 2, id: 'black-0-2', model: 'model-3' },
					{ side: "black", data: '04', size: 2, id: 'black-0-3', model: 'model-4' },
				],
				[
					{ side: "black", data: '11', size: 1, id: 'black-1-0', model: 'model-1' },
					{ side: "black", data: '12', size: 1, id: 'black-1-1', model: 'model-2' },
					{ side: "black", data: '13', size: 1, id: 'black-1-2', model: 'model-3' },
					{ side: "black", data: '14', size: 1, id: 'black-1-3', model: 'model-4' },
				],
				this.sofaLength(this.newCapacity)
			],
			x: 0,
			colonka: null
		}
	}

	sofaLength(n) {
		const arr = [];
		for (var i = 0; i < n; i++) {
			arr.push({ data: i, size: 1, side: "white", id: `white-2-${i}` })
		}
		return arr
	}
	renderPiece(piece, rowIndex, colIndex, colonka) {

		const makeClass = () => {
			if (rowIndex === 2 && this.dragging) {

				if (this.activeSectionSize === 1 && colonka !== null && this.state.board[2][colonka].size === 2) {
					// console.log('one')
					if (-1 <= this.state.x && this.state.x < 100) {
						// console.log('left')
						return (colonka !== colIndex) ? `piece ${piece.model}` : `piece ${piece.model} onSquareHalfRight`
					} else {
						// console.log('right')
						return (colonka !== colIndex) ? `piece ${piece.model}` : `piece ${piece.model} onSquareHalfLeft`
					}
				}
				if (this.activeSectionSize === 1) {
					// console.log('two')
					return (colonka !== colIndex) ? `piece ${piece.model}` : `piece ${piece.model} onSquare`
				}
				if (this.activeSectionSize === 2 && colonka !== null && colonka < this.state.board[2].length - 1 && this.state.board[2][colonka].size === 1 && this.state.board[2][colonka + 1].size === 2) {
					// console.log('three')
					if (colonka === colIndex) {
						return `piece ${piece.model} onSquare`
					} else if ((colonka + 1 === colIndex)) {
						return `piece ${piece.model} onSquareHalfRight`
					} else {
						return `piece ${piece.model}`
					}
				}
				if (colonka !== null && this.activeSectionSize === 2 && this.state.board[2][colonka].size === 2 && this.state.x > 100 && this.state.board[2][colonka] && colonka !== this.state.board[2].length - 1) {

					if (this.state.board[2][colonka + 1] && this.state.board[2][colonka + 1].size === 2) {
						if (colonka + 1 === colIndex) {
							return `piece ${piece.model} onSquareHalfRight`
						} else if ((colonka === colIndex)) {
							return `piece ${piece.model} onSquareHalfLeft`
						} else { return `piece ${piece.model}` }
					} else {
						if (colonka + 1 === colIndex) {
							return `piece ${piece.model} onSquare`
						} else if ((colonka === colIndex)) {
							return `piece ${piece.model} onSquareHalfLeft`
						} else { return `piece ${piece.model}` }
					}

				}
				// console.log('one')
				if (colonka !== null && this.state.board[2][colonka].size === 2) {
					// console.log('four')
					return (colonka !== colIndex) && (colonka !== colIndex) ? `piece ${piece.model}` : `piece ${piece.model} onSquare`
				}
				if (this.activeSectionSize === 2 && colonka === this.state.board[2].length - 1 && this.state.board[2][colonka - 1].size === 2) {
					// console.log('five')
					if (colonka === colIndex) {
						return `piece ${piece.model} onSquare`
					} else if ((colonka - 1 === colIndex)) {
						return `piece ${piece.model} onSquareHalfLeft`
					} else {
						return `piece ${piece.model}`
					}

				}
				if (this.activeSectionSize === 2 && colonka === this.state.board[2].length - 1) {
					// console.log('six')
					return (colonka !== colIndex) && (colonka !== colIndex + 1) ? `piece ${piece.model}` : `piece ${piece.model} onSquare`
				} else {
					// console.log('seven')
					return (colonka !== colIndex) && (colonka !== colIndex - 1) ? `piece ${piece.model}` : `piece ${piece.model} onSquare`
				}

			} else {
				return `piece ${piece.model}`
			}
		}

		return (
			<Draggable>
				<div className={makeClass()} >
					{/* <span>{piece.data}</span> */}
				</div>
			</Draggable>
		);

	}

	render() {
		// console.log('mouse_-------->', this.state.x)

		// console.log('sofa', this.state.board[2])
		return (
			< >

				{this.state.board.map((row, rowIndex) => {
					if (rowIndex === 2) {
						return (

							<div
								onMouseMove={this.handleMouseMove}
								className="row3"
								style={{ width: this.withing }}
								key={row + "-" + rowIndex}>
									<div className="underCube">
									<div className='cube' style={{ width: this.withing }}>
										<div className="left"></div>
										<div className="right"></div>
										<div className="top" style={{ width: this.withing }}></div>
										<div className={this.dragging ? 'bottom bottom-hover' : 'bottom'}
										style={{ width: this.withing }}></div>
									</div>
								</div>
								{row.map((piece, colIndex) => {
									return (
										<div className='squareRow3 ' style={{ width: 100 * piece.size }} key={`${rowIndex}${colIndex}`}>
											<Container
												dragClass="nothing"
												dropClass="dropping"
												style={{ height: '100%' }}
												behaviour="drop-zone"
												onDrop={(result) => this.onDrop(result, rowIndex, colIndex)}
												getChildPayload={() => ({ colIndex, rowIndex, piece })}
												// dropPlaceholder={{
												// 	animationDuration: 150,
												// 	showOnTop: true,
												// 	className: 'cards-drop-preview'
												// }}
												// animationDuration={1000}
												onDragEnd={() => this.onDragEnd(rowIndex, colIndex)}
												onDragEnter={() => this.onDragEnter(rowIndex, colIndex)}
												onDropReady={(result) => this.onDropReady(result)}
												shouldAcceptDrop={(_, payload) => this.shouldAcceptDrop(payload, rowIndex, colIndex)}
											>
												{this.renderPiece(piece, rowIndex, colIndex, this.state.colonka)}
											</Container>
										</div>
									);
								})}
							</div>

						);
					}
					if (rowIndex === 1) {
						return (
							<div className="row2" key={rowIndex}>
								{row.map((piece, colIndex) => {
									return (
										<div className={`squareRow2 ${(rowIndex + colIndex) % 2 === 0 ? 'white' : 'black'}`}
											key={`${rowIndex}${colIndex}`}>
											<Container
												dragClass="dragging"
												style={{ height: '100%' }}
												behaviour="move"
												onDrop={(result) => this.onDrop(result, rowIndex, colIndex)}
												shouldAcceptDrop={(_, payload) => this.shouldAcceptDrop(payload, rowIndex, colIndex)}
												getChildPayload={() => ({ colIndex, rowIndex, piece })}
											>
												{this.renderPiece(piece)}
											</Container>
										</div>
									);
								})}
							</div>
						);
					}

					return (
						<>
							<div className="row" key={rowIndex}>
								{row.map((piece, colIndex) => {

									return (
										<div className={`square`}
											key={`${rowIndex}${colIndex}`}>
											<Container
												dragClass="dragging"

												style={{ height: '100%' }}
												behaviour="move"
												onDrop={(result) => this.onDrop(result, rowIndex, colIndex)}
												// onDropReady={(result) => this.onDropReady(result)}
												shouldAcceptDrop={(_, payload) => this.shouldAcceptDrop(payload, rowIndex, colIndex)}
												getChildPayload={() => ({ colIndex, rowIndex, piece })}
											>
												{this.renderPiece(piece)}
											</Container>
										</div>
									);
								})}
							</div>
						</>
					);
				})}
			</>
		);
	}
	handleMouseMove(event) {
		// console.log(event.nativeEvent)
		this.setState({
			x: event.nativeEvent.offsetX
		});
	}


	onDragEnter(rowIndex, colIndex) {
		// console.log('colIndex', colIndex)
		this.setState({ colonka: colIndex });
		this.dragging = true
	}

	onDragEnd(rowIndex, colIndex) {
		this.dragging = false
		this.forceUpdate()
	}

	shouldAcceptDrop(payload, rowIndex, colIndex) {
		const { colIndex: fromCol, rowIndex: fromRow } = payload;
		const fromPiece = this.state.board[fromRow][fromCol];
		const piece = this.state.board[rowIndex][colIndex];

		if (fromPiece === piece) return true;
		if (fromPiece.side === piece.side) return false;
		if ((fromPiece.side === 'white') && (piece.side === 'black')) return false;
		// if ((fromPiece.side === 'white') && (piece.side === 'white')) return true;


		return true;
	}

	onDropReady(result) {
		this.prevSofa = Object.assign([], this.state.board[2]);
		this.activeSectionSize = result.payload.piece.size;

	}


	onDrop(dropResult, rowIndex, colIndex) {
		const { addedIndex, removedIndex, payload } = dropResult;
		const sofa = this.state.board[2]
		const newEmptySection = { data: 0, size: 1, side: "white" };
		// console.log(addedIndex)
		// console.log(removedIndex)
		if (addedIndex !== null || removedIndex !== null) {
			const copyItem = Object.assign({}, payload.piece);
			this.state.board[rowIndex][colIndex] = {};
			// this.state.board[rowIndex][colIndex] = copyItem;
			this.setState(state => {
				return state.board[rowIndex][colIndex] = copyItem;
				// return { ...state };
			});
		}
		// console.log(this.prevSofa)
		// console.log(this.state.board[2])
		this.temporary = Object.assign([], this.state.board[2]);


		// if (addedIndex === null && removedIndex === 0 && rowIndex === 2) {

		// 	(payload.piece.size === 2) ? sofa.splice(colIndex, 1, newEmptySection, newEmptySection) : sofa.splice(colIndex, 1, newEmptySection);
		// 	// this.forceUpdate()
		// } // удаляем вынося за шкаф
		// console.log('sofa', sofa)

		if (addedIndex !== null && removedIndex === null) {
			if (dropResult.payload.piece.side === 'white') {

				console.log('drop', sofa)

				const arrNew = this.prevSofa.map((sof, i) => {
					// if (payload.piece.id !== this.state.board[2][payload.colIndex].id){


					if (i === this.state.colonka) {
						console.log('-----*start*-----')
						console.log('this.prevSofa', this.prevSofa)

						console.log('i === this.state.colonka', i === this.state.colonka, 'this.state.colonka =', this.state.colonka)
						console.log(payload.piece)
						console.log('-----*end*-----')

						return sof = payload.piece
					}

				else 	if (i === payload.colIndex) {
					console.log('ono-----')
						console.log('this.prevSofa', this.prevSofa)

						console.log('i === payload.colIndex -->', i === payload.colIndex, 'payload.colIndex =', payload.colIndex)
						console.log(this.prevSofa[this.state.colonka])

						return sof = this.prevSofa[this.state.colonka]
					} else {
						return sof

					}
					//  }
				})

				console.log('arrNew', arrNew)
				arrNew.splice(payload.colIndex , 1, {});
				console.log('arrNew', arrNew)

				// [arr[payload.colIndex], arr[this.state.colonka]] = [arr[this.state.colonka], arr[payload.colIndex]];
				// const result = [...arr];

				// console.log(payload.colIndex) 
				// console.log(this.state.colonka)
				// console.log(arr)
				// let itemToAdd = payload;

				// if (removedIndex !== null) {
				// 	console.log('ee')
				// 	itemToAdd = result.splice(removedIndex, 1)[0];
				// }

				// if (addedIndex !== null) {
				// 	result.splice(addedIndex, 0, itemToAdd);
				// }


				return this.setState(prevState => ({
					board: prevState.board.map(
						(item, i) => (i === 2 ? arrNew : item)
					)
				}));

			}

			if (payload.piece.size === 2 && this.prevSofa[colIndex].size === 1 && colIndex < this.prevSofa.length - 1) {
				sofa.splice(colIndex + 1, 1);
				console.log('two')
			}
			if (payload.piece.size === 2 && this.prevSofa[colIndex].size === 2 && this.state.x > 100) {

				if (this.state.board[2][colIndex + 1] && this.prevSofa[colIndex + 1].size === 2) {
					console.log('klac')
					sofa.splice(colIndex, 0, newEmptySection);
					sofa.splice(colIndex + 2, 1, newEmptySection);
				} else {
					console.log('ono')
					sofa.splice(colIndex, 0, newEmptySection);
					sofa.splice(colIndex + 2, 1);

				}
			}

			if (payload.piece.size === 1 && this.prevSofa[colIndex].size === 2) { // замена 2 на 1 и 1
				if (this.state.x < 100) {
					sofa.splice(colIndex + 1, 0, newEmptySection);
				} else {
					console.log('one')

					sofa.splice(colIndex, 0, newEmptySection);
				}
			}
			if (this.newCapacity > 3) {
				if (payload.piece.size === 2 && this.prevSofa[colIndex].size === 1 && colIndex === this.prevSofa.length - 1) {
					if (this.prevSofa[colIndex - 1].size === 2) {
						sofa.splice(colIndex - 1, 1, newEmptySection);
					} else {
						sofa.splice(colIndex - 1, 1);
					}
				}
				if (payload.piece.size === 2 && this.prevSofa[colIndex].size === 1 && colIndex < this.prevSofa.length - 1 && this.prevSofa[colIndex + 1].size === 2) {
					sofa.splice(colIndex + 1, 0, newEmptySection);
				}
			}

			if (this.newCapacity === 3) {
				if (payload.piece.size === 2 && this.prevSofa[colIndex].size === 1 && colIndex === this.prevSofa.length - 1 && this.prevSofa[colIndex - 1].size === 1) {
					sofa.splice(colIndex - 1, 1);
				}
				if (payload.piece.size === 2 && this.prevSofa[colIndex].size === 1 && colIndex === this.prevSofa.length - 1 && this.prevSofa[colIndex - 1].size === 2) {
					sofa.splice(colIndex - 1, 1, newEmptySection);
				}
				if (payload.piece.size === 2 && this.prevSofa[colIndex].size === 1 && colIndex === 0 && this.prevSofa[colIndex + 1].size === 2) {
					sofa.splice(colIndex + 1, 0, newEmptySection);
				}

			}


			this.setState(state => {
				state.colonka = null
				const row = this.state.board[2].map((section, i) => {
					section.side = 'white'
					return section
				})

				return { ...state, row };
			});
		}
	}

	componentDidUpdate(prevProps, prevState) {
		this.newCapacity = this.state.board[2].reduce((sum, el) => sum + el.size, 0)
		// console.log(this.state.board[2])

	}

}


// ChessBoard.propTypes = {
// };

export default ChessBoard;