import React from "react";

type TasksType = {
    id: number
    title: string
    isDone: boolean
}
type SuperAdidasPropsType = {
    tasks: TasksType[]
    children?: React.ReactNode
}
export const SuperAdidas: React.FC<SuperAdidasPropsType> = (props) => {
    const {tasks, children, ...otherProps} = props
    return (
        <div>
            <ul>
                {tasks.map(el => {
                    return <li key={el.id}>
                        <span>{el.id}</span> ---
                        <span>{el.title}</span>
                        <input type="checkbox" checked={el.isDone}/>

                    </li>

                })}
            </ul>
            <div>{children}</div>
            <hr/>
        </div>
    )
}