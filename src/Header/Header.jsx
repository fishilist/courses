import './Header.scss'
import Input from "../assets/components/Input/Input.jsx";
import Files from "./Files/Files.jsx";
import {useEffect, useState} from "react";

const files = [
    {
        id: 1,
        title: 'assets',
        type: 'folder',
        children: [
            {
                id: 2,
                title: 'styles',
                type: 'folder',
                children: [
                    {
                        id: 3,
                        title: 'server',
                        type: 'folder',
                        children: []
                    },
                    {
                        id: 4,
                        title: 'components',
                        type: 'folder',
                        children: [
                            {
                                id: 5,
                                title: 'index',
                                type: 'file',
                                extension: 'html',
                                fullName: 'index.html',
                            }
                        ]
                    }
                ]
            },
            {
                id: 6,
                title: 'alternative',
                type: 'folder',
                children: [
                    {
                        id: 7,
                        title: 'Folder...',
                        type: 'folder',
                        children: [
                            {
                                id: 8,
                                title: 'styles',
                                type: 'folder',
                                children: [
                                    {
                                        id: 9,
                                        title: 'server',
                                        type: 'folder',
                                        children: []
                                    },
                                    {
                                        id: 10,
                                        title: 'components',
                                        type: 'folder',
                                        children: [
                                            {
                                                id: 11,
                                                title: 'index',
                                                type: 'file',
                                                extension: 'html',
                                                fullName: 'index.html',
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                id: 12,
                                title: 'alternative',
                                type: 'folder',
                                children: [
                                    {
                                        id: 13,
                                        title: 'MISTAKE!!',
                                        type: 'someThing',
                                        children: [],
                                        fullName: 'MISTAKE!!',
                                    },
                                    {
                                        id: 14,
                                        title: 'TypeScript',
                                        type: 'file',
                                        extension: 'html',
                                        fullName: 'TypeScript.ts',
                                    }
                                ]
                            }
                        ],
                    },
                    {
                        id: 15,
                        title: 'TypeScript',
                        type: 'file',
                        extension: 'html',
                        fullName: 'TypeScript.ts',
                    }
                ]
            }
        ]
    },
    {
        id: 16,
        title: 'SQL',
        type: 'folder',
        children: []
    },
    {
        id: 17,
        title: 'Wrong))',
        type: 'someThing',
        children: [],
        fullName: 'Wrong))',
    },
    {
        id: 18,
        title: 'script',
        type: 'file',
        extension: 'js',
        fullName: 'script.js',
    }
]

function Header() {
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
    let searchInit = 'Search'
    let [search, setSearch] = useState('');

    function blurHandler(event) {
        const input = event.target
        if (input.value === '') {
            input.placeholder = searchInit
        }
    }

    function clickHandler(event) {
        const input = event.target
        if (input.value === '') {
            event.target.placeholder = ''
        }
    }

    function changeHandler(event) {
        setSearch(event.target.value)
    }

    return <header className="header">
        <div className="header__person person-header">
            <div className="person-header__img">
                <img src="./img/жаба.jpg" alt=""/>
            </div>
            <div className="person-header__info">
                <div className="person-header__info_name h4">
                    <p>John Bigternev</p>
                </div>
                <div className="person-header__info_role h5">
                    <p>Role: <span>admin</span></p>
                </div>
            </div>
        </div>
        <nav className="header__nav navigation">
            <div className="files__item"></div>
            <div className="navigation__search">
                <input type='text'
                       onBlur={blurHandler}
                       onFocus={clickHandler}
                       onChange={changeHandler}
                       placeholder={searchInit}
                       className={'Input h4'}/>
                <div className="navigation__search_icon icon-search"></div>
            </div>
            <div className="navigation__project project-nav">
                <div className="project-nav__header h3 bold">
                    <p className={'icon-home'}><span>src</span></p>
                </div>
                <Files files={files} search={search} config={config}/>
            </div>
        </nav>
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
    </header>
}

export default Header;