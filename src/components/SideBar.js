import { createQueryObject } from "../helper/helper";
import { FaListUl } from "react-icons/fa";

const SideBar = ({ setQuery }) => {
  const categoryHandler = (e) => {
    const { tagName } = e.target;
    const category = e.target.innerText.toLowerCase();
    if (tagName !== "LI") return; //یعنی اگه اون المان ال ای نبود این فانکشن اجرا نشود
    // setQuery((query) => ({ ...query, category }));
    setQuery((query) => createQueryObject(query, { category }));
  };
  return (
    <div>
      <div>
        <FaListUl />
        <p>categories</p>
      </div>
      <ul onClick={categoryHandler}>
        <li>All</li>
        <li>Electronics</li>
        <li>Jewelery</li>
        <li>Men's Clothing</li>
        <li>Women's Clothing</li>
      </ul>
    </div>
  );
};

export default SideBar;
