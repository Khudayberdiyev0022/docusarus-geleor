import React, {useState} from 'react'
import style from './ServiceMenu.module.css'


function ServiceMenu() {
    const [one, setOne] = useState(true)
    const [two, setTwo] = useState(false)
    const [three, setThree] = useState(false)
    const [four, setFour] = useState(false)
    const [five, setFive] = useState(false)
    const [six, setSix] = useState(false)
    const first = () => {
        setTwo(false)
        setThree(false)
        setFour(false)
        setFive(false)
        setSix(false)
        setOne(true)
    }
    const second = () => {
        setTwo(true)
        setThree(false)
        setFour(false)
        setFive(false)
        setSix(false)
        setOne(false)
    }
    const thirst = () => {
        setTwo(false)
        setThree(true)
        setFour(false)
        setFive(false)
        setSix(false)
        setOne(false)
    }
    const fourth = () => {
        setTwo(false)
        setThree(false)
        setFour(true)
        setFive(false)
        setSix(false)
        setOne(false)
    }
    const fifth = () => {
        setTwo(false)
        setThree(false)
        setFour(false)
        setFive(true)
        setSix(false)
        setOne(false)
    }
    const sixth = () => {
        setTwo(false)
        setThree(false)
        setFour(false)
        setFive(false)
        setSix(true)
        setOne(false)
    }
    return (
        <div className={style.main}>
            <div className={style.container}>
                <h1 className={one ? `${style.clicked}`:''} onClick={first}><a href="#one">Построение процессов CI/CD</a></h1>
                <h1 className={two ? `${style.clicked}`:''} onClick={second}><a href="#two">Об услуге</a></h1>
                <h1 className={three ? `${style.clicked}`:''} onClick={thirst}><a href="#three">Наши возможности</a></h1>
                <h1 className={four ? `${style.clicked}`:''} onClick={fourth}><a href="#four">Как мы работаем</a></h1>
                <h1 className={five ? `${style.clicked}`:''} onClick={fifth}><a href="#five">Стоимость</a></h1>
                <h1 className={six ? `${style.clicked}`:''} onClick={sixth}><a href="#six">Связаться с нами</a></h1>
            </div>
        </div>
    )
}

export default ServiceMenu
