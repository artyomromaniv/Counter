import React, {useState} from 'react';
import s from './Button.module.css'

type ButtonPropsType = {
    name: string
    callBack: () => void
    count:number
  }

export const Button = (props: ButtonPropsType) => {
    const onClickHandler = () => {
        props.callBack()
    }

    return (
        <button
            className={s.button}
            onClick={onClickHandler}
            disabled={(props.name === 'Reset' && props.count===0) || (props.name === 'Inc' && props.count===5)}
        >
            {props.name}
        </button>
    )
}
