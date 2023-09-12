import './SidebarCourse.scss'
import Import from "./Import/Import.jsx";
import Files from "./Files/Files.jsx";

function SidebarCourse(props) {
    let hasFiles = true;

    const config = {
        classList: 'files-list',
        classItem: 'files__item',
        classFile: 'file',
        classFolder: 'folder',
        classActive: 'active',
        classText: 'files__item_title',
        classFileWrapper: 'file-wrapper',
        classTitle: 'files__item_title',
        marginLeft: 20,
        isClosedFiles: false,
        alwaysOpenFile: true,
    }

    return <nav className="header__nav navigation">
        <div className="navigation__project project-nav">
            {hasFiles ? <Files config={config}/> : <Import/>}
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

export default SidebarCourse;