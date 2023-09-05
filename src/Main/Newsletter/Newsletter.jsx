import '../../assets/styles/classes.scss'
import './Newsletter.scss'
import {useRef, useState} from "react";
import CreateUser from "./CreateUser/CreateUser.jsx";
import SendLetters from "./SendLetters/SendLetters.jsx";

const roles = [
    {
        id: 1,
        name: 'Администратор',
        opportunities: {
            "Создавать журнал": true,
            "Удалять журнал": true,
            "Просматривать журнал": true,
            "Изменять журнал": true,
            "Проверять домашнюю работу": true,
            "Проводить онлайн трансляции": true,
            "Вести черный список": true,
            "Создавать чат": true,
            "Отправлять домашнюю работу": true,
            "Удалять прямые трансляции": true,
            "Оставлять комментарии": true,
            "Удалять папки": true,
            "Устанавливать доступ к журналу": true,
            "Изменять файлы": true,
            "Создавать папки": true,
            "Перемещать папки": true,
            "Приглашать на онлайн трансляции": true,
        }
    },
    {
        id: 2,
        name: 'Модератор',
        opportunities: {
            "Создавать журнал": true,
            "Удалять журнал": true,
            "Просматривать журнал": true,
            "Изменять журнал": true,
            "Проверять домашнюю работу": true,
            "Проводить онлайн трансляции": true,
            "Вести черный список": true,
            "Создавать чат": true,
            "Отправлять домашнюю работу": true,
            "Удалять прямые трансляции": true,
            "Оставлять комментарии": true,
            "Удалять папки": true,
            "Устанавливать доступ к журналу": true,
            "Изменять файлы": true,
            "Создавать папки": true,
            "Перемещать папки": true,
            "Приглашать на онлайн трансляции": true,
        }
    },
    {
        id: 3,
        name: 'Тестировщик',
        opportunities: {
            "Создавать журнал": true,
            "Удалять журнал": true,
            "Просматривать журнал": true,
            "Изменять журнал": true,
            "Проверять домашнюю работу": true,
            "Проводить онлайн трансляции": true,
            "Вести черный список": true,
            "Создавать чат": true,
            "Отправлять домашнюю работу": true,
            "Удалять прямые трансляции": true,
            "Оставлять комментарии": true,
            "Удалять папки": true,
            "Устанавливать доступ к журналу": true,
            "Изменять файлы": true,
            "Создавать папки": true,
            "Перемещать папки": true,
            "Приглашать на онлайн трансляции": true,
        }
    },
    {
        id: 4,
        name: 'Преподаватель',
        opportunities: {
            "Создавать журнал": true,
            "Удалять журнал": true,
            "Просматривать журнал": true,
            "Изменять журнал": true,
            "Проверять домашнюю работу": true,
            "Проводить онлайн трансляции": true,
            "Вести черный список": true,
            "Создавать чат": true,
            "Отправлять домашнюю работу": true,
            "Удалять прямые трансляции": true,
            "Оставлять комментарии": true,
            "Удалять папки": true,
            "Устанавливать доступ к журналу": true,
            "Изменять файлы": true,
            "Создавать папки": true,
            "Перемещать папки": true,
            "Приглашать на онлайн трансляции": true,
        }
    },
    {
        id: 5,
        name: 'Ученик',
        opportunities: {
            "Создавать журнал": true,
            "Удалять журнал": true,
            "Просматривать журнал": true,
            "Изменять журнал": true,
            "Проверять домашнюю работу": true,
            "Проводить онлайн трансляции": true,
            "Вести черный список": true,
            "Создавать чат": true,
            "Отправлять домашнюю работу": true,
            "Удалять прямые трансляции": true,
            "Оставлять комментарии": true,
            "Удалять папки": true,
            "Устанавливать доступ к журналу": true,
            "Изменять файлы": true,
            "Создавать папки": true,
            "Перемещать папки": true,
            "Приглашать на онлайн трансляции": true,
        }
    },
    {
        id: 6,
        name: 'Левый пользователь',
        opportunities: {
            "Создавать журнал": true,
            "Удалять журнал": true,
            "Просматривать журнал": true,
            "Изменять журнал": true,
            "Проверять домашнюю работу": true,
            "Проводить онлайн трансляции": true,
            "Вести черный список": true,
            "Создавать чат": true,
            "Отправлять домашнюю работу": true,
            "Удалять прямые трансляции": true,
            "Оставлять комментарии": true,
            "Удалять папки": true,
            "Устанавливать доступ к журналу": true,
            "Изменять файлы": true,
            "Создавать папки": true,
            "Перемещать папки": true,
            "Приглашать на онлайн трансляции": true,
        }
    },
    {
        id: 7,
        name: 'Заблокированный пользователь',
        opportunities: {
            "Создавать журнал": true,
            "Удалять журнал": true,
            "Просматривать журнал": true,
            "Изменять журнал": true,
            "Проверять домашнюю работу": true,
            "Проводить онлайн трансляции": true,
            "Вести черный список": true,
            "Создавать чат": true,
            "Отправлять домашнюю работу": true,
            "Удалять прямые трансляции": true,
            "Оставлять комментарии": true,
            "Удалять папки": true,
            "Устанавливать доступ к журналу": true,
            "Изменять файлы": true,
            "Создавать папки": true,
            "Перемещать папки": true,
            "Приглашать на онлайн трансляции": true,
        }
    }
]


