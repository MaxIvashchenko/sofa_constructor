import React, { useState } from 'react'
import "./Stage3.css"


export default function ReverseDoor({ pieceWidth, sofaHeight, size, selectedHandler, setColor, selectedOuter, door, index,editDoorDirection }) {
    const [direction, setDirection] = useState(false)

    const button = () => <button onClick={() => setDirection(!direction)} style={{ position: "absolute", top: -30, left: pieceWidth / 2 - 20, fontSize: 20 }}>&#8596;</button>

    const doorRight = () => {
        editDoorDirection(index, 'right')
        return (
            <div key={size + '-doorRight'} className="door" style={{ width: pieceWidth, height: sofaHeight }}>
                {button()}
                <div className={door ? `doorRight doorOpenRight ` : `doorRight`} style={{ background: setColor(selectedOuter), width: pieceWidth, height: sofaHeight, }} />
                <div className={door ? `doorHandlerRight  ${selectedHandler} doorHandlerOpenRight ` : `${selectedHandler} doorHandlerRight`} style={{ position: "absolute", top: sofaHeight / 2 }} />
            </div>
        )
    }
    const doorLeft = () => {
        editDoorDirection(index, 'left')

        return (
            <div key={size + "-doorLeft"} className="door" style={{ width: pieceWidth, height: sofaHeight, }}>
                {button()}
                <div className={door ? `doorLeft doorOpenLeft ` : `doorLeft`} style={{ background: setColor(selectedOuter), width: pieceWidth, height: sofaHeight }} />
                <div className={door ? `doorHandlerLeft  ${selectedHandler} doorHandlerOpenLeft ` : `${selectedHandler} doorHandlerLeft`} style={{ position: "absolute", top: sofaHeight / 2, right: 10 }} />
            </div>
        )
    }

    return (
        <>
            {direction ? doorRight(): doorLeft()}
        </>
    )
}
