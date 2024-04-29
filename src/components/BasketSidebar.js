import { TbChecklist } from "react-icons/tb";
import styles from "./BasketSidebar.module.css";

const BasketSidebar = ({ state, clickHandler }) => {
  return (
    <div className={styles.sidebar}>
      <div>
        <p>
          <TbChecklist />
          Total:
        </p>
        <span>{state.total} $</span>
      </div>

      <div>
        <p>
          {/* <FaHashtag/> */}
          Quantity:
        </p>
        <span>{state.itemsCounter}</span>
      </div>

      <div>
        <p>
          {/* <BsPatchCheck /> */}
          Status:
        </p>
        <span>{!state.checkout && "Pending..."}</span>
      </div>
      <button onClick={() => clickHandler("CHECKOUT")}>Checkout</button>
    </div>
  );
};

export default BasketSidebar;
