import axios from "axios";
import "./Mental.css";
import React from "react";
import { useState } from "react";

export default function Mental() {
  const [value, setValue] = useState();
  const [age, setAge] = useState();
  const [gender, setGender] = useState();
  const [employed, setEmployed] = useState();
  const [family, setFamily] = useState();
  const [work, setWork] = useState();
  const [numEmployees, setNumEmployees] = useState();
  const [remortWork, setRemortWork] = useState();
  const [techCompany, seTechCompany] = useState();
  const [benefits, setBenefits] = useState();
  const [careOptions, setCareOptions] = useState();
  const [wellness, setWellness] = useState();
  const [seek, setSeek] = useState();
  const [anonymity, setAnonymity] = useState();
  const [leave, setLeave] = useState();
  const [mental, setMental] = useState();
  const [physical, setPhysical] = useState();
  const [coWork, setCoWork] = useState();
  const [supervisor, setSupervisor] = useState();
  const [mentalInterview, setMentalInterview] = useState();
  const [physicalInterview, setPysicalInterview] = useState();
  const [mentalVSPhysical, setMentalVSPhysical] = useState();
  const [obs, setObs] = useState();

  const predict = async () => {
    let array = [[age, gender,employed, family, work, numEmployees, remortWork, techCompany, benefits, careOptions, wellness, seek, anonymity, leave, mental, physical, coWork, supervisor, mentalInterview, physicalInterview, mentalInterview, mentalVSPhysical, obs ]]
    let formData = ("array", array);
    console.log(formData)
    let res = await axios({
      method: "post",
      url: "http://localhost:8000/predict/mental_health",
      data: formData,
    });
    if (res.status === 200) {
        setValue(res.data.class+"("+ res.data.confidence+")")
      console.log(res.data);
    }
  };
  return (
    <div>
      <div className="wrapper0">
      <div className="wrapper0-title">
        <h2>Check your Mental Health Status</h2>
      </div>
        <div className="wrapper0-body">
          Age: <input type="number"  onChange={(e) => {setAge(e.target.value)}}/><br></br><br></br>
          Gender: <input type="textbox"  onChange={(e) => {setGender(e.target.value)}}/><br></br><br></br> 
          Self Employed: <input type="textbox"  onChange={(e) => {setEmployed(e.target.value)}}/><br></br><br></br>
          Family History: <input type="textbox"  onChange={(e) => {setFamily(e.target.value)}}/><br></br><br></br>
          Work Interface: <input type="textbox"  onChange={(e) => {setWork(e.target.value)}}/><br></br><br></br>
          Number of Employees: <input type="textbox"  onChange={(e) => {setNumEmployees(e.target.value)}}/><br></br><br></br>
          Remort Work: <input type="textbox"  onChange={(e) => {setRemortWork(e.target.value)}}/><br></br><br></br>
          Tech Company: <input type="textbox" onChange={(e) => {seTechCompany(e.target.value)}}/><br></br><br></br>
          Benefits: <input type="textbox"  onChange={(e) => {setBenefits(e.target.value)}}/><br></br><br></br>
          Care Options: <input type="textbox"   onChange={(e) => {setCareOptions(e.target.value)}}/><br></br><br></br>
          Wellness Program: <input type="textbox"  onChange={(e) => {setWellness(e.target.value)}}/><br></br><br></br>
          Seek Help: <input type="textbox"  onChange={(e) => {setSeek(e.target.value)}}/><br></br><br></br>
          Anonymity: <input type="textbox"  onChange={(e) => {setAnonymity(e.target.value)}}/><br></br><br></br>
          Leave: <input type="textbox" onChange={(e) => {setLeave(e.target.value)}}/><br></br><br></br>
          Mental Health Consequence <input type="textbox"  onChange={(e) => {setMental(e.target.value)}}/><br></br><br></br>
          Physical Health Consequence <input type="textbox"  onChange={(e) => {setPhysical(e.target.value)}}/><br></br><br></br>
          Co-Workers: <input type="textbox"  onChange={(e) => {setCoWork(e.target.value)}}/><br></br><br></br>
          Supervisor: <input type="textbox"  onChange={(e) => {setSupervisor(e.target.value)}}/><br></br><br></br>
          Mental Health Interview: <input type="textbox"  onChange={(e) => {setMentalInterview(e.target.value)}}/><br></br><br></br>
          Physical Health Interview: <input type="textbox"  onChange={(e) => {setPysicalInterview(e.target.value)}}/><br></br><br></br>
          Mental vs Physical: <input type="textbox"  onChange={(e) => {setMentalVSPhysical(e.target.value)}}/><br></br><br></br>
          OBS Consequence: <input type="textbox"  onChange={(e) => {setObs(e.target.value)}}/><br></br><br></br>
          <button className="btn" onClick={predict}>
            Predict!
          </button>
          <h2>Prediction:<br></br> <span className="val">{value}</span></h2>
        </div>
      </div>
    </div>
  );
}
