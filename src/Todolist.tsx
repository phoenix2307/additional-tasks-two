import React, {ChangeEvent, useState, KeyboardEvent} from 'react';
import {FilterValuesType, TasksType} from './App';
import {SuperButton} from "./components/SuperButton";


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
        if (title.trim()) {
            props.addTask(title, props.id)
            setTitle('')
        } else {
            setError('error')
            setTitle('')
        }
    }

    const removeTaskHandler = (tID: string) => {
        props.removeTask(tID, props.id)
    }

    const tsarFilterHandler = (value: FilterValuesType) => {
        props.changeFilter(value, props.id)
    }



    return <div>
        <h3> {props.title}
            <SuperButton name={'x'} callBack={removeTodolistHandler}/>

        </h3>
        <div>
            <input value={title}
                   onChange={onChangeHandler}
                   onKeyPress={onKeyPressHandler}
                   className={error ? "error" : ""}
            />
            <SuperButton name={'+'} callBack={addTaskHandler}/>
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
                        <SuperButton name={'x'} callBack={()=>removeTaskHandler(t.taskId)}/>
                    </li>
                })
            }
        </ul>
        <div>
            <SuperButton style={props.filter === 'all' ? "active-filter" : ""} name={'ALL'} callBack={()=>tsarFilterHandler('all')}/>
            <SuperButton style={props.filter === 'active' ? "active-filter" : ""} name={'Active'} callBack={()=>tsarFilterHandler('active')}/>
            <SuperButton style={props.filter === 'completed' ? "active-filter" : ""} name={'Completed'} callBack={()=>tsarFilterHandler('completed')}/>
        </div>
        <p></p>
        {/*{props.students.map(el => <div>{el}</div>)}*/}
        {
            props.students.map((el) => {
                return (
                    <div>{el}</div>
                )
            })
        }
    </div>
}


