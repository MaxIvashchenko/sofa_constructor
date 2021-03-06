import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { Container, Draggable } from 'react-smooth-dnd';
import "./Stage2.css"
import ModuleTabChange from './ModuleTabChange';
import InfoTab from './InfoTab';

class Stage2 extends Component {
	constructor(props) {
		super(props);
		this.onDrop = this.onDrop.bind(this);
		this.shouldAcceptDrop = this.shouldAcceptDrop.bind(this);
		this.renderPiece = this.renderPiece.bind(this);
		this.handleMouseMove = this.handleMouseMove.bind(this);
		this.handler = this.handler.bind(this);
		this.onDragStart = this.onDragStart.bind(this);
		this.changeModule = this.changeModule.bind(this);

		this.newCapacity = this.props.capacity;
		this.pieceWidth = this.props.pieceWidth;
		this.pieceHeight = this.props.sofaHeight;
		this.withing = this.props.sofaWidth;
		this.pieceDeep = this.props.sofaDeep;
		this.zoom = this.props.zoom;

		this.totalPrice = null;

		this.prevSofa = [];
		this.activeSectionSize = null;
		this.dragging = false
		this.dragOverSofa = false


		this.state = {
			board: [
				[
					{ side: "black", size: 2, id: 'black-0-0', model: 'model-1', empty: false, price: 200 },
					{ side: "black", size: 2, id: 'black-0-1', model: 'model-2', empty: false, price: 210 },
					{ side: "black", size: 2, id: 'black-0-2', model: 'model-3', empty: false, price: 220 },
					{ side: "black", size: 2, id: 'black-0-3', model: 'model-4', empty: false, price: 230 },
				],
				[
					{ side: "black", size: 1, id: 'black-1-0', model: 'model-1', empty: false, price: 100 },
					{ side: "black", size: 1, id: 'black-1-1', model: 'model-2', empty: false, price: 110 },
					{ side: "black", size: 1, id: 'black-1-2', model: 'model-3', empty: false, price: 120 },
					{ side: "black", size: 1, id: 'black-1-3', model: 'model-4', empty: false, price: 130 },
				],
				this.props.sofa
			],
			x: 0,
			colonka: null,
			showSingleModules: true,
		}
	}


