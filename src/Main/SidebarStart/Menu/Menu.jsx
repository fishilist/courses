import '../../../assets/styles/icon-font.scss'
import './Menu.scss'
import {useEffect, useRef, useState} from "react";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {addRoles} from "../../../assets/store/rolesReducer.js";

function Menu(props) {
    const dispatch = useDispatch();
    const courses = useSelector(store => store.courses.courses);
    const teams = useSelector(store => store.teams.teams);
    const journals = useSelector(store => store.journals.journals);
    let categories = useRef();
    let [activeFile, setActiveFile] = useState()

    useEffect(() => {
        console.log("Menu rendered...\nWe get information by click on the current category")
    }, [])

    const getJournals = (e) => {
        setActiveCategory(e)
    }
    const getTeams = (e) => {
        setActiveCategory(e)
    }
    const getCourses = (e) => {
        setActiveCategory(e)
    }

    function setActiveCategory(event) {
        let item = event.currentTarget.closest('.category__item')
        if (item) {
            item.classList.toggle('active')
        }
    }

    function buildList(items, linkTo, classIcon = 'icon-people') {
        return <ul className="category__item_courses category-inner-list courses-list">
            {items.map(item => {
                return <li key={item.name} className="courses-list__item item-category">
                    <Link to={linkTo} className={'courses-list__title h5 light'}>
                        <span className={classIcon}></span>{item.name}
                    </Link>
                </li>
            })}
            <li className={"courses-list__item item-category"}>
                <Link to={'create/' + linkTo} className={'courses-list__title h5 light italic'}>
                    <span className={"icon-github"}></span>Создать еще
                </Link>
            </li>
        </ul>
    }


    return <div ref={categories} className="Menu category">
        <ul className="category__list">
            <li className="category__item">
                <h5 onClick={getTeams} className={'category__item_title h5 bold'}>
                    <span className={'icon-team'}></span>Team
                </h5>
                {teams.length ? buildList(teams, "team", 'icon-people')
                    : <ul className="category__item_courses category-inner-list courses-list">
                        <li className={"courses-list__item item-category"}>
                            <Link to={'create/team'} className={'courses-list__title h5 light'}>
                                <span className={"icon-team"}></span>Добавить команду
                            </Link>
                        </li>
                    </ul>}
            </li>
            <li className="category__item">
                <h5 onClick={getJournals} className={'category__item_title h5 bold'}>
                    <span className={'icon-journal'}></span>Journal
                </h5>
                {journals.length ? buildList(journals, "journal", 'icon-man')
                    : <ul className="category__item_courses category-inner-list courses-list">
                        <li className={"courses-list__item item-category"}>
                            <Link to={'create/team'} className={'courses-list__title h5 light'}>
                                <span className={"icon-team"}></span>Добавить журнал
                            </Link>
                        </li>
                    </ul>}
            </li>
            <li className="category__item">
                <h5 onClick={getCourses} className={'category__item_title h5 bold'}>
                    <span className={'icon-calendar'}></span>Courses
                </h5>
                {courses.length ? buildList(courses, "course", 'icon-calendar')
                    : <ul className="category__item_courses category-inner-list courses-list">
                        <li className={"courses-list__item item-category"}>
                            <Link to={'create/course'} className={'courses-list__title h5 light italic'}>
                                <span className={"icon-github"}></span>Добавить курс
                            </Link>
                        </li>
                    </ul>}
            </li>
            <li onClick={setActiveCategory} className="category__item">
                <Link to={'roles'} className={'category__item_title h5 bold'}>
                    <span className={'icon-calendar'}></span>Roles
                </Link>
            </li>
            <li onClick={setActiveCategory} className="category__item">
                <Link to={'mailing'} className={'category__item_title h5 bold'}>
                    <span className={'icon-calendar'}></span>Email newsletter
                </Link>
            </li>
        </ul>
    </div>
}

export default Menu;