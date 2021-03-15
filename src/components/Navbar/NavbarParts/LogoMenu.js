import React, {useState, useEffect} from 'react'
import style from './LogoMenu.module.css'
import {BsChevronUp, BsChevronDown} from 'react-icons/bs'
import { Link } from 'react-router-dom'

function LogoMenu() {
    const [serviceClick, setServiceClick] = useState(false)
    const [infoClick, setInfoClick] = useState(false)

    const [service, setService] = useState(false)
    const [building, setBuilding] = useState(false)
    
    useEffect(() => {
        const interval = setInterval(() => {
            if(window.location.pathname === '/'){
                setService(false)
                setBuilding(false)
            }else if(window.location.pathname === '/service'){
                setService(true)
                setBuilding(false)
            }else if(window.location.pathname === '/building'){
                setService(false)
                setBuilding(true)
            }
        }, 100);
        return() => {
            clearInterval(interval)
        }
    })
    

    
    return (
        <div className={style.main}>
            <div className={style.container}>
                <div className={style.services}>
                    <h1>Услуги</h1>
                    {serviceClick ?<BsChevronUp onClick={() => setServiceClick(false)}/>  :<BsChevronDown onClick={() => setServiceClick(true)}/> }
                </div>
                {
                    serviceClick && 
                    <div className={style.servicesInfo}>
                        <h3 className={building ? `${style.clicked}` : ''} >
                            <Link to="/building" >
                            Построение процессов CI/CD
                            </Link>
                        </h3>
                        <h3 className={service ? `${style.clicked}` : ''}>
                            <Link to="/service" >
                                Создание инфраструктуры для разработки
                            </Link>
                        </h3>
                    </div>
                }
                <div className={style.info}>
                    <h1>Общая информация</h1>
                    {infoClick ?<BsChevronUp onClick={() => setInfoClick(false)}/>  :<BsChevronDown onClick={() => setInfoClick(true)}/> }
                </div>
                <div className={style.education}>
                    <h1>База знаний</h1>
                    <h2>Скоро</h2>
                </div>
            </div>
        </div>
    )
}

export default LogoMenu
