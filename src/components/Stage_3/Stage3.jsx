import React, { useState } from 'react'
import { isAbsolute } from 'path';

// export default function Stage3() {
    export default function Stage3({ sofaWidth, sofaHeight, pieceWidth, sofa }) {
    const [door, setDoorState] = useState(false)

    // const sofa = [
    //     { side: "black", size: 2, id: 'black-1-1', model: 'model-2', empty: false, price: 110 },

    //     { side: "black", size: 1, id: 'black-1-2', model: 'model-3', empty: false, price: 120 },
    //     { side: "black", size: 1, id: 'black-1-0', model: 'model-1', empty: false, price: 100 },


    // ]
    // const sofaWidth = 300;
    // const sofaHeight = 300;
    // const pieceWidth = 75;

    const openSofa = () => {
        setDoorState(!door)
    }


    return (
        <>
            <div className="sofaBox" style={{ height: sofaHeight + 70 }}>
                <div className="underSofa" style={{ width: sofaWidth+20, height: sofaHeight+40, perspective: 400, background: "rgb(110, 110, 136)", top: -10}}>
                    <div className="underSofaSides" style={{ width: sofaWidth}} >

                    </div>
                </div>

                <div className="underSofa" style={{ width: sofaWidth, height: sofaHeight, perspective: 800 }}>
                    <div className="underSofaSides" style={{ width: sofaWidth }} >
                        {/* <div className={'solidUnderline'} style={{ width: sofaWidth, height: sofaHeight, top: sofaHeight / 2 }} ></div> */}
                        {sofa.map(v => <div className={`piece ${v.model}`} style={{ width: pieceWidth * v.size, height: sofaHeight }} />)}
                    </div>
                </div>

                <div className="sofaDoors" style={{ width: sofaWidth, height: sofaHeight }}>
                    {sofa.map((v, i) => {
                        if ((v.size === 1 && sofa.length - 1 === i) || (v.size === 1 && sofa[i - 1] && sofa[i - 1].size === 1)) {
                            return (
                                <div className="door" style={{ width: pieceWidth, height: sofaHeight, }}>
                                    <div className={door ? `doorRight doorOpenRight ` : `doorRight`} style={{ width: pieceWidth, height: sofaHeight }}></div>
                                </div>
                            )
                        }

                        if (v.size === 2) {
                            return (
                                <>
                                    <div className="door" style={{ width: pieceWidth, height: sofaHeight, }}>
                                        <div className={door ? `doorLeft doorOpenLeft ` : `doorLeft`} style={{ width: pieceWidth, height: sofaHeight }}></div>
                                    </div>
                                    <div className="door" style={{ width: pieceWidth, height: sofaHeight, }}>
                                        <div className={door ? `doorRight doorOpenRight ` : `doorRight`} style={{ width: pieceWidth, height: sofaHeight }}></div>
                                    </div>
                                </>
                            )
                        } else {
                            return (

                                <div className="door" style={{ width: pieceWidth, height: sofaHeight, }}>
                                    <div className={door ? `doorLeft doorOpenLeft ` : `doorLeft`} style={{ width: pieceWidth, height: sofaHeight }}></div>
                                </div>
                            )
                        }
                    })}
                </div>
                <button style={styles.btn} onClick={() => openSofa()} >{door ? "Close" : "Open"}</button>

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