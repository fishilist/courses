import './Creating.scss'
import {Outlet} from "react-router-dom";

function Creating(props) {
    return (
        <div className={"Creating"}>
            <Outlet/>
        </div>
    );
}

export default Creating;