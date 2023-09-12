import './FolderItem.scss'

function FolderItem({item, config, callbackClick}) {
    const pathImg = './img/';
    return <li onClick={(event) => callbackClick(event)}
               className={`${config.classItem} ${config.classFolder} h3`}>
        <div className="files__item_highlight"></div>
        <img src={pathImg + "dir.png"} alt="" className="files__item_img"/>
        <div className={`${config.classText} light`}>
            <p>{item.title}</p>
        </div>
        <div className="files__item_arrow icon-arrow"></div>
    </li>
}

export default FolderItem;