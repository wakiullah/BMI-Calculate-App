(function() {
    let height = document.querySelector('#height');
    let weight = document.querySelector('#weight');
    let calculateBtn = document.querySelector('.calculate-btn');
    let bmiNumber = document.querySelector('.bmi-number');
    let bmiDetails = document.querySelector('.bmi-details');
    let bmiForm = document.querySelector('.bmi-form');
    let bmiDescription = document.querySelector('.bmi-discription');
    let congrates = document.querySelector('.congrates');
    let formDiv = document.querySelector('.bmi-form-div')
    let bmiCategory = document.querySelector('.bmi-category');
    let result = document.querySelector('.result')
    let tryAgain = document.querySelector('.tryAgain')

    bmiForm.addEventListener('submit', function(e) {
        e.preventDefault();
        let bmideswpr = bmiDescription.textContent;
        if (height.value === '' || height.value < 15 || weight.value === '' || weight.value < 5) {
            bmiDescription.textContent = 'Please enter valid information';
            bmiDescription.style.color = 'brown';
            bmiDescription.style.fontSize = '25px';
            setTimeout(() => {
                bmiDescription.textContent = bmideswpr;
                bmiDescription.style.fontSize = '20px';
                bmiDescription.style.color = 'black';

            }, 3000);
        } else {
            calculateBMI();
            windowChanges(formDiv, result);
        };
        height.value = '';
        weight.value = '';

    })

    tryAgain.addEventListener('click', function() {
        windowChanges(result, formDiv);
    })

    function calculateBMI() {
        let cmToMeter = parseInt(height.value) / 100;

        let BMI = parseInt(weight.value) / (cmToMeter * cmToMeter);
        bmiNumber.innerText = Math.round(BMI * 100) / 100;
        BMIValue(BMI);

    }

    function BMIValue(bmi) {
        if (bmi < 18.5) {
            congrates.innerText = "OPPS!!";
            congrates.style.color = "brown";
            bmiCategory.innerText = 'Underweight';
            bmiCategory.style.color = "brown";
        }
        if (bmi > 18.5 && bmi < 23) {
            congrates.innerText = "Congratulate!!";
            congrates.style.color = "#006f00";
            bmiCategory.innerText = 'Normal Range';
            bmiCategory.style.color = "#006f00";
        }
        if (bmi > 23 && bmi < 25) {
            congrates.innerText = "Good!!";
            congrates.style.color = "#e4ff00";
            bmiCategory.innerText = 'Overweight—At Risk';
            bmiCategory.style.color = "#e4ff00";
        }
        if (bmi > 25 && bmi < 30) {
            congrates.innerText = "Opps!!";

            congrates.style.color = "#ff8d00";
            bmiCategory.innerText = 'Overweight—At Risk';
            bmiCategory.style.color = "#ff8d00";
        };
        if (bmi > 30) {
            congrates.innerText = "Opps!!";

            congrates.style.color = "brown";
            bmiCategory.innerText = 'Overweight—At Risk';
            bmiCategory.style.color = "brown";
        };
    };

    function windowChanges(curr, next) {
        curr.classList.remove('active');
        curr.classList.add('inactive');
        next.classList.add('active');
        next.classList.remove('inactive');
    }



})()