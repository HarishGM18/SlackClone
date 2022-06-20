import "./Header.css";
import React from "react";
import Avatar from "@mui/material/Avatar";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { useStateValue } from "./StateProvider";
// import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { actionTypes } from "./reducer";
import { auth, provider } from "./firebase";

function Header() {
  const [{ user }] = useStateValue();
  const [state, dispatch] = useStateValue();

  const signOutUser = () => {
    auth
      .signOut(provider)
      .then((result) => {
        console.log(result);
        dispatch({
          type: actionTypes.SET_USER,
          user: null,
        });
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="header">
      <div className="header_left">
        <Avatar
          className="header_avatar"
          alt={user?.displayName}
          src={user?.photoURL}
        />
        <button className="signout" onClick={signOutUser}>
          Sign out
        </button>
        {/* <ArrowDropDownIcon className="header_dropdown" /> */}
        {/* <NavDropdown title={user?.name}>
          <NavDropdown.Item> Log out </NavDropdown.Item>
        </NavDropdown> */}
      </div>
      <input className="search-button" placeholder="Search Contacts" />
      <div className="header_right">
        <HelpOutlineIcon />
      </div>
    </div>
  );
}

export default Header;
