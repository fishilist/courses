import React, {useEffect, useRef, useState} from "react";
import './Files.scss'
import FolderItem from "./FolderItem/FolderItem.jsx";
import FileItem from "./FileItem/FileItem.jsx";
import UnknownItem from "./UnknownItem/UnknownItem.jsx";

function Files({files, search, config}) {
    const root = useRef();

    let [copyFiles, setCopyFiles] = useState([])
    let [activeFile, setActiveFile] = useState();

    // Filter files and directories by the search line
    useEffect(() => {
        setClass(config.classActive, false, getCurrentLists(), getCurrentItems())
        if (search !== '') {
            searchFiles(files, search.toLowerCase())
        } else {
            setCopyFiles(files)
        }
    }, [search])

    // Search logic ====================================================================================================
    // Filter, set active items and open parent folders
    function searchFiles(files, search) {
        let filteredTree = filterBySearch(files, search.toLowerCase())
        setCopyFiles(filteredTree)
        openSearchedItems(search.toLowerCase())
    }

    // This function is recursion
    function filterBySearch(files, search) {
        return files.filter(file => {
            switch (file.type) {
                case 'file':
                    if (file.fullName.toLowerCase().indexOf(search) !== -1) {
                        return file
                    }
                    return false;
                case 'folder':
                    let result = [];
                    if (file.children.length) {
                        let isChildHas = filterBySearch(file.children, search);
                        if (isChildHas.length) {
                            result = isChildHas
                            // result = [...isChildHas]
                        }
                    }
                    if (file.title.toLowerCase().indexOf(search) !== -1) {
                        return result.push(file)
                        //return result = [...result, file]
                    } else if (result.length) {
                        return result
                    } else {
                        return false
                    }
                default:
                    if (file?.title?.toLowerCase().indexOf(search) !== -1) {
                        return file
                    }
                    return false;
            }
        });
    }
    // =================================================================================================================

    // Create Tree logic ===============================================================================================
    // Set active class for searched item and his parents but file will not be active
    function openSearchedItems(search) {
        let items = root.current?.querySelectorAll(`.${config.classTitle} p`)
        if (!items.length) return

        let result = [];
        for (const item of items) {
            if (item.textContent.toLowerCase().indexOf(search) !== -1) {
                result.push(item.closest(`.${config.classItem}`))
            }
        }
        result.forEach(item => {
            let parentList = item.closest(`.${config.classList}`)
            parentList?.classList.add(config.classActive)

            let upLists = getUpLists(item, `.${config.classList}`)
            let nearItems = getUpNearItems(item, config.classList)
            setClass(config.classActive, true, upLists, nearItems)

            if (item.classList.contains(config.classFile)) {
                return;
            }
            item.classList.add(config.classActive)
            if (item.nextSibling?.classList.contains(config.classList)) {
                item.nextSibling.classList.add(config.classActive);
            }
        })
    }

    // Get current active item from the tree
    function getFileItems() {
        return root.current?.querySelectorAll(`.${config.classFile}`);
    }

    // Get current files from the tree
    function getCurrentLists() {
        return root.current?.querySelectorAll(`.${config.classList}`);
    }

    // Get current items from the tree
    function getCurrentItems() {
        return root.current?.querySelectorAll(`.${config.classItem}`);
    }

    // Find parent by selector not include itself
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

    // Return all up lists by selector as array
    function getUpLists(elementNode, selector) {
        let result = [];
        let parentElement;
        do {
            parentElement = findParent(elementNode, selector);
            if (!parentElement) break;

            result.push(parentElement)
            elementNode = parentElement;

        } while (parentElement);

        return result;
    }

    // Return up sibling item thanks to relative to the parent class
    function getUpNearItems(elementNode, upParentClass) {
        let result = []
        let parentLists = getUpLists(elementNode, `.${upParentClass}`);
        if ((parentLists.length - 1) < 0) return []

        parentLists.forEach(item => {
            let prevElem = item.previousSibling
            if (prevElem?.classList.contains(config.classItem)) {
                result.push(prevElem)
            }
        })

        return result;
    }

    // Return array of down lists
    function getDownLists(elementNode) {
        let sibling;
        let result = []
        if (elementNode.classList.contains(config.classFileWrapper)) {
            result = [elementNode, ...elementNode.querySelectorAll(`.${config.classList}`)]
        } else {
            sibling = elementNode.nextSibling;
            if (sibling?.classList.contains(`${config.classList}`)) {
                result = [sibling, ...sibling.querySelectorAll(`.${config.classList}`)]
            }
        }
        return result
    }

    // Return down items without repetition
    function getDownItems(arrayLists) {
        if (!arrayLists.length) return []

        let allItems = [];
        arrayLists.forEach(node => {
            let items = node.querySelectorAll(`.${config.classItem}`);
            if (!items.length) return

            allItems.push(...items)
        })
        return allItems.filter((element, index) => {
            return allItems.indexOf(element) === index;
        });
    }

    // Set class, add or remove from array
    function setClass(className, add = true, ...args) {
        if (!args.length) return
        if (add) {
            for (let i = 0; i < args.length; i++) {
                args[i].forEach(item => {
                    item.classList.add(className)
                })
            }
        } else {
            for (let i = 0; i < args.length; i++) {
                args[i].forEach(item => {
                    item.classList.remove(className)
                })
            }
        }
    }

    // Set class add or remove for next sibling list
    function setNextListClass(nodeElement, className, add = true) {
        let nextList = nodeElement.nextSibling;
        if (!nextList) return
        if (add) {
            if (nextList.classList.contains(config.classList)) {
                nextList.classList.add(className)
            }
        } else {
            if (nextList.classList.contains(config.classList)) {
                nextList.classList.remove(className)
            }
        }
    }

    // Return a new tree if the file has children
    function checkChildren(file, deep) {
        if (file.children.length > 0) {
            return (
                <ul className={config.classList} style={{marginLeft: config.marginLeft * deep + 'px'}}>
                    {createTree(file.children, deep + 1)}
                </ul>)
        } else {
            return <></>
        }
    }

    // This function is recursion
    function createTree(files, deep = 1) {
        if (files.length === 0) return <li className={`${config.classItem} h3`}>Doesn't have any files</li>
        return files.map((item) => {
            switch (item.type) {
                case 'file': {
                    return <FileItem key={item.id} item={item} config={config} callbackClick={clickFileHandler}/>
                }
                case 'folder': {
                    return (
                        <React.Fragment key={item.id}>
                            <FolderItem item={item} config={config} callbackClick={clickDirHandler}/>
                            {checkChildren(item, deep)}
                        </React.Fragment>)
                }
                default: {
                    return <UnknownItem key={item.id} item={item} config={config} callbackClick={clickFileHandler}/>
                }
            }
        });
    }
    // =================================================================================================================

    // Event Tree logic ================================================================================================
    // Function for Folders that happens on event click for them
    function clickDirHandler(event) {
        let item = event.currentTarget;

        if (!config.isClosedFiles) {
            console.log('Unclosed Files mode')
            // Files are static and do not close without action for them
            if (item.classList.contains(config.classActive)) {
                // Delete active class from all files ad folder down
                item.classList.remove(config.classActive)
                const downLists = getDownLists(item);
                const downItems = getDownItems(downLists);
                setClass(config.classActive, false, downLists, downItems)
            } else {
                // Add active class for current item and the sibling list
                item.classList.add(config.classActive);
                setNextListClass(item, config.classActive, true)
            }
        } else {
            console.log('Closed Files mode')
            // Files are not static and close automatically
            if (item.classList.contains(config.classActive)) {
                // Delete active class for all lists and items
                setClass(config.classActive, false, getCurrentLists(), getCurrentItems());
                setNextListClass(item, config.classActive, false)
            } else {
                // Delete active class for all lists and items
                setClass(config.classActive, false, getCurrentLists(), getCurrentItems());
                setNextListClass(item, config.classActive, true)
                item.classList.add(config.classActive);
            }
            const upLists = getUpLists(item, `.${config.classList}`);
            const upItems = getUpNearItems(item, config.classList);
            setClass(config.classActive, true, upLists, upItems)
        }
    }

    // Function for File items that happens on event click for them
    function clickFileHandler(file, event) {
        let item = event.currentTarget;
        if (item.classList.contains('active')) {
            setClass(config.classActive, false, getFileItems())
            if (config.alwaysOpenFile) return;
            setActiveFile(null);
        } else {
            setClass(config.classActive, false, getFileItems())
            item.classList.add('active');
            setActiveFile(file);
        }
    }
    // =================================================================================================================

    return <ul ref={root} className={`Files ${config.classFileWrapper}`}>
        {createTree(copyFiles)}
    </ul>
}

export default Files;