import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "../FullCars/fullCars.module.css";
import ferrari from "../../image/sf90.jpg";
import ferrariPanel from "../../image/sf902.jpg";
import Condition from "../condition/Condition";
import RentAuto from "../rentAuto/rentAuto";
import RentAutoInfo from "../rentAutoInfo/RentAutoInfo";
import { useParams } from "react-router-dom";
import { fetchProduct } from "../../features/ProductSlice";
export default function FullCars() {

  const dispatch = useDispatch();
  const { id } = useParams();


  const [open, setOpen] = useState(false);
  const [openRent, setOpenRent] = useState(false);

  function handleSetOpen() {
    setOpen(!open);
  }
  function handleOpenRent() {
    setOpenRent(!openRent);
  }

  useEffect(() => {
    dispatch(fetchProduct(id));
  }, [dispatch]);

  const product = useSelector((state) =>
    state.product.product
  );

  console.log(product);

  return (
    <>
      <div className={style.wrapper}>
        <div className={style.contInfo}>
          <h4>Аренда автомобилей → {product.title}</h4>
          <br />
          <h1 className={style.title}>{product.title}</h1>
          <br />
          <h2 className={style.price}>9890 AED |{product.price} $ за сутки</h2>
         <br />
          <h3 className={style.about}>
            +7 (928) - 877 - 30 - 06 | Info@kingsrentcars.com
          </h3>
          <br />
          <br />
          <h3 className={style.aboutUs}>
            Позвоните нашему менеджеру, чтобы получить лучшую цену
          </h3>
          <br />
          <div className={style.buttons}>
            <button onClick={() => handleOpenRent()} className={style.bron}>
              ЗАБРОНИРОВАТЬ
            </button>
            {openRent ? <RentAuto handleOpenRent={handleOpenRent} /> : null}
            <button onClick={() => handleSetOpen()} className={style.condition}>
              УСЛОВИЯ АРЕНДЫ
            </button>
            {open ? <Condition handleSetOpen={handleSetOpen} /> : null}
          </div>
        </div>

        <img src={`http://localhost:4100/image/${product.image[0]}`} alt="" className={style.fotoSf} />
      </div>
      <RentAutoInfo />
    </>
  );
}
