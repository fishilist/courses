import './GreenBtn.scss'

function GreenBtn({text, ...args}) {

    return <button className={'Green-button h2'} {...args}>{text}</button>
}

export default GreenBtn;