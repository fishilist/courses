import './SidebarImport.scss'

function SidebarImport(props) {
    const pathImg = '../../../../public/img/'
    return (
        <div className={'header-import'}>
            <div className="header-import__img">
                <img className="header-import__img_dir" src={pathImg + "dir.png"} alt=""/>
                <img className="header-import__img_arrow" src={pathImg + "arrow.svg"} alt=""/>
            </div>
        </div>
    );
}

export default SidebarImport;