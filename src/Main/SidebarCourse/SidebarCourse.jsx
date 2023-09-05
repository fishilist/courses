import './SidebarCourse.scss'
import Import from "./Import/Import.jsx";
import Files from "./Files/Files.jsx";

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
            {hasFiles ? <Files config={config} search={''} files={files}/> : <Import/>}
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