function Newsletter(props) {
    let [checked, setChecked] = useState(true);
    let [option, setOption] = useState("createUser")
    let roleValue = useRef()
    let cover = useRef()

    function roleClickHandler(role, event) {
        if (!roleValue.current?.hasAttribute('role')) return;

        // Set value and text
        roleValue.current.setAttribute('role', role.name)
        roleValue.current.innerText = 'Роль: ' + role.name

        // Remove active class from list
        const list = event.currentTarget.closest('.select-role__list');
        const title = list.parentNode.querySelector(".select-role__title")
        if (!list) return;

        list.classList.remove('active')
        title.classList.remove('active')
        cover.current?.classList.remove('active')
    }

    function clickRoleTitle(event) {
        // Toggle active class from current element
        event.currentTarget.classList.toggle('active')

        // Toggle active class from list of the roles
        const parent = event.currentTarget.parentNode
        const list = parent.querySelector('.select-role__list')
        if (!list) return
        list.classList.toggle('active')
        cover.current?.classList.toggle('active')
    }

    function clickCoverHandler(event) {
        cover.current?.classList.remove('active')
        const list = cover.current?.parentNode.querySelector(".select-role__list");
        const title = cover.current?.parentNode.querySelector(".select-role__title");
        list.classList.remove('active')
        title.classList.remove('active')
    }

    function checkOption() {
        switch (option) {
            case "createUser":
                return <CreateUser/>
            case "emailNewsletter":
                return <SendLetters/>
            default:
                return
        }
    }

    return <div className="Newsletter email-newsletter">
        <div ref={cover} onClick={clickCoverHandler} className="email-newsletter__cover"></div>
        <ul className="email-newsletter__option">
            <li className="email-newsletter__option_item">
                <label className="email-newsletter__option_label">
                    <input checked={checked}
                           onChange={() => {
                               setChecked(!checked)
                               setOption("createUser")
                           }}
                           type="radio"
                           name={'option'}
                           className="email-newsletter__option_input"/>
                    <h5 className={'email-newsletter__option_title black h3'}>Создать пользователя</h5>
                </label>
            </li>
            <li className="email-newsletter__option_item">
                <label className="email-newsletter__option_label">
                    <input
                        onChange={() => {
                            setChecked(!checked)
                            setOption("emailNewsletter")
                        }}
                        type="radio"
                        name={'option'}
                        className="email-newsletter__option_input"/>
                    <h5 className={'email-newsletter__option_title black h3'}>Сделать Email рассылку</h5>
                </label>
            </li>
        </ul>
        <div className="email-newsletter__select select-role black">
            <div className="select-role__title" onClick={clickRoleTitle}>
                <img src="./img/arrow.svg" alt="" className="select-role_icon"/>
                <h4 ref={roleValue} role={"blocked"} className="h4">Роль: Заблокированный пользователь</h4>
            </div>
            <ul className="select-role__list h5">
                {roles.map(role => {
                    return <li
                        key={role.id}
                        value={role.name}
                        className={'select-role__item'}
                        onClick={(event) => roleClickHandler(role, event)}>{role.name}</li>
                })}
            </ul>
        </div>
        {checkOption()}
    </div>
}

export default Newsletter;