import axios from "axios";
import "./Upload.css";
import React from "react";
import { useState } from "react";

export default function Upload() {
  const [selectedFile, setSelectedFile] = useState();
  const [value, setValue] = useState();
  const [xray, setXray] = useState();
  const onFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const onFileUpload = async () => {
    setValue("Your Osteoarthritis condition is moderate")
    let formData = new FormData();
    formData.append("file", selectedFile);
    let res = await axios({
      method: "post",
      url: "http://localhost:8000/predict/" + xray,
      data: formData,
    });
    if (res.status === 200) {
        setValue(res.data.class+" The probablity of the shown diagnosis is:"+ res.data.confidence)
      console.log(res.data);
    }
  };
  return (
    <div>
      <div className="wrapper">
        <div className="wrapper-body">
          <input type="radio" value="Pneumonia" name="Pneumonia" onChange={ setXray("pneumonia")}/> Pneumonia
          detection<br></br>
          <input type="radio" value="Brain" name="Brain" onChange={setXray("brain")}/> Brain tumor
          detection<br></br>
          <input type="radio" value="Knee" name="Knee" onChange={setXray("knee")}/> Knee fracture
          <br></br><br></br>
          <input type="file" onChange={onFileChange} />
          <button className="btn" onClick={onFileUpload}>
            Upload!
          </button>
          <h2>Predicted Value:<br></br> <span className="val">{value}</span></h2>
        </div>
      </div>
    </div>
  );
}
