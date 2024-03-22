import './Course.scss'
//import CreateCourse from "./CreateCourse/CreateCourse.jsx";

function Course() {
    let hasCourse = false;
    let title = 'Полученное название курса'

    function getCourse() {
        return <></>
    }

    return <div className="CreatePage page-create">
        <div className="page-create__title h1 light">
            <p>{title}</p>
        </div>
        <div className="page-create__body">

        </div>
    </div>
}

export default Course;