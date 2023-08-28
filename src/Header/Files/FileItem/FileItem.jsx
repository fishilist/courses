import './FileItem.scss'
import React from "react";

function FileItem({item, config, callbackClick}) {
    return <li onClick={(event) => callbackClick(item, event)}
               key={item.id}
               className={`${config.classItem} ${config.classFile} h3`}>
        <div className="files__item_highlight"></div>
        <img src="./img/file.png" alt="" className="files__item_img"/>
        <div className={`${config.classText} light`}>
            <p>{item.title}.{item.extension}</p>
        </div>
    </li>
}

export default FileItem;