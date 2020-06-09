import React, { Component } from 'react'

export default class Lines extends Component {

	func() {
		for (let i = 0; i < 5; i++) {
			return (
				<>

				</>
			)
		}
	}


	render() {
		return (
			<div style={{ margin: 300 }}>
				<div className="gridWrapper" style={{ width: 500 }}>
					<div className="grid">
						
					<div style={{ width: 100, height: 200 }} >
							<div className="sectionLeft" style={{ width: 200, height: 200 }} ></div>
							<div className="sectionRight" style={{ width: 200, height: 200 }} ></div>

						</div>
						<div style={{ width: 100, height: 200 }} >
							<div className="sectionLeft" style={{ width: 200, height: 200 }} ></div>
							<div className="sectionRight" style={{ width: 200, height: 200 }} ></div>

						</div>
						<div style={{ width: 100, height: 200 }} >
							<div className="sectionLeft" style={{ width: 200, height: 200 }} ></div>
							<div className="sectionRight" style={{ width: 200, height: 200 }} ></div>

						</div>
						<div style={{ width: 100, height: 200 }} >
							<div className="sectionLeft" style={{ width: 200, height: 200 }} ></div>
							<div className="sectionRight" style={{ width: 200, height: 200 }} ></div>

						</div>
						<div style={{ width: 100, height: 200 }} >
							<div className="sectionLeft" style={{ width: 200, height: 200 }} ></div>
							<div className="sectionRight" style={{ width: 200, height: 200 }} ></div>

						</div>

						{/* <div className="sectionLeft" style={{ width: 200, height: 200 }} ></div> */}
						{/* <div style={{ width: 100, height: 200 }} ></div> */}
						{/* <div className="sectionRight" style={{ width: 200, height: 200 }} ></div> */}


					</div>
				</div>
			</div>
		)
	}
}