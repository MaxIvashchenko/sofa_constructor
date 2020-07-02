import React, { Component } from 'react'
import Stage2 from '../Stage_2/Stage2';
import "./Stage1.css"
import InputForm from './InputForm';
import InfoTab from '../Stage_2/InfoTab';
import Stage3 from '../Stage_3/Stage3';

export default class MyApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.sofaLength = this.sofaLength.bind(this);
        // this.nextStep = this.nextStep.bind(this);

        this.zoom = 1.5;
        this.capacity = null;
        this.pieceWidth = null;
        this.isSofaEmpty = true;
        this.state = {
            step: 1,
            sofaHeight: null,
            sofaWidth: null,
            sofaDeep: null,
            showStageTwo: false,
            sofa: this.sofaLength(this.capacity),


        };

        this.selectedInner = 5;
        this.selectedOuter = 5;
        this.selectedHandler = 'assy';
        this.totalSum = null;
    }
    sofaLength(n) {
        const arr = [];
        for (var i = 0; i < n; i++) {
            arr.push({ side: "white", size: 1, id: `white-2-${i}`, model: 'empty', empty: true, price: 0 })
        }
        return arr
    }
    makeSections() {
        const array = []
        for (let i = 0; i < this.capacity; i++) {
            array.push(i)
        }

        return (
            <div className="underSofaSides" style={{ width: this.state.sofaWidth, height: this.state.sofaHeight }} >
                {array.map((v, i) => {
                    return (
                        <div key={v + "-" + i} style={{ width: this.pieceWidth, height: this.state.sofaHeight, }} >
                            <div className='dashUnderline' style={{ width: this.pieceWidth, height: this.state.sofaHeight, top: this.state.sofaHeight / 2 }} ></div>
                        </div>
                    )
                })}
            </div>
        )
    }

    handleInputChange(event) {
        const value = +event.target.value * this.zoom;
        const name = event.target.name;
        setTimeout(function () {
            this.setState({ [name]: value, sofa: this.sofaLength(this.capacity) });
        }.bind(this), 700);
    }

    nextStep = (event) => {
        event.preventDefault();

        const { step } = this.state;
        this.setState({
            step: step + 1,
        });
    };

    prevStep = (event) => {
        event.preventDefault();

        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    };

    showStageOne() {
        let calculation = this.state.sofaWidth / 50 / this.zoom;
        this.capacity = (calculation > 100) ? Math.round(calculation) : Math.floor(calculation)
        this.pieceWidth = this.state.sofaWidth / this.capacity;
        this.state.sofa = this.sofaLength(this.capacity)

        return (
            <>
                <div className="room">
                    <InputForm
                        sofaHeight={this.state.sofaHeight}
                        sofaWidth={this.state.sofaWidth}
                        sofaDeep={this.state.sofaDeep}
                        onsubmit={this.nextStep}
                        onchange={this.handleInputChange}
                        zoom={this.zoom}
                    />
                </div>
                <InfoTab
                    width={this.state.sofaWidth / this.zoom}
                    height={this.state.sofaHeight / this.zoom}
                    deep={this.state.sofaDeep / this.zoom}
                    capacity={this.capacity}
                />
                <div style={{ padding: 50, }}>
                    <div style={{ margin: 'auto', position: "relative", width: this.state.sofaWidth, height: this.state.sofaHeight, perspective: 200, overflow: "hidden" }}>
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
    updateSofa = (value) => this.setState({ sofa: value })


    updateDesign = (a, b, c, total) => {

        this.selectedInner = a;
        this.selectedOuter = b;
        this.selectedHandler = c;
        this.totalSum = total;

    }

    render() {
        this.isSofaEmpty = this.state.sofa.some(a => a.empty === true)

        switch (this.state.step) {
            case 1:
                return this.showStageOne()
            case 2:
                return (
                    <>
                        <Stage2
                            capacity={this.capacity}
                            pieceWidth={this.pieceWidth}
                            sofaHeight={this.state.sofaHeight}
                            sofaWidth={this.state.sofaWidth}
                            sofaDeep={this.state.sofaDeep}
                            updateSofa={this.updateSofa}
                            sofa={this.state.sofa}
                            zoom={this.zoom}
                        />

                        <div className="btnPos">
                            <button className="btnIn" style={styles.btn} onClick={this.prevStep}>Prev Stage</button>
                            <button className="btnIn" style={styles.btn} onClick={this.nextStep} disabled={this.isSofaEmpty}>Next Stage</button>
                        </div>
                    </>
                );
            case 3:
                return (
                    <>
                        <Stage3
                            pieceWidth={this.pieceWidth}
                            sofaHeight={this.state.sofaHeight}
                            sofaWidth={this.state.sofaWidth}
                            capacity={this.capacity}
                            sofa={this.state.sofa}
                            zoom={this.zoom}
                            updateDesign={this.updateDesign}
                            inner={this.selectedInner}
                            outer={this.selectedOuter}
                            handler={this.selectedHandler}
                        />

                        <div className="btnPos">
                            <button className="btnIn" style={styles.btn} onClick={this.prevStep}>Prev Stage</button>
                            <button className="btnIn" style={styles.btn} onClick={this.nextStep} >Send</button>
                        </div>
                    </>
                );
            case 4:
                return (
                    <>
                        <div style={{ textAlign: "center" }}>
                            <h1>Congratulation, your order is complete</h1>
                            <h1>TOATL SUM TO PAY {this.totalSum} €</h1>
                            <button className="btnIn" style={styles.btn} onClick={this.prevStep}>GO TO STAGE 1</button>
                        </div>
                    </>
                );
            default:
                (console.log('This is a multi-step form built with React.'))
        }
    }
}



const styles = {
    btn: {
        backgroundColor: "#fd4f7d",
        width: 120,
    }
}