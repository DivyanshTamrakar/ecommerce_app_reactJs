import "./Header.css";
import MenuIcon from "@mui/icons-material/Menu";
import ActionIcons from "./ActionIcons";
import { Link } from "react-router-dom";
import { useState } from "react";
import Drawer from "../Drawer";

const Header = () => {
  const [drawer, setdrawer] = useState(false);

  return (
    <div className="header">
      <div onClick={() => setdrawer(!drawer)} className="menuIcon">
        <MenuIcon
          sx={{ cursor: "pointer", color: "white", fontSize: "2rem" }}
        />
      </div>

      {drawer && <Drawer />}

      <div className="title">
        <Link to="/" className="textDecorationNone colorWhite">
          ShoppingKart
        </Link>
      </div>

      <div className="rightCom">
        <ActionIcons
         
        />
      </div>
    </div>
  );
};

export default Header;
