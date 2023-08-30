import './SetAccess.scss'
import TransBtn from "../../assets/components/TransBtn/TransBtn.jsx";
import GreenBtn from "../../assets/components/GreenBtn/GreenBtn.jsx";

/*opportunities: {
            createLog: true,
            deleteLog: true,
            viewLog: true,
            enterDataIntoLog: true,
            checkHomework: true,
            holdStream: true,
            changeBlackList: true,
            createChat: true,
            sendHomework: true,
            deleteStream: true,
            leaveComment: true,
            deleteFolder: true,
            changeAccessLog: true,
            changeFile: true,
            createFolder: true,
            moveFolder: true,
            inviteToStream: true,
        },*/

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

function SetAccess(props) {

    function showRoles() {
        return roles.map(role => {
            return <li key={role.id} className="access-popup__item h4">
                <p className={'access-popup__item_text light'}>
                    <span className={'icon-checked'}></span>{role.name}
                </p>
            </li>
        })
    }

    return <div className={'Set-Access access-popup'}>
        <div className="access-popup__body">
            <div className="access-popup__title h1 light">
                <p>Возможность просмотра папки «src»</p>
            </div>
            <div className="access-popup__window">
                <div className="access-popup__window_title h2 light">
                    <p>Роли</p>
                </div>
                <ul className="access-popup__list">
                    {showRoles()}
                </ul>
                <div className="access-popup__window_btn">
                    <GreenBtn text={'Завершить настройку'}/>
                </div>
            </div>
        </div>
    </div>
}

export default SetAccess;