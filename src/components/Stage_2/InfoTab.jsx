import React from 'react'

export default function InfoTab({ width, height, deep, capacity, sofa = [] }) {
    const totalSum = sofa.reduce((a, b) => a + b.price, 0)
    return (
        <div className="infoTab">
            <div>Height: {height || 0} см</div>
            <div>Width: {width || 0} см</div>
            <div>Deep: {deep || 0} см</div>
            <div>Number of doors: {capacity || 0}</div>
            <div>Total: {0 || totalSum} €</div>
        </div>
    )
}