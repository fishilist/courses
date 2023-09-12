import "./CreateCourse.scss"
import GreenBtn from "../../../assets/components/GreenBtn/GreenBtn.jsx";
import {Outlet, useNavigate} from "react-router-dom";

function CreateCourse(props) {
    const pathImg = '../../../../public/img/';

    const navigate = useNavigate()

    return (
        <div className="CreateCourse course-create">
            <div className="course-create__container">
                <ul className="course-create__left course-list h4 light">
                    <li className="course-list__item">
                        <h3>Максимальное количество участников: нет / 200 000</h3>
                    </li>
                    <li className="course-list__item">
                        <h3>Дата начала обучения: 31 августа 2023</h3>
                    </li>
                    <li className="course-list__item">
                        <h3>Дата окончания обучения: 1 февраля 2024</h3>
                    </li>
                    <li className="course-list__item h4 semibold">
                        <h3>Дополнительные возможности</h3>
                    </li>
                    <ul className="add-settings-list h5 light">
                        <li className="add-settings-list__item">
                            <h3>Открыт для незарегистрированных пользователей</h3>
                        </li>
                        <li className="add-settings-list__item">
                            <h3>Журнал посещаемости</h3>
                        </li>
                        <li className="add-settings-list__item">
                            <h3>Журнал оценок</h3>
                        </li>
                        <li className="add-settings-list__item">
                            <h3>Домашняя работа</h3>
                        </li>
                        <li className="add-settings-list__item">
                            <h3>Записи онлайн-трансляций</h3>
                        </li>
                        <li className="add-settings-list__item">
                            <h3>Черный список пользователей</h3>
                        </li>
                        <li className="add-settings-list__item">
                            <h3>Чат участников</h3>
                        </li>
                    </ul>
                </ul>
                <div className="course-create__right course-files">
                    <div className="course-create__import import-cover">
                        <div className="import-cover__title h3 light">
                            <h3>Файл-обложка</h3>
                        </div>
                        <div className="import-cover__rect">
                            <img className="import-cover__rect_dir" src={pathImg + "dir.png"} alt=""/>
                            <img className="import-cover__rect_loadIcon" src={pathImg + "arrow.svg"} alt=""/>
                        </div>
                    </div>
                    <div className="course-create__cover">
                        <div className="course-create__cover_img">
                            <img src={pathImg + "обложка.jpg"} alt=""/>
                        </div>
                        <div className="course-create__cover_title h2 light">
                            <h3>Название курса</h3>
                        </div>
                        <div className="course-create__cover_date h4 light">
                            <h4>31 августа 2023 - 1 февраля 2024</h4>
                        </div>
                    </div>
                </div>
                <div className="course-create__button">
                    <GreenBtn text={'Создать курс'} onClick={(event)=>navigate('../import')}/>
                </div>
            </div>
        </div>
    );
}

export default CreateCourse;