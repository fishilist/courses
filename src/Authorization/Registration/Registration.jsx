import './Registration.scss'
import Input from "../../assets/components/Input/Input.jsx";
import TransBtn from "../../assets/components/TransBtn/TransBtn.jsx";
import {useRef, useState} from "react";

function Registration(props) {
    let [isHidePass, setIsHidePass] = useState(true);

    function checkPassword(password, againPassword) {
        return password === againPassword;
    }

    function checkEmail(email) {
        const EMAIL_REGEXP = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        return EMAIL_REGEXP.test(String(email).toLowerCase());
    }

    function setError(field) {
        const parent = field.parentNode;
        if (parent.nodeName === 'BUTTON') return
        parent.classList.add('error')
    }

    function handleSubmit(event) {
        event.preventDefault();
        // Read the form data
        const form = event.target;
        const elements = form.elements;
        const formData = new FormData(form);
        const formJson = Object.fromEntries(formData.entries());
        let isOk = true;

        for (let i = 0; i < elements.length; i++) {
            elements[i]?.parentNode.classList.remove('error');
        }

        // Or you can work with it as a plain object:
        if (!checkPassword(formJson.password, formJson.againPassword)) {
            isOk = false;
            setError(form.password)
        }
        if (!checkEmail(formJson.email)) {
            isOk = false;
            setError(form.email)
        }
        if (isOk) {
            form.send.disabled = true
            delete formJson['againPassword']
            console.log(formJson);
            setTimeout(() => {
                form.send.disabled = false
            }, 1500)
        }
    }

    function inputClickHandler(event) {
        event.currentTarget.classList.remove('error')
    }

    return <form method="post" onSubmit={handleSubmit} className="registration">
        <div className="registration__input" onClick={inputClickHandler}>
            <Input placeholder={'Email'} type={'text'} name={'email'}/>
            <span className={'registration__input_icon icon-search'}></span>
            <div className="registration__input_error">
                <h5>Неправильный почтовый ящик</h5>
            </div>
        </div>
        <div className="registration__input" onClick={inputClickHandler}>
            <Input placeholder={'Пароль'} name={'password'} type={isHidePass ? 'password' : 'text'}/>
            <span className={'registration__input_icon icon-search'}
                  onClick={() => setIsHidePass(!isHidePass)}></span>
            <div className="registration__input_error">
                <h5>Неправильный пароль</h5>
            </div>
        </div>
        <div className="registration__input" onClick={inputClickHandler}>
            <Input placeholder={'Повторите пароль'} name={'againPassword'} type={'password'}/>
            <span className={'registration__input_icon icon-search'}></span>
        </div>
        <div className="registration__person">
            <Input placeholder={'Имя'} name={'name'} type={'password'}/>
            <Input placeholder={'Фамилия'} name={'surname'} type={'password'}/>
        </div>
        <button name={'send'} type={"submit"} className={'Transparent-button h2'}>Зарегистрироваться</button>
        <div className="registration__node h5 semibold">
            <h5>Уже есть аккаунт? <a href="" className={'registration__node_link green'}>Войти</a></h5>
        </div>
    </form>
}

export default Registration;