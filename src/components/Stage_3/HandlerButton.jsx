import React from 'react'

export default function HandlerButton({ data, onclick , choosedHandler}) {

  
    return data.map((v, i) => {

        return (
            <button onClick={() => onclick(v.name)} key={v.name + i}>
                {choosedHandler === v.name && <div className="choosedHandler">&#10003;</div>}
               
                <img alt={v.name + '-img'} src={v.img} />
            </button>
        )
    })

}