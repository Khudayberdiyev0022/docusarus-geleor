import React, { Fragment } from 'react'
import Style from './ExtraCard2.module.css'

const Check1 = (props ) => {
    const empty = ''
    return (
        <div className={Style.main}>
            <div className={Style.inMain}>
                <div className={Style.head} >
                    <div className={Style.icon} style={{backgroundImage:`url(${props.card.icon})`}} ></div>
                    <p>
                    {props.card.footIcon}
                    </p>
                    <h2>
                    { props.card.title }
                    </h2>
                    <p>
                    { props.card.footTitle}
                    </p>
                    <h4>
                    { props.card.foot }
                    </h4>
                    <p>
                        {props.card.endFoot}
                    </p>
                </div>
                <div className={Style.empty} >{empty}</div>
                <div className={Style.sec1}  >
                {
                    props.one && 
                        <Fragment>
                            <p>{props.card.sec11}</p>
                            <p>{props.card.sec12}</p>
                            <p>{props.card.sec13}</p>
                            <p>{props.card.sec14}</p>
                        </Fragment>
                    }
                </div>
                <div className={Style.empty} >{empty}</div>
                <div className={Style.sec2  } >

                {
                    props.two && 
                        <Fragment>
                            <p>{props.card.sec21}</p>
                            <p>{props.card.sec22}</p>
                            <p>{props.card.sec23}</p>
                        </Fragment>
                    }
                </div>
                <div className={Style.empty} >{empty}</div>

                <div className={Style.check } >
                {
                    props.three && 
                        <Fragment>
                            <div className={Style.check} style={{backgroundImage:`url(${props.card.sec31})`}}></div>
                            <div className={Style.check} style={{backgroundImage:`url(${props.card.sec32})`}}></div>
                            <div className={Style.check} style={{backgroundImage:`url(${props.card.sec33})`}}></div>
                            <div className={Style.check} style={{backgroundImage:`url(${props.card.sec34})`}}></div>
                            <div className={Style.check} style={{backgroundImage:`url(${props.card.sec35})`}}></div>
                        </Fragment>
                    }
                </div>
                <div className={Style.empty} >{empty}</div>

                <div className={Style.check  } >
                {
                    props.four && 
                        <Fragment>
                            <div className={Style.check} style={{backgroundImage:`url(${props.card.sec41})`}}></div>
                            <div className={Style.check} style={{backgroundImage:`url(${props.card.sec42})`}}></div>
                            <div className={Style.check} style={{backgroundImage:`url(${props.card.sec43})`}}></div>
                            <div className={Style.check} style={{backgroundImage:`url(${props.card.sec44})`}}></div>
                            <div className={Style.check} style={{backgroundImage:`url(${props.card.sec45})`}}></div>
                            <p>{props.card.sec46}</p>
                            <div className={Style.check} style={{backgroundImage:`url(${props.card.sec47})`}}></div>
                            <div className={Style.check} style={{backgroundImage:`url(${props.card.sec48})`}}></div>
                            <div className={Style.check} style={{backgroundImage:`url(${props.card.sec49})`}}></div>
                            <div className={Style.check} style={{backgroundImage: `url(${props.card.sec410})`}}></div>
                            <div className={Style.check} style={{backgroundImage: `url(${props.card.sec411})`}}></div>
                        </Fragment>
                    
                    }
                </div>
            </div>
        </div>
    )
}

export default Check1
