import React from 'react';
import logo from './logo.svg';
import './App.css';
import {SuperAdidas} from "./comp_for_App_4/SuperAdidas";
import {SuperButton} from "./comp_for_App_4/SuperButton";


function App_4() {
    const tasks = [
        {id: 1, title: 'REACT', isDone: false},
        {id: 2, title: 'HTML', isDone: true},
        {id: 3, title: 'CSS', isDone: true},
    ]

    const someFunction = ()=>{
    }

    return (
        <div className="App">
            {/*<SuperButton name={'red'} callBack={someFunction} color={'red'}/>*/}
            {/*<SuperButton name={'secondary'} callBack={someFunction}/>*/}
            {/*<SuperButton name={'disabled'} callBack={someFunction} disabled/>*/}
            {/*<SuperButton callBack={someFunction} color={'red'}>red button</SuperButton>*/}
            {/*<SuperButton callBack={someFunction} color={'secondary'}>secondary</SuperButton>*/}
            {/*<SuperButton callBack={someFunction} disabled>disabled</SuperButton>*/}
            <SuperAdidas tasks={tasks}></SuperAdidas>
            <SuperAdidas tasks={tasks}>
                <SuperButton callBack={someFunction} color={'red'}>red button</SuperButton>
                <SuperButton callBack={someFunction} color={'secondary'}>secondary</SuperButton>
                <SuperButton callBack={someFunction} disabled>disabled</SuperButton>
            </SuperAdidas>
            <SuperAdidas tasks={tasks}>
                <input type="text"/>
                <input type="date"/>
            </SuperAdidas>
            <SuperAdidas tasks={tasks}>
                <SuperButton callBack={someFunction} color={'red'}>red button</SuperButton>
            </SuperAdidas>
        </div>
    );
}

export default App_4;
