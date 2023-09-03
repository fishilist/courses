import './Main.scss'
import NoOneCourse from "./NoOneCourse/NoOneCourse.jsx";
import SetAccess from "./SetAccess/SetAccess.jsx";
import CreatePage from "./CreatePage/CreatePage.jsx";
import Newsletter from "./Newsletter/Newsletter.jsx";

function Main() {
    return <main className={'Main wallpaper'}>
        {/*<NoOneCourse/>*/}
        {/*<SetAccess/>*/}
        {/*<CreatePage title={'Название чего-то'}/>*/}
        <Newsletter/>
    </main>
}

export default Main;