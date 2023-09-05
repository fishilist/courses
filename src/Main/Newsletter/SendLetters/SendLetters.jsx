import "./SendLetters.scss"
import '../../../assets/styles/classes.scss'
import GreenBtn from "../../../assets/components/GreenBtn/GreenBtn.jsx";

function SendLetters(props) {
    function blurHandler(event) {
        const textarea = event.target
        if (textarea.value === '') {
            textarea.placeholder = "Введите список пользователей"
        }
    }

    function clickHandler(event) {
        const textarea = event.target
        if (textarea.value === '') {
            event.target.placeholder = ''
        }
        const form = event.currentTarget.closest('.letters-send');
        if (!form) return
        form.classList.remove('error')
    }

    function checkEmail(email) {
        const EMAIL_REGEXP = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        return EMAIL_REGEXP.test(String(email).toLowerCase());
    }

    function collectEmails(text) {
        let emails = text.split(/\\n|,|;|\s/)
        let correct = [];
        let uncorrected = []
        emails.forEach(email => {
            if (checkEmail(email)) {
                correct.push(email);
            } else {
                uncorrected.push(email);
            }
        })
        return [correct, uncorrected]
    }

    function handleSubmit(event) {
        event.preventDefault();
        // Read the form data
        const form = event.target;
        const formData = new FormData(form);
        const formJson = Object.fromEntries(formData.entries());
        let isOk = true;

        let [emails, mistakes] = collectEmails(form.textarea.value)
        console.log("Correct", emails)
        console.log("Mistakes", mistakes)

        if (!emails.length) {
            isOk = false;
        }

        if (isOk) {
            form.send.disabled = true
            console.log(formJson);
            setTimeout(() => {
                form.send.disabled = false
            }, 1500)
        } else {
            form.classList.add('error')
        }
    }

    return <form method="post" onSubmit={handleSubmit} className="SendLetters letters-send">
        <div className="letters-send__filed">
            <div className="letters-send__filed_note">
                <h5 className={'h5'}>Неправильные данные!</h5>
            </div>
            <textarea name="textarea"
                      onBlur={blurHandler}
                      onFocus={clickHandler}
                      className="letters-send__filed_textarea h3"
                      placeholder={"Введите список пользователей"}></textarea>
        </div>
        <div className="letters-send__note">
            <h6 className="h5 italic">Введите email пользователей. Им будут отправлены данные для входа на курс с указанными параметрами. Вводить отдельные данные можно через точку, запятую, пробел, точку с запятой или с новой строки.</h6>
        </div>
        <div className="letters-send__button">
            <button name={'send'} type={"submit"} className={'Transparent-button h2'}>Отправить</button>
        </div>
    </form>
}

export default SendLetters;