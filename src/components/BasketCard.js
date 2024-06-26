import { shortenText } from "../helper/helper";
import styles from "./BasketCard.module.css";
import { MdDeleteOutline } from "react-icons/md";

const BasketCard = ({ data, clickHandler }) => {
  const { image, title, quantity } = data;
  return (
    <div className={styles.card}>
      <img src={image} alt={title} />
      <p>{shortenText(title)}</p>
      <div className={styles.actions}>
        {quantity === 1 && (
          <button onClick={() => clickHandler("REMOVE_ITEM", data)}>
            <MdDeleteOutline />
          </button>
        )}
        {quantity > 1 && (
          <button onClick={() => clickHandler("DECREASE", data)}>-</button>
        )}
        {quantity}
        <button onClick={() => clickHandler("INCREASE", data)}>+</button>
      </div>
    </div>
  );
};

export default BasketCard;
