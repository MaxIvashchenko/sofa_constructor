import React, { Component } from 'react'
import Stage2 from '../Stage_2/Stage2';
import "./Stage1.css"
import InputForm from './InputForm';

export default class Stage1 extends React.Component {
    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.capacity = 8;
        this.pieceWidth = 50;
        this.state = {
            sofaHeight: 300,
            sofaWidth: 400,
            sofaDeep: 50,
            showStageTwo: false,
        };

    }
    componentDidUpdate() {
        const calculation = this.state.sofaWidth / 50;
        this.capacity = (calculation > 100) ? Math.round(calculation) : Math.floor(calculation)
        this.pieceWidth = this.state.sofaWidth / this.capacity;
    }
    makeSections() {

        const array = []
        for (let i = 0; i < this.capacity; i++) {
            array.push(i)
        }


        return (

            <div className="grid" style={{ width: this.state.sofaWidth, height: this.state.sofaHeight }} >
                {array.map(v => {
                    return (
                        <div style={{ width: this.pieceWidth, height: this.state.sofaHeight }} >
                            <div className='dashUnderline' style={{ width: this.pieceWidth, height: this.state.sofaHeight, top: this.state.sofaHeight / 2 }} ></div>
                        </div>
                    )
                })}
            </div>

        )
    }

    handleInputChange(event) {
        const value = +event.target.value;
        const name = event.target.name;

        setTimeout(function () {
            this.setState({ [name]: value });
        }.bind(this), 700);
    }


    handleSubmit(event) {
        event.preventDefault();
        this.setState({ showStageTwo: true });
    }


    showStageOne() {
        console.log(this.pieceWidth)
        return (
            <>
                <InputForm onsubmit={this.handleSubmit} onchange={this.handleInputChange} />

                <div style={{ padding: 50, overflow: "hidden" }}>
                    <div  style={{ margin: 'auto', position: "relative", width: this.state.sofaWidth, height: this.state.sofaHeight, perspective: 200 }}>


                        <div className="left" style={{ height: this.state.sofaHeight, width: this.state.sofaDeep }}></div>
                        <div className="right" style={{ height: this.state.sofaHeight, width: this.state.sofaDeep }}></div>
                        <div className="top" style={{ width: this.state.sofaWidth, height: this.state.sofaDeep }}></div>
                        <div className="bottom" style={{ width: this.state.sofaWidth, top: this.state.sofaHeight, height: this.state.sofaDeep }}></div>
                        {this.makeSections()}
                    </div>
                </div>
            </>
        )
    }

    render() {
        return (
            <>
                {!this.state.showStageTwo && this.showStageOne()}
               
                {this.state.showStageTwo && 
                <Stage2 
                capacity={this.capacity} 
                pieceWidth={this.pieceWidth} 
                sofaHeight={this.state.sofaHeight}
                sofaWidth={this.state.sofaWidth}
                sofaDeep={this.state.sofaDeep}
                
                />
                
                
                }

            </>
        )
    }


}
