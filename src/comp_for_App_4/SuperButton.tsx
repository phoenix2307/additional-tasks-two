import React from "react";
import s from './SuperButton.module.css'

type SuperButtonPropsType = {
    name?: string
    callBack: () => void
    color?: string
    disabled?: boolean
    children: React.ReactNode
}
export const SuperButton: React.FC<SuperButtonPropsType> = (props) => {

    const {name, callBack, color, children, disabled, ...otherProps} = props

    const callBackHandler = () => {
        callBack()
        console.log(children)
    }

    // const finalClassName = s.button
    // + (otherProps.disabled
    //             ? ' ' + s.disabled
    //             : color === 'red'
    //                 ? ' ' + s.red
    //                 : color === 'secondary'
    //                     ? ' ' + s.secondary
    //                     : ' ' + s.default)
    // + (className ? ' ' + className : '')

    // const finalClassName = `${s.button}
    //         ${color==='red' ? s.red: s.default}
    //         ${disabled ? s.disabled: ''}
    //         `
    const finalClassName = `${s.button} 
     ${disabled 
        ? s.disabled 
        : color === 'red' 
            ? s.red 
            : color === 'secondary' 
                ? s.secondary 
                : s.default}
            `
    return (
        <button onClick={callBackHandler}
                disabled={disabled}
                className={finalClassName}
        >{children}</button>
    )
}

//--------------------------------------------

// export const SuperButton: React.FC<SuperButtonPropsType> = ({
//                                                                 name,
//                                                                 callBack,
//                                                                 ...otherProps
//                                                             }) => {
//     const callBackHandler = () => {
//         callBack()
//         console.log(otherProps.color)
//     }
//     return (
//         <button onClick={callBackHandler}>{name}</button>
//     )
// }