import React, { Component } from 'react'

export default function ModuleTabChange({ onclick, showDoubleModule }) {
    return (
        <div className="chooseModule">
            <div onClick={onclick} className={!showDoubleModule && "moduleBtnAtcive"}>Double modules</div>
            <div onClick={onclick} className={showDoubleModule && "moduleBtnAtcive"}>Simple modules</div>
        </div>
    )
}
