import React, { Component } from 'react'
import Stage2 from './Stage2';

export default class Stage1 extends React.Component {
    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.capacity = 0;

        this.state = {
            sofaHeight: 300,
            sofaWIdth: 400,
            sofaDeep: 50,
            showStageTwo: false,
        };

    }
    componentDidUpdate() {
        const calculation = this.state.sofaWIdth / 50;
        this.capacity = (calculation > 100) ? Math.round(calculation) : Math.floor(calculation)

    }
    initCapac() {
        const calculation = this.state.sofaWIdth / 50;
        const result = (calculation > 100) ? Math.round(calculation) : Math.floor(calculation)
        return result
    }

    handleInputChange(event) {
        let regexpHeight = /^(1\d{2})|270$/;


        const target = event.target;
        const value = +target.value;
        const name = target.name;
        // value = value.replace(regexp, '');

        setTimeout(function () {
            this.setState({ [name]: value });
        }.bind(this), 700);
    }



    handleSubmit(event) {
        event.preventDefault();
        this.setState({ showStageTwo: true });
    }


    showStageOne() {
        // console.log(this.capacity)
        return (
            <>

                <form className='form' onSubmit={this.handleSubmit}>
                    <label>Height:
                    {/* 100-270 */}
                        <input name="sofaHeight" onChange={this.handleInputChange} required /> cm.
                    </label>
                    <label>Width:
                    {/* 50-550 */}
                        <input name="sofaWIdth" onChange={this.handleInputChange} required /> cm.
                    </label>
                    <label>Deep:
                    {/* 25-75 */}
                        <input name="sofaDeep" onChange={this.handleInputChange} required /> cm.
                    </label>
                    <input type="submit" value="Отправить" />
                </form>
                <div className='cube' style={{ margin: 'auto', width: this.state.sofaWIdth, height: this.state.sofaHeight }}>
                    <div className="left" style={{ height: this.state.sofaHeight, width: this.state.sofaDeep, }}></div>
                    <div className="right" style={{ height: this.state.sofaHeight, width: this.state.sofaDeep, }}></div>
                    <div className="top" style={{ width: this.state.sofaWIdth, height: this.state.sofaDeep, }}></div>
                    <div className="bottom" style={{ width: this.state.sofaWIdth, top: this.state.sofaHeight, height: this.state.sofaDeep, }}></div>
                </div>

            </>
        )
    }

    render() {
        return (
            <>
                {/* {!this.state.showStageTwo && this.showStageOne()}
                {this.state.showStageTwo &&
                    <>
                        <p>{this.state.sofaHeight}</p>
                        <p>{this.state.sofaWIdth}</p>
                        <p>{this.state.sofaDeep}</p>
                        <p>{this.capacity}</p>
                    </>
                } */}
                     <Stage2 />

            </>
        )
    }


}
