import '../../assets/styles/icon-font.scss'
import './Menu.scss'
import {useRef, useState} from "react";

function Menu(props) {
    let categories = useRef();
    let [activeFile, setActiveFile] = useState()
    function clickCategoryHandler(event) {
        let item = event.currentTarget.closest('.category__item')
        if (item) {
            item.classList.toggle('active')
        }
    }

    function clickItemHandler(event) {
        event.preventDefault()
        const elements = categories.current?.querySelectorAll('.item-category')
        if (elements.length) {
            for (const item of elements) {
                item.classList.remove('active')
            }
        }
        event.currentTarget.classList.add('active')
        let text = event.currentTarget.querySelector('.courses-list__title').text;
        setActiveFile(text)
    }

    return <div ref={categories} className="Menu category">
        <ul className="category__list">
            <li className="category__item">
                <h5 onClick={clickCategoryHandler} className={'category__item_title h5 bold'}>
                    <span className={'icon-team'}></span>Team
                </h5>
            </li>
            <li className="category__item">
                <h5 onClick={clickCategoryHandler} className={'category__item_title h5 bold'}>
                    <span className={'icon-journal'}></span>Journal
                </h5>
            </li>
            <li className="category__item">
                <h5 onClick={clickCategoryHandler} className={'category__item_title h5 bold'}>
                    <span className={'icon-calendar'}></span>Courses
                </h5>
                <ul className="category__item_courses category-inner-list courses-list">
                    <li className="courses-list__item item-category" onClick={clickItemHandler}>
                        <a href={''} className={'courses-list__title h5 light'}><span className={'icon-people'}></span>JavaScript</a>
                    </li>
                    <li className="courses-list__item item-category" onClick={clickItemHandler}>
                        <a href={''} className={'courses-list__title h5 light'}><span className={'icon-people'}></span>C++</a>
                    </li>
                    <li className="courses-list__item item-category" onClick={clickItemHandler}>
                        <a href={''} className={'courses-list__title h5 light'}><span className={'icon-people'}></span>Python</a>
                    </li>
                </ul>
            </li>
            <li onClick={clickCategoryHandler} className="category__item">
                <h5 className={'category__item_title h5 bold'}>
                    <span className={'icon-calendar'}></span>Roles
                </h5>
            </li>
            <li onClick={clickCategoryHandler} className="category__item">
                <h5 className={'category__item_title h5 bold'}>
                    <span className={'icon-calendar'}></span>Email newsletter
                </h5>
            </li>
        </ul>
    </div>
}

export default Menu;