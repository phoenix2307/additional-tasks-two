import React from 'react'

type SuperButtonPropsType = {
    style?: string
    name: string
    callBack: ()=>void
}

export const SuperButton = ({style, name, callBack}: SuperButtonPropsType)=> {

    return (
        <button className={style} onClick={callBack}>{name}</button>
    )
}
