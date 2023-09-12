import './Sidebar.scss'
import "../../assets/components/Input/Input.scss";
import {useCallback, useRef} from "react";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setSearch} from "../../assets/store/searchReducer.js";

function Sidebar({component = <></>}) {
    const dispatch = useDispatch();
    const pathImg = '../../public/img/';
    const header = useRef()
    const headerResizable = useRef()
    let searchPlaceholder = 'Search'

    function blurHandler(event) {
        const input = event.target
        if (input.value === '') {
            input.placeholder = searchPlaceholder
        }
    }

    function clickHandler(event) {
        const input = event.target
        if (input.value === '') {
            event.target.placeholder = ''
        }
    }

    function changeHandler(event) {
        dispatch(setSearch(event.target.value))
    }

    function mouseDownHandler() {
        document.addEventListener('mousemove', onMouseMove);

        document.onmouseup = function onMouseUp() {
            document.removeEventListener('mousemove', onMouseMove)
            document.onmouseup = null
        }
    }

    function touchDownHandler() {
        document.addEventListener('touchmove', onTouchMove);

        document.ontouchend = () => {
            document.removeEventListener('touchmove', onTouchMove)
            document.ontouchend = null
        };
    }

    function clickMenuIconHandler(event) {
        event.currentTarget.classList.toggle('active')
        header.current.classList.toggle('active')
    }

    const onMouseMove = useCallback(event => {
        if (!header.current) return
        let headerStyle = header.current.style

        if (event.pageX < 320) {
            return;
        }
        headerStyle.width = event.pageX + 'px'
    }, [])

    const onTouchMove = useCallback(event => {
        if (!header.current) return
        let headerStyle = header.current.style

        if (event.touches[0].pageX < 320) {
            return;
        }
        headerStyle.width = event.touches[0].pageX + 'px'
    }, [])

    return <header ref={header} className="header active">
        <div className="header__body">
            <div className="header__person person-header">
                <div className="person-header__img">
                    <img src={pathImg + "жаба.jpg"} alt=""/>
                </div>
                <div className="person-header__info">
                    <div className="person-header__info_name h4">
                        <p>John Bitterness</p>
                    </div>
                    <div className="person-header__info_role h5">
                        <p>Role: <span>admin</span></p>
                    </div>
                </div>
            </div>
            <div className="navigation__search">
                <input type='text'
                       onBlur={blurHandler}
                       onFocus={clickHandler}
                       onChange={changeHandler}
                       placeholder={searchPlaceholder}
                       className={'Input h4'}/>
                <div className="navigation__search_icon icon-search"></div>
            </div>
            <div className="project-nav__header h3 bold">
                <Link to={'start'} className={'icon-home'}><span>Home</span></Link>
            </div>
            {component}
        </div>
        <div className="header-menu active" onClick={clickMenuIconHandler}>
            <span></span><span></span><span></span>
        </div>
        <div className="header-resizable">
            <div ref={headerResizable} onTouchStart={touchDownHandler} onMouseDown={mouseDownHandler}
                 className="header-resizable__item"></div>
        </div>
    </header>
}

export default Sidebar;