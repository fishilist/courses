import './Input.scss'
import {useState} from "react";

function Input({type = "text", placeholder = '', name}) {
    function blurHandler(event) {
        const input = event.target
        if (input.value === '') {
            input.placeholder = placeholder
        }
    }

    function clickHandler(event) {
        const input = event.target
        if (input.value === '') {
            event.target.placeholder = ''
        }
    }

    if (type === 'password') {
        return <input type='password'
                      name={name}
                      onBlur={blurHandler}
                      onFocus={clickHandler}
                      placeholder={placeholder}
                      className={'Input h4'}/>
    } else {
        return <input type='text'
                      name={name}
                      onBlur={blurHandler}
                      onFocus={clickHandler}
                      placeholder={placeholder}
                      className={'Input h4'}/>
    }
}

export default Input;