import React, {  useState } from 'react'
import Style from './Proc5Mobile.module.css'
import down from '../../../assets/down.png'
import up from '../../../assets/up.png'
import { comp } from './ExtraCards/Components3'

const Proc5Mobile = () => {
    const [one, setOne] = useState(true)
    const [two, setTwo] = useState(false)
    const [three, setThree] = useState(false)
    const [four, setFour] = useState(false)
    return (
        <div className={Style.main} >
            <div className={Style.inMain} >
                <div className={Style.one} >
                    <h2>
                        Стоимость
                    </h2>
                    <div className={Style.card} >
                        <p>
                            В основном зависит от желаемого уровня автоматизации и особенностей Вашего приложения. Ниже приведены примеры расчета стоимости проектов. Для обсуждения именно Вашего проекта, пожалуйста, свяжитесь с нами.

                        </p>
                        <button  >
                            Узнать стоимость
                        </button>
                    </div>
                </div>
                <div className={Style.map}>
                    
                    {
                        comp.map(( card, index)=> {
                            
                            return(
                                <div className={Style.outMenu} key={index}>
                                <div className={Style.menu} >
                                    <div className={Style.card}>
                                        <div className={Style.head} >
                                            <div className={Style.icon} style={{backgroundImage:`url(${card.icon})`}} ></div>
                                            <p>
                                                {card.footIcon}
                                            </p>
                                            <h2>
                                                {card.title}
                                            </h2>
                                            <p>
                                                {card.footTitle}

                                            </p>
                                            <h4>
                                                {card.foot}
                                            </h4>
                                            <p>
                                                {card.endFoot}

                                            </p>
                                        </div>
                                        <div className={Style.sec} >
                                            <div className={Style.menuTitle} onClick={()=> setOne(!one)}>
                                                <p>
                                                Сервисы:
                                                </p>
                                                <div className={Style.check} style={{backgroundImage:`url(${one ? up : down})`}}></div>
                                            </div>
                                            {
                                                one && 
                                                <div className={Style.mapFlex}>
                                                    <div>
                                                        <p>Приложения на PHP </p>
                                                        <p>{card.sec11}</p>
                                                    </div>
                                                    <div>
                                                        <p>Микросервисы на Golang </p>
                                                        <p>{card.sec12}</p>
                                                        
                                                    </div>
                                                    <div>
                                                        <p>Микросервисы на Java </p>
                                                        <p>{card.sec13}</p>

                                                    </div>
                                                    <div>
                                                        <p>Cервисы на Python</p>
                                                        <p>{card.sec14}</p>

                                                    </div>
                                                </div>
                                            }
                                        </div>
                                        <div className={Style.sec} >
                                            <div className={Style.menuTitle} onClick={()=> setTwo(!two)}>
                                                <p>
                                                Состав разработки:
                                                </p>
                                                <div className={Style.check} style={{backgroundImage:`url(${two ? up : down})`}}></div>
                                            </div>
                                            {
                                                two && 
                                                <div className={Style.mapFlex}>
                                                    <div>
                                                        <p>Разработчиков</p>
                                                        <p>{card.sec21}</p>
                                                    </div>
                                                    <div>
                                                        <p>SRE-инженера</p>
                                                        <p>{card.sec22}</p>
                                                        
                                                    </div>
                                                    <div>
                                                        <p>Архитектор</p>
                                                        <p>{card.sec23}</p>

                                                    </div>
                                                   
                                                </div>

                                            }
                                        </div>
                                        <div className={Style.sec} >
                                            <div className={Style.menuTitle} onClick={()=> setThree(!three)}>
                                                <p>
                                                CI/CD: 
                                                </p>
                                                <div className={Style.check} style={{backgroundImage:`url(${three ? up : down})`}}></div>
                                            </div>
                                            {
                                                three &&
                                                <div className={Style.mapFlex}>
                                                    <div>
                                                        <p>prod-окружение</p>
                                                        <div style={{backgroundImage:`url(${card.sec31})`}}></div>
                                                    </div>
                                                    <div>
                                                        <p>dev/динамический-dev </p>
                                                        <div style={{backgroundImage:`url(${card.sec32})`}}></div>
                                                        
                                                    </div>
                                                    <div>
                                                        <p>stage-окружение</p>
                                                        <div style={{backgroundImage:`url(${card.sec33})`}}></div>

                                                    </div>
                                                    <div>
                                                        <p>QA-окружение</p>
                                                        <div style={{backgroundImage:`url(${card.sec34})`}}></div>

                                                    </div>
                                                    <div>
                                                        <p>Интеграционные тесты</p>
                                                        <div style={{backgroundImage:`url(${card.sec35})`}}></div>

                                                    </div>
                                                </div>

                                            }
                                        </div>
                                        <div className={Style.sec} >
                                            <div className={Style.menuTitle} onClick={()=> setFour(!four)}>
                                                <p>
                                                Инфраструктура: 
                                                </p>
                                                <div className={Style.check} style={{backgroundImage:`url(${four ? up : down})`}}></div>
                                            </div>
                                            {
                                                four &&
                                                <div className={Style.mapFlex}>
                                                    <div>
                                                        <p>MySQL Galera </p>
                                                        <div style={{backgroundImage:`url(${card.sec41})`}}></div>
                                                    </div>
                                                    <div>
                                                        <p>Redis</p>
                                                        <div style={{backgroundImage:`url(${card.sec42})`}}></div>
                                                        
                                                    </div>
                                                    <div>
                                                        <p>Кластер Vault </p>
                                                        <div style={{backgroundImage:`url(${card.sec43})`}}></div>

                                                    </div>
                                                    <div>
                                                        <p>Docker-registry</p>
                                                        <div style={{backgroundImage:`url(${card.sec44})`}}></div>

                                                    </div>
                                                    <div>
                                                        <p>СУБД с автофейловером </p>
                                                        <div style={{backgroundImage:`url(${card.sec45})`}}></div>

                                                    </div>
                                                    <div>
                                                        <p>Кластеры Kubernetes (ВМ)</p>
                                                        <p>{card.sec46}</p>
                                                    </div>
                                                    <div>
                                                        <p>KV-хранилище</p>
                                                        <div style={{backgroundImage:`url(${card.sec47})`}}></div>
                                                    </div>
                                                    <div>
                                                        <p>СУБД на bare metal</p>
                                                        <div style={{backgroundImage:`url(${card.sec48})`}}></div>
                                                    </div>
                                                    <div>
                                                        <p>Платформа виртуализации с API</p>
                                                        <div style={{backgroundImage:`url(${card.sec49})`}}></div>
                                                    </div>
                                                    <div>
                                                        <p>Мониторинг</p>
                                                        <div style={{backgroundImage:`url(${card.sec410})`}}></div>
                                                    </div>
                                                    <div>
                                                        <p>EFK</p>
                                                        <div style={{backgroundImage:`url(${card.sec411})`}}></div>
                                                    </div>
                                                </div>

                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                            )
                        })
                    }





                </div>
            </div>
        </div>
    )
}

export default Proc5Mobile
