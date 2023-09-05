import './Start.scss'
import GreenBtn from "../../assets/components/GreenBtn/GreenBtn.jsx";

function Start(props) {
    return <div className={'empty-courses'}>
        <div className="empty-courses__title h1 light">
            <p>У вас пока нет ни одного курса</p>
        </div>
        <GreenBtn text={'Создать курс'}/>
    </div>
}

export default Start;