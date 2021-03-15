import React, {  useState } from 'react'
import Style from './DevParts6Mobile.module.css'
import down from '../../assets/down.png'
import up from '../../assets/up.png'
import { comp } from './Components'

const DevParts6Mobile = () => {
    const [one, setOne] = useState(true)
    const [two, setTwo] = useState(false)
    const [three, setThree] = useState(false)
    const [four, setFour] = useState(false)
    return (
        <div className={Style.main} >
            <div className={Style.inMain} >
                
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
                                                СУБД
                                                </p>
                                                <div className={Style.check} style={{backgroundImage:`url(${one ? up : down})`}}></div>
                                            </div>
                                            {
                                                one && 
                                                <div className={Style.mapFlex}>
                                                    <div>
                                                        <p>mysql/pgsql<br/>/clickhouse </p>
                                                        <p>{card.sec11}</p>
                                                    </div>
                                                    <div>
                                                        <p>Кластеризация</p>
                                                        <div style={{backgroundImage:`url(${card.sec12})`}}></div>
                                                        
                                                    </div>
                                                    <div>
                                                        <p>Резервное копирование </p>
                                                        <div style={{backgroundImage:`url(${card.sec13})`}}></div>

                                                    </div>
                                                    <div>
                                                        <p>Высокая доступность</p>
                                                        <div style={{backgroundImage:`url(${card.sec14})`}}></div>

                                                    </div>
                                                    <div>
                                                        <p>Балансировка запросов</p>
                                                        <div style={{backgroundImage:`url(${card.sec15})`}}></div>
                                                    </div>
                                                    <div>
                                                        <p>Проработка <br/>асинхронной модели</p>
                                                        <div style={{backgroundImage:`url(${card.sec16})`}}></div>

                                                    </div>
                                                    
                                                </div>
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
                                                <div className={Style.mapFlex}>
                                                    <div >
                                                        <p>Rabbitmq /kafka</p>
                                                        {
                                                            card.aaa ?
                                                            <p>{card.sec21}</p>
                                                            :
                                                            <div style={{backgroundImage:`url(${card.sec21})`}}></div>
                                                        }
                                                    </div>
                                                    <div>
                                                        <p>Большая нагрузка</p>
                                                        <div style={{backgroundImage:`url(${card.sec22})`}}></div>
                                                        
                                                    </div>
                                                    <div>
                                                        <p>Высокая доступность</p>
                                                        <div style={{backgroundImage:`url(${card.sec23})`}}></div>

                                                    </div>
                                                   
                                                </div>

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
                                                <div className={Style.mapFlex}>
                                                    <div>
                                                        <p>Инсталляция на ВМ</p>
                                                        <div style={{backgroundImage:`url(${card.sec31})`}}></div>
                                                    </div>
                                                    <div  style={{maxWidth:'270px', height:'84px'}} >
                                                        <p >Инсталляция на <br/>железных серверах <br/>проработка<br/> доменов отказа </p>
                                                        <div style={{backgroundImage:`url(${card.sec32})`}}></div>
                                                        
                                                    </div>
                                                    <div>
                                                        <p>Количество воркеров</p>
                                                        <p>
                                                            {card.sec33}
                                                        </p>

                                                    </div>
                                                    
                                                    
                                                </div>

                                            }
                                        </div>
                                        <div className={Style.sec} >
                                            <div className={Style.menuTitle} onClick={()=> setFour(!four)}>
                                                <p>
                                                OpenStack: 
                                                </p>
                                                <div className={Style.check} style={{backgroundImage:`url(${four ? up : down})`}}></div>
                                            </div>
                                            {
                                                four &&
                                                <div className={Style.mapFlex}>
                                                    <div>
                                                        <p>Количество серверов </p>
                                                        {
                                                            card.aa ?
                                                            <p>{card.sec41}</p>
                                                            :
                                                            <div style={{backgroundImage:`url(${card.sec41})`}}></div>
                                                        }
                                                    </div>
                                                    <div>
                                                        <p>Несколько регионов</p>
                                                        <div style={{backgroundImage:`url(${card.sec42})`}}></div>
                                                        
                                                    </div>
                                                    <div>
                                                        <p>Расширенная <br/>функциональность </p>
                                                        <div style={{backgroundImage:`url(${card.sec43})`}}></div>

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

export default DevParts6Mobile
