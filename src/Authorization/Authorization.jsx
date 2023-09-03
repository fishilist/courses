import './Authorization.scss'
import '../assets/styles/icon-font.scss'
import Login from "./Login/Login.jsx";
import Registration from "./Registration/Registration.jsx";

function Authorization(props) {
    return <div className={'Authorization auth'}>
        <div className="auth__icon">
            <img src="./img/person.png" alt="" className="auth__icon_img"/>
        </div>
        <div className="auth__body">
            <Login/>
            {/*<Registration/>*/}
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