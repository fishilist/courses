import './Authorization.scss'
import '../assets/styles/icon-font.scss'
import Login from "./Login/Login.jsx";
import Registration from "./Registration/Registration.jsx";
import {Outlet} from "react-router-dom";

function Authorization(props) {
    let pathImg = '../../public/img/';
    return <div className={'Authorization auth'}>
        <div className="auth__icon">
            <img src={pathImg + "person.png"} alt="авторизация" className="auth__icon_img"/>
        </div>
        <div className="auth__body">
            <Outlet/>
        </div>
        <ul className="auth__socials">
            <li className="auth__socials_icon">
                <a className={'auth__socials_link icon-facebook'} href=""></a>
            </li>
            <li className="auth__socials_icon">
                <a className={'auth__socials_link icon-github'} href=""></a>
            </li>
            <li className="auth__socials_icon">
                <a className={'auth__socials_link icon-twitter'} href=""></a>
            </li>
            <li className="auth__socials_icon">
                <a className={'auth__socials_link icon-youtube'} href=""></a>
            </li>
        </ul>
    </div>
}

export default Authorization;