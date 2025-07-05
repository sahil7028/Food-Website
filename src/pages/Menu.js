import React from "react";
import { MenuList } from "../helpers/MenuList";
import MenuItem from "../components/MenuItem";
import "../styles/Menu.css";

const Menu = () => (
  <div className="menu">
    <h1 className="menutitle">Our Menu</h1>
    <div className="menulist">
      {MenuList.map((item, i) => (
        <MenuItem key={i} {...item} />
      ))}

{/* {MenuList.map((item, i) => (
        <MenuItem key={i} image={item.image} name={item.name} price={item.price} />
      ))} */}
    </div>
  </div>
);

export default Menu;
