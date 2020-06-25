import React, { Component } from 'react'

export default function InputForm({ onsubmit, onchange }) {
    return (
        <>
            <form className='form' onSubmit={onsubmit}>

                <label>Height: <input type="number" min="100" max="270" name="sofaHeight" placeholder="100-270" onChange={onchange} required /> cm. </label>

                <label>Width: <input type="number" min="50" max="550" name="sofaWidth" placeholder="50-550" onChange={onchange} required /> cm. </label>

                <label>Deep: <input type="number" min="25" max="75" name="sofaDeep" placeholder="25-75" onChange={onchange} required /> cm. </label>

                <input type="submit" value="Отправить" />
            </form>
        </>
    )
}
