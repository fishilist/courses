import './assets/styles/null.scss';
import './assets/styles/classes.scss';
import './assets/styles/icon-font.scss';
import './App.scss';
import Header from "./Header/Header.jsx";
import Main from "./Main/Main.jsx";

function App() {
    return <div className={'App'}>
        <img src="./img/background.jpg" className={'background-screen_img'} alt=""/>
        <Header/>
        <Main/>
    </div>
}

export default App
