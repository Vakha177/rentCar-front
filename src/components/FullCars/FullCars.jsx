import React, { useState } from "react";
import style from "../FullCars/fullCars.module.css";
import ferrari from "../../image/sf90.jpg";
import ferrariPanel from "../../image/sf902.jpg";
import Condition from "../condition/Condition";
import RentAuto from "../rentAuto/rentAuto";
import RentAutoInfo from "../rentAutoInfo/RentAutoInfo";
export default function FullCars() {
  const [open, setOpen] = useState(false);
  const [openRent , setOpenRent] = useState(false)
  function handleSetOpen() {
    setOpen(!open);
  }
  function handleOpenRent  ()  {
setOpenRent(!openRent)
  }
  const product = useSelector((state) =>
  state.product.product.find((item) => item._id === id)
);

  return (
    <>
      <div className={style.wrapper}>
        <div className={style.contInfo}>
          <h4>Аренда автомобилей → Ferrari SF90 Spider</h4>
          <h1 className={style.title}>Ferrari SF90 Spider</h1>
          <h2 className={style.price}>9890 AED | $2710 за сутки</h2>
          <h4 className={style.about}>
            +7 (928) - 877 - 30 - 06 | Info@kingsrentcars.com
          </h4>
          <h4 className={style.aboutUs}>
            Позвоните нашему менеджеру, чтобы получить лучшую цену
          </h4>

          <div className={style.buttons}>
            <button onClick={()=>handleOpenRent()} className={style.bron}>ЗАБРОНИРОВАТЬ</button>
            {openRent? <RentAuto handleOpenRent={handleOpenRent}/> : null}
            <button onClick={() => handleSetOpen()} className={style.condition}>
              УСЛОВИЯ АРЕНДЫ
            </button>
            {open ? <Condition handleSetOpen={handleSetOpen} /> : null}
          </div>
        </div>

        <img src={ferrari} alt="" className={style.fotoSf} />
      </div>
      <RentAutoInfo />
    </>
  );
}
