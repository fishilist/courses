import '../../../assets/styles/classes.scss'
import './CreateUser.scss'
import GreenBtn from "../../../assets/components/GreenBtn/GreenBtn.jsx";
import Input from "../../../assets/components/Input/Input.jsx";
import {useRef} from "react";
import {CopyToClipboard} from 'react-copy-to-clipboard';

function CreateUser(props) {
    let placeholderLogin = 'Логин'
    let placeholderPassword = 'Пароль'

    const loginInput = useRef()
    const passwordInput = useRef()
    function blurHandler(event, placeholder) {
        const input = event.target
        if (input.value === '') {
            input.placeholder = placeholder;
        }
    }

    function clickHandler(event) {
        const input = event.target
        if (input.value === '') {
            event.target.placeholder = ''
        }
    }
    function createUserHandler(event) {
        let login = loginInput.current;
        let password = passwordInput.current;

        const newLogin = Math.random()
        const newPassword = Math.random()

        login.value = "Login: " + newLogin;
        login.setAttribute('value', newLogin)
        password.value = "Password: " + newPassword;
        password.setAttribute('value', newPassword)
    }

    return <div className="CreateUser user-create">
        <div className="user-create__title">
            <h2 className="h2">Новый пользователь</h2>
        </div>
        <div className="user-create__fields">
            <input type='text'
                   readOnly={true}
                   name={'login'}
                   onBlur={(e) => blurHandler(e, placeholderLogin)}
                   onFocus={clickHandler}
                   placeholder={placeholderLogin}
                   ref={loginInput}
                   value={""}
                   className={'Input h4'}/>
            <input type='text'
                   readOnly={true}
                   name={'password'}
                   onBlur={(e) => blurHandler(e, placeholderPassword)}
                   onFocus={clickHandler}
                   placeholder={placeholderPassword}
                   ref={passwordInput}
                   value={""}
                   className={'Input h4'}/>
        </div>
        <div className="user-create__button" onClick={createUserHandler}>
            <GreenBtn text={"Создать"}/>
        </div>
    </div>
}

export default CreateUser;