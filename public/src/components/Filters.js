import React from "react";
import "./Filter.css";
function Filter() {
  return (
    <div id="filter">
      {/* <h1>FILTERS</h1> */}
      <select className="filterOption">
        <option>TRAINERS NAME</option>
      </select>
      <select className="filterOption">
        <option>SKILLS</option>
      </select>
      <select className="filterOption">
        <option>TRACK</option>
      </select>
      <div id="trainerMode">
        <span id="modeLabel">TRAINER MODE</span>
        <div>
          <input id="cb_id" class="toggle-round" type="checkbox" />
          <label for="cb_id"></label>
        </div>
      </div>
      <div>
        <button class="my-button">Apply Filters</button>
      </div>
    </div>
  );
}
export default Filter;
