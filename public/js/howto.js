window.currentStep = 1;
window.maxNumberSteps = 2

function previous() {
    console.log("Step num: " + window.currentStep + " -> previous");
    if (window.currentStep > 1) {
        const nextBtn = document.getElementById("nextBtn");
        nextBtn.disable = true;
        nextBtn.style.backgroundColor = "orange"
        const oldStep = document.getElementById("step" + window.currentStep);
        window.currentStep--;
        const newStep = document.getElementById("step" + window.currentStep);
        oldStep.style.display = "none";
        newStep.style.display = "block";
    } 
    
    if (window.currentStep == 1) {
        const previousBtn = document.getElementById("previousBtn");
        previousBtn.disable = true;
        previousBtn.style.backgroundColor = "grey"
        console.log("previousBtn.disable = true")
    }
}

function next() {
    console.log("maxNumberSteps: " + (window.maxNumberSteps));
    console.log("Step num: " + window.currentStep + " -> next");
    if (window.currentStep < window.maxNumberSteps) {
        const oldStep = document.getElementById("step" + window.currentStep);
        const previousBtn = document.getElementById("previousBtn");
        previousBtn.disable = true;
        previousBtn.style.backgroundColor = "orange"
        window.currentStep++;
        const newStep = document.getElementById("step" + window.currentStep);
        oldStep.style.display = "none";
        newStep.style.display = "block";    
    }

    if (window.currentStep >= window.maxNumberSteps) {
        const nextBtn = document.getElementById("nextBtn");
        nextBtn.disable = true;
        nextBtn.style.backgroundColor = "grey"
        console.log("nextBtn.disable = true")
    }
}

window.onload = function init() {
    const previousBtn = document.getElementById("previousBtn");
    previousBtn.disable = true;
};
