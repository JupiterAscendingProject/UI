import React from "react";
import axios from "axios";
import {  useState } from "react";
import { useNavigate } from "react-router-dom";
import "./MyForm.css";
import SessionID from './sessionId'


function MyForm() {

  const navigate = useNavigate();
  const navigateTrainerPage = () => {
    navigate("/trainer");
  };


  const [optionList, setOptionList] = useState([])
  const [tskills, setTSkills] = useState([])

  //   const [trainer,setTrainer]=useState("")
  //   const [skillName,setSkillName]=useState("")

  const [meetingDetails, setMeetingDetails] = useState({

    sessionId:" ",
    sessionDate: " ",
    module: 0,
    trainerId: 0,
    trainingMode: " ",
    sessionLocation: " ",
    track: 0,
    sessionStartTime: " ",
    sessionEndTime: " "
  });

  React.useEffect(() => {
    axios.get(`https://localhost:7228/api/Trainer/GetAllTrainers`)
      .then((res) => {
        setOptionList(res.data)
      })
  },[meetingDetails.trainerId])

  const handleSelect = (e) => {
    const EmpId = e.target.value
    console.log(EmpId)
    axios.get(`https://localhost:7228/api/Trainer/SkillsOfTrainer?trainerId=${EmpId}`)
      .then((res) => {
        setTSkills(res.data.skills)
        let copiedDetails = { ...meetingDetails };
        copiedDetails.trainerId = e.target.value;
        setMeetingDetails((details) => ({
          ...copiedDetails,
        }));
        console.log(meetingDetails);
      })
  }

  const handleSkill = (e) => {
    window.selecedSkillId = e.target.value
    let copiedDetails = { ...meetingDetails };
    copiedDetails.track = e.target.value
    setMeetingDetails((details) => ({
      ...copiedDetails,
    }));
    console.log(meetingDetails);
  }

  const addModule = (e) => {
    let copiedDetails = { ...meetingDetails };
    copiedDetails.module = e.target.value;
    setMeetingDetails((details) => ({
      ...copiedDetails,
    }));
    console.log(meetingDetails);
  }

  const addDate = (e) => {
    let copiedDetails = { ...meetingDetails };
    copiedDetails.sessionDate = e.target.value;
    setMeetingDetails((details) => ({
      ...copiedDetails,
    }));
    console.log(meetingDetails);
  }

  const addStartTime = (e) => {
    let copiedDetails = { ...meetingDetails };
    copiedDetails.sessionStartTime = e.target.value;
    setMeetingDetails((details) => ({
      ...copiedDetails,
    }));
    console.log(meetingDetails);
  }

  const addEndTime = (e) => {
    let copiedDetails = { ...meetingDetails };
    copiedDetails.sessionEndTime = e.target.value;
    setMeetingDetails((details) => ({
      ...copiedDetails,
    }));
    console.log(meetingDetails);
  }

  const addSessionId = (e) => {
    let copiedDetails = { ...meetingDetails };
    copiedDetails.sessionId = e.target.value;
    setMeetingDetails((details) => ({
      ...copiedDetails,
    }));
    console.log(meetingDetails);
  }

  const addMode = (e) => {
    let copiedDetails = { ...meetingDetails };
    copiedDetails.trainingMode = e.target.value;
    setMeetingDetails((details) => ({
      ...copiedDetails,
    }));
    console.log(meetingDetails);
  }

  const addLocation = (e) => {
    let copiedDetails = { ...meetingDetails };
    copiedDetails.sessionLocation = e.target.value;
    setMeetingDetails((details) => ({
      ...copiedDetails,
    }));
    console.log(meetingDetails);
  }



  const handleSave = () => {
    //e.preventDefault();
    console.log(meetingDetails);
    axios({
      method: "post",
      url: "https://localhost:7228/api/GetSessionByTrainer",
      data: meetingDetails,
      headers: {
       // Authorization: `bearer ${token}`,
        "Content-Type": "application/json",
        
      }, // you are sending body instead
    })
  }



  return (
    <>

      <img
        className="logo"
        src="https://png.pngtree.com/element_pic/00/16/07/27579833c7d299f.jpg"
      ></img>
      <br />
      <br />

      <div>
        <h1>
          <b>New Meeting</b>
        </h1>

        <div className="content">
          <form>
            <div className="form-group">
              <label>Trainer Name</label>
              <select type="Date" className="form-control" onClick={handleSelect}>
                {optionList.map((item) => (
                  <option key={item.empId} value={item.empId}>
                    {item.trainerName}
                  </option>
                ))}
              </select>
              <br />
            </div>
            <div className="form-group">
              <label>Skill</label>
              <select type="Date" className="form-control" onClick={handleSkill}>
                {tskills.map((element) => (
                  <option key={element.skillId} value={element.skillId}>
                    {element.skillName}
                  </option>
                ))}
              </select>
            </div>
            <br />
            <div className="form-group">
              <label>Track</label>
              <select type="Date" className="form-control" >
                <option >{window.selecedSkillId}</option>
              </select>

            </div>
            <br />
            <div className="form-group">
              <label>Module</label>
              <input type="text" className="form-control" onChange={addModule} />
            </div>

            <br />
            <div className="form-group">
              <label>Date</label>
              <input type="Date" className="form-control" onChange={addDate} />
            </div>
            <br />
           <div className="form-grop">
              <label>Start Time</label>
              <input type="datetime-local" className="form-control" onChange={addStartTime}/>
            </div>
            <br/>
            <div className="form-grop">
              <label>Start Time</label>
              <input type="datetime-local" className="form-control" onChange={addEndTime}/>
            </div>
            <br/>

            <div className="form-group">
              <label>SessionId</label>
              <select className="form-control" onMouseMove={addSessionId}>
                <option><SessionID /></option>
              </select>

            </div>
            {/* <SessionID /> */}
            <br />
          </form>
          <br />
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
              value="Virtual Meet"
              onChange={addMode}
            />Virtual Meet
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
              value="In Person Meet"
              onChange={addMode}
            /> In Person Meet
          </div>

          <br />
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Description</label>
            <input
              type="text"
              className="form-control"
              aria-describedby="emailHelp"
              id="details"
              placeholder="Type details for this new meeting"

            />
          </div>
          <br />
          <div className="form-group">
            <label>Location</label>
            <select type="Date" className="form-control" onClick={addLocation}>
              <option>Pune</option>
              <option>Bangalore</option>
              <option>Nagpur</option>
            </select>
          </div>
          <br />
          <button
            type="button"
            className="btn btn-success"
            onClick={handleSave}
          >
            Save
          </button>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <button
            type="button"
            className="btn btn-danger"
            onClick={navigateTrainerPage}
          >
            Close
          </button>
          <pre></pre>
        </div>
      </div>
    </>
  );

}
export default MyForm;
