from flask import Flask, request, render_template
import numpy as np
import tensorflow as tf
from tensorflow.keras.models import load_model

app = Flask(__name__)

# Load the saved model
model = load_model('models/best_model_overall.h5')

# Define a route for the default URL, which loads the form
@app.route('/')
def form():
    return render_template('form.html')

# Define a route for the prediction
@app.route('/predict', methods=['POST'])
def predict():
    # Get data from the form
    data = request.form
    features = [
        float(data['age']), float(data['resting_bp']), float(data['cholesterol']),
        float(data['max_hr']), float(data['oldpeak']), float(data['sex']),
        float(data['chest_pain']), float(data['resting_ecg']), float(data['exercise_angina']),
        float(data['st_slope']), float(data['fasting_bs'])
    ]
    
    # Convert to numpy array and reshape for model input
    features = np.array(features).reshape(1, -1)

    # Predict using the loaded model
    prediction = model.predict(features)
    predicted_class = (prediction > 0.5).astype("int32").flatten()
    probability = prediction[0][0]  # Probability of having heart disease

    # Return the prediction result
    result = 'Có khả năng mắc bệnh tim' if predicted_class[0] == 1 else 'Không có khả năng mắc bệnh tim'
    return render_template('result.html', prediction=result, probability=probability)

if __name__ == '__main__':
    app.run(debug=True)
