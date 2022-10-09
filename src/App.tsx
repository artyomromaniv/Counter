import React, {useState} from 'react';
import './App.css';
import {Button} from "./components/Button";

function App() {
    const [count, setCount] = useState<number>(0) //состояние счетчика

    const IncButton = () => {           //увеличивает счетчик на единицу
        setCount(count + 1)
        if (count === 5) {
            setCount(count)
        }
    }
    const ResetButton = () => {         //сбрасывает счетчик до нуля
        setCount(0)
    }
    return (
        <div className={'appWrapper'}>
            <div>
                <h2 className={'counterStyle'} style={{color: count === 5 ? 'red': 'black'}}>{count}</h2>
            </div>
            <div className={'buttonStyle'}>
                <Button name={'Inc'} count={count} callBack={() => {IncButton()}}/>
                <Button name={'Reset'} count={count} callBack={() => {ResetButton()}}/>
            </div>
        </div>
    );
}

export default App;
