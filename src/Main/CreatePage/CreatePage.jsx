import "../../assets/styles/classes.scss";
import './CreatePage.scss'
import CreateCourse from "./CreateCourse/CreateCourse.jsx";

function CreatePage({title}) {
    return <div className="CreatePage page-create">
        <div className="page-create__title h1 light">
            <p>{title}</p>
        </div>
        <div className="page-create__body">
            <CreateCourse/>
        </div>
    </div>
}

export default CreatePage;