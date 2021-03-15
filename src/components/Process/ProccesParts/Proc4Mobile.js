import React from 'react'
import Style from './Proc4Mobile.module.css'
import { comp11 } from './ExtraCards/Components2'

const Proc4Mobile = () => {
    return (
        <div className={Style.main}>
                        {
                            comp11.map((card, index) => {
                                return(
                                    <div className={Style.card} key={index} 
                                   
                                     >
                                        <h2>{card.title}</h2>
                                        <div className={Style.cardFlex} >
                                            <div className={Style.inFlex} >
                                                <div className={Style.icon} style={{backgroundImage: `url(${card.icon1})`}} ></div>
                                                <div className={Style.p} >
                                                    <p>{card.text1}</p>
                                                </div>
                                            </div>
                                            <div className={Style.inFlex} >
                                                <div className={Style.icon} style={{backgroundImage: `url(${card.icon2})`}} ></div>
                                                <div className={Style.p} >
                                                    <p>{card.text2}</p>
                                                </div>
                                            </div>
                                            <div className={Style.inFlex} >
                                                <div className={Style.icon} style={{backgroundImage: `url(${card.icon3})`}} ></div>
                                                <div className={Style.p} >
                                                    <p>{card.text3}</p>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                )
                            })
                        }
                       
        </div>
    )
}

export default Proc4Mobile
