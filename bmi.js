// Get elements from HTML
const heightInput = document.getElementById("height");
const weightInput = document.getElementById("weight");
const calculateBtn = document.getElementById("calculate");
const resultDiv = document.getElementById("result");
// Calculate BMI when button is clicked
calculateBtn.addEventListener("click", () => {
    const height = parseFloat(heightInput.value) / 100; // Convert cm to m
    const weight = parseFloat(weightInput.value);
    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
        resultDiv.textContent = "Please enter valid values!";
        resultDiv.style.color = "red";
        return;
    }
    const bmi = weight / (height * height);
    const bmiRounded = bmi.toFixed(2); 
    let category;
    if (bmi < 18.5) category = "Underweight";
    else if (bmi < 25) category = "Normal weight";
    else if (bmi < 30) category = "Overweight";
    else category = "Obese";  
    resultDiv.innerHTML = `
        Your BMI: <strong>${bmiRounded}</strong><br>
        Category: <strong>${category}</strong>
    `;
    resultDiv.style.color = "green";
});