import React, { useState } from 'react'
import Style from './Proc4.module.css'
import {comp, comp2, comp3, comp4} from './ExtraCards/Components2'

const Proc4 = () => {
    const [one, setOne] = useState(true)
    const [two, setTwo] = useState(false)
    const [three, setThree] = useState(false)
    const [four, setFour] = useState(false)



   const one1 = () => {
       console.log(two);
        setOne(true)
        setTwo(false)
        setThree(false)
        setFour(false)
   }
   const two1 = () => {
       console.log(one);
       setOne(false)
       setTwo(true)
       setThree(false)
       setFour(false)

   }
   const three1 = () => {
       console.log(3);
       setOne(false)
       setTwo(false)
       setThree(true)
       setFour(false)

   }
   const four1 = () => {
       console.log(4);
        setOne(false)
        setTwo(false)
        setThree(false)
        setFour(true)
   }






    return (
        <div className={Style.main} >
            <div className={Style.inMain} >
                <h2>
                    Как мы работаем
                </h2>
                <div className={Style.flex} >
                    {
                        one &&
                        <div className={Style.map} >
                        {
                            comp.map((card, index) => {
                                return(
                                    <div className={Style.card} key={index} 
                                   
                                     >
                                        <h2>{card.title}</h2>
                                        <div className={Style.cardFlex} >
                                            <div className={Style.inFlex} >
                                                <div className={Style.icon} style={{backgroundImage: `url(${card.icon1})`}} ></div>
                                                <p>{card.text1}</p>
                                            </div>
                                            <div className={Style.inFlex} >
                                                <div className={Style.icon} style={{backgroundImage: `url(${card.icon2})`}} ></div>
                                                <p>{card.text2}</p>
                                            </div>
                                            <div className={Style.inFlex} >
                                                <div className={Style.icon} style={{backgroundImage: `url(${card.icon3})`}} ></div>
                                                <p>{card.text3}</p>
                                            </div>
                                        </div>

                                    </div>
                                )
                            })
                        }
                    </div>      
                    }
                    {
                        two &&
                        <div className={Style.map} >
                        {  
                            comp2.map((card, index) => {
                                return(
                                    <div className={Style.card} key={index} 
                                   
                                     >
                                        <h2>{card.title}</h2>
                                        <div className={Style.cardFlex} >
                                            <div className={Style.inFlex} >
                                                <div className={Style.icon} style={{backgroundImage: `url(${card.icon1})`}} ></div>
                                                <p>{card.text1}</p>
                                            </div>
                                            <div className={Style.inFlex} >
                                                <div className={Style.icon} style={{backgroundImage: `url(${card.icon2})`}} ></div>
                                                <p>{card.text2}</p>
                                            </div>
                                            <div className={Style.inFlex} >
                                                <div className={Style.icon} style={{backgroundImage: `url(${card.icon3})`}} ></div>
                                                <p>{card.text3}</p>
                                            </div>
                                        </div>

                                    </div>
                                )
                            })
                        }
                    </div>
                    }
                    {
                        three &&
                        <div className={Style.map} >
                        {  
                            comp3.map((card, index) => {
                                return(
                                    <div className={Style.card} key={index} 
                                   
                                     >
                                        <h2>{card.title}</h2>
                                        <div className={Style.cardFlex} >
                                            <div className={Style.inFlex} >
                                                <div className={Style.icon} style={{backgroundImage: `url(${card.icon1})`}} ></div>
                                                <p>{card.text1}</p>
                                            </div>
                                            <div className={Style.inFlex} >
                                                <div className={Style.icon} style={{backgroundImage: `url(${card.icon2})`}} ></div>
                                                <p>{card.text2}</p>
                                            </div>
                                            <div className={Style.inFlex} >
                                                <div className={Style.icon} style={{backgroundImage: `url(${card.icon3})`}} ></div>
                                                <p>{card.text3}</p>
                                            </div>
                                        </div>

                                    </div>
                                )
                            })
                        }
                    </div>
                    }
                    {
                        four &&
                        <div className={Style.map} >
                        {  
                            comp4.map((card, index) => {
                                return(
                                    <div className={Style.card} key={index} 
                                   
                                     >
                                        <h2>{card.title}</h2>
                                        <div className={Style.cardFlex} >
                                            <div className={Style.inFlex} >
                                                <div className={Style.icon} style={{backgroundImage: `url(${card.icon1})`}} ></div>
                                                <p>{card.text1}</p>
                                            </div>
                                            <div className={Style.inFlex} >
                                                <div className={Style.icon} style={{backgroundImage: `url(${card.icon2})`}} ></div>
                                                <p>{card.text2}</p>
                                            </div>
                                            <div className={Style.inFlex} >
                                                <div className={Style.icon} style={{backgroundImage: `url(${card.icon3})`}} ></div>
                                                <p>{card.text3}</p>
                                            </div>
                                        </div>

                                    </div>
                                )
                            })
                        }
                    </div>
                    }
                    <div className={Style.categories} >
                                <span className={Style.dash} ></span>
                        <div   className={one ? Style.categ2 : Style.categ}  onClick={one1} >
                                <p className={one ? Style.rec2 :Style.rec}>
                                    <span>01  </span>

                                </p>
                                  
                                <p  className={Style.recText}>
                                    <span>Определение задачи и</span> поиск решения
                                </p>
                        </div>
                         
                        <div className={two ? Style.categ2 : Style.categ} onClick={two1} >
                            
                                <p className={ two ? Style.rec2 :Style.rec }>
                                    <span>02  </span>
                                </p>
                            {/* <div className={Style.inCateg} > */}
                                <p className={Style.recText} >
                                    <span>Проработка решения</span>
                                </p>
                            {/* </div> */}
                        </div>
                        <div className={three ? Style.categ2 : Style.categ} onClick={three1} >
                            
                                <p className={ three ? Style.rec2 : Style.rec}>
                                    <span>03  </span>
                                </p>
                            {/* <div className={Style.inCateg} > */}
                                <p className={Style.recText} >
                                    Внедрение решения
                                </p>
                            {/* </div> */}
                        </div>
                        <div className={four ? Style.categ2 : Style.categ} onClick={four1} >
                            
                                <p className={four ? Style.rec2 : Style.rec}>
                                    <span>04</span>  
                                </p>
                            {/* <div className={Style.inCateg} > */}
                                <p className={Style.recText} >
                                    Эксплуатация
                                </p>
                            {/* </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Proc4
