import './Roles.scss'
import GreenBtn from "../../assets/components/GreenBtn/GreenBtn.jsx";
import {useSelector} from "react-redux";

function Roles(props) {
    const roles = useSelector(store => store.roles.roles);
    //const dispatch = useDispatch();
    function showRoles() {
        return roles.map(role => {
            return <li key={role.id} className="access-popup__item h4">
                <p className={'access-popup__item_text light'}>
                    <span className={'icon-checked'}></span>{role.name}
                </p>
            </li>
        })
    }

    return <div className={'Set-Access access-popup'}>
        <div className="access-popup__body">
            <div className="access-popup__title h1 light">
                <p>Возможность просмотра папки «src»</p>
            </div>
            <div className="access-popup__window">
                <div className="access-popup__window_title h2 light">
                    <p>Роли</p>
                </div>
                <ul className="access-popup__list">
                    {showRoles()}
                </ul>
                <div className="access-popup__window_btn">
                    <GreenBtn text={'Завершить настройку'}/>
                </div>
            </div>
        </div>
    </div>
}

export default Roles;