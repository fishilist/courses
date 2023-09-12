import './ImportFile.scss'
import {useRef, useState} from "react";
import greenBtn from "../../../assets/components/GreenBtn/GreenBtn.jsx";
import GreenBtn from "../../../assets/components/GreenBtn/GreenBtn.jsx";
import {useNavigate} from "react-router-dom";

function ImportFile(props) {
    const pathImg = '../../../../public/img/'
    const [drag, setDrag] = useState(false)
    const [hasFiles, setHasFiles] = useState(false)
    const importArea = useRef()
    const navigate = useNavigate();
    const [fileName, setFileName] = useState('')
    const filePicker = useRef();
    const url = 'https://...'

    function dragStartHandler(event) {
        event.preventDefault()
        setDrag(true)
    }

    function dragLeaveHandler(event) {
        event.preventDefault()
        setDrag(false)
    }

    function onDropHandler(event) {
        event.preventDefault()
        let files = [...event.dataTransfer.files]
        const formData = new FormData();

        formData.append('file_name', files[0])

        console.log(formData.get('file_name'))
        setFileName(formData.get('file_name').name)

        setHasFiles(true)
        setDrag(false)
    }

    function setNote() {
        if (hasFiles) {
            return <GreenBtn text={'Создать курс'} onClick={() => navigate('/course')}/>
        }
        if (drag) {
            return <div className="file-import__note_drop h3">Отпустите файлы, чтобы загрузить их</div>
        } else {
            return <div className="file-import__note_drag h3">Перетащите файлы, чтобы загрузить их</div>
        }
    }

    function pickFileHandler(event) {
        filePicker.current.click();
    }

    async function inputClickHandler(event) {
        let files = event.target.files
        const formData = new FormData();
        // Нужно добавить каждый файл в форму
        formData.append('file_name', files[0])

        const result = await fetch(url, {
            method: 'POST',
            body: formData,
        })

        const data = await result.json()

        setFileName(formData.get('file_name').name)
        setHasFiles(true)
        setDrag(false)
    }
    return (
        <div className={'file-import'}>
            <input ref={filePicker} onChange={inputClickHandler} type={"file"} className="file-import__input"></input>
            <div onDragStart={e => dragStartHandler(e)}
                 onDragLeave={e => dragLeaveHandler(e)}
                 onDragOver={e => dragStartHandler(e)}
                 onDrop={e => onDropHandler(e)}
                 className={hasFiles || drag ? 'file-import__container active' : 'file-import__container'}>
                <div className="file-import__img">
                    {hasFiles
                        ? <><img src={pathImg + "dir.png"} alt="" className="file-import__img_dir"/>
                            <h2 className={'h2 italic'}>{fileName}</h2></>
                        : <><img src={pathImg + "dir.png"} alt="" className="file-import__img_dir"/>
                            <img src={pathImg + "arrow.svg"} alt="" className="file-import__img_arrow"/></>}
                </div>
                <div className="file-import__note">
                    {setNote()}
                    <button onClick={pickFileHandler} className="file-import__note_btn h4">Выбрать файл</button>
                </div>
            </div>
        </div>
    );
}

export default ImportFile;