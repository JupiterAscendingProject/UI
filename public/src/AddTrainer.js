import "./AddTrainer.css";
import { useNavigate } from "react-router-dom";

function AddTrainer() {
  const navigate = useNavigate();
  const navigateAdmin = () => {
    navigate("/admin");
  };
  return (
    <>
      <img
        className="addtrainer__image"
        src="https://img.icons8.com/color/344/personal-trainer-skin-type-2.png"
      ></img>

      <br />
      <br />

      <div>
        <h1>
          <b>Add Trainer</b>
        </h1>

        <div className="content">
          <form>
            <div className="form-group">
              <br />
              <label className="insidecontent" htmlFor="exampleInputEmail1">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter name of Trainer"
              />
            </div>
            <br className="insidecontent" />
            <div className="form-group">
              <label>Employee ID</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Employee ID"
              />
            </div>
          </form>
          <br />
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Skills</label>
            <input
              type="text"
              className="form-control"
              aria-describedby="emailHelp"
              id="details"
              placeholder="Enter Skills"
            />
          </div>
          <br />
          <button
            type="button"
            className="btn btn-success"
            onClick={navigateAdmin}
          >
            Save
          </button>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <button
            type="button"
            className="btn btn-danger"
            onClick={navigateAdmin}
          >
            Cancel
          </button>
          <pre></pre>
        </div>
      </div>
    </>
  );
}
export default AddTrainer;
