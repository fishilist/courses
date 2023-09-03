import '../../assets/styles/classes.scss'
import './Newsletter.scss'

function Newsletter(props) {
    return <div className="Newsletter email-newsletter">
        <ul className="email-newsletter__option">
            <li className="email-newsletter__option_item">
                <label className="email-newsletter__option_label">
                    <input type="radio" name={'option'} className="email-newsletter__option_input"/>
                    <h5 className={'email-newsletter__option_title black h3'}>Создать пользователя</h5>
                </label>
            </li>
            <li className="email-newsletter__option_item">
                <label className="email-newsletter__option_label">
                    <input type="radio" name={'option'} className="email-newsletter__option_input"/>
                    <h5 className={'email-newsletter__option_title black h3'}>Сделать Email рассылку</h5>
                </label>
            </li>
        </ul>
        <div className="email-newsletter__select select-role black">
            <div className="select-role__title">
                <img src="./img/arrow.svg" alt="" className="select-role_icon"/>
                <h4 className="h4">Роль: Заблокированный пользователь</h4>
            </div>
            <ul className="select-role__list h5">
                <li value="tester" className="select-role__item">Тестировщик</li>
                <li value="student" className="select-role__item">Ученик</li>
                <li value="anonymous" className="select-role__item">Левый пользователь</li>
                <li value="moderator" className="select-role__item">Модератор</li>
                <li value="blocked" className="select-role__item">Заблокированный пользователь</li>
                <li value="teacher" className="select-role__item">Преподаватель</li>
            </ul>
        </div>
    </div>
}

export default Newsletter;