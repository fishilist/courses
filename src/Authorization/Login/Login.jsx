import './Login.scss'
import TransBtn from "../../assets/components/TransBtn/TransBtn.jsx";
import Input from "../../assets/components/Input/Input.jsx";
import {useState} from "react";

function Login(props) {
    let [isHidePass, setIsHidePass] = useState(true);

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
        if (!checkEmail(formJson.email)) {
            isOk = false;
        }
        if (isOk) {
            form.send.disabled = true
            console.log(formJson);
            setTimeout(() => {
                form.send.disabled = false
            }, 1500)
        } else {
            form.classList.add('error')
        }
    }

    function inputClickHandler(event) {
        let form = event.currentTarget.closest('.login')
        if (form) {
            form.classList.remove('error')
        }
    }

    return <form method="post" onSubmit={handleSubmit} className={'login'}>
        <div className="login__error">
            <h5>Неправильный логин или пароль</h5>
        </div>
        <div className="login__input" onClick={inputClickHandler}>
            <Input placeholder={'Email'} type={'text'} name={'email'}/>
            <span className={'login__input_icon icon-search'}></span>
        </div>
        <div className="login__input" onClick={inputClickHandler}>
            <Input placeholder={'Пароль'} name={'password'} type={isHidePass ? 'password' : 'text'}/>
            <span className={'login__input_icon icon-search'}
                  onClick={() => setIsHidePass(!isHidePass)}></span>
        </div>
        <button name={'send'} type={"submit"} className={'Transparent-button h2'}>Войти</button>
        <div className="login__node h5 semibold">
            <h5>Еще нет аккаунта? <a href="" className={'login__node_link green'}>Зарегистрироваться</a></h5>
        </div>
    </form>
}

export default Login;