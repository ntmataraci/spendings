import style from "./Card.module.css";

const Card = ({ details }) => {
  return (
    <div className={style.main}>
      <div className={style.date_box}>
        <div className={style.date_box__day}>{details.date_day}</div>
        <div className={style.date_box__year}>
          {details.date_month}</div>
          <div className={style.date_box__year}>
             {details.date_year}
        </div>
      </div>

      <div className={style.content_box}>{details.content}</div>
      <div className={style.price_box}>{details.price} $</div>
    </div>
  );
};

export default Card;
