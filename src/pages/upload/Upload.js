import axios from 'axios';

import React,{Component} from 'react';

class Upload extends Component {

	state = {
	selectedFile: null
	};
	onFileChange = event => {
	this.setState({ selectedFile: event.target.files[0] });
	};
	
	onFileUpload  = async () => {
          let formData = new FormData();
          formData.append("file", this.state.selectedFile);
          let res = await axios({
            method: "post",
            url: "http://localhost:8000/predict",
            data: formData,
          });
          if (res.status === 200) {
            console.log(res.data);
          }
      };
	fileData = () => {
	if (this.state.selectedFile) {
		
		return (
		<div>
			<h2>File Details:</h2>
			<p>File Name: {this.state.selectedFile.name}</p>

			<p>File Type: {this.state.selectedFile.type}</p>

			<p>
			Last Modified:{" "}
			{this.state.selectedFile.lastModifiedDate.toDateString()}
			</p>

		</div>
		);
	} else {
		return (
		<div>
			<br />
			<h4>Choose before Pressing the Upload button</h4>
		</div>
		);
	}
	};
	
	render() {
	
	return (
		<div>
			<h1>
			GeeksforGeeks
			</h1>
			<h3>
			File Upload using React!
			</h3>
			<div>
				<input type="file" onChange={this.onFileChange} />
				<button onClick={this.onFileUpload}>
				Upload!
				</button>
			</div>
		{this.fileData()}
		</div>
	);
	}
}

export default Upload;
