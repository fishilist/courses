import './UnknownItem.scss'

function UnknownItem({item, config, callbackClick}) {
    const pathImg = './img/';
    return (
        <li onClick={(event) => callbackClick(item, event)}
            className={`${config.classItem} ${config.classFile} h3`}>
            <div className="files__item_highlight"></div>
            <img src={pathImg + "no-file.png"} alt="" className="files__item_img"/>
            <div className={`${config.classText} light`}>
                <p>{item.title}</p>
            </div>
        </li>)
}

export default UnknownItem;