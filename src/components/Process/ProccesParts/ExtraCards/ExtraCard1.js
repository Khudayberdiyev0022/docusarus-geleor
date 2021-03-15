import React from 'react'
import Style from './ExtraCard1.module.css'

const ExtraCard1 = (card) => {

    return (
        <div className={Style.main} >
            <div className={Style.head} >
                <div className={Style.icon} style={{backgroundImage:`url(${card.card.icon})`}}></div>
                <div className={Style.header} >
                    <p>
                        {card.card.head}
                    </p>
                </div>
            </div>
            <div className={Style.text} >
                <h2>
                    {card.card.title}
                </h2>
                    {
                        card.card.text.map((text, index) => {
                            return(
                                <div className={Style.inText} key={index} >
                                    <div className={Style.abs}>
                                        <span>#</span> 
                                    </div>
                                    <div className={Style.com}>
                                        <p className={Style.p1} >
                                        {text.h}
                                        </p>
                                        <p className={Style.p2} > 
                                            {text.p}
                                        </p>
                                    </div>
                                </div>
                            )
                        })
                    }
            </div>
            <div className={Style.img} style={{backgroundImage:`url(${card.card.progImg})`}} ></div>
        </div>
    )
}

export default ExtraCard1
