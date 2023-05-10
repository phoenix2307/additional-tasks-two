import React, {ChangeEvent, useState, KeyboardEvent} from 'react';
import {FilterValuesType, TasksType} from './App';
import SuperButton from './SuperButton';


// export type TaskType = {
//     id: string
//     title: string
//     isDone: boolean
// }

type PropsType = {
    id: number
    title: string
    tasks: Array<TasksType>
    students: Array<string>
    removeTask: (taskId: string, todolistId: number) => void
    changeFilter: (value: FilterValuesType, todolistId: number) => void
    addTask: (title: string, todolistId: number) => void
    changeTaskStatus: (id: string, isDone: boolean, todolistId: number) => void
    removeTodolist: (id: number) => void
    filter: FilterValuesType
}

export function Todolist(props: PropsType) {
    let [title, setTitle] = useState("")
    let [error, setError] = useState<string | null>(null)

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        setError(null);
        if (e.charCode === 13) {
            addTaskHandler()
            setTitle('')
        }
    }

    const removeTodolistHandler = () => {
        props.removeTodolist(props.id)
    }

    const addTaskHandler = () => {
        props.addTask(title, props.id)
    }

    const removeTaskHandler = (tID: string) => {
        props.removeTask(tID, props.id)
    }

    const tsarFilterHandler = (value: FilterValuesType) => {
        props.changeFilter(value, props.id)
    }


    return <div>
        <h3> {props.title}
            <SuperButton callBack={removeTodolistHandler} name={'x'} />
            {/*<button onClick={() => {'removeTodolist'}}>x</button>*/}

        </h3>
        <div>
            <input value={title}
                   onChange={onChangeHandler}
                   onKeyPress={onKeyPressHandler}
                   className={error ? "error" : ""}
            />
            <SuperButton callBack={addTaskHandler} name={'+'} />
            {/*<button onClick={() => {'addTask'}}>+</button>*/}
            {error && <div className="error-message">{error}</div>}
        </div>
        <ul>
            {
                props.tasks.map(t => {
                    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
                        let newIsDoneValue = e.currentTarget.checked;
                        props.changeTaskStatus(t.taskId, newIsDoneValue, props.id);
                    }

                    return <li key={t.taskId} className={t.isDone ? "is-done" : ""}>
                        <input type="checkbox" onChange={onChangeHandler} checked={t.isDone}/>
                        <span>{t.title}</span>
                        {/*<button onClick={() => {'removeTask'}}>x</button>*/}
                        <SuperButton callBack={() => removeTaskHandler(t.taskId)} name={'x'}/>
                    </li>
                })
            }
        </ul>
        <div>
            <SuperButton callBack={() => tsarFilterHandler('all')} name={'ALL'}/>
            <SuperButton callBack={() => tsarFilterHandler('active')} name={'Active'}/>
            <SuperButton callBack={() => tsarFilterHandler('completed')} name={'Completed'}/>
            {/*<button className={props.filter === 'all' ? "active-filter" : ""} onClick={()=>{}}>All</button>*/}
            {/*<button className={props.filter === 'active' ? "active-filter" : ""} onClick={()=>{}}>Active</button>*/}
            {/*<button className={props.filter === 'completed' ? "active-filter" : ""} onClick={()=>{}}>Completed</button>*/}
        </div>
        <p></p>
        {
            props.students.map((el) => {
                return (
                    <div>{el}</div>
                )
            })
        }
    </div>
}


