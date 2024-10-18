const URL = "./my_model/";
let model, maxPredictions;
let webcamStream = null; // Store the webcam stream

// Load the model when the page loads
window.onload = async function () {
    const modelURL = URL + "model.json";
    const metadataURL = URL + "metadata.json";
    model = await tmImage.load(modelURL, metadataURL);
    maxPredictions = model.getTotalClasses();
    console.log("Model loaded successfully.");
};

// Use webcam input
async function useWebcam() {
    stopWebcam(); // Ensure any previous stream is stopped

    document.getElementById('webcam-container').style.display = 'flex';
    document.getElementById('image-upload-container').style.display = 'none';

    const video = document.getElementById('webcam');
    try {
        webcamStream = await navigator.mediaDevices.getUserMedia({ video: true });
        video.srcObject = webcamStream;
        video.onloadedmetadata = () => video.play();
    } catch (err) {
        alert(`Error accessing the webcam: ${err.message}`);
    }
}

// Use image upload input
function useImageUpload() {
    stopWebcam(); // Stop webcam if switching to image upload

    document.getElementById('webcam-container').style.display = 'none';
    document.getElementById('image-upload-container').style.display = 'block';
}

// Stop the webcam stream
function stopWebcam() {
    const video = document.getElementById('webcam');
    if (webcamStream) {
        webcamStream.getTracks().forEach(track => track.stop()); // Stop all tracks
        video.srcObject = null; // Clear the video source
    }
}

// Load and display uploaded image
function loadImage(event) {
    document.getElementById('label-container').style.display = 'block';
    const reader = new FileReader();
    reader.onload = function () {
        const img = new Image();
        img.onload = function () {
            const canvas = document.getElementById('image-preview');
            const context = canvas.getContext('2d');
            context.clearRect(0, 0, canvas.width, canvas.height);
            context.drawImage(img, 0, 0, canvas.width, canvas.height);
            predictFromCanvas(canvas);
        };
        img.src = reader.result;
    };
    reader.readAsDataURL(event.target.files[0]);
}

// Predict from webcam
async function predictFromWebcam() {
    document.getElementById('label-container').style.display = 'block';
    const video = document.getElementById('webcam');
    const prediction = await model.predict(video);
    displayBestPrediction(prediction);
}

// Predict from uploaded image
async function predictFromCanvas(canvas) {
    const prediction = await model.predict(canvas);
    displayBestPrediction(prediction);
}

// Display the best prediction (highest probability)
function displayBestPrediction(prediction) {
    let maxProb = -1;
    let bestPrediction = '';

    prediction.forEach(pred => {
        if (pred.probability > maxProb) {
            maxProb = pred.probability;
            bestPrediction = pred.className;
        }
    });

    document.getElementById('label-container').innerHTML =
        `Prediction: ${bestPrediction} (${(maxProb * 100).toFixed(2)}%)`;
}
