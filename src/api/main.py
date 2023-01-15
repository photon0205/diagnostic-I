from fastapi import FastAPI, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
import numpy as np
from io import BytesIO
from PIL import Image
import tensorflow as tf

app = FastAPI()

origins = [
    "http://localhost",
    "http://localhost:3000",
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

MODEL1 = tf.keras.models.load_model("../../models/knee.h5")
MODEL2 = tf.keras.models.load_model("../../models/braintumor.h5")
MODEL3 = tf.keras.models.load_model("../../models/pneumonia.h5")
MODEL4 = tf.keras.models.load_model("../../models/mental_health.pkl")
MODEL5 = tf.keras.models.load_model("../../models/patient_treatment_classification.pkl")

CLASS_NAMES1 = ["The condition of Osteoarthritis is Normal", "The condition of Osteoarthritis is Doubtful", "The condition of Osteoarthritis is: Mild", "The condition of Osteoarthritis is: Moderate", "Severe"]
CLASS_NAMES2 = ["Giloma Tumor Detected", "Meningioma Tumor Detected", "No Tumor Detected", "Pituitary Tumor Detected"]
CLASS_NAMES3 = ["Pneumonia Detected", "No Pneumonia Detected"]
CLASS_NAMES4 = ["You need to seek Medical Treatment", "You need to seek Medical Treatment"]
CLASS_NAMES5 = ["In-Patient: Need intensive care(Admittance advised)", "Out-Patient: No severity detected(Consultation adviced)"]

def read_file_as_image(data) -> np.ndarray:
    image = np.array(Image.open(BytesIO(data)))
    return image

@app.post("/predict/knee")
async def predict(
    file: UploadFile = File(...)
):
    image = read_file_as_image(await file.read())
    img_batch = np.expand_dims(image, 0)
    
    predictions = MODEL1.predict(img_batch)

    predicted_class = CLASS_NAMES1[np.argmax(predictions[0])]
    confidence = np.max(predictions[0])
    return {
        'class': predicted_class,
        'confidence': float(confidence)
    }

@app.post("/predict/braintumor")
async def predict(
    file: UploadFile = File(...)
):
    image = read_file_as_image(await file.read())
    img_batch = np.expand_dims(image, 0)
    
    predictions = MODEL2.predict(img_batch)

    predicted_class = CLASS_NAMES2[np.argmax(predictions[0])]
    confidence = np.max(predictions[0])
    return {
        'class': predicted_class,
        'confidence': float(confidence)
    }

@app.post("/predict/pneumonia")
async def predict(
    file: UploadFile = File(...)
):
    image = read_file_as_image(await file.read())
    img_batch = np.expand_dims(image, 0)
    predictions = MODEL3.predict(img_batch)
    predicted_class = CLASS_NAMES3[np.argmax(predictions[0])]
    confidence = np.max(predictions[0])
    return {
        'class': predicted_class,
        'confidence': float(confidence)
    }
@app.post("/predict/mental_health")
async def predict(array):
    predictions = MODEL4.predict(array)
    predicted_class = CLASS_NAMES4[np.argmax(predictions[0])]
    confidence = np.max(predictions[0])
    return {
        'class': predicted_class,
        'confidence': float(confidence)
    }
@app.post("/predict/patient_treatment_classification")
async def predict(array):
    predictions = MODEL5.predict(array)
    predicted_class = CLASS_NAMES5[np.argmax(predictions[0])]
    confidence = np.max(predictions[0])
    return {
        'class': predicted_class,
        'confidence': float(confidence)
    }

if __name__ == "__main__":
    uvicorn.run(app, host='localhost', port=8000)
