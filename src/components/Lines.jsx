import React, { Component } from 'react'

export default class Lines extends Component {
    render() {
        return (
            <div>
                <div class="gridWrapper" style={{  width: 500 }}>
					<div class="grid">
						<div style={{ width: 100, height: 200 }}></div>
						<div style={{ width: 100, height: 200 }}></div>
						<div style={{ width: 100, height: 200 }}></div>
						<div style={{ width: 100, height: 200 }}></div>
						<div style={{ width: 100, height: 200 }}></div>
					</div>
				</div>
            </div>
        )
    }
}