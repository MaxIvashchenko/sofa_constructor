import React from 'react'

export default function InfoTabColor({innerColorPrice, outerColorPrice,capacity,handlerPrice}) {

    return (
        <div className="infoTab">
                <div>Inner color: {innerColorPrice|| 0} €</div>
                <div>Outer color: {outerColorPrice || 0} €</div>
                <div>Handlers({capacity || 0} pcs.): {handlerPrice || 0} €</div>
                <div>Total: {0 || innerColorPrice+outerColorPrice+handlerPrice} €</div>
            </div>
    )
}