import React, {useEffect, useRef, useState} from "react";
import './Files.scss'

function Files({files, search}) {
    const dirs = useRef();
    const classList = 'files-list'
    const classListItem = 'files__item'
    const classFile = 'file'
    const classActive = 'active'
    const marginLeft = 20 //px
    const isClosedFiles = false;

    let [copyFiles, setCopyFiles] = useState([])
    let [activeFile, setActiveFile] = useState();

    useEffect(()=>{
        searchFiles(files, search.toLowerCase())
    },[search])

    function getActiveFiles() {
        return dirs.current?.querySelectorAll(`.${classFile}`);
    }

    function getFilesList() {
        return dirs.current?.querySelectorAll(`.${classList}`);
    }

    function getAllFiles() {
        return dirs.current?.querySelectorAll(`.${classListItem}`);
    }

    function searchFiles(files, search) {
        setActive(false, dirs.current?.querySelectorAll(`.${classListItem}`), dirs.current?.querySelectorAll(`.${classList}`))
        setCopyFiles(searchFilter(files, search.toLowerCase()))
        if (search !== '') {
            let items = dirs.current.querySelectorAll(`.files__item_title p`)
            let result = [];
            for (const item of items) {
                if (item.textContent.toLowerCase().indexOf(search) !== -1) {
                    result.push(item.closest(`.${classListItem}`))
                }
            }
            result.forEach(item => {
                let parentList = item.closest(`.${classList}`)
                while (parentList?.previousSibling?.classList.contains(classListItem)) {
                    parentList.classList.add('active')
                    parentList.previousSibling.classList.add('active')
                    parentList = parentList.previousSibling.closest(`.${classList}`)
                }
                if (item.classList.contains('file')) {
                    return;
                }
                item.classList.add('active')
                if (item.nextSibling?.classList.contains(classList)) {
                    item.nextSibling.classList.add('active');
                }
            })
        }
    }

    function searchFilter(files, search) {
        let res = files.filter(file => {
            switch (file.type) {
                case 'file':
                    if (file.fullName.toLowerCase().indexOf(search) !== -1) {
                        return file
                    }
                    return false;
                case 'folder':
                    let result = [];
                    if (file.children.length) {
                        let isChildHas = searchFilter(file.children, search);
                        if (isChildHas.length) {
                            result = [...isChildHas]
                        }
                    }
                    if (file.title.toLowerCase().indexOf(search) !== -1) {
                        //searchedFiles.current.push(file.id)
                        return result = [...result, file]
                    } else if (result.length) {
                        return result
                    } else {
                        return false
                    }
                default:
                    if (file?.title?.toLowerCase().indexOf(search) !== -1) {
                        //searchedFiles.current.push(file.id)
                        return file
                    }
                    return false;
            }
        });
        return res
    }

    function findParent(element, selector, index = 0) {
        if (!element) return null;
        if (element.matches(selector) && index !== 0) return element;
        if (!element.parentElement) {
            return null;
        } else {
            index++;
            return findParent(element.parentElement, selector, index)
        }
    }

    function getUpListsFiles(elementNode, selector) {
        let result = [];
        let parentElement;
        do {
            parentElement = findParent(elementNode, selector);
            if (!parentElement) break;

            result = [...result, parentElement]
            elementNode = parentElement;

        } while (parentElement);

        return result;
    }

    function getUpItems(elementNode) {
        let result = []
        let parentLists = getUpListsFiles(elementNode, `.${classList}`);
        if ((parentLists.length - 1) < 0) return []

        parentLists.forEach(item => {
            let prevElem = item.previousSibling
            if (prevElem) {
                result = [...result, prevElem]
            }
        })

        return result;
    }

    function getDownListsFiles(elementNode) {
        let sibling;
        let result = []
        if (elementNode.classList.contains('Files')) {
            result = [elementNode, ...elementNode.querySelectorAll(`.${classList}`)]
        } else {
            sibling = elementNode.nextSibling;
            if (sibling?.classList.contains(`${classList}`)) {
                result = [sibling, ...sibling.querySelectorAll(`.${classList}`)]
            }
        }
        return result
    }

    function getDownItems(arrayNodes) {
        if (!arrayNodes.length) return []

        let result = [];
        arrayNodes.forEach(node => {
            let items = node.querySelectorAll(`.${classListItem}`);
            if (items) {
                result.push(...node.querySelectorAll(`.${classListItem}`))
            }
        })
        return result
    }

    function setActive(boolean = true, ...args) {
        if (!args.length) return
        if (boolean) {
            for (let i = 0; i < args.length; i++) {
                args[i].forEach(item => {
                    item.classList.add(classActive)
                })
            }
        } else {
            for (let i = 0; i < args.length; i++) {
                args[i].forEach(item => {
                    item.classList.remove(classActive)
                })
            }
        }
    }

    function setNextListActive(elementNode, boolean = true) {
        let nextList = elementNode.nextSibling;
        if (boolean) {
            if (nextList?.classList.contains(classList)) {
                nextList.classList.add(classActive)
            }
        } else {
            if (nextList?.classList.contains(classList)) {
                nextList.classList.remove(classActive)
            }
        }
    }

    function clickDirHandler(event) {
        let fileItem = event.currentTarget;

        if (!isClosedFiles) {
            if (fileItem.classList.contains(classActive)) {
                fileItem.classList.remove('active')
                const listFiles = getDownListsFiles(fileItem);
                let itemsListFiles = getDownItems(listFiles);
                setActive(false, listFiles, itemsListFiles)
            } else {
                setNextListActive(fileItem, true)
                fileItem.classList.add(classActive);
            }
        } else {
            if (fileItem.classList.contains(classActive)) {
                setActive(false, getFilesList(), getAllFiles());
                setNextListActive(fileItem, false)
            } else {
                setActive(false, getFilesList(), getAllFiles());
                setNextListActive(fileItem, true)
                fileItem.classList.add(classActive);
            }
        }

        let upLists = getUpListsFiles(fileItem, `.${classList}`);
        let upItems = getUpItems(fileItem);
        setActive(true, upLists, upItems)
    }

    function clickFileHandler(file, event) {
        let item = event.currentTarget;
        if (item.classList.contains('active')) {
            setActive(false, getActiveFiles())
            item.classList.remove('active');
            setActiveFile(null);
        } else {
            setActive(false, getActiveFiles())
            item.classList.add('active');
            setActiveFile(file);
        }
    }

    function buildFiles(files, margLeft = marginLeft, margMult = 1) {
        if (files.length === 0) return <li>Doesn't have any files</li>
        return files.map((item) => {
            switch (item.type) {
                case 'file': {
                    return <li onClick={(event) => clickFileHandler(item, event)}
                               key={item.id}
                               className={'files__item h3 file'}>
                        <div className="files__item_highlight"></div>
                        <img src="./img/file.png" alt="" className="files__item_img"/>
                        <div className="files__item_title light">
                            <p>{item.title}.{item.extension}</p>
                        </div>
                    </li>
                }
                case 'folder': {
                    return <React.Fragment key={item.id}>
                        <li onClick={clickDirHandler}
                            className={`${classListItem} h3`}>
                            <div className="files__item_highlight"></div>
                            <img src="./img/dir.png" alt="" className="files__item_img"/>
                            <div className="files__item_title light">
                                <p>{item.title}</p>
                            </div>
                            <div className="files__item_arrow icon-arrow"></div>
                        </li>
                        {item.children.length > 0 ?
                            <ul className={classList} style={{marginLeft: margLeft * margMult + 'px'}}>
                                {buildFiles(item.children, margLeft, margMult + 1)}
                            </ul>
                            : <></>}
                    </React.Fragment>
                }
                default: {
                    return <li onClick={(event) => clickFileHandler(item, event)} key={item.id}
                               className={'files__item h3 file'}>
                        <div className="files__item_highlight"></div>
                        <img src="./img/no-file.png" alt="" className="files__item_img"/>
                        <div className="files__item_title light">
                            <p>{item.title}</p>
                        </div>
                    </li>
                }
            }
        });
    }

    return <ul ref={dirs} className="Files">
        {buildFiles(copyFiles)}
    </ul>
}

export default Files;