	renderPiece(piece, rowIndex, colIndex, colonka) {
		const makeClass = () => {
			if (rowIndex === 2 && this.dragging) {

				if (this.activeSectionSize === 1 && colonka !== null && this.state.board[2][colonka].size === 2) {
					if (-1 <= this.state.x && this.state.x < this.pieceWidth) {
						return (colonka !== colIndex) ? `piece ${piece.model}` : `piece ${piece.model} onSquareHalfRight`
					} else {
						return (colonka !== colIndex) ? `piece ${piece.model}` : `piece ${piece.model} onSquareHalfLeft`
					}
				}
				if (this.activeSectionSize === 1) {
					return (colonka !== colIndex) ? `piece ${piece.model}` : `piece ${piece.model} onSquare`
				}
				if (this.activeSectionSize === 2 && colonka !== null && colonka < this.state.board[2].length - 1 && this.state.board[2][colonka].size === 1 && this.state.board[2][colonka + 1].size === 2) {
					if (colonka === colIndex) {
						return `piece ${piece.model} onSquare`
					} else if ((colonka + 1 === colIndex)) {
						return `piece ${piece.model} onSquareHalfRight`
					} else {
						return `piece ${piece.model}`
					}
				}
				if (colonka !== null && this.activeSectionSize === 2 && this.state.board[2][colonka].size === 2 && this.state.x > this.pieceWidth && this.state.board[2][colonka] && colonka !== this.state.board[2].length - 1) {

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

				if (colonka !== null && this.state.board[2][colonka].size === 2) {
					return (colonka !== colIndex) && (colonka !== colIndex) ? `piece ${piece.model}` : `piece ${piece.model} onSquare`
				}
				if (this.activeSectionSize === 2 && colonka === this.state.board[2].length - 1 && this.state.board[2][colonka - 1].size === 2) {
					if (colonka === colIndex) {
						return `piece ${piece.model} onSquare`
					} else if ((colonka - 1 === colIndex)) {
						return `piece ${piece.model} onSquareHalfLeft`
					} else {
						return `piece ${piece.model}`
					}

				}
				if (this.activeSectionSize === 2 && colonka === this.state.board[2].length - 1) {
					return (colonka !== colIndex) && (colonka !== colIndex + 1) ? `piece ${piece.model}` : `piece ${piece.model} onSquare`
				} else {
					return (colonka !== colIndex) && (colonka !== colIndex - 1) ? `piece ${piece.model}` : `piece ${piece.model} onSquare`
				}

			} else {
				return `piece ${piece.model}`
			}
		}

		return (
			<Draggable>
				<div className={makeClass()} style={{ width: this.pieceWidth * piece.size, height: this.pieceHeight }}></div>
			</Draggable>
		);
	}
	changeModule() {
		this.setState(state => ({
			showSingleModules: !state.showSingleModules
		}));
	}

	render() {
		// console.log('mouse_-------->', this.state.x)
		// console.log(this.props)
		return (
			<>
				{this.newCapacity > 1 ?
					<ModuleTabChange onclick={this.changeModule} showDoubleModule={this.state.showSingleModules} />
					:
					<div className="chooseModule"><div className={"moduleBtnAtcive"}>Simple modules</div></div>
				}


				{this.state.board.map((row, rowIndex) => {
					if (rowIndex === 2) {
						return (
							<>
								<InfoTab
									width={this.withing / this.zoom}
									height={this.pieceHeight / this.zoom}
									deep={this.pieceDeep / this.zoom}
									capacity={this.newCapacity}
									sofa={this.state.board[2]}
								/>
								<div
									onMouseLeave={this.handler}
									onMouseMove={this.handleMouseMove}
									className="sofaBox"
									style={{ width: this.withing }}
									key={row + "-" + rowIndex}>

									<div className="underSofa" style={{ width: this.withing, height: this.pieceHeight, perspective: 300, overflow: "hidden", padding: 40, top: -40 }}>
										<div className="underSofaSides" style={{ width: this.withing }} >
											{row.map((v, i) => {
												return (
													<div style={{ width: this.pieceWidth * v.size, height: this.pieceHeight }} >
														<div className='dashUnderline' style={{ width: this.pieceWidth, height: this.pieceHeight, top: this.pieceHeight / 2 }} ></div>
														<div className={!v.empty && 'solidUnderline'} style={{ width: this.pieceWidth * v.size, height: this.pieceHeight, top: this.pieceHeight / 2 }} ></div>
													</div>
												)
											})}
										</div>
									</div>
									<div className="sofaConstructor">
										<div className='sofaSides' style={{ width: this.withing }}>
											<div className="back" style={{ height: this.pieceHeight, width: this.withing }}></div>
											<div className="left" style={{ height: this.pieceHeight, width: this.pieceWidth }}></div>
											<div className="right" style={{ height: this.pieceHeight, width: this.pieceWidth }}></div>
											<div className="top" style={{ width: this.withing, height: this.pieceWidth }}></div>
											<div className={this.dragging ? 'bottom bottom-hover' : 'bottom'}
												style={{ width: this.withing, top: this.pieceHeight, height: this.pieceWidth }}></div>
										</div>
									</div>
									<div className="underSofa" style={{ width: this.withing, height: this.pieceHeight }}>
										<div className="underSofaSides" style={{ width: this.withing }} >
											{row.map((v, i) => {
												if (v.empty) {
													return (
														<div style={{ width: this.pieceWidth * v.size, height: this.pieceHeight }} >
															<div className={!v.empty && 'sectionFront'} style={{ width: this.pieceWidth * v.size, height: this.pieceHeight }} ></div>

														</div>
													)
												}
												return (
													<div style={{ width: this.pieceWidth * v.size, height: this.pieceHeight }} >
														<div className={!v.empty && 'sectionFront'} style={{ width: this.pieceWidth * v.size, height: this.pieceHeight }} ></div>
														<div className={!v.empty && 'sectionLeft'} style={{ width: this.pieceWidth, height: this.pieceHeight }} ></div>
														<div className={!v.empty && 'sectionRight'} style={{ width: this.pieceWidth, height: this.pieceHeight }} ></div>
													</div>
												)
											})}
										</div>
									</div>

									{row.map((piece, colIndex) => {
										return (
											<div style={{ width: this.pieceWidth * piece.size }} key={`${rowIndex}${colIndex}`}>
												<Container
													dragClass="nothing"
													style={{ height: '100%' }}
													behaviour="drop-zone"
													onDrop={(result) => this.onDrop(result, rowIndex, colIndex)}
													getChildPayload={() => ({ colIndex, rowIndex, piece })}
													onDragStart={(result) => this.onDragStart(result, rowIndex, colIndex)}
													onDragEnd={() => this.onDragEnd(rowIndex, colIndex)}
													onDragEnter={(result) => this.onDragEnter(result, rowIndex, colIndex)}
													onDropReady={(result) => this.onDropReady(result)}
													shouldAcceptDrop={(_, payload) => this.shouldAcceptDrop(payload, rowIndex, colIndex)}
												>
													{this.renderPiece(piece, rowIndex, colIndex, this.state.colonka)}
												</Container>
											</div>
										);
									})}

								</div>
							</>

						);
					}
					if (rowIndex === 1) {
						return (
							<>
								{this.state.showSingleModules &&
									<div className="singleModuleBox" key={rowIndex}>
										{row.map((piece, colIndex) => {
											return (
												<div className="moduleSection"
													key={`${rowIndex}${colIndex}`}
													style={{ width: this.pieceWidth * piece.size, height: this.pieceHeight }}
												>
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
									</div>}
							</>
						);
					}

					return (
						<>
							{!this.state.showSingleModules &&  <div className="doubleModuleBox" key={rowIndex}>
								{row.map((piece, colIndex) => {

									return (
										<div className="moduleSection"
											style={{ width: this.pieceWidth * piece.size, height: this.pieceHeight }}

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
							</div>}
						</>
					);
				})}


			</>
		);
	}

	handleMouseMove(event) {
		this.setState({
			x: event.nativeEvent.offsetX
		});
	}
	handler(event) {
		const newEmptySection = { side: "white", size: 1, model: 'empty', empty: true, price: 0 }

		if (this.dragOverSofa) {
			if (this.activeSectionSize === 2) {
				this.state.board[2].splice(this.state.colonka, 1, newEmptySection, newEmptySection)
			} else {
				this.state.board[2].splice(this.state.colonka, 1, newEmptySection)
			}
			this.dragOverSofa = false
		}
	}
	onDragStart(result, rowIndex, colIndex) {
		// console.log(result, rowIndex, colIndex)
		if (result.payload.rowIndex === 2) {
			this.dragOverSofa = true
		}
	}

	onDragEnter(result, rowIndex, colIndex) {
		// console.log(rowIndex, colIndex)

		this.setState({ colonka: colIndex });
		this.dragging = true
	}

	onDragEnd(rowIndex, colIndex) {
		this.dragging = false
		this.dragOverSofa = false
		this.props.updateSofa(this.state.board[2])
		this.forceUpdate()
	}

	shouldAcceptDrop(payload, rowIndex, colIndex) {
		const { colIndex: fromCol, rowIndex: fromRow } = payload;
		const fromPiece = this.state.board[fromRow][fromCol];
		const piece = this.state.board[rowIndex][colIndex];

		if (fromPiece === piece) return true;
		if (fromPiece.side === piece.side) return false;
		if ((fromPiece.side === 'white') && (piece.side === 'black')) return false;
		// if ((fromPiece.side === 'white') && (piece.side === 'white')) return false;

		return true;
	}

	onDropReady(result) {
		this.prevSofa = Object.assign([], this.state.board[2]);
		this.activeSectionSize = result.payload.piece.size;
	}


	onDrop(dropResult, rowIndex, colIndex) {
		const { addedIndex, removedIndex, payload } = dropResult;
		const sofa = this.state.board[2]
		const newEmptySection = { side: "white", size: 1, model: 'empty', empty: true, price: 0 }
		this.props.updateSofa(this.state.board[2])

		if (dropResult.payload.piece.side === 'white') {
			return null
		}

		if (addedIndex !== null || removedIndex !== null) {
			const copyItem = Object.assign({}, payload.piece);
			this.state.board[rowIndex][colIndex] = {};
			this.setState(state => {
				return state.board[rowIndex][colIndex] = copyItem;
			});
		}



		// console.log('drop')
		// console.log(dropResult.payload.piece.side)

		if (addedIndex !== null && removedIndex === null) {
			// if (dropResult.payload.piece.side === 'white') {

			// 	console.log('truly', sofa)

			// 	const arrNew = this.prevSofa.map((sof, i) => {
			// 		// if (payload.piece.id !== this.state.board[2][payload.colIndex].id){


			// 		if (i === this.state.colonka) {
			// 			console.log('-----*start*-----')
			// 			console.log('this.prevSofa', this.prevSofa)

			// 			console.log('i === this.state.colonka', i === this.state.colonka, 'this.state.colonka =', this.state.colonka)
			// 			console.log(payload.piece)
			// 			console.log('-----*end*-----')

			// 			return sof = payload.piece
			// 		}

			// 		else if (i === payload.colIndex) {
			// 			console.log('uno-----')
			// 			console.log('this.prevSofa', this.prevSofa)

			// 			console.log('i === payload.colIndex -->', i === payload.colIndex, 'payload.colIndex =', payload.colIndex)
			// 			console.log(this.prevSofa[this.state.colonka])

			// 			return sof = this.prevSofa[this.state.colonka]
			// 		} else {
			// 			return sof

			// 		}
			// 		//  }
			// 	})

			// 	console.log('arrNew', arrNew)
			// 	arrNew.splice(payload.colIndex, 1, {});
			// 	console.log('arrNew', arrNew)

			// 	// [arr[payload.colIndex], arr[this.state.colonka]] = [arr[this.state.colonka], arr[payload.colIndex]];
			// 	// const result = [...arr];

			// 	// console.log(payload.colIndex) 
			// 	// console.log(this.state.colonka)
			// 	// console.log(arr)
			// 	// let itemToAdd = payload;

			// 	// if (removedIndex !== null) {
			// 	// 	console.log('ee')
			// 	// 	itemToAdd = result.splice(removedIndex, 1)[0];
			// 	// }

			// 	// if (addedIndex !== null) {
			// 	// 	result.splice(addedIndex, 0, itemToAdd);
			// 	// }


			// 	return this.setState(prevState => ({
			// 		board: prevState.board.map(
			// 			(item, i) => (i === 2 ? arrNew : item)
			// 		)
			// 	}));

			// }

			if (payload.piece.size === 2 && this.prevSofa[colIndex].size === 1 && colIndex < this.prevSofa.length - 1 && dropResult.payload.piece.side !== 'white') {
				sofa.splice(colIndex + 1, 1);
				console.log('two')
			}
			if (payload.piece.size === 2 && this.prevSofa[colIndex].size === 2 && this.state.x > this.pieceWidth) {
				if (this.state.board[2][colIndex + 1] && this.prevSofa[colIndex + 1].size === 2) {
					console.log('klac')
					sofa.splice(colIndex, 0, newEmptySection);
					sofa.splice(colIndex + 2, 1, newEmptySection);
				}
				else if (colIndex === this.prevSofa.length - 1) { }
				else {
					console.log('ono')
					sofa.splice(colIndex, 0, newEmptySection);
					sofa.splice(colIndex + 2, 1);

				}
			}

			if (payload.piece.size === 1 && this.prevSofa[colIndex].size === 2) { // замена 2 на 1 и 1
				if (this.state.x < this.pieceWidth) {
					console.log('heres')
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
			if (this.state.board[2].reduce((a, b) => a + b.empty, 0) === 1) {
				this.setState({ showSingleModules: true })
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
	componentWillUpdate() {
		this.newCapacity = this.state.board[2].reduce((sum, el) => sum + el.size, 0)
	}
	componentDidUpdate() {
		this.newCapacity = this.state.board[2].reduce((sum, el) => sum + el.size, 0)
	}

}


// ChessBoard.propTypes = {
// };

export default Stage2;