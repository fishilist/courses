import './Main.scss'
import Sidebar from "./Sidebar/Sidebar.jsx";
import {useEffect} from "react";
import {Outlet, useLocation, useNavigate} from "react-router-dom";
import SidebarStart from "./SidebarStart/SidebarStart.jsx";
import SidebarMailing from "./SidebarMailing/SidebarMailing.jsx";
import SidebarRoles from "./SidebarRoles/SidebarRoles.jsx";
import SidebarJournal from "./SidebarJournal/SidebarJournal.jsx";
import SidebarCourse from "./SidebarCourse/SidebarCourse.jsx";
import SidebarTeam from "./SidebarTeam/SidebarTeam.jsx";
import SidebarImport from "./SidebarImport/SidebarImport.jsx";

function Main() {
    const navigate = useNavigate();
    const url = useLocation()

    useEffect(() => {
        let user = JSON.parse(localStorage.getItem('user'));
        if (!user) {
            navigate('/authorization/login');
        } else {
            navigate('start');
        }
    }, [])

    function getSideBar() {
        switch (url.pathname) {
            case "/start":
                return <SidebarStart/>
            case "/team":
                return <SidebarTeam/>
            case "/course":
                return <SidebarCourse/>
            case "/journal":
                return <SidebarJournal/>
            case "/roles":
                return <SidebarRoles/>
            case "/mailing":
                return <SidebarMailing/>
            case "/create/import":
                return <SidebarImport/>
            default:
                return <></>
        }
    }

    return <main className={'Main wallpaper'}>
        <Sidebar component={getSideBar()}/>
        <Outlet/>
    </main>
}

export default Main;