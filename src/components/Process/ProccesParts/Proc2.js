import React from 'react'
import Style from './Proc2.module.css'

const Proc2 = () => {
    return (
        <div className={Style.main} >
            <div className={Style.inMain} >
                <div className={Style.text} >
                    <h2>
                        Об услуге
                    </h2>
                    <p>
                        Внедряем и поддерживаем конвейеры для сборки и автоматического развёртывания вашего приложения в тестовые и продуктивные среды.
                    </p>
                    <p>
                        Помогаем с тестированием, мониторингом, масштабированием приложения по мере его развития.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Proc2
