# Diagnostic-I

Diagnostic-I is a comprehensive medical diagnosis solution that encompasses the training of machine learning (ML) and Convolutional Neural Network (CNN) models. The solution integrates disease detection capabilities and utilizes a ReactJS frontend combined with a FastAPI backend.

## Problem Solved by Diagnostic-I

Diagnostic-I addresses a range of medical-related challenges and is categorized into three primary functionalities:

### 1. Disease Detection using X-ray Images
Users can upload their X-ray images, and the deep learning model incorporated within Diagnostic-I will predict the presence of specific diseases. This feature aids in quick preliminary diagnosis, providing users with valuable insights.

### 2. Hospital Admission Recommendation based on Lab Results
Diagnostic-I assists in determining whether an individual should be admitted to a hospital for medical treatment. Users upload their laboratory results to the website, and the AI classifier, powered by machine learning, analyzes the data to recommend hospitalization when necessary. This feature includes sub-features for detecting:
- Pneumonia
- Brain Tumor using MRI scans
- Osteoarthritis using Knee X-rays

### 3. Mental Health Treatment Assessment
The solution also incorporates an evaluation of an individual's mental health status. By inputting various relevant factors, the designed model predicts whether the person should consider seeking mental health treatment. This functionality contributes to holistic health assessment and support.

## How to Use Diagnostic-I

1. **Disease Detection:**
   - Choose the disease detection module from the menu.
   - Upload your X-ray image.
   - Await the AI's prediction on the presence of the disease.

2. **Hospital Admission Recommendation:**
   - Navigate to the admission assessment section.
   - Upload your recent lab results.
   - Receive recommendations based on your medical condition.

3. **Mental Health Assessment:**
   - Access the mental health assessment module.
   - Provide the required inputs as prompted.
   - Obtain insights into your mental well-being.

## Running the Project

To run the Diagnostic-I project:

1. **Frontend: ReactJS**
   - Clone this GitHub repository.
   - Run `npm install` to install dependencies.
   - Run `npm start` to start the frontend server at port 3000.

2. **Backend: FastAPI**
   - Navigate to the `src/api` directory.
   - Create a virtual environment (if not already done):
     
     ```
     python -m venv venv
     ```
   - Activate the virtual environment:
     - On Windows:

       ```
       venv\Scripts\activate
       ```
     - On macOS and Linux:

       ```
       source venv/bin/activate
       ```
   - Run
     
     ```
     pip install -r requirements.txt
     ```
     to install necessary packages.
   - Run
     
     ```
     python main.py
     ```
     to start the backend server on port 8000.

