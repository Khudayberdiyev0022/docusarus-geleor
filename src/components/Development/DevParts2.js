import React from "react";
import style from "./DevParts2.module.css";
import cloudImg from "../../assets/cloud-sharing.png";
import serverImg from "../../assets/server.png";
import diagramImg from "../../assets/diagram.png";

const DevParts2 = () => {
  return (
    <div className={style.parts2} id="two">
      <div className={style.capabilities}>
        <h1>Наши возможности</h1>
      </div>
      <div className={style.cardGroups}>
        <div className={style.leftBlock}>
        <div className={style.cardsInfo}>
          <div className={style.iconsBtn}>
            <img src={cloudImg} alt="cloudImg" />
            <button type="button">Платформы</button>
          </div>
          <h2>Строим основу вашей инфраструктуры для разработки и прода</h2>
          <h5># Виртуальные машины</h5>
          <p>
            Подберём и внедрим платформу управления ВМ с API: OpenStack, oVirt,
            OpenNebula;
          </p>
          <h5># Контейнеры</h5>
          <p>Внедрим Kubernetes для управления вашими приложениями;</p>
          <h5># Программно-определяемое хранилище</h5>
          <p>Внедрим CEPH, LINSTOR на уже имеющимся или новом железе;</p>
          <h5># Логирование, мониторинг, оповещение</h5>
          <p>
            Внедрим системы логирования и мониторинга с различными способами
            оповещения.
          </p>
        </div>
        <div className={style.cardsInfo}>
          <div className={style.iconsBtn}>
            <img src={diagramImg} alt="diagramImg" />
            <button type="button">Поддержка</button>
          </div>
          <h2>Обеспечиваем стабильность внедренных решений</h2>
          <h5># Снижение времени восстановления после аварий</h5>
          <p>Создаем и проверим DRP вашей инфраструктуры;</p>
          <h5># Аутсорсинг задач DevOps</h5>
          <p>
            Обслуживаем внедренные решения – обновляем, мониторим, решаем
            инциденты согласно SLA.
          </p>
        </div>
      </div>
       
    <div>
    <div className={style.rightBlock}>
     <div className={style.cardsInfo}>
          <div className={style.iconsBtn}>
            <img src={serverImg} alt="serverImg" />
            <button type="button">Сервисы</button>
          </div>
          <h2>Строим сервисы для работы ваших приложений</h2>
          <h5># Инфраструктурные сервисы</h5>
          <p>
            Внедрим PostgreSQL, MySQL, Mongo, ClickHouse, Redis, RabbitMQ и т.д.
            с требуемым уровнем отказоустойчивости;
          </p>
          <h5># Поиск и устранение узких мест</h5>
          <p>Тестируем и повышаем производительность существующих сервисов;</p>
          <h5># Масштабирование с ростом нагрузки</h5>
          <p>Решаем проблемы горизонтального масштабирования.</p>
        </div>
     </div>
    </div>
     </div>
        
    </div>
  );
};

export default DevParts2;
