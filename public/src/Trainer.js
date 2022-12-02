import "./trainer.css";
import { CgProfile } from "react-icons/cg";
import { AiOutlinePlus, AiOutlineLogout } from "react-icons/ai";
import "react-datepicker/dist/react-datepicker.css";
import { FcManager } from "react-icons/fc";
import Cal from "./calendar.tsx";
import { useNavigate } from "react-router-dom";
function Trainer() {
  const navigate = useNavigate();
  const navigateForm = () => {
    navigate("/form");
  };
  const navigateLogin = () => {
    navigate("/login");
  };
  return (
    <>
      {/* gaurav raj */}

      {/* new commit */}
      <div className="trainer__up">
        <img
          className="logos"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7i7k_zXUoYvWXoFxISbd4uhUe_s1HjVHBd_RES76k&s"
          alt="logo"
        />
        <button className="btn btn-lg btn-primary" onClick={navigateForm}>
          <AiOutlinePlus size={25} />
          New Meeting
        </button>
        {/* <button className='btn btn-lg btn-primary'><AiOutlinePlus size={25}/>New Course</button>   */}
        <div class="dropdown">
          <button class="dropbtn">{<FcManager size={25} />}</button>
          <div class="dropdown-content">
            <a href="">
              <CgProfile size={20} /> &nbsp;Trainer Profile
            </a>
            <a href="/">
              <AiOutlineLogout /> &nbsp;Sign Out
            </a>
          </div>
        </div>
      </div>
      <div className="trainer__down"></div>
      <Cal />
      {/* <CgProfile size={20}/> &nbsp;<AiOutlineLogout/> &nbsp; */}
    </>
  );
}
export default Trainer;
