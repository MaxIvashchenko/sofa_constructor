import React, { Component } from 'react'
import "./Stage1.css"

export default function InputForm({ onsubmit, onchange, sofaHeight, sofaWidth, sofaDeep,zoom }) {

    return (
        < >
            <form className='form' onSubmit={onsubmit}>

                <label style={{ top: 80, left: 100 }}>Height: <input defaultValue={sofaHeight/zoom} type="number" min="100" max="270" name="sofaHeight" placeholder="100-270" onChange={onchange} required /> cm. </label>

                <label style={{ bottom: 220, right: 100 }}>Width: <input defaultValue={sofaWidth/zoom} type="number" min="50" max="550" name="sofaWidth" placeholder="50-550" onChange={onchange} required /> cm. </label>

                <label style={{ bottom: 120, left: 20, color: "lightgrey" }}>Deep: <input defaultValue={sofaDeep/zoom} type="number" min="25" max="75" name="sofaDeep" placeholder="25-75" onChange={onchange} required /> cm. </label>

                <input className="btnIn" style={styles.btn} type="submit" value="Next Stage" />
            </form>
        </>
    )
}


const styles = {
    btn: {
        position: "absolute",
        bottom: 20,
        right: 20,
        backgroundColor: "#fd4f7d", 
        width: 120,
    }
}