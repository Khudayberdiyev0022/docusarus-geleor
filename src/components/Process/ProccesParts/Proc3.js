import React from 'react'
import Style from './Proc3.module.css'
import {comp1, comp2} from './ExtraCards/Components1'
import ExtraCard1 from './ExtraCards/ExtraCard1'

const Proc3 = () => {

    return (
        <div className={Style.main}>
            <div className={Style.inMain} >
                <div className={Style.text} >
                    <h2>
                        Наши возможности
                    </h2>
                </div>
                <div className={Style.cards} >
                    <div className={Style.cardFlex} >
                        <div className={Style.comp1} >
                        {
                            comp1.map((card, index) => {
                                return(
                                    <div key={index} className={Style.relative} >
                                        <ExtraCard1 card={card} />
                                        <span className={Style.dash1} ></span>
                                    </div>
                                )
                            })
                        }
                        <span className={Style.dash}></span>
                        </div>
                        <div className={Style.comp2} >
                        {
                            comp2.map((card, index) => {
                                return(
                                    <div key={index} className={Style.relative} >
                                        <ExtraCard1 card={card} />
                                        <span className={Style.dash2}></span>
                                    </div>
                                )
                            })
                        }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Proc3
