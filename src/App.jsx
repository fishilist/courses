import './assets/styles/null.scss';
import './assets/styles/classes.scss';
import './assets/styles/icon-font.scss';
import './App.scss';
import Sidebar from "./Main/Sidebar/./Sidebar.jsx";
import Main from "./Main/Main.jsx";
import Authorization from "./Authorization/Authorization.jsx";
import Login from "./Authorization/Login/Login.jsx";
import Registration from "./Authorization/Registration/Registration.jsx";
import {Route, Routes, useNavigate} from "react-router-dom";
import {useEffect} from "react";
import Start from "./Main/Start/Start.jsx";
import NotFound from "./Main/NotFound/NotFound.jsx";
import Mailing from "./Main/Mailing/Mailing.jsx";
import Roles from "./Main/Roles/Roles.jsx";
import Journal from "./Main/Journal/Journal.jsx";
import Course from "./Main/Course/Course.jsx";
import Team from "./Main/Team/Team.jsx";

function App() {
    const pathImg = '../public/img/'

    return <div className={'App'}>
        <Routes>
            <Route path={'/'} element={<Main/>}>
                <Route path={'start'} element={<Start/>}/>
                <Route path={'team'} element={<Team/>}/>
                <Route path={'course'} element={<Course/>}/>
                <Route path={'journal'} element={<Journal/>}/>
                <Route path={'roles'} element={<Roles/>}/>
                <Route path={'mailing'} element={<Mailing/>}/>
            </Route>
            <Route path={'/authorization'} element={<Authorization/>}>
                <Route path={'login'} element={<Login/>}/>
                <Route path={'registration'} element={<Registration/>}/>
            </Route>
            <Route path={'*'} element={<NotFound/>}/>
        </Routes>
        <img src={pathImg + "background.jpg"} className={'background-screen_img'} alt=""/>
    </div>
}

export default App
