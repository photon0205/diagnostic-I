import axios from "axios";
import "./Upload.css";
import React from "react";
import { useState } from "react";
import RadioButton from '../../components/radioButton/RadioButton'

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
  const radioChangeHandler = (e) => {
    setXray(e.target.value);
  };
  return (
    <div>
      <div className="wrapper">
        <div className="wrapper-body">
        <RadioButton changed={radioChangeHandler} id="Pneumonia" isSelected={xray === "Pneumonia" } label="Pneumonia" value="Pneumonia"/>
        <RadioButton changed={radioChangeHandler} id="Knee" isSelected={xray === "Knee"} label="Knee" value="Knee"/>
        <RadioButton changed={radioChangeHandler} id="Brain" isSelected={xray === "Brain"} label="Brain Tumor" value="Brain"/>
          
          <input type="file" onChange={onFileChange} />
          <button className="btn" onClick={onFileUpload}>
            Upload!
          </button>
          <h2>Prediction:<br></br> <span className="val">{value}</span></h2>
        </div>
      </div>
    </div>
  );
}
