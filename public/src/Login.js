import "./Login.css";
// import Form from "./MyForm";
import logo from "./logo.png";
import { FcManager } from "react-icons/fc";
import { AiOutlineLogout } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";

function Login() {
  return (
    <>
      <nav className="navbar">
        <a href="https://www.persistent.com/" target={"_blank"} alt="logo">
          <img src={logo} />
        </a>
      </nav>
      <div>
        <div className="leftdiv">
          <img
            src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-135.jpg?size=338&ext=jpg&ga=GA1.2.1085728969.1662968015"
            alt="Login Image"
            href="https://www.persistent.com/"
            target={""}
          ></img>
        </div>
        <div className="middiv">
          <div className="vl"></div>
        </div>

        <div className="rightdiv">
          <form>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                <b>Username</b>
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="firstname_lastname@persistent.com"
              />
            </div>
            <div className="mb-3">
              <label for="exampleInputPassword1" className="form-label">
                <b>Password</b>
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Enter Password"
              />
            </div>
            <div className="dropdown">
              {/* <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Login as a
              </button>
             */}
            </div>
            <div class="dropdown">
              <button class="dropbtn">{<FcManager size={25} />}</button>
              <div class="dropdown-content">
                <a href="/trainer">
                  <CgProfile size={30} /> &nbsp;Trainer
                </a>
                <a href="/admin">
                  <CgProfile size={30} /> &nbsp;Admin
                </a>
              </div>
            </div>
            <br />

            <button type="button" className="btn btn-primary">
              Login
            </button>
            <pre>
              {"                                     "}
              <a
                href="https://www.google.com/"
                style={{ color: "red" }}
                target={"_blank"}
              >
                Forgot Password?
              </a>
            </pre>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
