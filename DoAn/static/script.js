function fillExampleHighRisk() {
    document.getElementById('age').value = 65;
    document.getElementById('resting_bp').value = 140;
    document.getElementById('cholesterol').value = 300;
    document.getElementById('max_hr').value = 120;
    document.getElementById('oldpeak').value = 2.5;
    document.getElementById('sex').value = 1;
    document.getElementById('chest_pain').value = 3;
    document.getElementById('resting_ecg').value = 2;
    document.getElementById('exercise_angina').value = 1;
    document.getElementById('st_slope').value = 0;
    document.getElementById('fasting_bs').value = 1;
}

function fillExampleLowRisk() {
    document.getElementById('age').value = 30;
    document.getElementById('resting_bp').value = 110;
    document.getElementById('cholesterol').value = 180;
    document.getElementById('max_hr').value = 170;
    document.getElementById('oldpeak').value = 0.0;
    document.getElementById('sex').value = 0;
    document.getElementById('chest_pain').value = 0;
    document.getElementById('resting_ecg').value = 0;
    document.getElementById('exercise_angina').value = 0;
    document.getElementById('st_slope').value = 2;
    document.getElementById('fasting_bs').value = 0;
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomFloat(min, max) {
    return (Math.random() * (max - min) + min).toFixed(1);
}

function fillRandomExample() {
    document.getElementById('age').value = getRandomInt(20, 80);
    document.getElementById('resting_bp').value = getRandomInt(90, 180);
    document.getElementById('cholesterol').value = getRandomInt(100, 400);
    document.getElementById('max_hr').value = getRandomInt(100, 200);
    document.getElementById('oldpeak').value = getRandomFloat(0, 5);
    document.getElementById('sex').value = getRandomInt(0, 1);
    document.getElementById('chest_pain').value = getRandomInt(0, 3);
    document.getElementById('resting_ecg').value = getRandomInt(0, 2);
    document.getElementById('exercise_angina').value = getRandomInt(0, 1);
    document.getElementById('st_slope').value = getRandomInt(0, 2);
    document.getElementById('fasting_bs').value = getRandomInt(0, 1);
}
