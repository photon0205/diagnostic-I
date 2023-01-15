import axios from "axios";
import "./Lab.css";
import React from "react";
import { useState } from "react";

export default function Lab() {
  const [selectedFile, setSelectedFile] = useState();
  const [value, setValue] = useState();
  const onFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const onFileUpload = async () => {
    setValue('Out Patient')
    let formData = new FormData();
    formData.append("file", selectedFile);
    let res = await axios({
      method: "post",
      url: "http://localhost:8000/predict",
      data: formData,
    });
    if (res.status === 200) {
        setValue(res.data.class+"("+ res.data.confidence+")")
      console.log(res.data);
    }
  };

  const handleChange=()=>{

  }
  return (
    <div>
      <div className="wrapper">
        <div className="wrapper-body">
          Haematocrit: <input type="textbox" value="44" name="gender" onChange={handleChange}/><br></br><br></br>
          Haemoglobin: <input type="textbox" value="12" name="gender" onChange={handleChange}/><br></br><br></br>
          Erythrocyte: <input type="textbox" value="4" name="gender" onChange={handleChange}/><br></br><br></br>
          Leucocyte: <input type="textbox" value="6" name="gender" onChange={handleChange}/><br></br><br></br>
          Thrombocyte: <input type="textbox" value="340" name="gender" onChange={handleChange}/><br></br><br></br>
          Age: <input type="textbox" value="19" name="gender" onChange={handleChange}/><br></br><br></br>
          Gender: <input type="textbox" value="Female" name="gender" onChange={handleChange}/><br></br><br></br>
          <button className="btn" onClick={onFileUpload}>
            Predict!
          </button>
          <h2>Prediction:<br></br> <span className="val">{value}</span></h2>
        </div>
      </div>
    </div>
  );
}
