import React, { useEffect, useRef, useState } from 'react'
import style from "../condition/condition.module.css"
export default function Condition({handleSetOpen}) {
    const wrapperRef = useRef(null);
    const [isClosed, setIsClosed] = useState(false);

    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsClosed(true);

        setTimeout(() => {
          handleSetOpen();
        }, 500);}
    };
  
    useEffect(() => {
      document.addEventListener('mousedown', handleClickOutside);
  
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [handleSetOpen]);
  return (
    <div>
      <div className={`${style.wrapper} ${isClosed ? style.closed : ''}`} ref={wrapperRef}>
      <div className="styleWrapper">
        <div className="close">
        </div>
        <div>
  <h1 className={style.condition} style={{ margin: '0px 0' }}>Условия аренды:</h1>
  <h4 style={{ margin: '5px 0' }}>Возраст: от 21 года</h4>
  <h4 style={{ margin: '5px 0' }}>Водительский стаж: от 1 года</h4>
  <h4 style={{ margin: '5px 0' }}>Минимальный срок аренды: от 24 часов.</h4>
  <h2 style={{ margin: '10px 0' }}>Для заключения договора требуются:</h2>
  <h4 style={{ margin: '5px 0' }}>международное водительское удостоверение;</h4>
  <h4 style={{ margin: '5px 0' }}>копия заграничного паспорта.</h4>
  <h3 style={{margin:"5px 0"}}>Депозит обязателен – его сумма зависит от водительского стажа, возраста и марки-модели автомобиля. Он оплачивается именной банковской картой, принадлежащей лицу, заключающему договор.</h3>
</div>

      </div>
    </div>
  
    </div>
  )
}
