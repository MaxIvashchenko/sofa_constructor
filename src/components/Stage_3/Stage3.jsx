import React, { useState } from 'react'
import "./Stage3.css"
import { PieChart } from 'react-minimal-pie-chart';
import HandlerButton from './HandlerButton';
import InfoTab from '../Stage_2/InfoTab';
import InfoTabColor from './InfoTabColor';
import ReverseDoor from './ReverseDoor';

// export default function Stage3() {
export default function Stage3({ sofaWidth, sofaHeight, pieceWidth, pieceDeep, capacity, sofa, zoom, updateDesign, inner, outer, handler,updateDoorsDirection }) {
    // const inner = 5;
    // const outer = 5;
    // const handler = 'assy';

    const [door, setDoorState] = useState(false)
    const [selectedInner, setSelectedInner] = useState(inner);
    const [selectedOuter, setSelectedOuter] = useState(outer);
    const [selectedHandler, setSelectedHandler] = useState(handler);
    const palette = [
        { value: 1, color: 'rgb(135, 221, 233)', price: 115 },
        { value: 1, color: 'rgb(233, 207, 135)', price: 120 },
        { value: 1, color: 'rgb(92, 92, 92)', price: 130 },
        { value: 1, color: 'rgb(204, 99, 99)', price: 140 },
        { value: 1, color: 'rgb(143, 119, 119)', price: 155 },
        { value: 1, color: 'rgb(255, 245, 245)', price: 165 },
        { value: 1, color: 'rgb(138, 105, 105)', price: 170 },
    ]

    // const sofa = [
    //     { side: "black", size: 2, id: 'black-1-1', model: 'model-2', empty: false, price: 110 },
    //     { side: "black", size: 1, id: 'black-1-2', model: 'model-3', empty: false, price: 120 },
    //     { side: "black", size: 2, id: 'black-1-1', model: 'model-2', empty: false, price: 110 },
    //     { side: "black", size: 1, id: 'black-1-0', model: 'model-1', empty: false, price: 100 },
    // ]

    // const sofaWidth = 450;
    // const sofaHeight = 300;
    // const pieceWidth = 75;
    // const capacity = 6;
    // const pieceDeep = 75;
    // const zoom = 1.5;

    const doorHandlers = [
        { img: require('../../images/handlers/assy.png'), name: 'assy', price: 20 },
        { img: require('../../images/handlers/square.png'), name: 'square', price: 22 },
        { img: require('../../images/handlers/heli-wit.png'), name: 'heli-wit', price: 24 },
        { img: require('../../images/handlers/heli-zwart.png'), name: 'heli-zwart', price: 26 },
        { img: require('../../images/handlers/hoek.png'), name: 'hoek', price: 28 },
        { img: require('../../images/handlers/lip.png'), name: 'lip', price: 30 },
        { img: require('../../images/handlers/None.png'), name: 'none', price: 40 },
    ]

    const doorsDirection = sofa.reduce((arr, current, i) => {
        (current.size === 2) ? arr.push({ i: 'double' }) : arr.push({ i: 'dir' })
        return arr
    }, [])
    const clicker = (e) => setSelectedHandler(e)
    const getHandlerPrice = doorHandlers.filter(obj => obj.name === selectedHandler)[0].price
    const setColor = (index) => palette.filter((v, i) => i === index)[0].color
    const setPrice = (index) => palette.filter((v, i) => i === index)[0].price
    const totalSum = sofa.reduce((a, b) => a + b.price, 0) + setPrice(selectedInner) + setPrice(selectedOuter) + getHandlerPrice * capacity;
    const editDoorDirection = (i, side) => doorsDirection.splice(i, 1, { i: side })
    updateDoorsDirection(doorsDirection)
    updateDesign(selectedInner,selectedOuter,selectedHandler,totalSum)

    return (
        <>
            <div className="sofaBox" style={{ height: sofaHeight + 70, }}>
                <div className="underSofa" style={{ width: sofaWidth + 20, height: sofaHeight + 70, perspective: 800, top: -10 }}>
                    <div className="lineUnderSofa" style={{ width: sofaWidth + 20, height: sofaHeight + 70, top: -sofaHeight / 2 - 35 }} ></div>
                    <div className="lineUnderSofa" style={{ width: sofaWidth + 20, height: sofaHeight + 70, top: sofaHeight / 2 + 5 }} ></div>
                </div>

                <div className="underSofa" style={{ width: sofaWidth + 20, height: sofaHeight + 40, backgroundColor: setColor(selectedOuter), top: -10 }} />

                <div className="underSofa" style={{ width: sofaWidth, height: sofaHeight, perspective: 800 }}>
                    <div className="underSofaSides here" style={{ width: sofaWidth, height: sofaHeight, backgroundColor: setColor(selectedInner) }} />

                    <div className="underSofaSides" style={{ width: sofaWidth, opacity: 0.7 }} >
                        {sofa.map((v, i) => <div key={`piece-${v.model}-${i}`} className={`piece ${v.model}`} style={{ width: pieceWidth * v.size, height: sofaHeight }} />)}
                    </div>
                </div>

                <div className="sofaDoors" style={{ width: sofaWidth, height: sofaHeight, }}>
                    {sofa.map((v, i) => {

                        if (v.size === 2) {

                            return (
                                <React.Fragment key={v.size + "-door-" + i}>
                                    <div className="door" style={{ width: pieceWidth, height: sofaHeight, }}>
                                        <div className={door ? `doorLeft doorOpenLeft ` : `doorLeft`} style={{ background: setColor(selectedOuter), width: pieceWidth, height: sofaHeight }} />
                                        <div className={door ? `doorHandlerLeft ${selectedHandler}  doorHandlerOpenLeft ` : `${selectedHandler} doorHandlerLeft`} style={{ position: "absolute", top: sofaHeight / 2, right: 10 }} />
                                    </div>
                                    <div className="door" style={{ width: pieceWidth, height: sofaHeight, }}>
                                        <div className={door ? `doorRight doorOpenRight ` : `doorRight`} style={{ background: setColor(selectedOuter), width: pieceWidth, height: sofaHeight }} />
                                        <div className={door ? `doorHandlerRight ${selectedHandler}  doorHandlerOpenRight ` : `${selectedHandler} doorHandlerRight`} style={{ position: "absolute", top: sofaHeight / 2 }} />
                                    </div>
                                </React.Fragment>
                            )
                        } else {
                            return (

                                <ReverseDoor
                                    index={i}
                                    pieceWidth={pieceWidth}
                                    sofaHeight={sofaHeight}
                                    size={v.size}
                                    selectedHandler={selectedHandler}
                                    setColor={setColor}
                                    editDoorDirection={editDoorDirection}
                                    door={door}
                                    selectedOuter={selectedOuter}
                                />

                            )
                        }
                    })}
                </div>

                <button style={styles.btn} onClick={() => setDoorState(!door)} >{door ? "Close" : "Open"}</button>
            </div>



            <InfoTab
                width={sofaWidth / zoom}
                height={sofaHeight / zoom}
                deep={pieceDeep / zoom}
                capacity={capacity}
                sofa={sofa}
            />

            <InfoTabColor
                innerColorPrice={setPrice(selectedInner)}
                outerColorPrice={setPrice(selectedOuter)}
                handlerPrice={getHandlerPrice * capacity}
                capacity={capacity}
            />


            <div className="infoTab" >
                <div style={{ fontSize: 50 }}>Total Sum: {0 || totalSum} €</div>
            </div>


            <div className="handlers">
                <HandlerButton data={doorHandlers} onclick={clicker} choosedHandler={selectedHandler} />
            </div>
            <div className="colorSections">
                <div className="innerColor">
                    <p className="textInside">Inner</p>
                    <PieChart
                        style={{ fontSize: 10 }}
                        radius={40}
                        data={palette}
                        onClick={(_, segmentIndex) => setSelectedInner(segmentIndex)}
                        lineWidth={50}
                        segmentsStyle={{ transition: 'stroke .9s', cursor: 'pointer' }}
                        segmentsShift={(index) => (index === selectedInner ? 5 : 1)}
                    />
                </div>
                <div className="outerColor">
                    <p className="textInside">Outer</p>
                    <PieChart
                        style={{ fontSize: 10 }}
                        radius={40}
                        data={palette}
                        onClick={(_, segmentIndex) => setSelectedOuter(segmentIndex)}
                        lineWidth={50}
                        segmentsStyle={{ transition: 'stroke .9s', cursor: 'pointer' }}
                        segmentsShift={(index) => (index === selectedOuter ? 5 : 1)}

                    />
                </div>
            </div>
        </>
    )
}








const styles = {
    btn: {
        position: 'absolute',
        backgroundColor: "grey",
        color: "white",
        width: 120,
        bottom: 0,
    }
}