import React from "react";
import Cal from "./Calendar.tsx";
import Filter from "./Filters";
import Header from "./Header";
import "./Admin.css";
function Admin() {
  return (
    <>
      <Header />
      <div id="body">
        <Filter />
        <Cal />
      </div>
    </>
  );
}
export default Admin;
