

let button = document.getElementById("calc-btn");
 
// Click Button Running the Function
button.addEventListener("click",  calculateBMI);

// Function for Calculate BMI
function calculateBMI() {
    let height = Number(document.querySelector("#height-input").value);

    let weight = Number(document.querySelector("#weight-input").value);
 
    let result = document.querySelector(".bmi-result");
 
    if (weight === 0 || isNaN(weight)) 
        result.innerHTML = "Please Provide a valid Weight!";
     else if (height === 0 || isNaN(weight)) 
        result.innerHTML = "Please Provide a valid Height!";
    else {
        let bmi = (weight / ((height/100) ** 2)).toFixed(1);
        if (bmi < 18.5) result.innerHTML =
            `Your BMI is <b>${bmi}</b> which means your are <b>Underweight</b>`;
        else if (bmi >= 18.5 && bmi < 24.9) 
            result.innerHTML = 
           `Your BMI is <b>${bmi}</b> which means your are <b>Normal</b>`;
        else if (bmi >= 25 && bmi < 29.9) 
            result.innerHTML = 
            `Your BMI is <b>${bmi}</b> which means your are <b>Overweight</b>`;  
        else result.innerHTML =
            `Your BMI is <b>${bmi}</b> which means your are <b>Obesity</b>`;
    }
}