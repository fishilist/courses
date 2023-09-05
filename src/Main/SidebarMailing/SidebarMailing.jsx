import './SidebarMailing.scss'
import Menu from "../SidebarStart/Menu/Menu.jsx";

function SidebarMailing(props) {
    return <nav className="header__nav navigation">
        <div className="navigation__project project-nav">
            <Menu/>
        </div>
        <div className="header__bottom bottom-header">
            <ul className="bottom-header__list">
                <li className="bottom-header__item">
                    <a href="" className="bottom-header__link icon-man"></a>
                </li>
                <li className="bottom-header__item">
                    <a href="" className="bottom-header__link icon-journal"></a>
                </li>
            </ul>
        </div>
    </nav>
}

export default SidebarMailing;