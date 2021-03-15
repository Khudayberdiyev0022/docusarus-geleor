import React, { Fragment, useState } from 'react'
import Style from './DevParts6.module.css'
import down from '../../assets/down.png'
import up from '../../assets/up.png'
import s from '../../assets/s.png'
import { comp } from './Components'
import ExtraCard from './ExtraCard'


const DevParts6 = () => {
    const [one, setOne] = useState(true)
    const [two, setTwo] = useState(false)
    const [three, setThree] = useState(false)
    const [four, setFour] = useState(false)
    return (
        <div className={Style.main} id="five">
            <div className={Style.inMain} >
                
                <div className={Style.map} >
                    <div className={Style.inMap} >
                        {
                            comp.map((card, index) => {
                                return(
                                    <div key={index} className={Style.cardMap} >
                                        <ExtraCard card={card} one={one} two={two} three={three} four={four} />

                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className={Style.menu} >
                        <div className={Style.card}>
                        <div className={Style.head} >
                            <div className={Style.icon} style={{backgroundImage:`url(${s})`}} ></div>
                            <p>
                                Малый проект
                            </p>
                            <h2>
                                300 тыс.руб
                            </h2>
                            <p>
                                примерная стоимость

                            </p>
                            <h4>
                                40 тыс.руб/мес.
                            </h4>
                            <p>
                                последующая поддержка

                            </p>
                            </div>
                        <div className={Style.sec} >
                            <div className={Style.menuTitle} onClick={()=> setOne(!one)}>
                                <p>
                                СУБД
                                </p>
                                <div className={Style.check} style={{backgroundImage:`url(${one ? up : down})`}}></div>
                            </div>
                            {
                                one && 
                                <Fragment>
                                    <p>mysql/pgsql/clickhouse</p>
                                    <p>Кластеризация</p>
                                    <p>Резервное копирование</p>
                                    <p>Высокая доступность</p>
                                    <p>Балансировка запросов</p>
                                    <p>Проработка асинхронной модели</p>
                                    
                                </Fragment>
                            }
                        </div>
                        <div className={Style.sec} >
                            <div className={Style.menuTitle} onClick={()=> setTwo(!two)}>
                                <p>
                                SQS:
                                </p>
                                <div className={Style.check} style={{backgroundImage:`url(${two ? up : down})`}}></div>
                            </div>
                            {
                                two && 
                                <Fragment>
                                    <p>Rabbitmq/kafka</p>
                                    <p>Большая нагрузка</p>
                                    <p>Высокая доступность</p>
                                </Fragment>
                            }
                        </div>
                        <div className={Style.sec} >
                            <div className={Style.menuTitle} onClick={()=> setThree(!three)}>
                                <p>
                                k8s: 
                                </p>
                                <div className={Style.check} style={{backgroundImage:`url(${three ? up : down})`}}></div>
                            </div>
                            {
                                three &&
                                <Fragment>
                                    <p className={Style.p}>Инсталляция на ВМ</p>
                                    <p className={Style.p} style={{paddingTop:'10px'}}>Инсталляция на железных серверах проработка доменов отказа</p>
                                    <p style={{marginTop: '10px'}}>Количество воркеров</p>
                                </Fragment>
                            }
                        </div>
                        <div className={Style.sec}  >
                            <div className={Style.menuTitle} onClick={()=> setFour(!four)}>
                                <p>
                                OpenStack: 
                                </p>
                                <div className={Style.check} style={{backgroundImage:`url(${four ? up : down})`}}></div>
                            </div>
                            {
                                four &&
                                <Fragment>
                                    <p>Количество серверов</p>
                                    <p>Несколько регионов</p>
                                    <p className={Style.p}>Расширенная функциональность</p>
                                </Fragment>
                            }
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DevParts6
