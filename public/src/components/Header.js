import React from "react";
import "./Header.css";
import { FcManager } from "react-icons/fc";
import { AiOutlineLogout } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
function Header() {
  const navigate = useNavigate();
  const navigateTrainer = () => {
    navigate("/addTrainer");
  };
  const navigateMeeting = () => {
    navigate("/form");
  };
  return (
    <div id="header">
      <div id="logo">
        <img
          src={require("../images/Persistent_Systems_Logo.jpg")}
          id="logoImage"
        />
      </div>
      <div>
        <button
          class="add__trainer__button my-button-2"
          onClick={navigateTrainer}
        >
          Add a trainer
        </button>
      </div>
      <button class="add__newmeet__btn my-button-2" onClick={navigateMeeting}>
        New Meeting
      </button>
      <div id="imageProfile">
        <div id="image"></div>
        {/* <div id='profile'>
                    <span id='adminName'>Mohit Zade</span>
                    <select id="options">
                        <option></option>
                        <option className='option'>Profile</option>
                        <option className='option'>Log Out</option>
                    </select>
                </div> */}
        <div class="dropdown">
          <button class="dropbtn">{<FcManager size={25} />}</button>
          <div class="dropdown-content">
            <a href="/">
              <CgProfile size={20} /> &nbsp; Admin Profile
            </a>
            <a href="/">
              <AiOutlineLogout /> &nbsp;Sign Out
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Header;
