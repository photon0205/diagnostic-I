import axios from "axios";
import "./Lab.css";
import React from "react";
import { useState } from "react";

export default function Lab() {
  const [value, setValue] = useState();
  const [haematocrit, setHaematocrit] = useState();
  const [haemoglobin, setHaemoglobin] = useState();
  const [erythrocyte, setErythrocyte] = useState();
  const [leucocyte, setLeucocyte] = useState();
  const [thrombocyte, setThrombocyte] =useState();
  const [age, setAge] = useState();
  const [gender, setGender] = useState();
  console.log(age);
  const predict = async () => {
    let array = [[haematocrit, haemoglobin, erythrocyte, leucocyte, thrombocyte, age, gender]]
    let formData = ("array", array);
    console.log(formData)
    let res = await axios({
      method: "post",
      url: "http://localhost:8000/predict/patient_treatment_classification",
      data: formData,
    });
    if (res.status === 200) {
        setValue(res.data.class+"("+ res.data.confidence+")")
      console.log(res.data);
    }
  };
  return (
    <div>
      <div className="wrapper">
        <div className="wrapper-body">
          Haematocrit: <input type="textbox"  onChange={(e) => {setHaematocrit(e.target.value)}}/><br></br><br></br>
          Haemoglobin: <input type="textbox"  onChange={(e) => {setHaemoglobin(e.target.value)}}/><br></br><br></br>
          Erythrocyte: <input type="textbox" onChange={(e) => {setErythrocyte(e.target.value)}}/><br></br><br></br>
          Leucocyte: <input type="textbox" onChange={(e) => {setLeucocyte(e.target.value)}}/><br></br><br></br>
          Thrombocyte: <input type="textbox" onChange={(e) => {setThrombocyte(e.target.value)}}/><br></br><br></br>
          Age: <input type="textbox"  onChange={(e) => {setAge(e.target.value)}}/><br></br><br></br>
          Gender: <input type="textbox"  onChange={(e) => {setGender(e.target.value)}}/><br></br><br></br>
          <button className="btn" onClick={predict}>
            Predict!
          </button>
          <h2>Prediction:<br></br> <span className="val">{value}</span></h2>
        </div>
      </div>
    </div>
  );
}
